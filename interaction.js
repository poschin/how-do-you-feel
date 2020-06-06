'use strict';

const select = document.querySelector("select");
const para = document.querySelector("p");

let unmotivated = [
    '“I always wanted to be somebody, but now I realise I should have been more specific.”',
    '“I am so clever that sometimes I don’t understand a single word of what I am saying.”',
    '“Bad decisions make good stories.”',
    '“I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.” ',
    '“When life gives you lemons, squirt someone in the eye.”',
];

let tooMotivated = [
    '"The first step towards failure is trying."',
    '"Those who doubt your ability probably have a valid reason."',
    '"The best things in life are actually really expensive."',
    '"Always believe that something wonderful will probably never happen."',
    '"A person who smiles in the face of adversity…probably has a scapegoat."',
];

let painfullySad = [
    '"Before you judge a man, walk a mile in his shoes. After that who cares?... He’s a mile away and you’ve got his shoes!"',
    '“Light travels faster than sound. This is why some people appear bright until you hear them speak.”',
    '“War is God’s way of teaching Americans geography.”',
    '“My opinions may have changed, but not the fact that I’m right.”',
];

let philosophical = [
    '“One cannot step twice in the same river”',
    '“If God did not exist, it would be necessary to invent Him”',
    '“There is only one thing a philosopher can be relied upon to do, and that is to contradict other philosophers”',
    '“Leisure is the mother of philosophy”',
    '“Leisure is the mother of philosophy”',
];

let quiteDumb = [
    '“It’s not that I’m so smart. It’s just that I stay with problems longer.”',
    '“In three words I can sum up everything I’ve learned about life: it goes on.”',
    '“Every man is a damn fool for at least five minutes every day; wisdom consists in not exceeding the limit.”',
    '“We don’t see things the way they are. We see them the way we are.”',
];

   
select.addEventListener("change", showQuote);

function showQuote() {
    const change = select.value;
    
    if (change === "unmotivated") {
        let firstChoice = unmotivated[Math.floor(Math.random() * unmotivated.length)];
        para.innerHTML = firstChoice;
    } else if (change === "too-motivated") {
        let secondChoice = tooMotivated[Math.floor(Math.random() * tooMotivated.length)];
        para.innerHTML = secondChoice;
    } else if (change === "painfully-sad") {
        let thirdChoice = painfullySad[Math.floor(Math.random() * painfullySad.length)];
        para.innerHTML = thirdChoice;
    } else if (change === "philosophical") {
        let forthChoice = philosophical[Math.floor(Math.random() * philosophical.length)];
        para.innerHTML = forthChoice;
    } else if (change === "quite-dumb") {
        let fithChoice = quiteDumb[Math.floor(Math.random() * quiteDumb.length)];
        para.innerHTML = fithChoice;
    } else {
        para.innerHTML = "";
    }
}