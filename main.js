const customMessages = {
    nameMessage: 'Please tell us what to call you',
    emailMessage: 'Please provide a valid e-mail address',
    contentMessage: 'Please let us know what this is concerning',
    messageMessage: "Really? You've come all this way, you've got to tell us something!",
    checkboxMessage: 'Say it! Say tomatoes are a fruit.',
}

const validationErrorClass = 'error'
const parentErrorClass = 'has-error'
const inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(function (input) {

    function checkValidity (options) {
        const insertError = options.insertError;
        const parent = input.parentNode;
        const error = parent.querySelector(`.${validationErrorClass}`)
            || document.createElement('p');
        
        if (!input.validity.valdi && input.validationMessage) {
            error.className = validationErrorClass;
            error.textContent = customMessages[`${input.id}Message`];

            if (insertError) {
                parent.appendChild(error);
                parent.classList.add(parentErrorClass);
            }
        } else {
            parent.classList.remove(parentErrorClass);
            error.remove();
        }
    }

    input.addEventListener('input', function () {
        checkValidity({insertError: false});
    });

    input.addEventListener('invalid', function (e) {
        e.preventDefault();
        checkValidity({insertError: true});
    });
});