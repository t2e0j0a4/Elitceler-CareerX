let navDropDown = document.querySelector(".drop__name");
let dropDownMenu = document.querySelector(".navbar__dropdown");
let downArrow = document.querySelector("ion-icon[name='chevron-down']");
let smScreenMenu = document.querySelector(".navbar__smallScreen");
let navbarMenu = document.querySelector('.navbar__list');
let smScreenMenuIcon = document.querySelector(".navbar__smallScreen ion-icon");

navDropDown.addEventListener('click', () => {
    dropDownMenu.classList.toggle('active');
    downArrow.classList.toggle('active');
})

smScreenMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
})

if (window.innerWidth <= 785) {
  navDropDown.style.pointerEvents = "none";
} else {
  navDropDown.style.pointerEvents = "all";
}

window.addEventListener('resize', (e) => {
    if (window.innerWidth <= 785) {
        navDropDown.style.pointerEvents = 'none';
    }
    else {
        navDropDown.style.pointerEvents = 'all';
    }
})

// ************************** - NAVBAR ENDS - *******************************

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
        id : 0,
        webinar : "Name of Webinar",
        image : "../Assets/HomeWebinar1.png",
        desc : "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
        link : "#"
    },
    {
        id : 1,
        webinar : "Name of Webinar",
        image : "../Assets/HomeWebinar2.png",
        desc : "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
        link : "#"
    },
    {
        id : 2,
        webinar : "Name of Webinar",
        image : "../Assets/HomeWebinar1.png",
        desc : "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
        link : "#"
    }
]

let sec3Content = document.querySelector(".webinars__data");

webinars.forEach((item) => {
    let webinarBox = document.createElement('div');
    webinarBox.classList.add('webinar__box');

    let side1 = document.createElement("div");
    side1.classList.add("webinar__side1");

    let webinarImg = document.createElement('img');
    webinarImg.setAttribute('src', item.image);
    webinarImg.setAttribute('alt', item.webinar);

    let webinarName = document.createElement("p");
    webinarName.classList.add("webinar__name");
    webinarName.textContent = item.webinar;

    side1.append(webinarImg, webinarName);

    let side2 = document.createElement("div");
    side2.classList.add("webinar__side2");

    let webinarDesc = document.createElement("p");
    webinarDesc.classList.add("webinar__desc");
    webinarDesc.textContent = "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.";

    let webinarLink = document.createElement('a');
    webinarLink.setAttribute("href", item.link);
    webinarLink.setAttribute("target", "_blank");
    webinarLink.setAttribute("rel", "noopener");
    webinarLink.innerHTML = "Join Webinar";

    side2.append(webinarDesc, webinarLink);

    webinarBox.append(side1, side2);

    sec3Content.append(webinarBox);
})

let totalWebinars = webinars.length;
sec3Content.style.width = `${totalWebinars * 60}%`;
let moveConstant = 100/totalWebinars;
let initialValue = 1;

if (window.innerWidth <= 500) {
  sec3Content.style.width = `${totalWebinars * 75}%`;
}

if (window.innerWidth <= 380) {
  sec3Content.style.width = `${totalWebinars * 98}%`;
}

if (window.innerWidth >= 900) {
  sec3Content.style.width = `${totalWebinars * 60}%`;
}

window.addEventListener('resize', () => {
    if (window.innerWidth <= 500) {
        sec3Content.style.width = `${totalWebinars * 75}%`;
    }
    
    if (window.innerWidth <= 380) {
        sec3Content.style.width = `${totalWebinars * 98}%`;
    }
    
    if (window.innerWidth >= 900) {
        sec3Content.style.width = `${totalWebinars * 60}%`;
    }
})

function moreWebinars(type) {

    if (type === 'next') {
        if (initialValue === totalWebinars) {
            initialValue = 0;
        }
        sec3Content.style.transform = `translateX(-${moveConstant * initialValue}%)`;
        initialValue = initialValue + 1;
    }
    else {
        if (initialValue === 1) {
            initialValue = totalWebinars + 1;
        }
        initialValue = initialValue - 2;
        sec3Content.style.transform = `translateX(-${moveConstant * initialValue}%)`;
        initialValue = initialValue + 1;
    }

}

// *********************** - SECTION 3 ENDS - ********************

const featuredData = [
  {
    id: 0,
    image: "../../Assets/HomeNews1.png",
    context:
      "Programmes are designed to emphasise practical principles and processes that equip students with the required knowledge and skills.",
    readLink: "#",
  },
  {
    id: 1,
    image: "../../Assets/HomeNews2.png",
    context:
      "CareerX club has made a significant impact by placing more than 200 students in leading organisations.",
    readLink: "#",
  },
  {
    id: 2,
    image: "../../Assets/HomeNews3.png",
    context:
      "The challenge is to stay relevant amid the changes, which is what CareerX specialises in.",
    readLink: "#",
  },
  {
    id: 3,
    image: "../../Assets/HomeNews4.png",
    context:
      "Preparing the young talent for the continuously evolving needs of the Tech industry.",
    readLink: "#",
  },
  {
    id: 4,
    image: "../../Assets/HomeNews5.png",
    context:
      "Employers do not just look at the educational qualifications but also the additional skills the potential employee has.",
    readLink: "#",
  },
  {
    id: 5,
    image: "../../Assets/HomeNews6.png",
    context:
      "Our Startup has been Officially Recognised By Govt. Of India - Ministry Of Commerce.",
    readLink: "#",
  },
  {
    id: 6,
    image: "../../Assets/HomeNews7.png",
    context:
      "CareerX Club, a Cohort based Edtech Startup helping students to learn emerging technologies and placing them in top companies.",
    readLink: "#",
  },
];

