/*function changeBg(){
  const images = [
    'url("MAID2017.jpg")',
    'url("MAID2018.jpg")',
    'url("MAID2021.png")'
  ]
  const header = document.querySelector('.header')
  const bg = images[Math.floor(Math.random()*
    images.length)];
  header.style.backgroundImage = bg;
}
setInterval(changeBg,1000)*/

// preloader
const preloader = document.querySelector(".preloader")
window.addEventListener("load",function(){
  preloader.classList.add("hide-preloader")
})

// Show and Hide Menu bar
let navLinks = document.getElementById('navLinks')
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Review next and previous button
const participantsReviews = [
  {
    name: "Oh Hui Xin",
    job: "Year 1 Medical Student in UKM",
    img: "testimonial/Oh Hui Xin.jpg",
    text: "An amazing event that provided me with a clearer insight of the medical journey ahead"
  },
  {
    name:"Tushara",
    job:"Year 1 Medical  Student in Taylor's University",
    img:"testimonial/Tushara.jpeg",
    text:"It was super informative and gained lots of insight regarding the medical field in general and all about medical school life"
  },
  {
    name:"Lee Ai Shuan",
    job:"Year 1 Medical  Student in UKM",
    img:"testimonial/Lee Ai Shuan.jpg",
    text:"Just like other aspiring medical students, I was having a lot of doubts regarding medicine. And that session (Networking Session) really helped me clear my doubts!"
  },
  {
    name:"Gabriel Soon Chai Long",
    job:"Year 1 Medical  Student in University Malaya",
    img:"testimonial/Gabriel Soon.png",
    text:"I will recommend this event for my fellow friends or juniors to join. This event really helps a lot of pre-medical students to prepare themselves before they enter into medical school"
  },
  {
    name:"Adam Neo",
    job:"Year 1 Medical  Student in UKM",
    img:"testimonial/Adam Neo.jpg",
    text:"If I were to describe MAID in 3 words, it would be informative, helpful and fun! You might spark an interest in medicine when you join"
  },
  {
    name:"Tan Jian Qi",
    job:"Year 1 Medical  Student in UPM",
    img:"testimonial/Tan Jian Qi.png",
    text:"As a participant of the event, I got to try out history-taking, which was thrilling! With the guidance from seniors, we got to play the doctors and patients role according to the examples (scenarios) given"
  }
]
const committeeReviews = [
  {
    name: "Jeffrey Tee Wei Yang",
    job: "Year 2 Medical Student in University Malaya",
    img: "testimonial/Jeffrey.jpg",
    text: "MAID 2021 was an amazing team! Definitely learnt a lot and it consolidated my resolve in choosing medicine"
  },
  {
    name: "Rex Chan Zhen Khai",
    job: "Year 2 Medical Student in University Malaya",
    img: "testimonial/Rex.jpg",
    text: "The two years I spent in MMIYM as a CA and then as Vice President was a gateway for me to explore my leadership capabilities. I was hooked by the culture in MMIYM as it offers like-minded students exciting experiences that bring can bring their college and university lives to new heights. I would definitely recommend it to pre-university students who wants to be part of a big medical community"
  },
  {
    name: "Tan Jia Ying",
    job: "Year 3 Medical Student in Monash University",
    img: "testimonial/Chelsea.jpeg",
    text: "The activities were fun and simulated the med school experience!"
  },
  {
    name: "Suzanne",
    job: "Year 2 Medical Student in Newcastle University",
    img: "testimonial/Suzanne.jpeg",
    text: "MAID is basically like a precious baby for me and being the first batch of committee to organise the virtual version is really challenging. However, at the same time it was fun to organise and fight along with my amazing committees. Well I will say MAID has its bittersweet moments but it’s this moments that I will hold very precious to my heart forever. Well I wish the incoming organising committee a best of luck and continue on the legacy"
  }
]

const p_img = document.getElementById('participant-img')
const p_info = document.getElementById('participant-info')
const p_author = document.getElementById('participant-author')
const p_job = document.getElementById('participant-job')
const c_img = document.getElementById('committee-img')
const c_info = document.getElementById('committee-info')
const c_author = document.getElementById('committee-author')
const c_job = document.getElementById('committee-job')

const p_prevBtn = document.querySelector(".p-prev-btn")
const p_nextBtn = document.querySelector(".p-next-btn")
const c_prevBtn = document.querySelector(".c-prev-btn")
const c_nextBtn = document.querySelector(".c-next-btn")

let currentParticipant = 0
let currentCommittee = 0

function showParticipant(person){
  const item = participantsReviews[person]
  p_img.src = item.img
  p_info.textContent = item.text
  p_author.textContent = item.name
  p_job.textContent = item.job
}

function showCommittee(person){
  const items = committeeReviews[person]
  c_img.src = items.img
  c_info.textContent = items.text
  c_author.textContent = items.name
  c_job.textContent = items.job
}

window.addEventListener("DOMContentLoaded",function(){
  showParticipant(currentParticipant)
  showCommittee(currentCommittee)
})

p_prevBtn.addEventListener("click",function(){
  currentParticipant--
  if(currentParticipant<0){
    currentParticipant = participantsReviews.length-1
  }
  showParticipant(currentParticipant)
})

c_prevBtn.addEventListener("click",function(){
  currentCommittee--
  if(currentCommittee<0){
    currentCommittee = committeeReviews.length-1
  }
  showCommittee(currentCommittee)
})

p_nextBtn.addEventListener("click",function(){
  currentParticipant++
  if(currentParticipant>participantsReviews.length-1){
    currentParticipant=0
  }
  showParticipant(currentParticipant)
})

