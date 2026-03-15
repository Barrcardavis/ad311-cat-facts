# Random Cat Fact Generator

A simple web application that fetches and displays random cat facts using the **Cat Facts API (catfact.ninja)**.  
This project was created for the AD311 assignment: *Integrating Third‑Party APIs*.

---

## 📌 Project Overview
This application demonstrates how to integrate a third‑party API into a small web project.  
Users can click a button to fetch a new random cat fact, which is displayed on the page.

API used (from the public‑apis list):  
**https://catfact.ninja/fact**

No authentication required.

---

## 🚀 How to Run the Project
1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser:
   - Double‑click it, **or**
   - Right‑click → *Open with Live Server* (recommended)

The app will load instantly.

---

## 🧠 How It Works
- The user clicks the **Get Cat Fact** button.
- The app sends a `fetch()` request to the Cat Facts API.
- The JSON response is displayed inside the `factBox`.
- Errors are caught and displayed cleanly.
- Console output shows the raw API response for debugging.

---

## 🧪 Test Cases

### ✅ Normal Test Cases
| Test Case | Action | Expected Result |
|----------|--------|-----------------|
| 1 | Click “Get Cat Fact” | A random cat fact appears |
| 2 | Click the button multiple times | New fact appears each time |
| 3 | Check console output | JSON response logged correctly |

---

### ⚠️ Edge Test Cases
| Edge Case | How to Trigger | Expected Behavior |
|-----------|----------------|------------------|
| 1 | Disconnect internet, then click button | Error message appears in red; console logs error |
| 2 | API returns invalid JSON (simulated by throttling or blocking) | App shows “Failed to load cat fact.” |
| 3 | API request blocked or times out | App handles error gracefully without crashing |

---

## 📝 Write‑Up

### **Why I Chose This API**
I selected the Cat Facts API because it is simple, requires no authentication, and is included in the official public‑apis list. It provides clean JSON responses that are easy to work with.

### **What the Application Does**
The app fetches a random cat fact from the API and displays it on the page. It includes loading feedback, error handling, and console output for debugging.

### **Challenges Encountered**
- Ensuring proper error handling for offline mode and failed requests.
- Making the UI simple but readable.
- Verifying console output for the assignment demo.

### **Examples**
- Clicking the button loads a new fact.
- Console shows the raw JSON response.
- Offline mode triggers the error message.

---

## 📂 Project Structure

cat-facts/
│── index.html
│── script.js
│── style.css
└── README.md


---

## 🎥 Video Demonstration
A YouTube link will be added here after recording the demo.

