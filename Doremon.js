let hero = document.querySelector(".hero");
let gall_img = document.querySelector(".img");
let array_img = [];
const numberOfImages = 26;

for (let i = 0; i < 7; i++) {
  array_img.push({ key: i + 1, url: `./assests/circle/dc${i + 1}.jpg` });
}
// console.log(array_img.length);

let sliderHTML = `
  <div class="slider-img w-full h-[420px] absolute " style="--qty:${
    array_img.length
  };">
    ${array_img
      .map(
        (item, i) => `
      <div class="list w-[150px] h-[250px] absolute top-[20%] left-[calc(50%-100px)] "  style="--pos:${
        i + 1
      };">
        <img src="${
          item.url
        }" class="w-full h-full object-cover flex rounded-lg" alt="${
          "image - " + (i + 1)
        }">
      </div>
    `
      )
      .join("")}
  </div>
`;
hero.innerHTML = sliderHTML;

//galery

function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < numberOfImages) {
    let randomNum = Math.floor(Math.random() * numberOfImages) + 1;
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}

let numm = generateRandomNumbers();

let gallery_img = [{ key: 1, url: "./assests/doremon/d2.jpg" }];
for (let i = 0; i < numberOfImages; i++) {
  gallery_img.push({
    key: i + 1,
    url: `./assests/doremon/d${numm[i]}.jpg`,
  });
}
let galleryHTML = `${gallery_img
  .map(
    (item, i) => `

    <button onclick="showdis(${i + 1})">
    <div class="relative">
    <div class="overflow-hidden py-2 ">
      <img src="${item.url}" alt="image-${
      i + 1
    }" class="w-full h-full object-cover flex rounded-xl">
    </div>
    <!--<div class="absolute bottom-10 right-[50%]">
    <h2>Pokemon</h2>
    </div>-->
    </div>
    </button>
    `
  )
  .join("")}`;

gall_img.innerHTML = galleryHTML;

const dis = [];
for (let i = 0; i < numberOfImages; i++) {
  dis.push({
    title: `Pokemon-${i + 1}`,
    dis: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi tempora, unde in eos dolor suscipit est beatae, nobis error quae odit fugit, amet magni ducimus? Laboriosam aliquid dolorum repellendus nostrum fugiat asperiores, ducimus facere iste consequatur esse obcaecati nulla enim delectus architecto pariatur quasi quas.",
  });
}

// const locations = document.querySelector(".gallery-img");
// let numx = 0;
// let yy = 0;
// locations.addEventListener("click", (e) => {
//   numx = e.x;
//   yy = e.y;

// });
// function showdis(i) {
//   document
//     .getElementsByClassName("img-description")
//     .item(0)
//     .classList.remove("hide");

//   document.getElementsByClassName("img").item(0).classList.add("active");

//   document.getElementById("title").textContent = dis[i].title;
//   document.getElementById("description").textContent = dis[i].dis;
// }
// function hidedis() {
//   document
//     .getElementsByClassName("img-description")
//     .item(0)
//     .classList.add("hide");

//   document.getElementsByClassName("img").item(0).classList.remove("active");

//   document.getElementById("title").textContent = dis.title;
//   document.getElementById("description").textContent = dis.dis;
// }
