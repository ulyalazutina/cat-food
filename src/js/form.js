const nameElement = document.getElementById('name');
const weightElement = document.getElementById('weight');
const ageElement = document.getElementById('age');
const purposeElements = document.getElementById('purpose');
const emailElement = document.getElementById('email');
const phoneElement = document.getElementById('phone');
const commentElement = document.getElementById('comment');
const optionallyElements = document.getElementById('optionally');
const submitBtn = document.querySelector('.dop__btn');

let name;
let weight;
let age;
let email;
let phone;
let comment;
let purpose;
let optionally = [];
let russianOptionally = [];

nameElement.addEventListener('input', (e) => {
    name = e.target.value;
});
weightElement.addEventListener('input', (e) => {
    weight = e.target.value;
});
ageElement.addEventListener('input', (e) => {
    age = e.target.value;
});
emailElement.addEventListener('input', (e) => {
    email = e.target.value;
});
phoneElement.addEventListener('input', (e) => {
    phone = e.target.value;
});
commentElement.addEventListener('input', (e) => {
    comment = e.target.value;
});
purposeElements.addEventListener('input', (e) => {
    purpose = e.target.id;
});
optionallyElements.addEventListener('input', (e) => {
    optionally.push(e.target.id);
});




export const formData = () => {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
        switch (purpose) {
            case "loss":
                purpose = "Похудение"
                break;
            case "gain":
                purpose = "Набор массы"
                break;
            case "advice":
                purpose = "Нужен совет"
                break;
            default:
                purpose = "";
                break;
        }
        optionally.forEach((elem) => {
            switch (elem) {
                case "sweetener":
                    russianOptionally.push("сахарозаменитель")
                    break;
                case "water":
                    russianOptionally.push("питьевая вода")
                    break;
                case "milk":
                    russianOptionally.push("молоко")
                    break;
                case "vitamins":
                    russianOptionally.push("витамины")
                    break;
                default:
                    break;
            }
        })

        alert(`Имя: ${name}
                Вес: ${weight}
                Возраст: ${age}
                Почта: ${email}
                Телефон: ${phone}
                Коммент: ${comment}
                Цель: ${purpose}
                Дополнительно: ${russianOptionally}`)
    })
}