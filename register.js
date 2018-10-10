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
	shell.open()
	document.getElementById('terminal-overlay').style.visibility = 'visible'
	document.getElementById('terminal').style.opacity = '0.9'
}
