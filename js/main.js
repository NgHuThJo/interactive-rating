function main() {
    const ratingList = document.querySelectorAll("li");
    const submitButton = document.querySelector(".submit__button");
    let ratingIndex = null;

    ratingList.forEach((element, index) => {
        element.addEventListener("click", () => {
            ratingIndex = ratingIndex ?? 0;
            ratingList[ratingIndex].setAttribute("aria-selected", false);
            element.setAttribute("aria-selected", true);
            ratingIndex = index;
        });
    });

    submitButton.addEventListener("click", () => {
        if(!isNull(ratingIndex)) {
            showThankYouMessage(ratingIndex);
        }
    });
}

// Rating index is 0-based, i.e. actual rating is rating index + 1
function showThankYouMessage(ratingIndex) {
    const sectionList = document.querySelectorAll("section");
    const ratingResult = document.querySelector(".rating__choice > span");
    
    sectionList[0].classList.add("none");
    sectionList[1].classList.remove("none");
    
    ratingResult.textContent = ratingIndex + 1;
}

function isNull(value) {
    return value === null;
}

main();