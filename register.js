firebase.initializeApp({
    apiKey: "AIzaSyB36aCwpcXgKL46aL5DFczOJXI82O94ywc",
    databaseURL: "https://shellmates-registration.firebaseio.com",
  });

let shell = new Shell({
	id: 'terminal',

	register(answer) {
		this.system.env.USER = answer.name.toLowerCase().split(' ').join('-')

		let database = firebase.database()
		database.ref('members/' + database.ref('members').push().key).set(answer, (error) => {
			if (error) {
				this.cli.write(':\'( An error has occured, please retry.')
				return this.cli.prompt()
			}

			this.cli.write('Your response has been registered!')
			return this.cli.prompt()
		})
	},

	close() {
		closeTerminal()
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
			question: `How old are you? [18, 36]`,
			type: Number,
			range: [18, 36]
		},

		{
			id: 'wilaya',
			question: `Where are you from? [0, 2]`,
			type: Array,
			answers: ['Alger', 'Setif', 'Blida']
		}
	]
})


/* DOM Manipulation */
showTerminal()
document.getElementById('register-btn').addEventListener('click', showTerminal)

function showTerminal() {
	let term = document.getElementById('terminal')

	shell.open()
	document.getElementById('terminal-overlay').style.visibility = 'visible'
	document.getElementById('terminal-overlay').style.opacity = '1'
	term.style.opacity = '0.9'

	var md = new MobileDetect(window.navigator.userAgent)
	if(md.mobile()) handleMobile()


	function handleMobile() {
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
			// if (e.key == "Enter") dummy.blur()
			press(e.key.length == 1 ? e.key.charCodeAt(0) : e.keyCode)
		})

		function press(key) {
			Terminal.prototype.globals.keyHandler({ which: key, _remapped: true, _repeated: false})
		}

		term.appendChild(dummy)
		term.addEventListener('click', e => dummy.focus())
		dummy.focus()
	}
}

function closeTerminal() {
	document.getElementById('terminal').style.opacity = '0'
	document.getElementById('terminal-overlay').style.opacity = '0'
	setTimeout(() => {
		document.getElementById('terminal-overlay').style.visibility = 'hidden'
	}, 500)
}
