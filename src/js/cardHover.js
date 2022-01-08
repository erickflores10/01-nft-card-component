const hoverBox = document.querySelector(".Hover");

const card = document.querySelector(".Card");

const handleHover = () => {

    hoverBox.addEventListener("mouseover", (event) => {

        event.preventDefault();
        card.classList.toggle("shadow__active");
    });

    hoverBox.addEventListener("mouseout", (event) => {

        event.preventDefault();
        card.classList.remove("shadow__active");
    });

}

handleHover();