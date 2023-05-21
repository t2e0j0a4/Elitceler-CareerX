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

let cloudComputingDetails = [
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

let cc2Content = document.querySelector(".cc2__side2");

cloudComputingDetails.forEach((item) => {
  let whyCohortItem = document.createElement("div");
  whyCohortItem.classList.add("cohort2__whybox");

  let whyCohortTitle = document.createElement("p");
  whyCohortTitle.classList.add("cohort2__whytitle");
  whyCohortTitle.innerHTML = `${item.id}. ${item.title}`;

  let whyCohortDesc = document.createElement("p");
  whyCohortDesc.classList.add("cohort2__whydesc");
  whyCohortDesc.textContent = item.desc;

  whyCohortItem.append(whyCohortTitle, whyCohortDesc);
  cc2Content.append(whyCohortItem);
});

// ************************** - SECTION 2 - *********************************

let dataScienceTools = [
  {
    id: 1,
    toolImg: "../Assets/CCTool1.svg",
    toolName: "Kubernetes",
  },
  {
    id: 2,
    toolImg: "../Assets/CCTool2.svg",
    toolName: "Google Cloud",
  },
  {
    id: 3,
    toolImg: "../Assets/CCTool3.svg",
    toolName: "Docker",
  },
  {
    id: 4,
    toolImg: "../Assets/CCTool4.svg",
    toolName: "AWS",
  }

];

let cc4Content = document.querySelector('.cc4__content');

dataScienceTools.forEach((tool) => {
  let toolBox = document.createElement('div');
  toolBox.classList.add('cohort4__toolbox');

  let toolImg = document.createElement('img');
  toolImg.setAttribute('src', tool.toolImg);
  toolImg.setAttribute('alt', tool.toolName);

  let toolTitle = document.createElement('p');
  toolTitle.innerHTML = tool.toolName;
  
  toolBox.append(toolImg, toolTitle);
  cc4Content.append(toolBox);

})

// ************************** - SECTION 4 - *********************************

let cloudComputingCourse = [
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

let cc5Content = document.querySelector(".cc5__data");

cloudComputingCourse.forEach((item) => {
  let courseBox = document.createElement('div');
  courseBox.classList.add('cohort5__coursebox', 'cc5__coursebox');

  let titleBox = document.createElement('div');
  titleBox.classList.add('cohort5__titlebox', 'cc5__titlebox');

  let courseTitle = document.createElement('p');
  courseTitle.innerHTML = item.name;

  let toggle = document.createElement("img");
  toggle.setAttribute("src", "../Assets/DownArrow2.svg");
  toggle.setAttribute("alt", "Toggle");
  toggle.setAttribute("data-token", `icon-${item.id}`);
  
  titleBox.append(courseTitle, toggle);

  let listBox = document.createElement("ul");
  listBox.classList.add("cohort5__listbox", "fsd5__listbox");
  listBox.setAttribute("data-token", `list-${item.id}`);

  item.details.forEach((list) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = list;
    listBox.append(listItem);
  })

  courseBox.append(titleBox, listBox);
  cc5Content.append(courseBox);

  titleBox.addEventListener('click', function() {
    courseExpand(listBox, toggle);
  })

})


let allListBoxes = document.querySelectorAll(".cc5__listbox");
let allCourseToggles = document.querySelectorAll(".cc5__titlebox img");

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

// ************************** - SECTION 5 - *********************************

let cloudComputingProjects = [
  {
    id: 1,
    projectTitle: "Project",
    projectImage: "../Assets/ProjectDummy.png",
  },
  {
    id: 2,
    projectTitle: "Project",
    projectImage: "../Assets/ProjectDummy.png",
  },
  {
    id: 3,
    projectTitle: "Project",
    projectImage: "../Assets/ProjectDummy.png",
  },
  {
    id: 4,
    projectTitle: "Project",
    projectImage: "../Assets/ProjectDummy.png",
  },
];

let cc6Content = document.querySelector('.cc6__content');

cloudComputingProjects.forEach((item) => {
  let projectBox = document.createElement('div');
  projectBox.classList.add('cohort6__projectbox');

  let projectImg = document.createElement('img');
  projectImg.setAttribute('src', item.projectImage);
  projectImg.setAttribute('alt', item.projectTitle);

  let projectTitle = document.createElement('p');
  projectTitle.innerHTML = item.projectTitle;
  
  projectBox.append(projectImg, projectTitle);
  cc6Content.append(projectBox);
  
})

// ************************** - SECTION 6 - *********************************

let cloudComputingMentors = [
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

let cc8Content = document.querySelector('.cc8__content');

cloudComputingMentors.forEach((item) => {
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
  cc8Content.append(mentorBox);

})

// ************************** - SECTION 8 - *********************************

let cloudComputingQueries = [
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

let cc10Content = document.querySelector(".cc10__content");

cloudComputingQueries.forEach((item) => {
  let queryBox = document.createElement("div");
  queryBox.classList.add("cohort10__querybox", "cc10__querybox");

  let questionBox = document.createElement("div");
  questionBox.classList.add("cohort10__questionbox", "cc10__questionbox");

  let question = document.createElement("p");
  question.innerHTML = item.question;

  let toggle = document.createElement("img");
  toggle.setAttribute("src", "../Assets/DownArrow.svg");
  toggle.setAttribute("alt", "Toggle");
  toggle.setAttribute("data-token", `icon-${item.id}`);

  questionBox.append(question, toggle);

  let answerBox = document.createElement("div");
  answerBox.classList.add("cohort10__answerbox", "cc10__answerbox");
  answerBox.setAttribute("data-token", `answer-${item.id}`);

  let answer = document.createElement("p");
  answer.innerHTML = item.answer;

  toggle.addEventListener("click", function () {
    showTheAnswer(answerBox, this);
  });

  answerBox.append(answer);

  queryBox.append(questionBox, answerBox);
  cc10Content.append(queryBox);
});

let allAnswerBoxes = document.querySelectorAll('.cc10__answerbox');
let allToggleImages = document.querySelectorAll('.cc10__questionbox img');

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