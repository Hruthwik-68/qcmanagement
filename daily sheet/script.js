document.addEventListener("DOMContentLoaded", function () {
    const questionsContainer = document.getElementById("questions");

    // Loop through 450 questions and create UI elements for each
    for (let i = 1; i <= 450; i++) {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");

        const questionTitleInput = document.createElement("input");
        questionTitleInput.type = "text";
        questionTitleInput.placeholder = "Question Title";
        questionDiv.appendChild(questionTitleInput);

        const questionLinkInput = document.createElement("input");
        questionLinkInput.type = "text";
        questionLinkInput.placeholder = "Link to Question";
        questionDiv.appendChild(questionLinkInput);

        const questionText = document.createElement("span");
        questionText.textContent = `q${i}`;
        questionDiv.appendChild(questionText);

        const codeInput = document.createElement("textarea");
        codeInput.placeholder = "Enter code here";
        questionDiv.appendChild(codeInput);

        // Load previously saved data for this question
        const savedData = JSON.parse(localStorage.getItem(`q${i}`));
        if (savedData) {
            questionTitleInput.value = savedData.title || "";
            questionLinkInput.value = savedData.link || "";
            codeInput.value = savedData.code || "";
        }

        const viewCodeButton = document.createElement("button");
        viewCodeButton.textContent = "View Code";
        viewCodeButton.addEventListener("click", () => {
            // View the code for this question
            const code = codeInput.value;
            const title = questionTitleInput.value;
            alert(`Code for ${title}:\n${code}`);
        });
        questionDiv.appendChild(viewCodeButton);

        const saveCodeButton = document.createElement("button");
        saveCodeButton.textContent = "Save Code";
        saveCodeButton.addEventListener("click", () => {
            // Save the code for this question
            const title = questionTitleInput.value;
            const link = questionLinkInput.value;
            const code = codeInput.value;
            localStorage.setItem(`q${i}`, JSON.stringify({ title, link, code }));
        });
        questionDiv.appendChild(saveCodeButton);

        const deleteCodeButton = document.createElement("button");
        deleteCodeButton.textContent = "Delete Code";
        deleteCodeButton.addEventListener("click", () => {
            // Delete the code for this question
            localStorage.removeItem(`q${i}`);
            questionTitleInput.value = "";
            questionLinkInput.value = "";
            codeInput.value = "";
        });
        questionDiv.appendChild(deleteCodeButton);

        questionsContainer.appendChild(questionDiv);
    }
});
