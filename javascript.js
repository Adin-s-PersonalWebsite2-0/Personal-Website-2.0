// Scroll Reveal Section
// ScrollReveal ({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.contact form, .tero, .tero head',{origin: 'top'});

// ScrollReveal().reveal('.contact form');

// const form = document.querySelector("#form")
// const submitButton = document.querySelector("#submit")
// const scriptURL = 'https://script.google.com/macros/s/AKfycbxLZTlgHBunzjDAyvzTFB9AAQZS2vGT4hSZKlfMDVMQrrHEQwKDYO2-fo05BNfFegYWVg/exec'

// form.addEventListener('submit', e => {
//   submitButton.disabled = true
//   e.preventDefault()
//   let requestBody = new FormData(form)
//   fetch(scriptURL, { method: 'POST', body: requestBody})
//     .then(response => {
//        alert('Success!', response)
//        submitButton.disabled = false
//       })
//     .catch(error => {
//     alert('Error!', error.message)
//       submitButton.disabled = false

//     }
//     )
// })

const form = document.querySelector("form");
const thankyou = document.querySelector(".thankyou");
const nameInput = document.querySelector(
  'input[name="name"]'
);

let isFormValid = false;

const validateInputs = () => {
  nameInput.classList.remove("invalid");
  nameInput.nextElementSibling.classList.add("hidden");
  isFormValid = true;

  if (!nameInput.value) {
    nameInput.classList.add("invalid");
    nameInput.nextElementSibling.classList.remove("hidden");
    isFormValid = false;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  if (isFormValid) {
    form.remove();
    thankyou.classList.remove("hidden");
  }
});

nameInput.addEventListener("input", () => {
  validateInputs();
});
