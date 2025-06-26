let users = [];

const registForm = document.getElementById("registForm");
const userList = document.getElementById("userList");

function addUser(user) {
let listItem = document.createElement("li");
listItem.textContent =user.name + " - " + user.email;
userList.appendChild(listItem);
}

registForm.addEventListener("submit", function(event) {
event.preventDefault();

const name = document.querySelector("#name").value;
const password = document.querySelector("#password").value;
const email = document.querySelector("#email").value;

const newUser = {
    name,
    email,
    password
};

users.push(newUser);

addUser(newUser);

registForm.reset();

console.log(users);
});