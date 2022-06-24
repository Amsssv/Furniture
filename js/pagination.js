
let selectedButton = "design__paginationBtn-active";
let selectedCard = "design__content-active";

let buttons = Array.from(document.querySelectorAll(".design__paginationBtn"));
let card = Array.from(document.querySelectorAll(".design__content"));

const selectItem = index => {
	const selectDOMNode = (arr, activeClass, index) =>
		arr.forEach((elements, i) => elements.classList.toggle(activeClass, i === index));
	selectDOMNode(buttons, selectedButton, index);
	selectDOMNode(card, selectedCard, index);
}

buttons.forEach((element, index) => element.addEventListener("click", () => selectItem(index)))