let sec4Content = document.querySelector(".section_4-content");

function sec4ContentPopulate() {
  featuredData.forEach((item) => {
    let itemBox = document.createElement("div");
    itemBox.classList.add("section_4-data");

    let itemImage = document.createElement("img");
    itemImage.setAttribute("src", item.image);
    itemImage.setAttribute("alt", "Featured");

    let itemContext = document.createElement("p");
    itemContext.classList.add("data_4-context");
    itemContext.textContent = item.context;

    let readMore = document.createElement("button");
    readMore.setAttribute("type", "button");
    readMore.innerHTML = "Read";

    itemBox.append(itemImage, itemContext, readMore);

    sec4Content.append(itemBox);
  });
}

sec4ContentPopulate();
sec4ContentPopulate();

let section4Boxes = document.querySelectorAll(".section_4-data");
autoScroll(section4Boxes);

// ******************** - SECTION 4 ENDS - *****************

let cohortsData = [
    {
        id : 0,
        image : '../Assets/HomeCohortFSD.png',
        cohort : 'Full Stack Cohort',
        stars : 4,
        redirect : '../FullStack.html'
    },
    {
        id : 1,
        image : '../Assets/HomeCohortDS.png',
        cohort : 'Data Science Cohort',
        stars : 4,
        redirect : '../DataScience.html'
    },
    {
        id : 2,
        image : '../Assets/HomeCohortCC.png',
        cohort : 'Cloud Computing',
        stars : 4,
        redirect : '../CloudComputing.html'
    },   
]

let sec5Content = document.querySelector(".section_5-content");

cohortsData.forEach((item) => {
    let cohortBox = document.createElement('div');
    cohortBox.classList.add('data_5-box');

    let imgBox = document.createElement('div');
    imgBox.classList.add('cohort__image');

    let cohortImg = document.createElement("img");
    cohortImg.setAttribute("src", item.image);
    cohortImg.setAttribute("alt", item.cohort);

    imgBox.append(cohortImg);

    let cohortName = document.createElement("p");
    cohortName.classList.add("cohort__name");
    cohortName.textContent = item.cohort;

    let cohortSub = document.createElement("p");
    cohortSub.classList.add("cohort__sub");
    cohortSub.textContent = 'With Certificate';

    let cohortRating = document.createElement('div');
    cohortRating.classList.add('cohort__rating');
    
    for (let i=1; i<=5; i++ ) {
        if (i <= item.stars) {
            let ratedStar = document.createElement('img');
            ratedStar.setAttribute("src", '../Assets/RatedStar.png');
            ratedStar.setAttribute("alt", 'Rated');
            cohortRating.append(ratedStar);
          }
          else {
            
            let notRatedStar = document.createElement("img");
            notRatedStar.setAttribute("src", "../Assets/NotRatedStar.png");
            notratedStar.setAttribute("alt", 'NotRated');
            cohortRating.append(notRatedStar);
        }
    }

    let redirectLink = document.createElement('a');
    redirectLink.innerHTML = `<span>View Details</span> <ion-icon name="arrow-forward"></ion-icon>`;
    redirectLink.setAttribute('href', item.redirect);
    redirectLink.setAttribute('target', '_blank');
    redirectLink.setAttribute('rel', 'noopener');

    cohortBox.append(imgBox, cohortName, cohortSub, cohortRating,redirectLink);
    sec5Content.append(cohortBox);

})

// ************************** - SECTION 5 ENDS - *******************************

