let navDropDown = document.querySelector(".drop__name");
let dropDownMenu = document.querySelector(".navbar__dropdown");
let downArrow = document.querySelector("ion-icon[name='chevron-down']");
let smScreenMenu = document.querySelector(".navbar__smallScreen");
let navbarMenu = document.querySelector(".navbar__list");
let smScreenMenuIcon = document.querySelector(".navbar__smallScreen ion-icon");

navDropDown.addEventListener("click", () => {
  dropDownMenu.classList.toggle("active");
  downArrow.classList.toggle("active");
});

smScreenMenu.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

if (window.innerWidth <= 785) {
  navDropDown.style.pointerEvents = "none";
} else {
  navDropDown.style.pointerEvents = "all";
}

window.addEventListener("resize", (e) => {
  if (window.innerWidth <= 785) {
    navDropDown.style.pointerEvents = "none";
  } else {
    navDropDown.style.pointerEvents = "all";
  }
});

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

let dataScienceIntro = [
  {
    id: 1,
    image: "../Assets/DSMap1.svg",
    title: "100+ Hours of Hybrid Learning",
    desc: "Acquire premium content through live full-stack development classes and offline bootcamps.",
  },
  {
    id: 2,
    image: "../Assets/DSMap2.svg",
    title: "1:1 Personalized Mentoring from Industry Experts",
    desc: "Get personalized 1:1 career coaching from 100+ Coaches to learn in-demand Block Chain skills.",
  },
  {
    id: 3,
    image: "../Assets/DSMap5.svg",
    title: "Access to Employment Oppurtunities",
    desc: "Apply for available industry internships and live Block Chain projects and full-time job opportunities.",
  },
  {
    id: 4,
    image: "../Assets/DSMap4.svg",
    title: "Rs 3-15 LPA CTC Salary Range",
    desc: "Land your dream job now with our full stack development course with right salary in the right company.",
  },
];

let ds1Content = document.querySelector(".ds1__slide2");

dataScienceIntro.forEach((item) => {
  let introBox = document.createElement('div');
  introBox.classList.add("slide2__introbox");

  let introImg = document.createElement('img');
  introImg.setAttribute('src', item.image);
  introImg.setAttribute('alt', item.title);

  let introTitle = document.createElement('p');
  introTitle.innerHTML = item.title;

  let introDesc = document.createElement('p');
  introDesc.innerHTML = item.desc;

  introBox.append(introImg, introTitle, introDesc);
  ds1Content.append(introBox);
})

// Funtion To Move The Intro Slider

let base = 100;
let initialValue = 1;

let fsd1IntroSlider = document.querySelectorAll(".cohort1__slide");

function moveIntroSec(type) {
  console.log(type);

  if (type === 'next') {

    if (initialValue === 3) {
      initialValue = 0;
    }

    fsd1IntroSlider.forEach((introSlide) => {
      introSlide.style.transform = `translateX(-${base * initialValue}%)`;
    })    
    initialValue = initialValue + 1;
  }

  else {
    if (initialValue === 1) {
      initialValue = 4;
    }

    initialValue = initialValue - 2;
    fsd1IntroSlider.forEach((introSlide) => {
      introSlide.style.transform = `translateX(-${base * initialValue}%)`;
    });
    initialValue = initialValue + 1;
    
  }

}

setInterval(() => {

  if (initialValue === 3) {
    initialValue = 0;
  }

  fsd1IntroSlider.forEach((introSlide) => {
    introSlide.style.transform = `translateX(-${base * initialValue}%)`;
  });
  initialValue = initialValue + 1;

}, 8000);

// ************************** - Section 1 - *********************************

let dataScienceDetails = [
  {
    id: 1,
    title: "Salary - Fresher",
    desc: "INR 4 LPA - 8 LPA",
  },
  {
    id: 2,
    title: "Salary - Experienced",
    desc: "INR 8 LPA - 20 LPA +",
  },
  {
    id: 3,
    title: "Job Roles",
    desc: "Frontend Dev, Backend Dev, Database, DevOps and Tech Architect",
  },
  {
    id: 4,
    title: " Job Opportunities",
    desc: "Globally, tons of IT Companies are recruiting Full Stack Developers",
  },
  {
    id: 5,
    title: "Placement Assistance",
    desc: "Our partners include High Growth Tech Companies, Start-Ups and Consultants to place you with great packages",
  },
  {
    id: 6,
    title: "Jack of All Trade",
    desc: "Full Stack Developers can fit in any required role, which helps companies cut cost and increase efficiency",
  },
];

