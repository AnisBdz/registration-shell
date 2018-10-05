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

				register: {
					name: 'register',
					type: 'usr',
					man: 'Become a shellmate',
					fn: () => {
						throw new Error('Not Yet Implemented!')
					}
				}
			},

			filesystem: {
				etc: {
					file: 'Helo, World!'
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

				if (line == "exit") {
				  this.close();
				  return;
				}

				else if (line != "") {
					this.write(system.run(line))
				}
				this.prompt();
			}
		})

		// open the cli
		this.cli.open()
	}

}

let shell = new Shell({
	id: 'terminal'
})


/* DOM Manipulation */
showTerminal()
document.getElementById('register-btn').addEventListener('click', showTerminal)

function showTerminal() {
	document.getElementById('terminal-overlay').style.visibility = 'visible'
	document.getElementById('terminal').style.opacity = '0.9'
}
