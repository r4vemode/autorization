document.addEventListener("DOMContentLoaded", () => {

	// auth page
	if (document.querySelector(".login") !== null) {
		const container = document.querySelector(".container");
		const registerLink = document.querySelector(".register-link");
		const loginLink = document.querySelector(".login-link");
		const loginForm = document.querySelector(".login");
		const registerForm = document.querySelector(".registration");
		const carBronBtn = document.querySelector(".car-bron");
		registerLink.addEventListener("click", () => {
			container.classList.add("active");
			loginForm.classList.add("hidden");
			registerForm.classList.remove("hidden");
		});

		loginLink.addEventListener("click", () => {
			container.classList.remove("active");
			registerForm.classList.add("hidden");
			loginForm.classList.remove("hidden");
		});
	}

	// booking page
	if (document.querySelector(".car-bron") !== null) {
		let cardBtns = document.querySelectorAll('.car-bron');
		for (var i = 0; i < cardBtns.length; i++) {
			cardBtns[i].addEventListener('click', function(e){
				document.querySelector('#modal').classList.add('show');
				document.querySelector('#autoName').innerHTML = e.currentTarget.previousElementSibling.previousElementSibling.innerHTML;
			});
		}

		document.querySelector('#modalClose').addEventListener('click', function(){
			document.querySelector('#modal').classList.remove('show');
		});
	}
});