let ds2Content = document.querySelector(".ds2__side2");

dataScienceDetails.forEach((item) => {
  let whyCohortItem = document.createElement("div");
  whyCohortItem.classList.add("cohort2__whybox");

  let whyCohortTitle = document.createElement("p");
  whyCohortTitle.classList.add("cohort2__whytitle");
  whyCohortTitle.innerHTML = `${item.id}. ${item.title}`;

  let whyCohortDesc = document.createElement("p");
  whyCohortDesc.classList.add("cohort2__whydesc");
  whyCohortDesc.textContent = item.desc;

  whyCohortItem.append(whyCohortTitle, whyCohortDesc);
  ds2Content.append(whyCohortItem);
});

// ************************** - SECTION 2 - *********************************

let roadMapBoxes = document.querySelectorAll(".cohort3__content .roadmap__box");
autoScroll(roadMapBoxes);

// ************************** - SECTION 3 - *********************************

let dataScienceTools = [
  {
    id: 1,
    toolImg: "../Assets/DSTool1.svg",
    toolName: "Python",
  },
  {
    id: 2,
    toolImg: "../Assets/DSTool2.svg",
    toolName: "Tableau",
  },
  {
    id: 3,
    toolImg: "../Assets/DSTool3.svg",
    toolName: "NumPy",
  },
  {
    id: 4,
    toolImg: "../Assets/DSTool4.svg",
    toolName: "Tensor Flow",
  }

];

let ds4Content = document.querySelector('.ds4__content');

dataScienceTools.forEach((tool) => {
  let toolBox = document.createElement('div');
  toolBox.classList.add('cohort4__toolbox');

  let toolImg = document.createElement('img');
  toolImg.setAttribute('src', tool.toolImg);
  toolImg.setAttribute('alt', tool.toolName);

  let toolTitle = document.createElement('p');
  toolTitle.innerHTML = tool.toolName;
  
  toolBox.append(toolImg, toolTitle);
  ds4Content.append(toolBox);

})

// ************************** - SECTION 4 - *********************************

let dataScienceCourse = [
  {
    id: 1,
    name: "Fundamentals",
    details: [
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
    ],
  },
  {
    id: 2,
    name: "Programming",
    details: [
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
    ],
  },
  {
    id: 3,
    name: "Level Up",
    details: [
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
      "Fundamentals of Web Dev",
    ],
  },
  
];

let ds5Content = document.querySelector(".ds5__data");

dataScienceCourse.forEach((item) => {
  let courseBox = document.createElement('div');
  courseBox.classList.add('cohort5__coursebox', 'ds5__coursebox');

  let titleBox = document.createElement('div');
  titleBox.classList.add('cohort5__titlebox', 'ds5__titlebox');

  let courseTitle = document.createElement('p');
  courseTitle.innerHTML = item.name;

  let toggle = document.createElement("img");
  toggle.setAttribute("src", "../Assets/DownArrow2.svg");
  toggle.setAttribute("alt", "Toggle");
  toggle.setAttribute("data-token", `icon-${item.id}`);
  
  titleBox.append(courseTitle, toggle);

  let listBox = document.createElement("ol");
  listBox.classList.add("cohort5__listbox", "ds5__listbox");
  listBox.setAttribute("data-token", `list-${item.id}`);

  item.details.forEach((list) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = list;
    listBox.append(listItem);
  })

  courseBox.append(titleBox, listBox);
  ds5Content.append(courseBox);

  titleBox.addEventListener('click', function() {
    courseExpand(listBox, toggle);
  })

})


let allListBoxes = document.querySelectorAll(".ds5__listbox");
let allCourseToggles = document.querySelectorAll(".ds5__titlebox img");

function courseExpand(currentList, currentToggle) {

  allCourseToggles.forEach((imges) => {
    if (imges.dataset.token === currentToggle.dataset.token) {
      imges.classList.toggle("active");
      currentList.classList.toggle("active");
    } 
    // else {
    //   imges.classList.remove("active");
    //   allListBoxes.forEach((answer) => {
    //     if (answer.dataset.token !== currentList.dataset.token) {
    //       answer.classList.remove("active");
    //     }
    //   });
    // }
  });

}