let HRReviews = [
  {
    id: 0,
    name: "Mr.Mallareddy",
    image: "../Assets/HomeDummyPotrait.svg",
    role: "HR, Chainmonks",
    desc: "“We hired few resources from CareerX, the experience of hiring process has been really smooth and found well trained resources in a short time.If anyone are looking for trained professionals especially in cutting edge tech, I would strongly recommend CareerX.”",
  },
  {
    id: 1,
    name: "Lavanya Jampana",
    image: "../Assets/HomeDummyPotrait.svg",
    role: "HR, VIVID Minds PVT LTD",
    desc: "“Working with  CareerX Club has been a fantastic experience. Their team took the time to understand our unique hiring needs and worked tirelessly to identify and recruit the best candidates for our organization.”",
  },
  {
    id: 2,
    name: "Savinay",
    image: "../Assets/HomeDummyPotrait.svg",
    role: "HR, Immutable Ren Labs",
    desc: "“My experience with CareerX Club has been nothing short of excellent.  We hired front-end developers through CareerX and the experience was really great. The candidates are well-trained for the job and have a thorough understanding of what we expect out of them.”",
  },
  {
    id: 3,
    name: "Harika",
    image: "../Assets/HomeDummyPotrait.svg",
    role: "HR, Infinite learning Sols",
    desc: "“Happy with the candidates and the support. Grateful to the team for superb coordination and helping in meeting the requirements.”",
  },
  {
    id: 4,
    name: "Vidya",
    image: "../Assets/HomeDummyPotrait.svg",
    role: "HR, Divami Labs",
    desc: "“Amazing- that's one word I would use to express my experience with CareerX Club. Their drive to ensure win-win placements for both candidates as well as companies helped accelerate our recruiting process.”",
  },
  {
    id: 5,
    name: "Sandeep",
    image: "../Assets/HomeDummyPotrait.svg",
    role: "HR, Think Hat",
    desc: "“I am pleased to provide a testimonial for our candidates who have been exceptional additions to our team. Their strong work ethic, dedication, and professionalism have been evident from the start.”",
  },
];

let sec7Content = document.querySelector(".section_7-content");

function sec7ContentPopulate() {
  HRReviews.forEach((item) => {
    let hrBox = document.createElement("div");
    hrBox.setAttribute("class", "hr__box");

    let hrDetails = document.createElement("div");
    hrDetails.setAttribute("class", "hr__details");

    let hrImage = document.createElement("img");
    hrImage.setAttribute("src", item.image);
    hrImage.setAttribute("alt", item.name);

    let hrData = document.createElement("div");
    hrData.setAttribute("class", "hr__data");

    let hrName = document.createElement("p");
    hrName.classList.add("hr__name");
    hrName.textContent = item.name;

    let hrRole = document.createElement("p");
    hrRole.classList.add("hr__role");
    hrRole.textContent = item.role;

    hrData.append(hrName, hrRole);

    hrDetails.append(hrImage, hrData);

    let hrDescription = document.createElement("div");
    hrDescription.setAttribute("class", "hr__desc");

    let desc = document.createElement("p");
    desc.innerHTML = item.desc;

    hrDescription.append(desc);
    hrBox.append(hrDetails, hrDescription);
    sec7Content.append(hrBox);
  });
}

sec7ContentPopulate();
if (window.innerWidth >= 800) {
  sec7ContentPopulate();
}

let allHRBoxes = document.querySelectorAll('.hr__box');
autoScroll(allHRBoxes); 

// ************************** - SECTION 7 ENDS - *******************************

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

let sec8Content = document.querySelector(".section_8-content");

function sec8ContentPopulate() {
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

    sec8Content.append(peerBox);
  });
}

sec8ContentPopulate();
if (window.innerWidth >= 800) {
  sec8ContentPopulate();
}

let allPeerBoxes = document.querySelectorAll(".peer__box");
autoScroll(allPeerBoxes);

// ************************** - SECTION 8 ENDS - *******************************

// Reach Us Popup

let reachUsPopup = document.querySelector(".reachus__box ");
let reachUsPopupContent = document.querySelector(".reachus__content");

let mainPage = document.querySelector(".home__main");
let navbar = document.querySelector(".app__navbar");

function managePopup(type) {
  if (type === 'open') {
    reachUsPopup.classList.add('active');
    document.body.classList.add('body__popup');
    mainPage.style.pointerEvents = 'none';
    navbar.style.pointerEvents = 'none';
  }
  else {
    reachUsPopup.classList.remove('active');
    document.body.classList.remove('body__popup');
    mainPage.style.pointerEvents = 'all';
    navbar.style.pointerEvents = 'all';
  }
}

let formName = document.querySelector('.reachus__name');
let formEmail = document.querySelector('.reachus__email');
let formMobile = document.querySelector('.reachus__mobile');
let formCity = document.querySelector('.reachus__city');
let formCohort = document.querySelector('.reachus__option');

let API = "https://api-in21.leadsquared.com/v2/LeadManagement.svc/Lead.Capture?accessKey=u$rbb01343610153d72739e7fe9984d4a34&secretKey=8361119156fef165d1ebe571c9d1f42dc894eac7";

async function sendUserData(data) {
  const response = await fetch(API, {
    method: "POST",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

function reachUs1Submit(e) {
  e.preventDefault();

  let newRequest = [
    {
      Attribute: formName.name,
      Value: formName.value,
    },
    {
      Attribute: formEmail.name,
      Value: formEmail.value,
    },
    {
      Attribute: formMobile.name,
      Value : formMobile.value,
    },
    {
      Attribute: formCohort.name,
      Value: formCohort.value,
    },
    {
      Attribute: formCity.name,
      Value: formCity.value,
    },
    {
      Attribute: "Source",
      Value: "Website",
    }
  ];

  sendUserData(newRequest);

  let submitNotice = `
    <h1>We will Reach you soon...</h1>
  `
  reachUsPopupContent.innerHTML = submitNotice;

  setTimeout(() => {
    window.location.reload();
  }, 3000);

}

// Reach Us Popup