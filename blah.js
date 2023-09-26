document.addEventListener("DOMContentLoaded", function () {
    const teamsPerTheme = 50;
    const teamLimit = 5;

    const themeSelect = document.getElementById("theme");
    const teamSelect = document.getElementById("team");
    const problemStatement = document.getElementById("problemStatement");

    // Problem statements for each theme
    const problemStatements = {
        theme1: ["Problem 1", "Problem 2", "Problem 3"],
        theme2: ["Problem 4", "Problem 5", "Problem 6"],
        theme3: ["Problem 7", "Problem 8", "Problem 9"],
    };

    // Function to update the problem statements dropdown
    function updateProblemStatements(selectedTheme) {
        const selectedStatements = problemStatements[selectedTheme];
        problemStatement.innerHTML = "";

        const label = document.createElement("label");
        label.setAttribute("for", "problem");
        label.textContent = "Select a Problem Statement:";
        problemStatement.appendChild(label);

        const select = document.createElement("select");
        select.setAttribute("id", "problem");
        select.setAttribute("name", "problem");

        selectedStatements.forEach((statement) => {
            const option = document.createElement("option");
            option.textContent = statement;
            select.appendChild(option);
        });

        problemStatement.appendChild(select);
    }

    // Populate team options and update problem statements on theme change
    themeSelect.addEventListener("change", function () {
        const selectedTheme = themeSelect.value;

        teamSelect.innerHTML = "";

        for (let i = 1; i <= teamsPerTheme; i++) {
            const option = document.createElement("option");
            option.value = `Team ${i}`;
            option.text = `Team ${i}`;
            teamSelect.appendChild(option);
        }

        for (let i = teamsPerTheme; i > teamLimit; i--) {
            teamSelect.remove(teamSelect.options[i - 1]);
        }

        updateProblemStatements(selectedTheme);
    });

    // Initially populate problem statements for the default theme
    updateProblemStatements(themeSelect.value);
});
