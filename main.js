
let tabs = document.getElementById("tabs");
let tabs_array = ["Pokemon", "Marvel", "Transformer", "Anime", "Doremon"];
let rannum  = []
let imageIcon = ["image-line","image-2-line","image-fill","image-2-fill"]
let icon_image = [""];
while(rannum.length < imageIcon.length){
    let ranNum = Math.floor(Math.random() * 4 + 1);
    if(!rannum.includes(ranNum)){
        rannum.push(ranNum);
    }

}

tabs_array.map((ele,i)=>{
  let hello = `target ="_blank"`;
  
    tabs.innerHTML += `
<a href="./${ele}.html" >
    <ul class="flex items-center p-2 pl-10  hover:bg-[#82d7ff43] transition-all rounded-lg transition-all gap-2 ">
        <li>
           <!-- <i class="ri-${imageIcon[rannum[i] - 1]} text-2xl"></i> -->
            <img src="./assests/Png/icon-${i + 1}.png" class="w-[25px]" alt="">
            
        </li>
        <li>
            <h2 class="text-1xl font-medium">${ele}</h2>
        </li>
    </ul>
</a>
`;

})



let navbar = document.getElementById("navbar");
let hideNavElements = document.querySelectorAll(".hidde"); 
let navArrow = document.getElementById("navbarArrow");
let flg = 0;

function toggleNavbar() {
  if (flg) {
    navbar.classList.add("activeNav");
    flg = 0;
  } else {
    navbar.classList.remove("activeNav");
    flg = 1;
  }
}

hideNavElements.forEach((element) => {
  element.addEventListener("click", toggleNavbar);
});

let Images_Up = document.querySelector(".images-up");
let arrow = document.getElementById("arrow-1");
let flag = true;
Images_Up.addEventListener("click", () => {

  if (flag) {
    arrow.classList.remove("ri-arrow-down-s-line");
    arrow.classList.add("ri-arrow-up-s-line");
    flag = false;
  } else {
    arrow.classList.remove("ri-arrow-up-s-line");
    arrow.classList.add("ri-arrow-down-s-line");
    flag = true;
  }
});

let count = 0 ;
setInterval(()=>{
  if (count < tabs_array.length) {
    document.getElementById("img_name").innerHTML = `${tabs_array[count]} `;
    count += 1;
  } else {
    count = 0;
  }

}, 1500);


  let hi = document.getElementById("tabs").id === "tabs";
  console.log(852);
  console.log(hi);