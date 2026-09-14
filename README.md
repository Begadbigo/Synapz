# Synapz

## 1. What is Synapz?

Synapz is an all-in-one smart study ecosystem for medical and engineering
students. The eventual goal is to let students upload study materials
(PDFs, Word documents, images, notes, plain text) and use AI to turn them
into summaries, mind maps, quizzes, flashcards, and shareable study content.

## 2. Current stage

**This repository currently contains only the foundation and development
environment.** There are no real Synapz features yet - no login, no file
uploads, no AI, no database. This is intentional. The goal of this stage
was to set up a clean, working skeleton that the team can safely build on,
one feature at a time.

## 3. Technologies used

- **HTML** - structure of the web pages
- **CSS** - styling of the web pages
- **JavaScript (vanilla)** - browser-side logic, including talking to the backend
- **Python** - backend programming language
- **FastAPI** - the Python web framework that powers our backend API
- **Supabase** - will be used later for authentication, database, and file storage
- **Git** - version control (tracking changes to the code over time)
- **GitHub** - where our shared Git repository is hosted, and where we do
  code review through Pull Requests

## 4. Project structure

```text
Synapz/
│
├── frontend/            # Everything the browser loads
│   ├── index.html       # The single test page
│   ├── css/
│   │   └── main.css     # Styling for the test page
│   └── js/
│       └── main.js      # Browser-side logic + API helper function
│
├── backend/              # The Python FastAPI server
│   ├── main.py           # App entry point - starts the server, defines routes
│   ├── requirements.txt  # Python packages the backend needs
│   ├── routes/           # (empty for now) future API route files
│   ├── services/         # (empty for now) future business logic
│   ├── models/           # (empty for now) future data models/schemas
│   └── utils/            # (empty for now) future shared helper functions
│
├── supabase/
│   └── README.md         # Notes for future Supabase setup (not connected yet)
│
├── .gitignore             # Files/folders Git should never track
├── .env.example           # Template for environment variables (no real secrets)
├── README.md              # This file
└── CONTRIBUTING.md        # Team workflow rules
```

## 5. Backend setup (Windows)

Open a terminal (Command Prompt or PowerShell) inside the `backend/` folder:

```bash
cd backend
```

Create a virtual environment. This keeps this project's Python packages
separate from anything else on your computer:

```bash
python -m venv .venv
```

Activate the virtual environment:

```bash
.venv\Scripts\activate
```

You'll know it worked because your terminal prompt will now start with
`(.venv)`.

Install the required packages:

```bash
pip install -r requirements.txt
```

## 6. Running the backend

With the virtual environment still active, run:

```bash
uvicorn main:app --reload
```

- `main` refers to `main.py`
- `app` refers to the FastAPI app object defined inside it
- `--reload` restarts the server automatically whenever you save a code change

The backend will start at: `http://127.0.0.1:8000`

You can check it directly in your browser:

- `http://127.0.0.1:8000/` should show `{"message": "Synapz backend is running"}`
- `http://127.0.0.1:8000/api/health` should show `{"status": "ok"}`

## 7. Running the frontend

Do **not** just double-click `index.html` and open it directly as a file.
Browsers restrict some features (like `fetch` requests) when a page is
opened this way, and it doesn't match how the site will really be served
later. Instead, serve it with a simple local web server.

The easiest beginner-friendly option (Python is already installed since
you set up the backend): open a **second, separate terminal**, then run:

```bash
cd frontend
python -m http.server 5500
```

Now open your browser and go to:

```text
http://127.0.0.1:5500
```

Keep both terminals running at the same time:

- Terminal 1 → backend (`uvicorn`, port 8000)
- Terminal 2 → frontend (`http.server`, port 5500)

## 8. Testing that everything works

The full request path we're testing looks like this:

```text
Frontend (browser)
      ↓
JavaScript (main.js)
      ↓
FastAPI backend (main.py)
      ↓
JSON response
      ↓
Displayed back on the page
```

To test it:

1. Make sure the backend is running (Section 6).
2. Make sure the frontend is running (Section 7).
3. Open `http://127.0.0.1:5500` in your browser.
4. Click the **Check Backend** button.
5. You should see `Backend status: OK` appear on the page.

If you instead see "Could not reach backend. Is it running?", double-check
that the `uvicorn` terminal is still running and didn't show an error.
