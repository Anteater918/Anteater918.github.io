# Antonio Yang — Portfolio

A personal portfolio website built with pure HTML, CSS, and JavaScript. No frameworks, no build tools — ready to host on GitHub Pages.

## How to host on GitHub Pages

1. Create a new GitHub repository (e.g. `antonio-yang.github.io` or just `portfolio`)
2. Upload the three files: `index.html`, `style.css`, `script.js`
3. Go to **Settings → Pages** in your repo
4. Under "Source", select **Deploy from a branch** → choose `main` → `/ (root)`
5. Save — your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

> Tip: If you name the repo `YOUR_USERNAME.github.io`, it will be at `https://YOUR_USERNAME.github.io` directly.

## Customizing the content

### Your info
- Open `index.html` and search for `YOUR_EMAIL`, `YOUR_USERNAME` — replace all with your real details.

### Your projects
- Each project is an `<article class="project-card">` block in `index.html`.
- Edit the title, description, tags, and GitHub link for each.
- Add or remove cards as needed — the grid adjusts automatically.

### Skills
- Find the `.skills-row` section and update the `<span class="skill-tag">` entries.