// Download Popup

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

let downloadPopupBox = document.querySelector(".download__box ");
let downloadPopupContent = document.querySelector(".download__content");

let screenYLenght;

function downloadPopup(type) {
  if (type === 'open') {
    downloadPopupBox.classList.add('active');
    screenYLenght =  window.scrollY;

    setInterval(() => {
      if (window.scrollY > screenYLenght + 500 || window.scrollY < screenYLenght - 500) {
        downloadPopupBox.classList.remove("active");
      }
    }, 100);

  }
  else {
    downloadPopupBox.classList.remove('active');
  }
}

let formName = document.querySelector(".download__name");
let formEmail = document.querySelector(".download__email");
let formMobile = document.querySelector(".download__mobile");
let formCity = document.querySelector(".download__city");
let formCohort = document.querySelector(".download__cohort");

function fullStackBrochure(e) {
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
      Value: formMobile.value,
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
    },
  ];

  sendUserData(newRequest);

  let submitNotice = `<h1>Download Starts Soon...</h1>`;
  
  downloadPopupContent.innerHTML = submitNotice;

  
  setTimeout(() => {
    window.location.reload();
  }, 3000);
  
  window.location.href = '../Assets/CareerX Data Science Brochure.pdf';
}

// Download Popup

// Apply Now Popup

function applyNowPopUp() {
  window.location.href = "#download__brochure";
  downloadPopupBox.classList.add("active");
}

// Apply Now Popup

// ************************** - SECTION 5 - *********************************

let dataScienceProjects = [
  {
    id : 1,
    projectTitle : 'Spotify Clone',
    projectImage : '../Assets/DSProject1.svg'
  },
  {
    id : 2,
    projectTitle : 'Twitter Clone',
    projectImage : '../Assets/DSProject2.svg'
  },
  {
    id : 3,
    projectTitle : 'Chatbot',
    projectImage : '../Assets/DSProject3.png'
  },
  {
    id : 4,
    projectTitle : 'Prime Video Clone',
    projectImage : '../Assets/DSProject4.svg'
  }
]

let ds6Content = document.querySelector('.ds6__content');

dataScienceProjects.forEach((item) => {
  let projectBox = document.createElement('div');
  projectBox.classList.add('cohort6__projectbox');

  let projectImg = document.createElement('img');
  projectImg.setAttribute('src', item.projectImage);
  projectImg.setAttribute('alt', item.projectTitle);

  let projectTitle = document.createElement('p');
  projectTitle.innerHTML = item.projectTitle;
  
  projectBox.append(projectImg, projectTitle);
  ds6Content.append(projectBox);
  
})

let projectBoxes = document.querySelectorAll(".cohort6__projectbox");
autoScroll(projectBoxes);

// ************************** - SECTION 6 - *********************************

let dataScienceFeeStructure = [
  {
    id : 1,
    name : 'Silver',
    badge : '../Assets/CohortSilverBadge.svg',
    structure : [
      'Rs 30,000 (O)', 'Rs 23,600 (A)', 'Rs 21,500 (L)', 'Training', 'Projects', 'Certification', 'Resume Building'
    ]
  },
  {
    id : 2,
    name : 'Gold',
    badge : '../Assets/CohortGoldBadge.svg',
    structure : [
      'Rs 59,000 (O)', 'Rs 47,200 (A)', 'Rs 41,300 (L)', 'Eligiblity Test', 'Projects', '1:1 Mentor Sessions', 'Certification', 'Resume Building', 'Mock Interviews', '5 Assured Interviews'
    ]
  },
  {
    id : 3,
    name : 'Platinum',
    badge : '../Assets/CohortPlatBadge.svg',
    structure : [
      'Rs 88,000 (O)', 'Rs 71,000 (A)', 'Rs 59,000 (L)', 'Eligiblity Test', 'Projects', '1:1 Mentor Sessions', 'Certification', 'Resume Building', 'Mock Interviews', 'Job Guarentee'
    ]
  }
]

let ds7Content = document.querySelector(".ds7__content");

dataScienceFeeStructure.forEach((item) => {
  let feeBox = document.createElement('div');
  feeBox.classList.add('cohort7__feebox');

  let feeType = document.createElement('p');
  feeType.innerHTML = item.name;

  let feeImg = document.createElement('img');
  feeImg.setAttribute('src', item.badge);
  feeImg.setAttribute('alt', item.name);

  let feeList = document.createElement('ul');
  
  item.structure.forEach((list) => {
    let listItem = document.createElement('li');
    listItem.innerHTML = list;
    feeList.append(listItem);
  })

  feeBox.append(feeType, feeImg, feeList);
  ds7Content.append(feeBox);

})

