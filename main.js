// Create variable to target form
const form = document.querySelector(".contact__form");

// Create an array with custom messages for each part of the form
// The setup is [formid]Message so that we can call on the correct message for each
const customMessages = {
    nameMessage: 'Please tell us what to call you',
    emailMessage: 'Please provide a valid e-mail address',
    contentMessage: 'Please let us know what this is concerning',
    messageMessage: "Really? You've come all this way, you've got to tell us something!",
    checkboxMessage: 'Say it! Say tomatoes are a fruit.',
}

// Variables that will be used later to add classes to the input container (li) and error container (a paragraph element created with JS)
const validationErrorClass = 'error'
const parentErrorClass = 'invalid'

// Create a variable targeting all input types used in the form
const inputs = document.querySelectorAll('input, select, textarea');

// A function that runs through each of the inputs targeted with the variable above, executing the nested functions
inputs.forEach(function (input) {

    //
    function checkValidity (options) {
        const insertError = options.insertError;
        // Creates a variable called parent from the input's container
        const parent = input.parentNode;
        // Makes the variable error equal to an element within the parent with the query selector ".invalid" OR creates a new paragraph element
        const error = parent.querySelector(`.${validationErrorClass}`)
            || document.createElement('p');
        
        if (!input.validity.valid) {
            error.className = validationErrorClass;
            error.textContent = customMessages[`${input.id}Message`];
            //If the input is not valid this adds the class "input" to the error paragraph and passes the correct message from the array defined above
            
            if (insertError) {
                // If insertError (see below) is true, this adds the error to the end of the parent container and gives the parent container a class of "invalid"
                parent.appendChild(error);
                parent.classList.add(parentErrorClass);
            }
        } else {
            // Otherwise it removes the error and the parent's invalid class
            parent.classList.remove(parentErrorClass);
            error.remove();
        }
    }

    input.addEventListener('input', function () {
        checkValidity({insertError: false});
    });

    input.addEventListener('invalid', function (e) {
        // If the input is invalid, this sends the insert error true to the checkValidity function above and preventDefault stops the browser from throwing the inbuilt error messages
        e.preventDefault();
        checkValidity({insertError: true});
    });
});

// When all errors have been resolved and the form is submitted, this function prevents the default reloading of the page and instead hides the form and shows a success message
form.addEventListener('submit', function (e) {
    const successMsg = document.querySelector(".contact__success");

    e.preventDefault();
    form.classList.toggle("hidden");
    successMsg.classList.toggle("hidden");
});
