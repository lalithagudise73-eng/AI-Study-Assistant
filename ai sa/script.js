
// ==========================================
// AI STUDY ASSISTANT
// ==========================================


// Study progress

let progress = 0;


// Subject recommendations

const recommendations = {

    "Mathematics": [
        "Review important formulas",
        "Study solved examples",
        "Practice numerical problems",
        "Attempt previous examination questions"
    ],

    "Digital Electronics": [
        "Review Boolean algebra",
        "Study logic gates",
        "Practice truth tables",
        "Solve digital circuit problems"
    ],

    "Microprocessors": [
        "Study architecture",
        "Review instruction set",
        "Practice assembly programs",
        "Study important interfacing concepts"
    ],

    "Signals and Systems": [
        "Review basic signals",
        "Study Fourier transform",
        "Practice Laplace transform",
        "Solve numerical problems"
    ],

    "Java Programming": [
        "Review Java syntax",
        "Practice OOP concepts",
        "Write small programs",
        "Solve programming exercises"
    ]

};


// Quiz questions

const questions = {

    "Mathematics":
        "What is the derivative of x²?",

    "Digital Electronics":
        "What is the output of an AND gate when both inputs are 1?",

    "Microprocessors":
        "What is the function of the ALU?",

    "Signals and Systems":
        "What is the purpose of the Fourier Transform?",

    "Java Programming":
        "What is the main principle of Object-Oriented Programming?"
};


// Generate study plan

function generateStudyPlan() {

    const subject =
        document.getElementById(
            "subject"
        ).value;


    const topic =
        document.getElementById(
            "topic"
        ).value.trim();


    const time =
        Number(
            document.getElementById(
                "studyTime"
            ).value
        );


    const result =
        document.getElementById(
            "result"
        );


    const quiz =
        document.getElementById(
            "quiz"
        );


    // Validation

    if (!subject || !topic) {

        result.innerHTML = `
            <div class="result-box">
                <p>
                    Please select a subject
                    and enter a topic.
                </p>
            </div>
        `;

        return;

    }


    const plan =
        recommendations[subject];


    // Generate output

    result.innerHTML = `

        <div class="result-box">

            <h3>
                📚 Study Plan for ${topic}
            </h3>

            <p>
                Subject:
                <strong>${subject}</strong>
            </p>

            <p>
                Available Time:
                <strong>${time} minutes</strong>
            </p>

            <h4>
                Recommended Activities:
            </h4>

            <ul>

                ${plan.map(
                    item => `<li>${item}</li>`
                ).join("")}

            </ul>

            <h4>
                Suggested Schedule:
            </h4>

            <p>
                Study:
                ${Math.floor(time * 0.6)}
                minutes
            </p>

            <p>
                Practice:
                ${Math.floor(time * 0.3)}
                minutes
            </p>

            <p>
                Revision:
                ${Math.floor(time * 0.1)}
                minutes
            </p>

        </div>

    `;


    // Generate quiz

    quiz.innerHTML = `

        <div>

            <h3>
                Practice Question
            </h3>

            <p>
                ${questions[subject]}
            </p>

        </div>

    `;

}


// Increase progress

function increaseProgress() {

    progress += 20;


    if (progress > 100) {

        progress = 100;

    }


    document.getElementById(
        "progressBar"
    ).style.width =
        progress + "%";


    document.getElementById(
        "progressText"
    ).textContent =
        "Progress: " +
        progress +
        "%";

}