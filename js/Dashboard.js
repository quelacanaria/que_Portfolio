// let rev = document.querySelectorAll(".card");
// let count = 0;
// showCards();
// function showCards(count){
//     console.log(count);
//     switch(count){
//     case 0:
//         rev[0].style.display = "flex";
//         rev[1].style.display = "flex";
//         rev[2].style.display = "flex";
//         rev[3].style.display = "flex";
//         rev[4].style.display = "flex";
//         break;
//     case 2:
//         rev[5].style.display = "none";
//         rev[1].style.display = "flex";
//         rev[2].style.display = "flex";
//         rev[3].style.display = "flex";
//         rev[4].style.display = "flex";
//         rev[0].style.display = "flex";
//         console.log("two");
//         break;
//     case 2:
//         rev[5].style.display = "none";
//         rev[1].style.display = "flex";
//         rev[2].style.display = "flex";
//         rev[3].style.display = "flex";
//         rev[4].style.display = "flex";
//         rev[0].style.display = "flex";
//         console.log("two");
//         break;
//     default: count = 0;
//     break;
// }

// }
// function nextTech(){
// count++;
// showCards(count);
// }

// function prevTech(){
// count--;
// showCards(count);
// }

// let count = 0;
// gg = document.getElementById("gg");
// let div = document.createElement("div");
// let div1 = document.createElement("div");
// let div2 = document.createElement("div");
// let div3 = document.createElement("div");
// let div4 = document.createElement("div");
// let divimg = document.createElement("img");
// let divimg1 = document.createElement("img");
// let divimg2 = document.createElement("img");
// let divimg3 = document.createElement("img");
// let divimg4 = document.createElement("img");

// div.classList.add("card");
// div1.classList.add("card");
// div2.classList.add("card");
// div3.classList.add("card");
// div4.classList.add("card");

// divimg.classList.add("photo");
// divimg1.classList.add("photo");
// divimg2.classList.add("photo");
// divimg3.classList.add("photo");
// divimg4.classList.add("photo");

// div.style.display = "flex";
// div1.style.display = "flex";
// div2.style.display = "flex";
// div3.style.display = "flex";
// div4.style.display = "flex";

// divimg4.src = "image/html5.svg";
// divimg3.src = "image/css3.svg";
// divimg2.src = "image/javascript.svg";
// divimg1.src = "image/java.svg";
// divimg.src = "image/php.svg";

// // div.prepend(divimg);
// // gg.prepend(div);
// showCards(count);

// function showCards(count){
//     console.log(count);
    
//     switch(count){
//         case 0:
//             gg.prepend(div);
//             div.prepend(divimg);
//             gg.insertBefore(div1, div);
//             div1.prepend(divimg1);
//             gg.insertBefore(div2, div1);
//             div2.prepend(divimg2);
//             gg.insertBefore(div3, div2);
//             div3.prepend(divimg3);
//             gg.insertBefore(div4, div3);
//             div4.prepend(divimg4);
//         break;
//         case 1:
// div.style.display = "none";
// div1.style.display = "none";
// div2.style.display = "none";
// div3.style.display = "none";
// div4.style.display = "none";
// div.style.display = "flex";
// div1.style.display = "flex";
// div2.style.display = "flex";
// div3.style.display = "flex";
// div4.style.display = "flex";              
//             gg.prepend(div1);
//             div1.prepend(divimg1);
//             gg.insertBefore(div2, div1);
//             div2.prepend(divimg2);
//             gg.insertBefore(div3, div2);
//             div3.prepend(divimg3);
//             gg.insertBefore(div4, div3);
//             div4.prepend(divimg4);
//             gg.insertBefore(div, div4);
//             div.prepend(divimg);
//         break;
//     }

// }

// function nextTech(){
// count++;
// showCards(count);
// }

// function prevTech(){
// count--;
// showCards(count);
// }

// const gg = document.querySelector(".cardContainer");

// const images = [
//   "image/php.svg",
//   "image/java.svg",
//   "image/javascript.svg",
//   "image/css3.svg",
//   "image/html5.svg",
// ];

// images.forEach(src => {
//   const div = document.createElement("div");
//   div.classList.add("card");
//   const img = document.createElement("img");
//   img.src = src;
//   img.classList.add("photo");
//   div.appendChild(img);
//   gg.appendChild(div);
// });



// let count = 0;
// function nextTech(){
// count++;
// showCards(count);
// }

// function prevTech(){
// count--;
// showCards(count);
// }


// let count = 0;
// const rev = document.querySelectorAll(".card");
// const visibleCount = 4; // show 4 at a time

// function showCards(index) {
//   // Normalize count (wrap around)
//   if (index < 0) count = rev.length - 1;
//   if (index >= rev.length) count = 0;

//   // Hide all cards
//   rev.forEach(card => (card.style.display = "none"));

//   // Show next 4 cards
//   for (let i = 0; i < visibleCount; i++) {
//     const cardIndex = (count + i) % rev.length;
//     rev[cardIndex].style.display = "flex";
//   }
// }

// function nextTech() {
//   count++;
//   showCards(count);
// }

// function prevTech() {
//   count--;
//   showCards(count);
// }

// // Initial display
// showCards(count);


