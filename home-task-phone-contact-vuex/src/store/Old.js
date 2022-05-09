import { v4 as uuidv4 } from "uuid"; //Модуль для генерування ID

export default {
  //Метод для зчитування списку товарів (масиву об"єктів-товарів) з localStorage
  readList: function () {
    if (localStorage.getItem("usersList"))
      return JSON.parse(localStorage.getItem("usersList"));
    else return [];
  },
  //Метод для запису списку товарів у  localStorage
  writeList: function (users) {
    localStorage.setItem("usersList", JSON.stringify(users));
  },
  //Метод для додавання нового товару до списку у localStorage
  addUser: function (userData) {
    //Створюємо новий об"єкт-товар
    const user = {
      id: uuidv4(),
      ...userData,
    };
    let usersList = this.readList(); //Зчитуємо список (масив) товарів з localStorage
    usersList.push(user); //Додаємо новий об"єкт-товар у список
    this.writeList(usersList); //Зберігаємо список товарів у localStorage
  },
  deleteUser: function (idToDelete) {
    let usersList = this.readList(); //Зчитуємо список (масив) товарів з localStorage
    usersList = usersList.filter((item) => item.id !== idToDelete); //Видалили з масиву продукт
    this.writeList(usersList); //Зберігаємо список товарів у localStorage
  },
  updateUser(user) {
    let usersList = this.readList(); //Зчитуємо список (масив) товарів з localStorage
    const userIndex = usersList.findIndex((item) => item.id === user.id);
    if (userIndex >= 0)
      usersList[userIndex] = {
        ...user,
      };
    this.writeList(usersList); //Зберігаємо список товарів у localStorage
  },
  getUserById(id) {
    let usersList = this.readList(); //Зчитуємо список (масив) товарів з localStorage
    return usersList.find((item) => item.id === id);
  },
};
