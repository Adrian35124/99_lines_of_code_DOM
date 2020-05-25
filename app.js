document.addEventListener("DOMContentLoaded", function () {
let button = document.createElement("button");
let btnText = document.createTextNode("Sing!");
button.appendChild(btnText);
document.body.appendChild(button);

// let h3 = createElement("h3");
// let h3Text = document.createTextNode(div);
// h3.appendChild(h3Text)

// let div = document.createElement("div");
// div.className = "Jessica"
// let div2 = document.createElement("div");
// div.className = "Adrian"
// let div3 = document.createElement("div");
// div.className = "Melissa"
// let div4 = document.createElement("div");
// div.className = "Jackie"
// let div5 = document.createElement("div");
// div.className = "Cris"

let friends = ["Jessica", "Adrian", "Melissa", "Jackie", "Cris"];
for (let i = 0; i < friends.length; i++) {
    let friendsDiv = document.createElement("div")
    friendsDiv.className = "friends";
    let h3 = document.createElement ("h3");
    let h3Text = document.createTextNode(friends[i]);
    h3.appendChild(h3Text);
    document.body.appendChild(friendsDiv);
    
    let lines = document.getElementsByClassName("friends");
    lines[i].appendChild(h3);
    for (let num = 99; num < num > 0; num--) {
        let singing = document.createElement('p');
        if (num !== 1)  {
            singing.innerText = (friends[i] + ": " + num + "lines of code in the file, " + num + "lines of code; " + friends[i] + "strikes on out, clears it out, " + (num - 1) + "more lines of code in the file");
        } else {
            singing.innerText = (friends[i] + ": " + num + "line of code in the file, " + num + "line of code; "+ friends[i] + "strikes one out, clears it all out, no more lines of code in the file");
        }
        lines[i].appendChild(song);
    }
    
}

});