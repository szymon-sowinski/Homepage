{
    const changeBackground = () => {
        const body = document.querySelector(".body");

        body.classList.toggle("section__button--color");
        if (body.classList.contains("section__button")) {
            section__span.innerText = "jaśniejszy";
        } else {
            section__span.innerText = "ciemniejszy";
        }
    }

    const init = () => {
        const sectionButton = document.querySelector(".section__button--color");

        sectionButton.addEventListener("click", changeBackground);
    }
    
    init();
}