// Popup

let DataScienceEMIPlans = [
  {
    id: 1,
    name: "One Time Plan",
    image: "../Assets/CohortEMI1.svg",
    details: [
      {
        type: "Course Fee",
        pay: "₹50,000",
      },
      {
        type: "GST",
        pay: "₹9,000",
      },
      {
        type: "Discount",
        pay: "-₹7,000",
      },
      {
        type: "Total Cost",
        pay: "₹52,000",
      },
    ],
    final : 'One Time Pay',
    total: "₹52,000",
  },
  {
    id: 2,
    name: "Two Months EMI",
    image: "../Assets/CohortEMI2.svg",
    details: [
      {
        type: "Course Fee",
        pay: "₹50,000",
      },
      {
        type: "GST",
        pay: "₹9,000",
      },
      {
        type: "Discount",
        pay: "-₹5,000",
      },
      {
        type: "Total Cost",
        pay: "₹54,000",
      },
    ],
    final : 'Monthly Pay',
    total: "₹27,000/mo",
  },
  {
    id: 3,
    name: "Three Months EMI",
    image: "../Assets/CohortEMI3.svg",
    details: [
      {
        type: "Course Fee",
        pay: "₹50,000",
      },
      {
        type: "GST",
        pay: "₹9,000",
      },
      {
        type: "Discount",
        pay: "-₹2,000",
      },
      {
        type: "Total Cost",
        pay: "₹57,000",
      },
    ],
    final : 'Monthly Pay',
    total: "₹19,000/mo",
  }
];

let ds7Popup = document.querySelector(".ds7popup__content");

DataScienceEMIPlans.forEach((item) => {

  let emiBox = document.createElement('div');
  emiBox.classList.add('popup__emibox');

  let planImg = document.createElement('img');
  planImg.setAttribute('src', item.image);
  planImg.setAttribute('alt', item.name);

  let planName = document.createElement('p');
  planName.innerHTML = item.name;

  let planDetails = document.createElement('div');
  planDetails.classList.add('popup__emidetails');

  item.details.forEach((list) => {
    let eachDetail = document.createElement('div');
    eachDetail.classList.add('popup__emitype');

    let eachType = document.createElement('p');
    eachType.innerHTML = list.type;

    let eachPay = document.createElement('p');
    eachPay.innerHTML = list.pay;

    eachDetail.append(eachType, eachPay);
    planDetails.append(eachDetail);

  })

  let finalPayDetail = document.createElement("div");
  finalPayDetail.classList.add("popup__emifinal");

  let finalPayType = document.createElement("p");
  finalPayType.innerHTML = item.final;

  let finalPayPay = document.createElement("p");
  finalPayPay.innerHTML = item.total;

  finalPayDetail.append(finalPayType, finalPayPay);

  emiBox.append(planImg, planName, planDetails, finalPayDetail);
  ds7Popup.append(emiBox);

})

let emiPopUp = document.querySelector(".cohort7__popup");

function emiPopup(type) {
  if (type === 'open') {
    emiPopUp.classList.toggle('active');
  }
  else {
    emiPopUp.classList.remove('active');
  }
}

// ************************** - SECTION 7 - *********************************

let dataScienceMentors = [
  {
    id : 1,
    name : 'John Doe',
    desc : 'Having 10+ years of experience in managing mission-critical web projects.Exceptional record overseeing all facets of Application Development Life Cycle',
    image : '../Assets/Potrait.jpg',
    linkedin : '#'
  },
  {
    id : 2,
    name : 'John Doe',
    desc : 'Having 10+ years of experience in managing mission-critical web projects.Exceptional record overseeing all facets of Application Development Life Cycle',
    image : '../Assets/Potrait.jpg',
    linkedin : '#'
  } 
]

let ds8Content = document.querySelector('.ds8__content');

