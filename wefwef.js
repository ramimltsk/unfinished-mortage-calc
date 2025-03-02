const type2 = document.querySelector(".type2")

const type1 = document.querySelector(".type1")

const payment1 = document.querySelector(".payment1")

const payment2 = document.querySelector(".payment2")

const calculate = document.querySelector(".calculate")

const results = document.querySelector(".results")

const empty = document.querySelector(".empty")


payment1.addEventListener("click", () => {
    type1.classList.add("active")
    type2.classList.remove("active")
})

payment2.addEventListener("click", () => {
    type2.classList.add("active")
    type1.classList.remove("active")
})


calculate.addEventListener("click", () => {
    empty.style.display = "none"
    results.style.display = "block"
})