c_nextBtn.addEventListener("click",function(){
  currentCommittee++
  if(currentCommittee>committeeReviews.length-1){
    currentCommittee=0
  }
  showCommittee(currentCommittee)
})

// Show testimonial when it is clicked
const modalBtn = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")
const video = document.getElementById('video')

modalBtn.addEventListener("click", function(){
  modal.classList.add("open-modal")
})
closeBtn.addEventListener("click", function(){
  modal.classList.remove("open-modal")
  video.pause()
})

// Show Our Team when it is clicked
const teams = document.querySelectorAll('.displayTeam')

teams.forEach(function(team){
  const btn = team.querySelector('.show-btn')
  btn.addEventListener("click",function(){
    //Check whether the new item is same as the previous item or not
    teams.forEach(function(item){
      if (item !== team){
        item.classList.remove("show-text")
      }
    })
    team.classList.toggle("show-text")
  })
})

// Set date for our Copyright part
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener("click",function(){
  // linksContainer.classList.toggle("show-links") this is not a dynamic way
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height
  // containerHeight = 0 to check whether it's working correctly
  // linksHeight so that the nav bar will open dynamically
  if(containerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0;
  }
})

// ********** fixed navbar ************
const navbar = document.getElementById('nav')
const topLink = document.querySelector(".top-link")
window.addEventListener("scroll",function(){
  const scrollHeight = window.pageYOffset
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav")
  }

  if (scrollHeight>500){
    topLink.classList.add("show-link")
  } else {
    topLink.classList.remove("show-link")
  }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link")
scrollLinks.forEach(function(link){
  link.addEventListener("click",function(e){
    //prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1)
    // we can get the #id for the href we press
    // if we slice it, we remove the #
    const element = document.getElementById(id)
    // get the position of that element by using offsetTop
    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height
    const fixedNav = navbar.classList.contains("fixed-nav") //Either true or false
    let position = element.offsetTop - navHeight
    if(!fixedNav){
      position = position - navHeight
    }
    // While in smaller screen, container height has to be subtracted too
    if (navHeight>82){
      position = position + containerHeight
    }

    // if we console log position, we can get the pixels
    window.scrollTo({
      left:0, top:position
    })
    linksContainer.style.height=0;
  })
})

/*---------------Motto Tab Project-------------*/
const btns = document.querySelectorAll(".motto-btn");
const motto = document.querySelector(".motto");
const mottos = document.querySelectorAll(".mottos");

motto.addEventListener("click",function(e){
  // get me the data set id
  const id = e.target.dataset.id ;
  if(id){
    // remove active from other buttons
    btns.forEach(function(btn){
      btn.classList.remove("active");
      e.target.classList.add("active");
    })
    // hide other mottos
    mottos.forEach(function(m){
      m.classList.remove("active");
    })
    const element = document.getElementById(id);
    element.classList.add("active");
  }
})

/*----------Countdown Timer -------------*/
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const countdown = document.querySelector(".countdown")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".deadline-format h4")

// If we use this method, we can simply add on how many days we are closing for application
//let tempDate = new Date();
//let tempYear = tempDate.getFullYear();
//let tempMonth = tempDate.getMonth();
//let tempDay = tempDate.getDate();

// If we use this method, we hardcore setting a fixed date for the system to work
// let futureDate = new Date(2022,4,24,11,07,0);
// In the format: year, month, day, hours, minutes, seconds
// For month, if we put 4 it means May because in array it would deduct 1
// It will show current date
const futureDate = new Date(2022, 2, 25, 19, 30, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
// Use this number and put it into array of months to get the month name otherwise it appears number only
month = months[month];

const date2 = futureDate.getDate();
let weekday = futureDate.getDay();
// weekday wil show the number only so we have to refer to our array as well
weekday = weekdays[weekday]
countdown.textContent = `It Would Commence on ${weekday}, ${date2} ${month} ${year} ${hours}:${minutes}`;

// future time in millisecond cause getTime function get in millisecond
const futureTime = futureDate.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today
  // 1s = 1000ms 1min = 60s 1hr = 60mins 1d = 24 hrs

  // values in ms
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = (t % oneDay) / oneHour;
  hours = Math.floor(hours);
  let minutes = Math.floor((t % oneHour)/oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days,hours,minutes,seconds]

  // Add zero infront of number which is less than 10
  function format(item){
    if (item<10){
      return item = `0${item}`
    } else {
      return item
    }
  }
  items.forEach(function(item,index){
    item.innerHTML = format(values[index]);
  })

  if (t<0){
    clearInterval(countdowns);
    deadline.innerHTML = `<h4 class="expired">Sorry, this event has ended</h4>`
  }
}

// Countdown, gonna call it every second
let countdowns = setInterval(getRemainingTime, 1000)
getRemainingTime();

/*----------------Slider---------------*/
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  // working with slides
  // if (counter === slides.length) {
  //   counter = 0;
  // }
  // if (counter < 0) {
  //   counter = slides.length - 1;
  // }
  // working with buttons

  if (counter < slides.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.style.display = "none";
  }
  if (counter > 0) {
    prevBtn.style.display = "block";
  } else {
    prevBtn.style.display = "none";
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = "none";

/*-----------------Popup Video-------------*/
document.querySelectorAll('.video-container video').forEach(vid => {
  vid.onclick = () =>{
    document.querySelector('.popup-video').style.display = "block";
    document.querySelector('.popup-video video').src=vid.getAttribute('src');
  }
})

document.querySelector('.popup-video span').onclick = () =>{
  document.querySelector('.popup-video').style.display = "none";
}
