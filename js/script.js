{
    const changeBackground = () => {
        const body = document.querySelector(".body");

        body.classList.toggle("section__button--color");
    }

    const init = () => {
        const sectionButton = document.querySelector(".section__button--color");

        sectionButton.addEventListener("click", changeBackground);
    }
    
    init();
}