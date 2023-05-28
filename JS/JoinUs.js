let navDropDown = document.querySelector(".drop__name");
let dropDownMenu = document.querySelector(".navbar__dropdown");
let downArrow = document.querySelector("ion-icon[name='chevron-down']");
let smScreenMenu = document.querySelector(".navbar__smallScreen");
let navbarMenu = document.querySelector(".navbar__list");
let smScreenMenuIcon = document.querySelector(".navbar__smallScreen ion-icon");
let listDrop = document.querySelector(".list__drop");

navDropDown.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
  downArrow.classList.toggle("active");
  listDrop.classList.toggle("makeGap");
});

smScreenMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

// ***************** - NAVBAR ENDS - ********************

// **************** Function for Auto Scroll **************

function autoScroll(itemsContainer) {
  itemsContainer.forEach((item) => {
    item.addEventListener("mouseover", () => {
      itemsContainer.forEach((item) => {
        item.style.animationPlayState = "paused";
      });
    });

    item.addEventListener("mouseleave", () => {
      itemsContainer.forEach((item) => {
        item.style.animationPlayState = "running";
      });
    });
  });
}

// **************** Function for Auto Scroll **************

let webinars = [
  {
    id: 0,
    webinar: "Name of Webinar",
    image: "../Assets/HomeWebinar1.png",
    desc: "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
    link: "#",
  },
  {
    id: 1,
    webinar: "Name of Webinar",
    image: "../Assets/HomeWebinar2.png",
    desc: "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
    link: "#",
  },
  {
    id: 2,
    webinar: "Name of Webinar",
    image: "../Assets/HomeWebinar1.png",
    desc: "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
    link: "#",
  },
  
];

let sec2Content = document.querySelector(".webinars__data");

webinars.forEach((item) => {
  let webinarBox = document.createElement("div");
  webinarBox.classList.add("webinar__box");

  let side1 = document.createElement("div");
  side1.classList.add("webinar__side1");

  let webinarImg = document.createElement("img");
  webinarImg.setAttribute("src", item.image);
  webinarImg.setAttribute("alt", item.webinar);

  let webinarName = document.createElement("p");
  webinarName.classList.add("webinar__name");
  webinarName.textContent = item.webinar;

  side1.append(webinarImg, webinarName);

  let side2 = document.createElement("div");
  side2.classList.add("webinar__side2");

  let webinarDesc = document.createElement("p");
  webinarDesc.classList.add("webinar__desc");
  webinarDesc.textContent =
    "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.";

  let webinarLink = document.createElement("a");
  webinarLink.setAttribute("href", item.link);
  webinarLink.setAttribute("target", "_blank");
  webinarLink.setAttribute("rel", "noopener");
  webinarLink.innerHTML = "Join Webinar";

  side2.append(webinarDesc, webinarLink);

  webinarBox.append(side1, side2);

  sec2Content.append(webinarBox);
});

let totalWebinars = webinars.length;
sec2Content.style.width = `${totalWebinars * 60}%`;
let moveConstant = 100 / totalWebinars;
let initialValue = 1;

if (window.innerWidth <= 500) {
  sec2Content.style.width = `${totalWebinars * 75}%`;
}

if (window.innerWidth <= 380) {
  sec2Content.style.width = `${totalWebinars * 98}%`;
}

if (window.innerWidth >= 900) {
  sec2Content.style.width = `${totalWebinars * 60}%`;
}

window.addEventListener("resize", () => {
  if (window.innerWidth <= 500) {
    sec2Content.style.width = `${totalWebinars * 75}%`;
  }

  if (window.innerWidth <= 380) {
    sec2Content.style.width = `${totalWebinars * 98}%`;
  }

  if (window.innerWidth >= 900) {
    sec2Content.style.width = `${totalWebinars * 60}%`;
  }
});

function moreWebinars(type) {
  if (type === "next") {
    if (initialValue === totalWebinars) {
      initialValue = 0;
    }
    sec2Content.style.transform = `translateX(-${
      moveConstant * initialValue
    }%)`;
    initialValue = initialValue + 1;
  } else {
    if (initialValue === 1) {
      initialValue = totalWebinars + 1;
    }
    initialValue = initialValue - 2;
    sec2Content.style.transform = `translateX(-${
      moveConstant * initialValue
    }%)`;
    initialValue = initialValue + 1;
  }
}

// ************************** - SECTION 2 ENDS - *******************************

