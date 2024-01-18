console.log(`index.js - подключен !`);

let obj = {
  name: `Педько Сергій Борисович`,
  position: `Trainee/ Junior Frontend/JavaScript/React-розробник, наповнення Internet-магазину`,
  city: `Київ`,
  pre_experience: `Викладач-інструктор з наземного обслуговування повітряних суден
                   з 10.2017 по нині. Учбовий центр ТОВ MASTER-AVIA(Освіта, наука)`,

  education: `Університет ім. Т.Г. Шевченко, Економічний, Київ, Вища, 1995 - 1999р.`,
  language: `Українська-Російська (вільно); Англійська (розмовна, на рівні достатньому для читання технічної документації)`,
  main_goal: `Можу почати з наповнення Інтернет-магазину товарами (База даних, Google-таблиці, json/сsv-файли, тощо), або наповнення іншим контентом сайтів`,
  
  desire: `Досвіду участі у комерційних IT-проектах нажаль НЕ маю, але маю ВЕЛИКЕ бажання працювати цій сфері та вчитися i розвиватися. Постійно займаюся самоосвітою за даним напрямком.`,

   thank:  `Виконаю всі тестові завдання – надсилайте, щиро вдячний за розгляд мого резюме`,
   
   skill: [`HTML`, `CSS`, `JavaScript`, `React`, `MySQL`]
}

//  _____________ Выводим данные - ЛЕВОГО БЛОКА (Мои СКИЛЫ) ____________________

let skill = obj[`skill`];
console.log(skill); // [`HTML`, `CSS`, `JavaScript`, `Git`, `Bootstrap`, `Node.js`, `Pug`, `MongoDB`, `MySQL`]

let skill_list = document.querySelector(`.my_skill`); 
console.log(skill_list); // <ul class="my_skill">...</ul">


skill.forEach((element, index) =>{
  console.log(element); // `HTML`, `CSS`, `JavaScript`, `Git`, `Bootstrap`, `Node.js`, `Pug`, `MongoDB`, `MySQL`

// Выведем ВСЕ НА САЙТ (Экран) в ЦИКЛЕ - как Список <li> (внутри <ul> -skill_list)_________
  skill_list.innerHTML = skill_list.innerHTML + `<li>${element}</li>`;
});


// _____________ Выводим данные - ПРАВОГО БЛОКА ____________________

document.querySelector(`.name`).innerHTML = obj[`name`];
console.log(document.querySelector(`.name`));

document.querySelector(`.position`).innerHTML = obj[`position`];
console.log(document.querySelector(`.position`));

document.querySelector(`.city`).innerHTML = obj[`city`];
console.log(document.querySelector(`.city`));

document.querySelector(`.pre_experience`).innerHTML = obj[`pre_experience`];
console.log(document.querySelector(`.pre_experience`));

document.querySelector(`.education`).innerHTML = obj[`education`];
console.log(document.querySelector(`.education`));

document.querySelector(`.language`).innerHTML = obj[`language`];
console.log(document.querySelector(`.language`));

document.querySelector(`.main_goal`).innerHTML = obj[`main_goal`];
console.log(document.querySelector(`.main_goal`));

document.querySelector(`.desire`).innerHTML = obj[`desire`];
console.log(document.querySelector(`.desire`));

document.querySelector(`.thank`).innerHTML = obj[`thank`];
console.log(document.querySelector(`.thank`));






