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

let fullStackDetails = [
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

let fsd2Content = document.querySelector(".fsd2__side2");

fullStackDetails.forEach((item) => {
  let whyCohortItem = document.createElement("div");
  whyCohortItem.classList.add("cohort2__whybox");

  let whyCohortTitle = document.createElement("p");
  whyCohortTitle.classList.add("cohort2__whytitle");
  whyCohortTitle.innerHTML = `${item.id}. ${item.title}`;

  let whyCohortDesc = document.createElement("p");
  whyCohortDesc.classList.add("cohort2__whydesc");
  whyCohortDesc.textContent = item.desc;

  whyCohortItem.append(whyCohortTitle, whyCohortDesc);
  fsd2Content.append(whyCohortItem);
});

// ************************** - SECTION 2 - *********************************

let fullStackTools = [
  {
    id: 1,
    toolImg: "../Assets/FSDTool1.png",
    toolName: "HTML",
  },
  {
    id: 2,
    toolImg: "../Assets/FSDTool2.png",
    toolName: "CSS",
  },
  {
    id: 3,
    toolImg: "../Assets/FSDTool3.png",
    toolName: "Javascript",
  },
  {
    id: 4,
    toolImg: "../Assets/FSDTool4.png",
    toolName: "Bootstrap",
  },
  {
    id: 5,
    toolImg: "../Assets/FSDTool5.png",
    toolName: "jQuery",
  },
  {
    id: 6,
    toolImg: "../Assets/FSDTool6.png",
    toolName: "React.js",
  },
  {
    id: 7,
    toolImg: "../Assets/FSDTool7.png",
    toolName: "Angular",
  },
  {
    id: 8,
    toolImg: "../Assets/FSDTool8.png",
    toolName: "Github",
  },
  {
    id: 9,
    toolImg: "../Assets/FSDTool9.png",
    toolName: "Node.js",
  },
  {
    id: 10,
    toolImg: "../Assets/FSDTool10.png",
    toolName: "Mongo DB",
  },
];

let fsd4Content = document.querySelector('.fsd4__content');

fullStackTools.forEach((tool) => {
  let toolBox = document.createElement('div');
  toolBox.classList.add('cohort4__toolbox');

  let toolImg = document.createElement('img');
  toolImg.setAttribute('src', tool.toolImg);
  toolImg.setAttribute('alt', tool.toolName);

  let toolTitle = document.createElement('p');
  toolTitle.innerHTML = tool.toolName;
  
  toolBox.append(toolImg, toolTitle);
  fsd4Content.append(toolBox);

})

// ************************** - SECTION 4 - *********************************

let fullStackProjects = [
  {
    id : 1,
    projectTitle : 'Netflix Clone',
    projectImage : '../Assets/FSDProject1.svg'
  },
  {
    id : 2,
    projectTitle : 'Spotify Clone',
    projectImage : '../Assets/FSDProject2.svg'
  },
  {
    id : 3,
    projectTitle : 'Amazon Clone',
    projectImage : '../Assets/FSDProject3.svg'
  },
  {
    id : 4,
    projectTitle : 'Instagram Clone',
    projectImage : '../Assets/FSDProject4.svg'
  }
]

let fsd6Content = document.querySelector('.fsd6__content');

fullStackProjects.forEach((item) => {
  let projectBox = document.createElement('div');
  projectBox.classList.add('cohort6__projectbox');

  let projectImg = document.createElement('img');
  projectImg.setAttribute('src', item.projectImage);
  projectImg.setAttribute('alt', item.projectTitle);

  let projectTitle = document.createElement('p');
  projectTitle.innerHTML = item.projectTitle;
  
  projectBox.append(projectImg, projectTitle);
  fsd6Content.append(projectBox);
  
})

// ************************** - SECTION 6 - *********************************

let fullStackMentors = [
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

let fsd8Content = document.querySelector('.fsd8__content');

fullStackMentors.forEach((item) => {
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
  fsd8Content.append(mentorBox);

})

// ************************** - SECTION 8 - *********************************

let fullStackQueries = [
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

let fsd10Content = document.querySelector(".fsd10__content");

fullStackQueries.forEach((item) => {
  let queryBox = document.createElement('div');
  queryBox.classList.add('cohort10__querybox', 'fsd10__querybox');

  let questionBox = document.createElement("div");
  questionBox.classList.add("cohort10__questionbox", "fsd10__questionbox");

  let question = document.createElement('p');
  question.innerHTML = item.question;

  let toggle = document.createElement('img');
  toggle.setAttribute('src', '../Assets/DownArrow.svg');
  toggle.setAttribute('alt', 'Toggle');
  toggle.setAttribute('data-token', `icon-${item.id}`);

  questionBox.append(question, toggle);

  let answerBox = document.createElement("div");
  answerBox.classList.add("cohort10__answerbox", "fsd10__answerbox");
  answerBox.setAttribute('data-token', `answer-${item.id}`);

  let answer = document.createElement("p");
  answer.innerHTML = item.answer;

  toggle.addEventListener('click', function() {
    showTheAnswer(answerBox, this);
  })

  answerBox.append(answer);

  queryBox.append(questionBox, answerBox);
  fsd10Content.append(queryBox);
})

let allAnswerBoxes = document.querySelectorAll('.fsd10__answerbox');
let allToggleImages = document.querySelectorAll('.fsd10__questionbox img');

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