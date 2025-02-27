document.addEventListener("DOMContentLoaded", function() {
            const loginForm = document.getElementById("loginForm");
            const usernameInput = document.getElementById("username");
            const passwordInput = document.getElementById("password");
            const rememberMeCheckbox = document.getElementById("checkbox");
            const existingUserButton = document.getElementById("existing");

            // Check if credentials are saved in localStorage
            const savedUsername = localStorage.getItem("username");
            const savedPassword = localStorage.getItem("password");

            if (savedUsername && savedPassword) {
                existingUserButton.style.display='block';
            }else{
				existingUserButton.style.display ='none';
			}

            loginForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const username = usernameInput.value;
                const password = passwordInput.value;

                alert("Logged in as " + username);

                if (rememberMeCheckbox.checked) {
                    localStorage.setItem("username", username);
                    localStorage.setItem("password", password);
                } else {
                    localStorage.removeItem("username");
                    localStorage.removeItem("password");
                }
            });

            existingUserButton.addEventListener("click", function() {
                alert("Logged in as " + localStorage.getItem("username"));
            });
        });