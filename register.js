class Shell {
	constructor(options) {
		if (!options.hasOwnProperty('id')) throw new Error('Element id must be provided!')
		if (!options.hasOwnProperty('form')) throw new Error('Form questions must be provided!')

		// Form questions
		this.form = options.form

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

				register: {
					name: 'register',
					type: 'usr',
					man: 'Become a shellmate',
					fn: () => {

						this.cli.write(`What's your name?`)
						this.cli.scan()
						.then(s => this.cli.write(`Hello, ${s}!`))
						.then(() => this.cli.prompt())

						return ''
					}
				}
			},

			filesystem: {
				etc: {
					file: 'Hello, World!'
				}
			}
		})

		// remove some commands
		delete this.system.ShellCommands.about

		// system alias
		let system = this.system

		// Shell's command line interface
		this.cli = new Terminal({

			greeting: '%+r == Shellmates == %-r%nType "help" for help.%n',
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

}

let shell = new Shell({
	id: 'terminal',
	form: {
		name: {
			question: `What's your full name?`,
			type: String,
			length: 50
		},

		age: {
			question: `How old are you?`,
			type: Number,
			range: [18, 36]
		},

		wilaya: {
			question: `Where are you from?`,
			type: Array,
			answers: ['Alger', 'Setif', 'Blida']
		}
	}
})


/* DOM Manipulation */
showTerminal()
document.getElementById('register-btn').addEventListener('click', showTerminal)

function showTerminal() {
	document.getElementById('terminal-overlay').style.visibility = 'visible'
	document.getElementById('terminal').style.opacity = '0.9'
}
