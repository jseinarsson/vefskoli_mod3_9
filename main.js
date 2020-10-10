// const form = document.querySelector(".contact__form");

// const name = document.getElementById("name");
// // const email = document.getElementById("email");
// // const content = document.getElementById("content");
// // const message = document.getElementById("message");
// // const checkbox = document.getElementById("checkbox");

// const inputs = document.querySelectorAll('input, select, textarea');

// form.addEventListener('submit', (e) => {
//     //inputs.setCustomValidity("");
    



//     e.preventDefault();

//     console.log('blah');
// });

// const form = document.querySelector(".contact__form");
// const name = document.getElementById("name");

// form.addEventListener('submit', (e) => {
//     name.setCustomValidity("");
//     if (!name.checkValidity()) {
//         name.setCustomValidity("This blows");
//         console.log("Invalid!");
//     } else {
//         e.preventDefault();
//         console.log("Valid!");
//     }
// });

const customMessages = {
    valueMissing: 'Hey! Fill this out!',
    emailMismatch: 'Invalid email!',
}

function getCustomMessage (type, validity) {
    if (validity.typeMismatch) {
        return customMessages [`${type}Mismatch`]
    } else {
        for (const invalidKey in customMessages) {
            if (validity[invalidKey]) {
                return customMessages[invalidKey]
            }
        }
    }
}

var inputs = document.querySelectorAll('input, select, textarea');

inputs.forEach(function (input) {
    function checkValidity () {
        const message = input.validity.validity
            ? null
            : getCustomMessage(input.type, input.validity, customMessages)
        input.setCustomValidity(message || '')
    }
    input.addEventListener('input', checkValidity);
    input.addEventListener('invalid', checkValidity);
});