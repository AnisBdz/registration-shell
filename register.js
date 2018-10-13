firebase.initializeApp({
    apiKey: "AIzaSyB36aCwpcXgKL46aL5DFczOJXI82O94ywc",
    databaseURL: "https://shellmates-registration.firebaseio.com",
  });

let shell = new Shell({
	id: 'terminal',

	register(answer) {
		this.system.env.USER = [answer.firstname, answer.lastname].join('-').toLowerCase()



		let database = firebase.database()
		database.ref('members/' + database.ref('members').push().key).set(answer, (error) => {
			if (error) {
				this.cli.write(':\'( An error has occured, please retry.')
				return this.cli.prompt()
			}

			this.cli.write('%c7:)%c0 Your response has been registered successfuly!')
			return this.cli.prompt()
		})
	},

	close() {
		closeTerminal()
	},

	form: [
		{
			id: "firstname",
			question: "First Name?",
			type: String,
			range: [0, 32]
		},
		{
			id: "lastname",
			question: "Last Name?",
			type: String,
			range: [1, 32]
		},
		{
			id: "email",
			question: "Email?",
			type: String,
			regex: /^\S+@\S+\.\S+$/
		},
		{
			id: "gender",
			question: "Gender?",
			type: Array,
			answers: ["Male", "Female"]
		},
		{
			id: "phone",
			question: "Phone Number?",
			type: Number,
		},
		{
			id: "school",
			question: "Where do you study?",
			type: String,
		},
		{
			id: "school_year",
			question: "What year?",
			type: String,
			range: [1, 8]
		},
		{
			id: "security_level",
			question: "What are your interests in information security?",
			type: Array,
			answers: [ "I want to discover the field", "I need to improve my skills", "I'm root" ]
		},
		{
			id: "programming_level",
			question: "What's your estimated level in programming from 0 to 10?",
			type: Number,
			range: [0, 10]
		},
		{
			id: "linux_level",
			question: "How familiar are you with the Linux Terminal?",
			type: Array,
			answers: ["I'm a beginner", "i know some basics", "i'm an intermediate", "I consider myself as an expert"]
		},
		{
			id: "hack_fb",
			question: "Are you ready to learn to hack facebook accounts?",
			type: Array,
			answers: [ "No, that's inappropiate", "Yes (We won't teach you that)" ]
		}
	]
})


/* DOM Manipulation */
showTerminal()

function showTerminal() {
	let term = document.getElementById('terminal')

	shell.open()
	term.style.opacity = '1'

	var md = new MobileDetect(window.navigator.userAgent)
	if(md.mobile()) handleMobile()


	function handleMobile() {
		// handle mobile keyboard
		let dummy = document.createElement('input')
		dummy.setAttribute('autocapitalize', 'off')
		dummy.setAttribute('style', `position: relative; top: -200px; float: left`)
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
}
