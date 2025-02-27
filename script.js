document.addEventListener("DOMContentLoaded",function(){
	const loginForm = document.getElementById("loginForm");
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const rememberMeCheckbox = document.getElementById("checkbox");
    const existingUserButton = document.getElementById("existing");

	const savedUsername = localStorage.getItem("username");
	const savedPassword = localStorage.getItem("password");

	if(savedUsername && savedPassword ){
		existingUserButton.classList.remove("hidden");
	}
	loginForm.addEventListener("submit",functio(event) {
		event.prevenetDefault();
		const username = usernameInput.value;
		const password = passwordInput.value;

		alert("Logged in as " + username);

		if(rememberMeCheckbox.checked){
			localStorage.setItem("username");
			localStorage.setItem("password");
		}else{
			localStorage.removeItem("username");
			localStorage.removeItem("password");
		}
	});
	existingUserButton.addEventListener("click", function() {
        alert("Logged in as " + localStorage.getItem("username"));
    });
});
