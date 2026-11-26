const savedUser = localStorage.getItem("loggedInUser");
if (savedUser) {
  showWelcome(savedUser);
}

function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  if (user !== "" && pass === "1234") {
    localStorage.setItem("loggedInUser", user);
    showWelcome(user);
  } else {
    document.getElementById("msg").innerHTML = "Wrong password! Try 1234!";
  }
}

function showWelcome(user) {
  document.getElementById("card").style.display = "none";
  document.getElementById("home").style.display = "block";
  document.getElementById("display-user").textContent = user;
  document.getElementById("display-user2").textContent = user;
  document.getElementById("display-user3").textContent = user;
}

function GETout() {
  localStorage.removeItem("loggedInUser");
  location.reload();
}
let score = 0;
let clickPower = 1;
let upgradeCost = 20;

 function Clicker() {
   score += clickPower;
   document.getElementById("score").innerText = score;
   if (score >= 100) {
        const currentUser = localStorage.getItem("loggedInUser");
     document.getElementById("milestone").innerHTML = "You Clicked 100 times, " + currentUser + "! Could you do better than that?"
   }
 }
 function upgrade() {
  if (score >= upgradeCost) {
    score -= upgradeCost;
    clickPower++;
    upgradeCost = upgradeCost * 2;
    document.getElementById("score").innerText = score;
    document.getElementById("cost").innerText = upgradeCost;
  } else {
    alert("Not enough points to upgrade!")
  }
}
let autoClickers = 0;
let autoCost = 50;

function buyAuto() {
  if (score >= autoCost) {
    score -= autoCost;
    autoClickers++;
    autoCost *= 2;
    document.getElementById("score").innerText = score;
    document.getElementById("auto-cost").innerText = autoCost;
  } else {
    alert("Not enough points to upgrade!");
  }
}

setInterval(() => {
  score += autoClickers;
  document.getElementById("score").innerText = score;
}, 1000);
