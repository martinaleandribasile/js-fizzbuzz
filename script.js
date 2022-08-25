const grid = document.getElementById("grid")


for (let i = 1; i < 101; i++) {
    const col = document.createElement("div")
    grid.append(col);
    col.classList.add("column")
    let result;
    if (i % 3 === 0 && i % 5 === 0) {
        result = "FizzBuzz"
        col.classList.add("bg-warning")
    }
    else if (i % 3 === 0) {
        result = "Fizz"
        col.classList.add("bg-primary")
    }
    else if (i % 5 === 0) {
        result = "Buzz"
        col.classList.add("bg-info")
    }
    else {
        result = i
        col.classList.add("bg-light")

    }
    col.innerHTML = result
    console.log(result)

    col.addEventListener("mouseover", function () {
        col.classList.add("onevent")
    })
    col.addEventListener("mouseout", function () {
        col.classList.remove("onevent")
    })
}
