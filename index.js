//alert button

const alertBtn = document.getElementsByClassName("btn-danger");

let i = 0;
while (alertBtn.length > i) {
    alertBtn[i].addEventListener("click", () => {
        alert("Button clicked");
    });
    i++;
}

//background randomChange button
const colors = ["red", "blue", "green", "yellow", "purple"];

const bgChangeBtn = document.getElementsByClassName("btn-bgchange")[0];

const btnBgChange = () => {
    let j = Math.floor(Math.random() * colors.length);
    bgChangeBtn.style.backgroundColor = colors[j];
    if (colors[j] === "yellow") {
        bgChangeBtn.style.color = "black";
    } else {
        bgChangeBtn.style.color = "";
    };
}

bgChangeBtn.addEventListener("click", btnBgChange);


//change dark or light button
const darkLightBtn = document.getElementsByClassName("btn-darklight")[0];
const body = document.getElementsByTagName("body")[0];

let isDarkMode = false;
const btnDarkLight = () => {
    if (isDarkMode) {
        isDarkMode = false;
        body.style.backgroundColor = "black";
    } else {
        isDarkMode = true;
        body.style.backgroundColor = "white";
    }
}

darkLightBtn.addEventListener("click", btnDarkLight);


//count number button
document.addEventListener('DOMContentLoaded', function () {
    const numberElement = document.getElementById('number');
    let number = 0;

    document.querySelector('.plus').addEventListener('click', function () {
        number++;
        numberElement.textContent = number;
    });

    document.querySelector('.minus').addEventListener('click', function () {
        number--;
        numberElement.textContent = number;
    });

    document.querySelector('.reset').addEventListener('click', function () {
        number = 0;
        numberElement.textContent = number;
    });

    //toggle alert button
    // document.addEventListener('DOMContentLoaded', function () {
    const title = document.querySelector('.alert');
    const toggleButton = document.getElementById('titleDeret');

    toggleButton.addEventListener('click', function () {
        if (title.style.display === 'none') {
            title.style.display = 'block';
        } else {
            title.style.display = 'none';
        }
        // });
    });
});
