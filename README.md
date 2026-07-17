# Arif Hasan Apu — Personal Website

A multi-page portfolio + blog for **Arif Hasan Apu** — IT project & product management professional, Dhaka → Rome.

Plain HTML/CSS/JS with no build step and no dependencies, so it runs anywhere, loads fast, and is trivial to host on GitHub Pages. Fully responsive: a hamburger menu on phones and tablets, fluid type, overflow-safe layouts down to ~280px-wide screens, and `prefers-reduced-motion` respected throughout.

## What's in this repo

| Path | Purpose |
|---|---|
| `index.html` | Homepage — hero, release-history timeline, products, projects, toolkit, education, blog teasers, contact |
| `style.css` | The whole design system, shared by every page |
| `site.js` | Mobile menu, scroll animations and footer year — shared by every page |
| `blog/index.html` | Blog landing page listing all posts |
| `blog/cognitive-psychology.html` | Post — live, full content |
| `blog/design-challenges.html` | Post — live, full content |
| `blog/design-principles-methodologies.html` | Post — live, full content |
| `blog/requirements-analysis.html` | Post — placeholder (see "Finishing the two pending posts") |
| `blog/design-evaluation.html` | Post — placeholder (see "Finishing the two pending posts") |
| `privacy-policy/Privacy_Policy_BizFlow.html` | Privacy policy for the BizFlow app — **URL preserved**, see below |
| `profile.jpg` | Profile photo (swap for a higher-resolution one when you can) |
| `cv.pdf` | Downloadable CV linked from the nav and footer |

## Publish it on GitHub Pages (about 3 minutes)

1. **Create the repository.** On GitHub, click **New repository** and name it exactly:
   ```
   YOUR-USERNAME.github.io
   ```
   (e.g. `theapuhasan.github.io`). Make it **Public**.

2. **Upload the files.** On the empty repo page, click **uploading an existing file** and drag in *everything in this folder, keeping the folder structure* (`blog/` and `privacy-policy/` must stay as folders). Commit changes.
   - If the web uploader flattens folders, upload via **Add file → Create new file** and type `blog/index.html` as the name to create the folder, or push with git:
     ```bash
     git init && git add . && git commit -m "Launch site"
     git branch -M main
     git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
     git push -u origin main
     ```

3. **Done.** Within a minute or two your site is live at `https://YOUR-USERNAME.github.io`.

### Use your own domain (theapuhasan.com)

1. In the repo: **Settings → Pages → Custom domain** → enter `www.theapuhasan.com` and save.
2. At your domain registrar, add a `CNAME` record pointing `www` → `YOUR-USERNAME.github.io`.
3. Tick **Enforce HTTPS** once the domain verifies.

## The privacy policy URL is preserved — here's how

Your live policy sits at:

```
https://www.theapuhasan.com/privacy-policy/Privacy_Policy_BizFlow
```

This repo contains `privacy-policy/Privacy_Policy_BizFlow.html`. GitHub Pages serves `.html` files for extensionless requests, so once `www.theapuhasan.com` points at GitHub Pages, that **exact same URL keeps working** — nothing to update in Google Play or anywhere else the link is registered. (The `.html` version of the URL works too.)

The same trick preserves your old blog URLs: `/blog/cognitive-psychology` etc. all resolve to the matching `.html` files.

⚠️ Don't switch the domain's DNS until this repo is live, so the policy URL never goes dark.

## Finishing the two pending posts

**Requirements Analysis** and **Design Evaluation** couldn't be extracted from the old Google Sites pages (their content is inside embedded files, which can't be read automatically). Both pages are live as styled placeholders so their URLs work. To finish them:

1. Open `blog/requirements-analysis.html` (or `design-evaluation.html`).
2. Find the big `PASTE THE ARTICLE CONTENT HERE` comment.
3. Paste your content using `<h2>`, `<h3>`, `<p>` and `<ul><li>` tags — the styling is automatic.
4. Delete the "This article is on its way" callout and the temporary list above the comment.

## Customising

- **Photo** — replace `profile.jpg` (600×750px or larger, portrait orientation, looks best).
- **CV** — replace `cv.pdf` with any updated version.
- **Colours** — every colour lives in the `:root` block at the top of `style.css`. Change `--plum` to re-theme the whole site.
- **New blog post** — copy any live post file, edit the title/content, and add a card for it in `blog/index.html` (and optionally on the homepage's "From the blog" section).
- **Images in posts** — the figures from the old Google Sites posts couldn't be transferred automatically. To add images, create a `blog/images/` folder and use `<img src="images/your-file.jpg" alt="...">` inside a post.

## Privacy note

The homepage intentionally shows only **"Rome, Italy"** — not the full street address or date of birth from the CV. Since `cv.pdf` is publicly downloadable here, consider removing those details from the PDF before publishing.

---

© 2026 Arif Hasan Apu · [theapuhasan.com](https://www.theapuhasan.com) · [LinkedIn](https://www.linkedin.com/in/theapuhasan/)
