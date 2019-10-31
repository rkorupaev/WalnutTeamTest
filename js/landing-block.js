let landingBlockForm = document.querySelector(".landing-block__form");
let landingInputName = landingBlockForm.querySelector(".form__input--name");
let landingInputTel = landingBlockForm.querySelector(".form__input--tel");
let landingButton = landingBlockForm.querySelector(".form__button");

landingButton.addEventListener("click", (evt) => {
    if (!landingInputName.validity.valid || !landingInputTel.validity.valid) {
        evt.preventDefault();
    }
});