function displayPlan() {
    const step1 = "Collect underpants."
    const step2 = "???"
    const step3 = "Profit!"
    const firstStep = document.querySelector("#step-1")
    const secondStep = document.querySelector("#step-2")
    const thirdStep = document.querySelector("#step-3")
    const button = document.querySelector("button")

    button.addEventListener("click", event => {
        firstStep.append(step1)
        secondStep.append(step2)
        thirdStep.append(step3)
    })
}