let workshops = [
  {
    id: 0,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
  {
    id: 1,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
  {
    id: 2,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
  {
    id: 3,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
];

let meetups = [
  {
    id: 0,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
  {
    id: 1,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
  {
    id: 2,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
  {
    id: 3,
    title: "Title",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    link : '#'
  },
];

let sec3Content = document.querySelector(".section3__content");
let sec4Content = document.querySelector(".section4__content");

workshops.forEach((item) => {
  let itemBox = document.createElement("div");
  itemBox.classList.add("item__box");

  let itemTitle = document.createElement("p");
  itemTitle.classList.add("item__title");
  itemTitle.textContent = item.title;

  let itemDesc = document.createElement("p");
  itemDesc.classList.add("item__desc");
  itemDesc.textContent = item.desc;

  let itemRedirect = document.createElement('a');
  itemRedirect.setAttribute('href', item.link);
  itemRedirect.setAttribute('target', '_blank');
  itemRedirect.setAttribute('rel', 'noopener');
  itemRedirect.innerHTML = 'Join ';

  itemBox.append(itemTitle, itemDesc, itemRedirect);

  sec3Content.append(itemBox);
});

meetups.forEach((item) => {
  let itemBox = document.createElement("div");
  itemBox.classList.add("item__box");

  let itemTitle = document.createElement("p");
  itemTitle.classList.add("item__title");
  itemTitle.textContent = item.title;

  let itemDesc = document.createElement("p");
  itemDesc.classList.add("item__desc");
  itemDesc.textContent = item.desc;

  let itemRedirect = document.createElement('a');
  itemRedirect.setAttribute('href', item.link);
  itemRedirect.setAttribute('target', '_blank');
  itemRedirect.setAttribute('rel', 'noopener');
  itemRedirect.innerHTML = 'Join ';

  itemBox.append(itemTitle, itemDesc, itemRedirect);

  sec4Content.append(itemBox);
});

let item3Boxes = document.querySelectorAll(".section3__content .item__box");
let item4Boxes = document.querySelectorAll(".section4__content .item__box");
autoScroll(item3Boxes);
autoScroll(item4Boxes);

// *************** - SECTION 3 & 4 ENDS - *****************

let PeersReviews = [
  {
    id: 0,
    name: "Bhargav Varma",
    placement: "Placed at Gaura Technologies",
    image: "../Assets/Peer1.jpg",
    desc: "“I recently completed the Blockchain Development Cohort at CareerX.club and I am extremely grateful for the opportunity it provided me to learn and grow as a developer. The course was well-structured and provided a comprehensive overview of the Blockchain technology and its various applications.”",
  },
  {
    id: 1,
    name: "Shashidhar Reddy",
    placement: "Placed at Chain Monks",
    image: "../Assets/Peer2.jpg",
    desc: "“I am so grateful for the CareerX. The support they have provided me on my professional journey. I felt like I was learning valuable skills that would benefit me in my career. Thank you CareerX for building my career in the blockchain field.”",
  },
  {
    id: 2,
    name: "Shylu",
    placement: "Placed at Think Hat",
    image: "../Assets/Peer3.jpg",
    desc: "“I am really feeling good to be the part of careerX , which has really helped me to get the job with required skills , and they have thought me basics of programming from Scratch and very supportive.”",
  },
  {
    id: 3,
    name: "Vandana Adireddy",
    placement: "Placed at VividMinds Tech",
    image: "../Assets/Peer4.jpg",
    desc: "“It was a great experience with CareerX.club. Their dedicated support helped me look for more opportunities that could satisfy my ideal job. If you are a career enthusiast and want to build your ideal career, I would highly recommend CareerX.club.”",
  },
  {
    id: 4,
    name: "Ruchitha",
    placement: "Placed at Think Hat",
    image: "../Assets/Peer5.jpg",
    desc: "“CareerX.club played a great role in shaping my career. It helped me to establish my Time management skills, Leadership skills, technical skills and also been able to advance them to a new level.”",
  },
  {
    id: 5,
    name: "Afreen",
    placement: "Placed at VividMinds Tech",
    image: "../Assets/Peer6.jpg",
    desc: "“The Entire team leaves no stone unturned to shape one’s career. It was my fortune to be part of CareerX.club. Their effort made me count myself into better opportunities.”",
  },
  {
    id: 6,
    name: "Srujan",
    placement: "Placed at Atom State",
    image: "../Assets/Peer7.jpg",
    desc: "“I recommend many people like me confused in career change then I strongly suggest CareerX is a good choice which make your dreams come true.”",
  },
  {
    id: 7,
    name: "Survojyothi Dey",
    placement: "Placed at Divami Design Labs",
    image: "../Assets/Peer8.jpg",
    desc: "“The entire team helped me to land my dream job. Their constant support and dedication made me seize the opportunities and build my confidence. They have my absolute gratitude.”",
  },
  {
    id: 8,
    name: "Yashwanth Venkat",
    placement: "Placed at Divami Design Labs",
    image: "../Assets/Peer9.jpg",
    desc: "“CareerX.Club has always believed in helping the students to achieve their dream job. They always provided me with the assistance that I require to bag my dream job.”",
  },
];

let sec5Content = document.querySelector(".section5__content");

function sec5ContentPopulate() {
  PeersReviews.forEach((item) => {
    let peerBox = document.createElement("div");
    peerBox.setAttribute("class", "peer__box");

    let peerDetails = document.createElement("div");
    peerDetails.setAttribute("class", "peer__details");

    let peerImage = document.createElement("img");
    peerImage.setAttribute("src", item.image);
    peerImage.setAttribute("alt", item.name);

    let peerData = document.createElement("div");
    peerData.setAttribute("class", "peer__data");

    let peerName = document.createElement("p");
    peerName.classList.add("peer__name");
    peerName.textContent = item.name;

    let peerPlacement = document.createElement("p");
    peerPlacement.classList.add("peer__place");
    peerPlacement.textContent = item.placement;

    peerData.append(peerName, peerPlacement);

    peerDetails.append(peerImage, peerData);

    let peerDescription = document.createElement("div");
    peerDescription.setAttribute("class", "peer__desc");

    let desc = document.createElement("p");
    desc.innerHTML = item.desc;

    peerDescription.append(desc);
    peerBox.append(peerDetails, peerDescription);

    sec5Content.append(peerBox);
  });
}

sec5ContentPopulate();
if (window.innerWidth >= 800) {
  sec5ContentPopulate();
}

let peerBoxes = document.querySelectorAll(".peer__box");
autoScroll(peerBoxes);

// ************************* Section 5 **************************
