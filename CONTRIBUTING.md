# Contributing to Synapz

We are a team of 3 beginner developers. These rules keep our work organized
and prevent us from overwriting each other's changes.

## Workflow rules

1. **Nobody works directly on `main`.** `main` should always be stable and working.
2. **Every feature gets its own branch** (e.g. `feature/backend-api`).
3. **Commit changes regularly**, in small, understandable chunks.
4. **Push your branch to GitHub** once you have commits worth sharing.
5. **Open a Pull Request (PR)** when your feature is ready to be reviewed.
6. **At least one teammate reviews the Pull Request** before it's merged.
7. **Only merge into `main` after it's approved.**
8. **Never commit secrets or API keys** (real `.env` files, passwords, tokens).
9. **Avoid making unrelated changes** inside someone else's feature branch or PR.

## Future branch names (not created yet)

These are examples of branches we expect to create later, once we start
building real features. Do not create them yet - they're just here so
everyone knows the naming pattern:

```text
feature/frontend-auth
feature/backend-api
feature/database
feature/ai-processing
feature/upload
```

## Basic Git commands

Here are the commands you'll use most often, explained simply.

### `git clone`
Downloads a copy of the GitHub repository onto your computer. You only do
this once, when you first join the project.

```bash
git clone <repository-url>
```

### `git status`
Shows what's changed in your local files compared to the last commit.
Run this often - it helps you understand what Git sees.

```bash
git status
```

### `git switch`
Switches you to a different branch, or creates a new one.

```bash
git switch main
git switch -c feature/my-new-feature
```

(`-c` means "create a new branch with this name and switch to it")

### `git pull`
Downloads the latest changes from GitHub into your current branch. Do this
before starting new work, so you're building on the latest code.

```bash
git pull
```

### `git add`
Stages the files you've changed, telling Git "include these in my next commit".

```bash
git add .
```

(the `.` means "everything I changed")

### `git commit`
Saves your staged changes as a snapshot, with a short message describing
what you did.

```bash
git commit -m "Add health check endpoint to backend"
```

### `git push`
Uploads your committed changes to GitHub, so your teammates can see them.

```bash
git push
```

## Typical flow for a new feature

```bash
git switch main
git pull
git switch -c feature/my-feature
# ... make your changes ...
git add .
git commit -m "Describe what you did"
git push
# then open a Pull Request on GitHub
```
