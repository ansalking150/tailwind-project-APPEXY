 const toggle = document.getElementById('darkToggle'); 
    const html = document.documentElement; 
 
    toggle.addEventListener('change', function () { 
      if (toggle.checked) { 
        html.classList.add('dark'); 
        localStorage.setItem('theme', 'dark'); 
      } else { 
        html.classList.remove('dark'); 
        localStorage.setItem('theme', 'light'); 
      } 
    }); 
    // Load saved theme 
    if (localStorage.getItem('theme') === 'dark') { 
      html.classList.add('dark'); 
toggle.checked = true; 
}
        document.getElementById("contactForm").addEventListener("submit", function (e) {
            e.preventDefault();

            // Get input values
            const firstName = document.getElementById("firstName").value.trim();
            const lastName = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();

            // Get error elements
            const firstNameError = document.getElementById("firstName-error");
            const lastNameError = document.getElementById("lastName-error");
            const emailError = document.getElementById("email-error");
            const phoneError = document.getElementById("phone-error");
            const subjectError = document.getElementById("subject-error");
            const messageError = document.getElementById("message-error");

            // Clear old messages
            firstNameError.textContent = "";
            lastNameError.textContent = "";
            emailError.textContent = "";
            phoneError.textContent = "";
            subjectError.textContent = "";
            messageError.textContent = "";

            let valid = true;

            // First Name validation
            if (firstName === "") {
                firstNameError.textContent = "Please enter your first name.";
                valid = false;
            } else if (firstName.length < 3 || firstName.length > 15) {
                firstNameError.textContent = "First name must be 3–15 characters.";
                valid = false;
            }

            // Last Name validation
            if (lastName === "") {
                lastNameError.textContent = "Please enter your last name.";
                valid = false;
            } else if (lastName.length < 3 || lastName.length > 15) {
                lastNameError.textContent = "Last name must be 3–15 characters.";
                valid = false;
            }
            if(phone===''){
                phoneError.textContent = "Please enter your phone number.";
                valid = false;
            }

            // Email validation
            if (email === "") {
                emailError.textContent = "Please enter your email.";
                valid = false;
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    emailError.textContent = "Please enter a valid email.";
                    valid = false;
                }
            }

            // Phone validation (optional but with format check)
            if (phone !== "") {
                const phonePattern = /^[\d\s\-\+\(\)]{10,}$/;
                if (!phonePattern.test(phone)) {
                    phoneError.textContent = "Please enter a valid phone number.";
                    valid = false;
                }
            }

            // Subject validation
            if (subject === "") {
                subjectError.textContent = "Please enter a subject.";
                valid = false;
            } else if (subject.length < 3) {
                subjectError.textContent = "Subject must be at least 3 characters.";
                valid = false;
            }

            // Message validation
            if (message === "") {
                messageError.textContent = "Please enter a message.";
                valid = false;
            } else if (message.length < 5) {
                messageError.textContent = "Message must be at least 5 characters.";
                valid = false;
            }

            // If all valid
            if (valid) {
                document.getElementById("successMessage").classList.remove("hidden");
                document.getElementById("contactForm").reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    document.getElementById("successMessage").classList.add("hidden");
                }, 5000);
                
                // Uncomment below to actually submit the form
                // e.target.submit();
            }
        });
    