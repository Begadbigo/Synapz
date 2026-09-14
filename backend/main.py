"""
Synapz backend - main entry point.

This is the foundation-only version of the backend.
It only proves that the server runs and that the frontend can talk to it.

No authentication, database, or AI logic lives here yet.
Those will be added later inside routes/, services/, models/, and utils/.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Synapz Backend", version="0.1.0")

# Allow the frontend (served from a different local port) to call this API
# during development. This is intentionally permissive for now because we
# are only running on localhost. It should be tightened later.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    """Simple root endpoint to confirm the backend is running."""
    return {"message": "Synapz backend is running"}


@app.get("/api/health")
def health_check():
    """Health check endpoint used by the frontend test button."""
    return {"status": "ok"}
