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
    },
    {
        id : 3,
        webinar : "Name of Webinar",
        image : "../Assets/HomeWebinar2.png",
        desc : "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
        link : "#"
    },
    {
        id : 4,
        webinar : "Name of Webinar",
        image : "../Assets/HomeWebinar1.png",
        desc : "Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.",
        link : "#"
    },
    
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

// ************************** - SECTION 3 ENDS - *******************************

const featuredData = [
    {
        id : 0,
        image : '../../Assets/HomePic2.png',
        context : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        readLink : '#'
    },
    {
        id : 1,
        image : '../../Assets/HomePic2.png',
        context : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        readLink : '#'
    },
    {
        id : 2,
        image : '../../Assets/HomePic2.png',
        context : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
        readLink : '#'
    }
]

let sec4Content = document.querySelector(".section_4-content");

featuredData.forEach((item) => {
    let itemBox = document.createElement('div');
    itemBox.classList.add('section_4-data');

    let itemImage = document.createElement("img");
    itemImage.setAttribute('src', item.image);
    itemImage.setAttribute('alt', 'Featured');

    let itemContext = document.createElement("p");
    itemContext.classList.add("data_4-context");
    itemContext.textContent = item.context;

    let readMore = document.createElement('button');
    readMore.setAttribute('type', 'button');
    readMore.innerHTML = "Read";

    itemBox.append(itemImage, itemContext, readMore);

    sec4Content.append(itemBox);
})

// ************************** - SECTION 4 ENDS - *******************************

let cohortsData = [
    {
        id : 0,
        image : '../Assets/HomeCohortFSD.png',
        cohort : 'Full Stack Cohort',
        stars : 4,
        redirect : '#'
    },
    {
        id : 1,
        image : '../Assets/HomeCohortDS.png',
        cohort : 'Data Science Cohort',
        stars : 4,
        redirect : '#'
    },
    {
        id : 2,
        image : '../Assets/HomeCohortCC.png',
        cohort : 'Cloud Computing',
        stars : 4,
        redirect : '#'
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
            cohortRating.append(ratedStar);
        }
        else {
            
            let notRatedStar = document.createElement("img");
            notRatedStar.setAttribute("src", "../Assets/NotRatedStar.png");
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
        name: "John Doe",
        image: "../Assets/Potrait.jpg",
        role: "Founder, Examify",
        desc: "“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”",
    },
    {
        id: 1,
        name: "John Doe",
        image: "../Assets/Potrait.jpg",
        role: "Founder, Examify",
        desc: "“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”",
    },
    {
        id: 2,
        name: "John Doe",
        image: "../Assets/Potrait.jpg",
        role: "Founder, Examify",
        desc: "“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”",
    },
    {
        id: 3,
        name: "John Doe",
        image: "../Assets/Potrait.jpg",
        role: "Founder, Examify",
        desc: "“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”",
    },
    {
        id: 4,
        name: "John Doe",
        image: "../Assets/Potrait.jpg",
        role: "Founder, Examify",
        desc: "“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”",
    }
];

let sec7Content = document.querySelector(".section_7-content");

HRReviews.forEach((item) => {

    let hrBox = document.createElement('div');
    hrBox.setAttribute('class', 'hr__box');

    let hrDetails = document.createElement("div");
    hrDetails.setAttribute("class", "hr__details");

    let hrImage = document.createElement('img');
    hrImage.setAttribute('src', item.image);
    hrImage.setAttribute('alt', item.name);

    let hrData = document.createElement("div");
    hrData.setAttribute("class", "hr__data");

    let hrName = document.createElement('p');
    hrName.classList.add('hr__name');
    hrName.textContent = item.name;

    let hrRole = document.createElement("p");
    hrRole.classList.add("hr__role");
    hrRole.textContent = item.role;

    hrData.append(hrName, hrRole);

    hrDetails.append(hrImage, hrData);

    let hrDescription = document.createElement("div");
    hrDescription.setAttribute("class", "hr__desc");

    let desc = document.createElement('p');
    desc.innerHTML = item.desc;

    hrDescription.append(desc);
    hrBox.append(hrDetails, hrDescription);
    sec7Content.append(hrBox);
})

// ************************** - SECTION 7 ENDS - *******************************

let PeersReviews = [
    {
        id : 0,
        name : 'John Doe',
        placement : 'Placed at Razorpay, Rs 7.4 LPA',
        image : '../Assets/Potrait.jpg',
        desc : '“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”'
    },
    {
        id : 1,
        name : 'John Doe',
        placement : 'Placed at Razorpay, Rs 7.4 LPA',
        image : '../Assets/Potrait.jpg',
        desc : '“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”'
    },
    {
        id : 2,
        name : 'John Doe',
        placement : 'Placed at Razorpay, Rs 7.4 LPA',
        image : '../Assets/Potrait.jpg',
        desc : '“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”'
    },
    {
        id : 3,
        name : 'John Doe',
        placement : 'Placed at Razorpay, Rs 7.4 LPA',
        image : '../Assets/Potrait.jpg',
        desc : '“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”'
    },
    {
        id : 4,
        name : 'John Doe',
        placement : 'Placed at Razorpay, Rs 7.4 LPA',
        image : '../Assets/Potrait.jpg',
        desc : '“Acquire premium content through live full-stack development classes and offline bootcamps. Acquire premium content through live full-stack development classes.Acquire premium content through live full-stack development classes and offline bootcamps.”'
    }
]

let sec8Content = document.querySelector(".section_8-content");

PeersReviews.forEach((item) => {

    let peerBox = document.createElement('div');
    peerBox.setAttribute('class', 'peer__box');

    let peerDetails = document.createElement("div");
    peerDetails.setAttribute("class", "peer__details");

    let peerImage = document.createElement('img');
    peerImage.setAttribute('src', item.image);
    peerImage.setAttribute('alt', item.name);

    let peerData = document.createElement("div");
    peerData.setAttribute("class", "peer__data");

    let peerName = document.createElement('p');
    peerName.classList.add('peer__name');
    peerName.textContent = item.name;

    let peerPlacement = document.createElement("p");
    peerPlacement.classList.add("peer__place");
    peerPlacement.textContent = item.placement;

    peerData.append(peerName, peerPlacement);

    peerDetails.append(peerImage, peerData);

    let peerDescription = document.createElement("div");
    peerDescription.setAttribute("class", "peer__desc");

    let desc = document.createElement('p');
    desc.innerHTML = item.desc;

    peerDescription.append(desc);
    peerBox.append(peerDetails, peerDescription);

    sec8Content.append(peerBox);
})