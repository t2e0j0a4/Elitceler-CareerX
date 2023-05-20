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
    question: "Question",
    answer:
      "Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections. Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections",
  },
  {
    id: 2,
    question: "Question",
    answer:
      "Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections. Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections",
  },
  {
    id: 3,
    question: "Question",
    answer:
      "Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections. Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections",
  },
  {
    id: 4,
    question:
      "Question",
    answer:
      "Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections. Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections",
  },
  {
    id: 5,
    question: "Question",
    answer:
      "Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections. Complete All The Modules Successfully To Obtain This Certificate Of Recognition And Add It To Your Wall Of Fame Or Share With Your LinkedIn Connections",
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