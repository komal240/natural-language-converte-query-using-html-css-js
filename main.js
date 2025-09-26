// Get references
const nlQuery = document.getElementById("nlQuery");
const generateBtn = document.getElementById("generateBtn");
const sqlOutput = document.getElementById("sqlOutput");

// Button click event
generateBtn.addEventListener("click", async () => {
    const userText = nlQuery.value.trim();
    if (!userText) {
        sqlOutput.textContent = "-- Please type a query!";
        return;
    }

    sqlOutput.textContent = "Generating SQL...";

    try {
        const response = await fetch("http://localhost:5000/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: userText })
        });

        const data = await response.json();
        sqlOutput.textContent = data.query || "-- Could not generate SQL.";
    } catch (error) {
        sqlOutput.textContent = "-- Error generating SQL. Check backend.";
        console.error(error);
    }
});
