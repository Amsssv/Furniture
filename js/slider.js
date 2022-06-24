(function () {
	//define active classe
	const selectedCssItemClass = "carousel__item--active";
	const selectedCssPaginationItemClass = "carousel__pagination-item--active";

	//define itens and pagination items and stupid array convertation
	const items = Array.from(document.querySelectorAll(".carousel__item"));
	const paginationItems = Array.from(document.querySelectorAll(".carousel__pagination-item"));

	//define buttons
	const nextButton = document.querySelector(".carousel__button--next");
	const prevButton = document.querySelector(".carousel__button--prev");

	//select function. index is argument which comes from place where function was invoked
	const selectItem = index => {
		const selectDOMNode = (arr, activeClass, index) =>
			arr.forEach((elements, i) => elements.classList.toggle(activeClass, i === index));
		selectDOMNode(items, selectedCssItemClass, index);
		selectDOMNode(paginationItems, selectedCssPaginationItemClass, index);
	}

	const nextButtonClickHandler = index => selectItem(index === items.length - 1 ? 0 : index + 1)
	const backButtonClickHandler = index => selectItem(index === 0 ? items.length - 1 : index - 1)
	const getCurrentIndex = () => items.findIndex(element => element.classList.contains(selectedCssItemClass));

	//Add event listeners
	nextButton.addEventListener("click", () => nextButtonClickHandler(getCurrentIndex()));
	prevButton.addEventListener("click", () => backButtonClickHandler(getCurrentIndex()));
	paginationItems.forEach((element, index) => element.addEventListener("click", () => selectItem(index)));
})()