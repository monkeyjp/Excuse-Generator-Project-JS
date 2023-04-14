/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
// ------------------------------------- Excuse Generator JavaScript ------------------//

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

// function getRandomElement(listElement) {
//     let element = "";
//     element = listElement[Math.floor(Math.random() * listElement.length)];
//     //console.log(element)
//     return element;

// }

const getRandomElement = listElement => {
  let element = "";
  element = listElement[Math.floor(Math.random() * listElement.length)];
  //console.log(element)
  return element;
};

// console.log(getRandomElement(who));
// console.log(getRandomElement(action));
// console.log(getRandomElement(what));
// console.log(getRandomElement(when));

// function onLoad() {
//     let excuseGen = document.querySelector("#excuse");
//     excuseGen.innerHTML = getRandomElement(who) + " " + getRandomElement(action) +" "+ getRandomElement(what) + " " + getRandomElement(when);
//     return getRandomElement(who) + " " + getRandomElement(action) +" "+ getRandomElement(what) + " " + getRandomElement(when);
//     console.log(getRandomElement(who) + " " + getRandomElement(action) +" "+ getRandomElement(what) + " " + getRandomElement(when););
//  };

const onLoad = () => {
  let excuseGen = document.querySelector("#excuse");
  excuseGen.innerHTML =
    getRandomElement(who) +
    " " +
    getRandomElement(action) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when);
};

window.onLoad = onLoad();
