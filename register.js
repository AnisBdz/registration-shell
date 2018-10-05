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

		// Form questions
		this.form = options.form.reverse()

		// Shell's system (filesystem, commands, ...)
		this.system = new Termly({
			commands: {
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
				etc: {
					file: 'Hello, World!'
				}
			},

			env: {
				USER: 'guest',
				PATH: '',
				HOSTNAME: 'shellmates'
			}
		})

		// remove some commands
		delete this.system.ShellCommands.about
		delete this.system.ShellCommands.arguments
		delete this.system.ShellCommands.http

		// system alias
		let system = this.system

		// Shell's command line interface
		this.cli = new Terminal({

			greeting: '%+r == Shellmates == %-r%nType %c7help%c0 for help.%n',
			ps: () => `%c3guest@shellmates:%c7/${system.fs.cwd.slice(1).join('/')}%c0 $`,
			id: 0,

			x: 0,
			y: 0,

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

		// open the cli
		this.cli.open()

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
		console.log(answers)
	}
}

let shell = new Shell({
	id: 'terminal',
	form: [
		{
			id: 'name',
			question: `What's your full name?`,
			type: String,
			range: [0, 50]
		},

		{
			id: 'email',
			question: `What's your email?`,
			type: String,
			regex: /^\S+@\S+\.\S+$/
		},

		{
			id: 'age',
			question: `How old are you?`,
			type: Number,
			range: [18, 36]
		},

		{
			id: 'wilaya',
			question: `Where are you from?`,
			type: Array,
			answers: ['Alger', 'Setif', 'Blida']
		}
	]
})


/* DOM Manipulation */
showTerminal()
document.getElementById('register-btn').addEventListener('click', showTerminal)

function showTerminal() {
	document.getElementById('terminal-overlay').style.visibility = 'visible'
	document.getElementById('terminal').style.opacity = '0.9'
}
