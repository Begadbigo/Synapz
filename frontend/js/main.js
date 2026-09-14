// main.js

// Demo Data for Recent Materials
const recentMaterials = [
  {
    subject: "Anatomy",
    title: "Upper Limb Anatomy Notes & Diagrams",
    type: "PDF",
    status: "Completed",
    date: "Added 2 days ago"
  },
  {
    subject: "Physics",
    title: "Electromagnetism Formulas & Concepts",
    type: "Word Doc",
    status: "In Progress",
    date: "Added 3 days ago"
  },
  {
    subject: "Biochemistry",
    title: "Metabolic Pathways & Citric Acid Cycle",
    type: "Image",
    status: "Ready",
    date: "Added 1 week ago"
  },
  {
    subject: "Calculus",
    title: "Derivatives Practice Problems",
    type: "Text",
    status: "New",
    date: "Added just now"
  }
];

// Helper to determine status class for styling
function getStatusClass(status) {
  switch(status.toLowerCase()) {
    case 'completed': return 'status-completed';
    case 'in progress': return 'status-inprogress';
    case 'ready': return 'status-ready';
    case 'new': return 'status-new';
    default: return 'status-new';
  }
}

// Render Material Cards into the Grid
function renderMaterials() {
  const grid = document.getElementById("materials-grid");
  if (!grid) return;
  
  grid.innerHTML = ""; // Clear any existing content
  
  recentMaterials.forEach(material => {
    const card = document.createElement("div");
    card.className = "material-card";
    
    card.innerHTML = `
      <div class="card-header">
        <span class="card-type">${material.type}</span>
        <span class="card-status ${getStatusClass(material.status)}">${material.status}</span>
      </div>
      <div class="card-content">
        <h4>${material.subject}</h4>
        <p>${material.title}</p>
      </div>
      <div class="card-footer">
        <span>${material.date}</span>
      </div>
    `;
    
    grid.appendChild(card);
  });
}

// Setup simple UI Interactions (Mock upload, mobile sidebar)
function setupInteractions() {
  // Mobile Sidebar Toggle
  const sidebar = document.getElementById("sidebar");
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileCloseBtn = document.getElementById("mobile-close");
  
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener("click", () => {
      sidebar.classList.add("open");
    });
  }
  
  if (mobileCloseBtn && sidebar) {
    mobileCloseBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  }
  
  // Upload Button Mock Interaction
  const uploadBtn = document.getElementById("upload-material-btn");
  const uploadMessage = document.getElementById("upload-message");
  
  if (uploadBtn && uploadMessage) {
    uploadBtn.addEventListener("click", () => {
      // Show message
      uploadMessage.classList.remove("hidden");
      
      // Auto-hide after 4 seconds
      setTimeout(() => {
        uploadMessage.classList.add("hidden");
      }, 4000);
    });
  }
}

// Preserve existing backend call pattern for future reference
// The backend runs on a different port than the frontend during local
// development, so we call it directly using its full address.
const BACKEND_URL = "http://127.0.0.1:8000";

async function callBackend(path) {
  const response = await fetch(BACKEND_URL + path);

  if (!response.ok) {
    throw new Error("Backend request failed with status " + response.status);
  }

  return response.json();
}

// Initialize Dashboard when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  renderMaterials();
  setupInteractions();
});
