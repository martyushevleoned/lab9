function nameValidation() {
    let name = document.getElementById("name").value;
    let regex = /^[A-Za-zА-Яа-яЁё]{2,20}$/;

    if (!regex.test(name)) {
        document.getElementById("check_name").innerHTML = "Количество символов в имени должно быть в диапазоне [2, 20]";
        return false;
    }
}

function telValidation() {
    let tel = document.getElementById("tel").value;
    let regex = /\A[A-Z0-9+_.-]+@[A-Z0-9.-]+\Z/;
    if (!regex.test(tel)) {
        document.getElementById("check_tel").innerHTML = "Недопустимыйы номер";
        return false;
    }
}

function emailValidation() {
    let email = document.getElementById("email").value;
    let regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (regex.test(email)) {
        document.getElementById("check_email").innerHTML = "Некорректный адрес электронной почты";
        return false;
    }
}

function themeValidation() {
    let selectElement = document.getElementById("product_select").value;

    if (selectElement == "placeholdder") {
        document.getElementById("check_product").innerHTML = "Выберите пункт";
        return false;    
    }
}