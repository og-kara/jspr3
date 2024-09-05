'use strict'
// №1
let num1 = prompt('Введите стоимость товара');
let num2 = prompt('Количество денег');
if (num1 > 0 && num2 > 0) {
    if (num1 == num2) {
        alert(`Покупка совершена`);
    } else if (num1 > num2) {
        alert(`Для покупки не хватает ${num1 - num2} руб.`)
    } else if (num1 < num2) {
        alert(`Покупка совершена. Сдача ${num2 - num1} руб.`)
    }
}
else {
    alert(`Неверный формат данных`);
}

// №2
let a = prompt('Введите число');
if (a > 0) {
    alert(`1`);
} else if (a < 0) {
    alert(`-1`);
} else if (a == 0) {
    alert(`0`);
}else {
    alert(`Неверный формат данных`);
}

// №3
let b = prompt('Введите число:');
let c = prompt('Введите число:');
let result = (b + c < 4) ? 'Мало' : 'Много';
alert(result);

// №4
let login = prompt('Введите логин');
let message = login == 'Сотрудник' ? 'Привет' :
    login == 'Директор' ? 'Здравствуйте' :
        login == '' ? 'Нет логина' : '';
alert(message);

// №5
let log = prompt("Введите логин");
if (log == 'Админ') {
    let pass = prompt('Введите пароль');
    if (pass == 'Я главный'){
        alert('Здравствуйте')
    }else if (pass === null || pass === '') {
        alert('Отменено')
    }else {
        alert('Неверный пароль');
    }
}else if (log === null || log === ''){
    alert('Отменено')
}else {
    alert('Я вас незнаю');
}