dataScienceMentors.forEach((item) => {
  let mentorBox = document.createElement('div');
  mentorBox.classList.add('cohort8__mentorbox');

  let mentorImg = document.createElement('img');
  mentorImg.setAttribute("src", item.image);
  mentorImg.setAttribute("alt", item.name);

  let mentorName = document.createElement('p');
  mentorName.classList.add('cohort8__mentorname');
  mentorName.innerHTML = item.name;

  let mentorDesc = document.createElement("p");
  mentorDesc.classList.add("cohort8__mentordesc");
  mentorDesc.innerHTML = item.desc;

  let mentorLinkedin = document.createElement('a');
  mentorLinkedin.setAttribute('href',item.linkedin);
  mentorLinkedin.setAttribute('target','_blank');
  mentorLinkedin.setAttribute('rel','noopener');
  mentorLinkedin.innerHTML = '<ion-icon name="logo-linkedin"></ion-icon>';

  mentorBox.append(mentorImg, mentorName, mentorDesc, mentorLinkedin);
  ds8Content.append(mentorBox);

})

// ************************** - SECTION 8 - *********************************

let dataScienceQueries = [
  {
    id: 1,
    question: "Who can take this course?",
    answer:
      "Anyone interested in starting their career as a developer applies for this course.",
  },
  {
    id: 2,
    question: "What are the pre-requisites for this course?",
    answer:
      "No, pre-requisites are required for this course. However, A basic understanding of programming is recommended.",
  },
  {
    id: 3,
    question: "How are my doubts going to be resolved in this Online program?",
    answer:
      "There will be regular sessions exclusively for all your doubts to be cleared up on a real-time basis.",
  },
  {
    id: 4,
    question: "Will I get placement support in this course?",
    answer:
      "Yes, we provide you with different sessions that aim to improve your Profile and competitive programming skills that are required to crack your interviews. We provide you with 100% placement assistance and conduct regular mock exams and interviews.",
  },
  {
    id: 5,
    question: "Will I get a job after completing this course?",
    answer:
      "This is a 100% Job Assistance program wherein you’ll acquire the industry-requested skillset and HandsOn experience in the live projects by the end of the course, which is the most important qualifying factor for any aspirant.",
  },
  {
    id: 6,
    question: "Can the course fee be paid in Installments?",
    answer:
      "Yes, we have banking partners who offer different EMI options to help you manage your finances and take the course. We also provide Up to 100% scholarships based on the Scholarship test we conduct.",
  },
  {
    id: 7,
    question: "What is the refund policy?",
    answer: "A refund can be made only one week before the start date.",
  },
  {
    id: 8,
    question: "Can we shift to a different batch or course?",
    answer:
      "Yes, you can shift to a different batch. The money paid is not transferable to another person.",
  },
];

let ds10Content = document.querySelector(".ds10__content");

dataScienceQueries.forEach((item) => {
  let queryBox = document.createElement("div");
  queryBox.classList.add("cohort10__querybox", "ds10__querybox");

  let questionBox = document.createElement("div");
  questionBox.classList.add("cohort10__questionbox", "ds10__questionbox");

  let question = document.createElement("p");
  question.innerHTML = item.question;

  let toggle = document.createElement("img");
  toggle.setAttribute("src", "../Assets/DownArrow.svg");
  toggle.setAttribute("alt", "Toggle");
  toggle.setAttribute("data-token", `icon-${item.id}`);

  questionBox.append(question, toggle);

  let answerBox = document.createElement("div");
  answerBox.classList.add("cohort10__answerbox", "ds10__answerbox");
  answerBox.setAttribute("data-token", `answer-${item.id}`);

  let answer = document.createElement("p");
  answer.innerHTML = item.answer;

  questionBox.addEventListener("click", function () {
    showTheAnswer(answerBox, toggle);
  });

  answerBox.append(answer);

  queryBox.append(questionBox, answerBox);
  ds10Content.append(queryBox);
});

let allAnswerBoxes = document.querySelectorAll('.ds10__answerbox');
let allToggleImages = document.querySelectorAll('.ds10__questionbox img');

function showTheAnswer(answerbox, thisEle) {
  allToggleImages.forEach((imges) => {
    if (imges.dataset.token === thisEle.dataset.token) {
      imges.classList.toggle('active');
      answerbox.classList.toggle('active');
    }
    else {
      imges.classList.remove('active');
      allAnswerBoxes.forEach((answer) => {
        if (answer.dataset.token !== answerbox.dataset.token) {
          answer.classList.remove('active');
        }
      })
    }
  })
}

// ************************** - SECTION 10 - *********************************