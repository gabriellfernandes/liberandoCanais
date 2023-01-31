const showHeader = () => {
    const burgerButton = document.querySelector("#burgerButton")
    const containerItens = document.querySelector("#modalHeader")
    burgerButton.addEventListener("click", () => {
        containerItens.classList.remove("hidden")
        containerItens.className.includes("containerItensClose") ? containerItens.classList.remove("containerItensClose") : containerItens.classList.add("containerItensClose")
        containerItens.classList.add("containerItens")
    })
}

showHeader()
