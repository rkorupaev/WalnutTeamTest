let modalForm = document.querySelector(".modal-window__form");
let modalInputName = modalForm.querySelector(".form__input--name");
let modalInputTel = modalForm.querySelector(".form__input--tel");
let modalInvalidText = modalForm.querySelector(".form__invalid-text");
let modalButton = modalForm.querySelector(".form__button");

modalButton.addEventListener("click", (evt) => {
	if (!modalInputName.validity.valid || !modalInputTel.validity.valid) {
		modalInvalidText.style.display = "block";
		evt.preventDefault();
	} else {
		modalInvalidText.style.display = "none";
	}
});
