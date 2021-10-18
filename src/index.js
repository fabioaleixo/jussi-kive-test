//https://api.github.com/users/

var usersCont = document.getElementById("users");

var users = {
  fabio: {
    user: "fabioaleixo",
    image: "#"
  },
  diego: {
    user: "fucore",
    image: "#"
  }
};

Object.values(users).forEach((val) => {
  var listItem = document.createElement("li");
  var listName = document.createElement("p");
  listName.setAttribute("class", "listName");
  listName.innerHTML = val.user;
  listItem.appendChild(listName);
  usersCont.appendChild(listItem);
});
