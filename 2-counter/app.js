// set inital value to zero
let count = 2;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

const companies = ["Uber", "Lyft", "Google", "Apple", "SpaceX", "Tinder"]
const animals = ["Aardvark", "Blue Footed Booby", "Flying Dragon", "Giraffe Weevil", "Hammerhead Slug", "Komodo Dragon", "Naked Mole Rat", "Okapi", "Red Panda"]
const vowels = ["A", "E", "I", "O", "U"]

console.log(btns)

// for (let i = 0; i < btns.length; i++) {
//   // btn.addEventListener()
// }

function addMadLib() {
  // These 4 lines of code are copied from 3-Madlibs/index.js lines 10-15
  const companyName = companies[Math.floor(Math.random() * companies.length)]
  const firstLetter = companyName.charAt(0)
  const companyString = "My company is a" + ((vowels.indexOf(firstLetter) > -1) ? "n " : " ") + companyName + " for " + animals[Math.floor(Math.random() * animals.length)] + "s!"
  //outputDiv.innerHTML += companyString

  return companyString //return the string instead of inserting it directly into html
}

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      // Insert the companyString into the textContent of the button instead of the count number
        //count--;
      value.textContent = addMadLib()
    } else if (styles.contains("increase")) {
      // Insert the companyString into the textContent of the button instead of the count number
        //count *= 2;
      value.textContent = addMadLib()
    } else {
      // If the Reset button is pressed set the textContent to nothing.
        //count = 1;
      value.textContent = ""
    }

    // This code is not needed so I prevented it from running
      // if (count > 0) {
      //   value.style.color = "green";
      // }
      // if (count < 0) {
      //   value.style.color = "red";
      // }
      // if (count === 0) {
      //   value.style.color = "#222";
      // }
      // value.textContent = count;
  });
});
