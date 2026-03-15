// Select elements
const factBtn = document.getElementById("factBtn");
const factBox = document.getElementById("factBox");

// API endpoint
const API_URL = "https://catfact.ninja/fact";

// Fetch a random cat fact
async function getCatFact() {
  try {
    factBox.innerHTML = "<p>Loading...</p>";

    const response = await fetch(API_URL);
    const data = await response.json();

    console.log("Cat fact fetched:", data); // console output for assignment

    factBox.innerHTML = `<p>${data.fact}</p>`;
  } catch (error) {
    console.error("Error fetching cat fact:", error);

    factBox.innerHTML = `<p style="color:red;">Failed to load cat fact.</p>`;
  }
}

// Button click event
factBtn.addEventListener("click", getCatFact);
