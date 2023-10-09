const input = document.querySelectorAll(".input");
const dayInput = document.querySelector("#days");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");
const computeBtn = document.querySelector(".computeBtn");
const computedDays = document.querySelector(".days span");
const computedMonth = document.querySelector(".months span");
const computedYear = document.querySelector(".year span");
let computable = false;

const validateInput = () => {
    computeBtn.addEventListener("click", () => {

        const dayLabel = document.querySelector(".dd label");
        const dayInputElement = document.querySelector(".dd input");
        const daySpan = document.querySelector(".dd span");

        const monthLabel = document.querySelector(".mm label");
        const monthInputElement = document.querySelector(".mm input");
        const monthSpan = document.querySelector(".mm span");

        const yearLabel = document.querySelector(".yyyy label");
        const yearInputElement = document.querySelector(".yyyy input");
        const yearSpan = document.querySelector(".yyyy span");

        if (dayInput.value === "" || monthInput.value === "" || yearInput.value === "") {
            input.forEach(e => {
                e.querySelector("label").style.color = "var(--Light-red)";
                e.querySelector("input").style.border = "1px solid var(--Light-red)";
                if (e.querySelector("input").value === "") {
                    e.querySelector("span").innerText = "This field is required";
                }
                computeBtn.style.top = "31.5%";
                computable = false;
            });
        } else if (
            dayInput.value < 1 ||
            dayInput.value > new Date(yearInput.value, monthInput.value, 0).getDate() ||
            isNaN(dayInput.value)
        ) {
            dayLabel.style.color = "var(--Light-red)";
            dayInputElement.style.border = "1px solid var(--Light-red)";
            daySpan.innerText = "Must be a valid day";
            computeBtn.style.top = "31.5%";
            computable = false;
        } else if (
            monthInput.value < 1 ||
            monthInput.value > 12 ||
            isNaN(monthInput.value)
        ) {
            monthLabel.style.color = "var(--Light-red)";
            monthInputElement.style.border = "1px solid var(--Light-red)";
            monthSpan.innerText = "Must be a valid month";
            computeBtn.style.top = "31.5%";
            computable = false;
        } else if (
            yearInput.value < 1 ||
            yearInput.value > new Date().getFullYear() ||
            isNaN(yearInput.value)
        ) {
            yearLabel.style.color = "var(--Light-red)";
            yearInputElement.style.border = "1px solid var(--Light-red)";
            yearSpan.innerText = "Must be in the past";
            computeBtn.style.top = "31.5%";
            computable = false;
        } else {
            input.forEach(e => {
                e.querySelector("label").style.color = "var(--Smokey-grey)";
                e.querySelector("input").style.border = "1px solid var(--Smokey-grey)";
                e.querySelector("span").innerText = "";
                computeBtn.style.top = "120px";
            });
            computable = true;
        }
    });
};

const computeAge = () => {
    computeBtn.addEventListener("click", () => {
        if (computable) {

            let years = new Date().getFullYear() - yearInput.value;
            let months = new Date().getMonth() - monthInput.value + 1;
            let days = new Date().getDate() - dayInput.value;

            if (days < 0) {
                months--;
                days += new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }

            computedYear.innerText = years;
            computedMonth.innerText = months;
            computedDays.innerText = days;
        }
        else {
            computedYear.innerText = computedMonth.innerText = computedDays.innerText = "--";
        }
    })
};

validateInput();
computeAge();   
