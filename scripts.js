document.addEventListener("DOMContentLoaded", function () {
    shuffleArray(questions);
    showQuestion(currentQuestionIndex);
});

const questions = [
    "Are you passionate about scientific discoveries?",
    "Do you enjoy working with numbers and analyzing data?",
    "Do you have good business acumen?",
    "Do you enjoy expressing through writing or other forms of art?",
    "Do you have an inclination towards technology and innovation?",
    "Are you interested in understanding how the natural world works?",
    "Do you enjoy languages and communication?",
    "Are you interested in political and social issues?",
    "Do you enjoy debating and discussing social issues?",
    "Are you interested in financial matters and business?",
    "Do you enjoy solving mathematical problems?",
    "Are you interested in societal and cultural aspects?",
    "Do you have strong organizational skills?",
    "Are you comfortable with public scrutiny and criticism?",
    "Do you find joy in conducting experiments?",
    "Are you interested in public service and governance?",
    "Do you enjoy problem-solving?",
    "Do you have a vision for societal change and improvement?",
];

const pointsPerQuestion = [
    1, 1, 1, 1, 1, 1,  
    1, 1, 1, 1, 1, 1,  
    0, 0, 0, 0, 0, 0   
];


const userResponses = Array(questions.length).fill(null);

let currentQuestionIndex = 0;

function showQuestion(index) {
    const questionLabel = document.getElementById("question-label");
    const questionOptions = document.getElementById("question-options");
    const nextButton = document.getElementById("next-btn");

    if (index < questions.length) {
        questionLabel.textContent = questions[index];
        questionOptions.innerHTML = ''; 
        for (let i = 0; i < 2; i++) {
            const radioContainer = document.createElement("div");
            radioContainer.classList.add("radio-container");

            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.id = `option${i}`;
            radioInput.name = "answer";
            radioInput.value = i;
            radioContainer.appendChild(radioInput);

            const radioLabel = document.createElement("label");
            radioLabel.htmlFor = `option${i}`;
            radioLabel.textContent = i === 0 ? "Yes" : "No";
            radioContainer.appendChild(radioLabel);

            questionOptions.appendChild(radioContainer);
        }

        nextButton.disabled = true;

        questionOptions.addEventListener("change", function () {
            nextButton.disabled = false;
        });
    } else {
        const questionContainer = document.getElementById("question-container");
        const nextButton = document.getElementById("next-btn");

        questionContainer.style.display = "none";
        nextButton.style.display = "none";

        calculateCareer();
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        userResponses[currentQuestionIndex] = parseInt(selectedOption.value);
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        const questionContainer = document.getElementById("question-container");
        const nextButton = document.getElementById("next-btn");

        questionContainer.style.display = "none";
        nextButton.style.display = "none";

        calculateCareer();
    }
}

function calculateCareer() {
    const resultContainer = document.getElementById("result-container");
    const careerResult = document.getElementById("career-result");
    const explanation = document.getElementById("explanation");
    const resultDetails = document.getElementById("result-details");
    const careerExamples = document.getElementById("career-examples");

    let scienceScore = 0;
    let commerceScore = 0;
    let artsScore = 0;

    userResponses.forEach((response, index) => {
        const categoryScore = pointsPerQuestion[index];

        // Separate the first half (science) and second half (commerce and arts) of the questions
        if (index < questions.length / 2) {
            response ? (scienceScore += categoryScore) : (commerceScore += categoryScore);
        } else {
            response ? (artsScore += categoryScore) : (commerceScore += categoryScore);
        }
    });

    let recommendedCareer;
    let careerExamplesText;

    if (scienceScore >= commerceScore && scienceScore >= artsScore) {
        recommendedCareer = "Science";
        careerExamplesText = "Physicist, Biologist, Engineer";
    } else if (commerceScore >= scienceScore && commerceScore >= artsScore) {
        recommendedCareer = "Commerce";
        careerExamplesText = "Accountant, Entrepreneur, Marketing Manager";
    } else {
        recommendedCareer = "Art";
        careerExamplesText = "Painter, Graphic Designer, Writer";
    }

    careerResult.textContent = `Your recommended career is: ${recommendedCareer}`;
    explanation.textContent = "Consider your strengths and interests in each category to make an informed decision about your career path.";
    careerExamples.textContent = `Examples of ${recommendedCareer} careers: ${careerExamplesText}`;
    resultContainer.style.display = "block";
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
