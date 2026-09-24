# Scientific Urbanism — Stage 1 Demo

This is a static, mobile-responsive demo that can be hosted free on GitHub Pages.

## Files
- `index.html` — landing page and temporary Stage 1 sections
- `styles.css` — visual design and Android/mobile responsive layout
- `script.js` — carousel, mobile menu, demo membership, protected-feature preview
- `assets/` — images

## Replace the demo book cover
The current "Thugs Bible" cover in the hero is built with HTML/CSS because the exact earlier cover file was not available in the project folder.
When you have your preferred cover image:
1. Put it in `assets/` and name it `thugs-bible.png`.
2. In `index.html`, replace the `<div class="book"...>...</div>` block with:
   `<div class="book"><img src="assets/thugs-bible.png" alt="The Thugs Bible" style="width:100%;height:100%;object-fit:cover"></div>`

## Replace carousel images
Upload your images into `assets/`, then change the `src="assets/..."` filename in the corresponding `<article class="slide">` in `index.html`.

## GitHub Pages
1. Create/open your GitHub repository.
2. Upload `index.html`, `styles.css`, `script.js`, and the entire `assets` folder.
3. Open repository Settings → Pages.
4. Under Build and deployment choose "Deploy from a branch".
5. Choose your main branch and `/ (root)`, then Save.
6. GitHub will show the live site address after deployment.

## Demo limitations
The member form uses browser `localStorage`; it is not a secure login system.
Contact, donation, enrollment, marketplace and podcast controls are demo placeholders.
A later stage should add a real backend/authentication system and a payment provider.
