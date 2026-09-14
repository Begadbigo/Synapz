// main.js
// This file shows the simplest possible pattern for talking to the
// FastAPI backend from the browser. Keep this pattern in mind - later
// features (uploads, quizzes, etc.) will reuse the same idea.

// The backend runs on a different port than the frontend during local
// development, so we call it directly using its full address.
const BACKEND_URL = "http://127.0.0.1:8000";

/**
 * Small helper function that all future API calls can reuse.
 * It takes a backend path (like "/api/health") and returns the
 * parsed JSON response.
 */
async function callBackend(path) {
  const response = await fetch(BACKEND_URL + path);

  if (!response.ok) {
    throw new Error("Backend request failed with status " + response.status);
  }

  return response.json();
}

// Wire up the "Check Backend" button on the test page.
const checkBackendBtn = document.getElementById("check-backend-btn");
const backendResult = document.getElementById("backend-result");

checkBackendBtn.addEventListener("click", async () => {
  backendResult.textContent = "Checking...";

  try {
    const data = await callBackend("/api/health");
    backendResult.textContent = "Backend status: " + data.status.toUpperCase();
  } catch (error) {
    backendResult.textContent = "Could not reach backend. Is it running?";
    console.error(error);
  }
});
