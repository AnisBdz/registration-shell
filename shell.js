class Validator {
	constructor(question) {
		this.question = question
	}

	validate(answer) { throw new Error('Abstract method') }

	// creates a validator according to a question
	static create(question) {
		if (question.type == String) return new StringValidator(question)
		if (question.type == Number) return new NumberValidator(question)
		if (question.type == Array) return new ArrayValidator(question)
	}
}

class StringValidator extends Validator {
	validate(answer) {

		// is it a string?
		if (answer.__proto__ != String.prototype) return false

		// validate range
		if (this.question.range) {
			return answer.length >= this.question.range[0] && answer.length <= this.question.range[1]
		}

		// validate regex
		if (this.question.regex) {
			return this.question.regex.test(answer)
		}

		return true
	}
}

class NumberValidator extends Validator {
	validate(answer) {
		// is it a number?
		if(!(answer instanceof Number) && (answer = parseInt(answer)) == NaN) return false

		// validate range
		if (this.question.range) {
			return answer >= this.question.range[0] && answer <= this.question.range[1]
		}

		return true
	}
}

class ArrayValidator extends Validator {
	validate(answer) {
		// is it a number? (index)
		if(!(answer instanceof Number) && (answer = parseInt(answer)) === NaN) return false

		// validate answer number
		return answer >= 0 && answer < this.question.answers.length
	}
}


class Shell {
	constructor(options) {
		if (!options.hasOwnProperty('id')) throw new Error('Element id must be provided!')
		if (!options.hasOwnProperty('form')) throw new Error('Form questions must be provided!')

		// register callback
		this.registerCallback = options.register || function (answer) { console.log(answer) }

		// Form questions
		this.form = options.form.reverse()

		// Shell's system (filesystem, commands, ...)
		this.system = new Termly({
			commands: {
				shell: {
					name: 'shell',
					type: 'builtin',
					man: 'Interactive Shell',
					fn: () => ''
				},

				clear: {
					name: 'clear',
					type: 'builtin',
					man: 'Clear the screen',
					fn: () => {
						this.cli.clear()
						return ''
					}
				},

				whoami: {
					name: 'whoami',
					type: 'builtin',
					man: 'Shows the name of the current user',
					fn: () => {
						return this.system.env.USER
					}
				},

				exit: {
					name: 'exit',
					type: 'builtin',
					man: 'Exit the shell',
					fn: () => {
						setTimeout(() => this.cli.close(), 1000)
						this.cli.write(`:'(`)
						return ''
					}
				},

				join: {
					name: 'join',
					type: 'usr',
					man: 'Become a shellmate',
					fn: () => {
						// who am i ?
						let self = this

						// clone the form questions
						let questions = [...this.form]

						// i wonder what are the answers
						let answers = {}

						// start asking questions :)
						ask()

						function ask() {
							// still got some question?
							if (!questions.length) {
								// we are done here
								self.register(answers)
								return self.cli.prompt()
							}

							// get a question
							let question = questions.pop()

							// ask about it
							self.cli.write(question.question + '%n')
							if (question.type == Array) {
								let i = 0
								for (let answer of question.answers) {
									self.cli.write(`${i}. ${answer}%n`)
									i++
								}
							}


							// get response
							self.cli.scan().then(function check(answer) {
								// check if everything is ok
								let validator = Validator.create(question)

								// if it's ok, save it and go for the next one
								if (validator.validate(answer)) {
									answers[question.id] = question.type == Array ? question.answers[answer] : answer
									ask()
								}

								// something's wong
								else {
									self.cli.write('Invalid input, please retry')
									self.cli.scan().then(answer => check(answer))
								}

							})
						}

						return ''
					}
				}
			},

			filesystem: {
				init: 'Binary executable.',
				etc: {
					apache2: {
						'apache2.conf': ''
					},

					apt: {
						'sources.list': ''
					}
				},

				home: {
					guest: {
						docs: {
							homework: 'I got none of that.'
						},

						'todo.txt': ['# Things i need to do', '', '* Join the shellmates', '* Buy some wafer', '* Do some random thing']
					}
				},

				root: {
					'README.md': ['Hey!', 'You are not supposed to be seeing this.']
				},

				usr: {
					share: {
						themes: {},
						games: {}
					}
				},

				bin: {
					help: 'Binary executable.',
					whoami: 'Binary executable.',
					pwd: 'Binary executable.',
					printenv: 'Binary executable.',
					'export': 'Binary executable.',
					cd: 'Binary executable.',
					ls: 'Binary executable.',
					cat: 'Binary executable.',
					man: 'Binary executable.',
					history: 'Binary executable.',
					clear: 'Binary executable.',
					exit: 'Binary executable.',
					join: 'Binary executable.',
					shell: 'Binary executable.'
				}
			},

			env: {
				USER: 'guest',
				PATH: '/bin',
				HOSTNAME: 'shellmates'
			}
		})

		// change file permissions and owner name
		this.system.fs.FileSystem.content.home.content.guest.user = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.group = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.content.docs.user = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.content.docs.group = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.content['todo.txt'].user = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.content['todo.txt'].group = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.content.docs.content.homework.user = 'guest'
		this.system.fs.FileSystem.content.home.content.guest.content.docs.content.homework.group = 'guest'
		this.system.fs.FileSystem.content.init.permission = 'rwx------'
		for (let file of ['help', 'whoami', 'pwd', 'printenv', 'export', 'cd', 'ls', 'cat', 'man', 'history', 'clear', 'exit', 'join', 'shell'])
			this.system.fs.FileSystem.content.bin.content[file].permission = 'rwxr-xr-x'


		// change home directory
		this.system.run('cd /home/guest')

		// remove some commands
		delete this.system.ShellCommands.about
		delete this.system.ShellCommands.arguments
		delete this.system.ShellCommands.http

		// system alias
		let system = this.system

		// calculate responsive width and height for shell
		let cols = Math.min(80, (window.innerWidth / 8).toFixed(0))
		let rows = (cols * (3/4) / 2.5).toFixed(0)

		if (cols < 50) rows = 20

		// Shell's command line interface
		this.cli = new Terminal({

			greeting: '%+r == Shellmates == %-r%nType %c7help%c0 for help.%nType %c7join%c0 to join the %c5shellmates%c0%n',
			ps: () => {
				let wd = system.fs.cwd.slice(1).join('/')
				return `%c3${system.env.USER}@shellmates:%c7${wd == 'home/guest' ? '~' : `/${wd}`}%c0 $`
			},

			id: 0,

			x: 0,
			y: 0,

			cols,
			rows,

			frameWidth: 10,
			frameColor: 'black',
			bgColor: 'black',


			termDiv: options.id,
			crsrBlinkMode: true,

			handler() {
				var line = this.lineBuffer;
				this.newLine();

				if (line != "") {

					// if a line was being scanned
					if (this.scanning) {
						this.scanned(line)
						return
					}

					this.write(system.run(line))
				}

				this.prompt();
			}
		})

		// cli alias
		let cli = this.cli

		// register ctrl+c hotkey
		document.addEventListener('keydown', e => {
			if (e.key == 'c' && e.ctrlKey) {
				cli.write('^C')
				cli.scanning = false
				cli.prompt()
			}
		})
	}

	// This is called after being provided with all the answers
	register(answers) {
		this.registerCallback(answers)
	}

	open() {
		// open the cli
		this.cli.open()
	}
}
