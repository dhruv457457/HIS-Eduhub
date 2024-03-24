// JavaScript for toggling the display of answers
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('show');
    });
});

// JavaScript for form submission and success message
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);

    // Construct object from form data
    const feedback = {};
    formData.forEach((value, key) => {
        feedback[key] = value;
    });

    // Example: Send feedback to console
    console.log(feedback);

    // You can replace the above console.log with your actual submission logic (e.g., AJAX request)
    // This is just a placeholder to demonstrate capturing form data

    // Show success message
    document.getElementById('successMessage').style.display = 'block';
});



// responsive navbar 
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.right ul');

    burger.addEventListener('click', function () {
        nav.classList.toggle('show');
    });
});
