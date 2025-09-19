//your code here
const img = document.getElementsByTagName("img");
const fullName = document.getElementById("full_name");
const getAnotherUser = document.getElementById("getUser");
const allDataButtons = document.querySelectorAll("[data-attr]");
const additionalInfo = document.getElementById("additional_info");

const getUser = async () => {
  try {
    const response = await fetch("https://randomuser.me/api/");

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", () => {
  getUser().then((user) => {
    img[0].src = user.results[0].picture.large;

    fullName.innerHTML =
      user.results[0].name.first + " " + user.results[0].name.last;

    allDataButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        switch (button.dataset.attr) {
          case "age":
            additionalInfo.innerHTML = user.results[0].registered.age;
            break;
          case "email":
            additionalInfo.innerHTML = user.results[0].email;
            break;
          case "phone":
            additionalInfo.innerHTML = user.results[0].phone;
            break;
        }
      });
    });
  });
});

getAnotherUser.addEventListener("click", () => {
  getUser().then((user) => {
    img[0].src = user.results[0].picture.large;

    fullName.innerHTML =
      user.results[0].name.first + " " + user.results[0].name.last;

    allDataButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        switch (button.dataset.attr) {
          case "age":
            additionalInfo.innerHTML = user.results[0].registered.age;
            break;
          case "email":
            additionalInfo.innerHTML = user.results[0].email;
            break;
          case "phone":
            additionalInfo.innerHTML = user.results[0].phone;
            break;
        }
      });
    });
  });
});
