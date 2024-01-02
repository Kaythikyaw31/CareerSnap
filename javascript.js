const questions = [
    "Do you enjoy working with numbers?",
    "Are you a creative person?",
    "Do you like solving problems?",
    "Are you comfortable working in a team?",
    "Do you enjoy learning new things?",
    "Are you detail-oriented?",
    "Do you like working with computers?",
    "Are you good at communicating with others?",
    "Are you good at communicating with others?",
    "Are you good at communicating with others?",
    "Are you good at communicating with others?",
    "Are you good at communicating with others?",


    // Add more questions as needed
];

let currentQuestionIndex = 0;

function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");
    questionsContainer.innerHTML = "";

    for (let i = currentQuestionIndex; i < currentQuestionIndex + 4 && i < questions.length; i++) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionText = document.createElement("p");
        questionText.textContent = questions[i];

        const yesButton = document.createElement("button");
        yesButton.textContent = "Yes";
        yesButton.addEventListener("click", () => handleAnswer("Yes"));

        const noButton = document.createElement("button");
        noButton.textContent = "No";
        noButton.addEventListener("click", () => handleAnswer("No"));

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(yesButton);
        questionDiv.appendChild(noButton);

        questionsContainer.appendChild(questionDiv);
    }
}

function handleAnswer(answer) {
    // Handle the user's answer (e.g., store it, perform logic)
    console.log(`User answered: ${answer}`);

    // Move to the next set of questions or display results when questions end
    currentQuestionIndex += 4;
    if (currentQuestionIndex < questions.length) {
        displayQuestions();
    } else {
        // Display results or perform other actions
        alert("Questionnaire completed!");
    }
}

function nextQuestions() {
    // Move to the next set of questions
    currentQuestionIndex += 4;

    // Display the next set of questions or results
    if (currentQuestionIndex < questions.length) {
        displayQuestions();
    } else {
        // Display results or perform other actions
        alert("Questionnaire completed!");
    }
}

// Display the initial set of questions
displayQuestions();
