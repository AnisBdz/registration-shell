let shell = new Shell({
	id: 'terminal',

	register(answer) {
		this.system.env.USER = answer.name.toLowerCase().split(' ').join('-')
		this.cli.write('Your response has been registered!')
		console.log(answer)
	},

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
// showTerminal()
document.getElementById('register-btn').addEventListener('click', showTerminal)

function showTerminal() {
	let term = document.getElementById('terminal')

	shell.open()
	document.getElementById('terminal-overlay').style.visibility = 'visible'
	term.style.opacity = '0.9'

	// handle mobile keyboard
	let dummy = document.createElement('input')
	dummy.setAttribute('autocapitalize', 'off')
	dummy.setAttribute('style', `position: absolute; top: 10px; left: 10px;`)
	dummy.id = 'dummy'
	dummy.addEventListener('input', e => {
		press(e.data.charCodeAt(0))
		dummy.value = ''
	})
	dummy.addEventListener('keydown', e => {
		if (e.key == 'Unidentified') return
		press(e.key.length == 1 ? e.key.charCodeAt(0) : e.keyCode)
	})

	function press(key) {
		Terminal.prototype.globals.keyHandler({ which: key, _remapped: true, _repeated: false})
	}

	term.appendChild(dummy)
	term.addEventListener('click', e => dummy.focus())
}
