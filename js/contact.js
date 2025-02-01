// Ensure EmailJS is loaded and initialized
(function() {
    emailjs.init("UwkfTPaj3c213ksbC"); // Replace with your actual public key
})();

// Function to handle form submission
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact_form");
    const submitButton = document.querySelector(".awilo_fn_contact_sendbtn");
    const errorNotice = document.querySelector(".empty_notice span");

    // Form Validation
    function validateForm() {
        const name = document.querySelector(".name").value.trim();
        const email = document.querySelector(".email").value.trim();
        const message = document.querySelector(".message").value.trim();

        if (name === "" || email === "" || message === "") {
            errorNotice.style.display = "block";
            return false; // Prevent form submission
        }

        errorNotice.style.display = "none";
        return true; // Allow form submission
    }

    // Submit the form via EmailJS
    function submitContactForm(event) {
        event.preventDefault(); // Prevent default link behavior

        if (validateForm()) {
            const name = document.querySelector(".name").value.trim();
            const email = document.querySelector(".email").value.trim();
            const message = document.querySelector(".message").value.trim();

            // Send email through EmailJS
            emailjs.send("service_4n38aze", "template_py8d9bd", {
                from_name: name,
                from_email: email,
                message: message
            })
            .then(function(response) {
                document.querySelector(".returnmessage").textContent = "Your message has been received, We will contact you soon.";
                document.querySelector(".returnmessage").style.display = "block";  // Show success message
                contactForm.reset(); // Reset form after submission
            }, function(error) {
                document.querySelector(".returnmessage").textContent = "Error: " + error.text;
                document.querySelector(".returnmessage").style.display = "block";  // Show error message
            });
        }
    }

    // Attach event listener to the button
    submitButton.addEventListener("click", submitContactForm);
});
