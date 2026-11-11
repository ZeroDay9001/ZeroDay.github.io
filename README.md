# Buzz Academy: install as an app (Android and Windows)

Buzz Academy works offline once installed. Everything it needs is in this folder.

## 1. Put it online (free, about 5 minutes)
1. Sign in at https://github.com (create a free account if needed).
2. Click **New repository**, name it `buzz-academy`, make it **Public**, and create it.
3. On the repository page, click **uploading an existing file** and drag in *everything in this folder* (index.html, sw.js, manifest.webmanifest, README.md, and the `lib` and `icons` folders). Click **Commit changes**.
4. Go to **Settings → Pages**. Under *Branch*, pick `main` and `/ (root)`, then **Save**.
5. After a minute, your app lives at `https://YOUR-NAME.github.io/buzz-academy/`.

## 2. Install it
- **Galaxy phone or tablet:** open the link in Chrome → ⋮ menu → **Install app** (or **Add to Home screen**).
- **Windows:** open the link in Edge or Chrome → click the install icon in the address bar (or ⋮ menu → **Install Buzz Academy**).

It opens in its own window, works offline, and updates itself when you upload a new version.

## 3. Connect Sidekick (optional AI tutor)
The tutor in Guides, Tests (Explain) and Notes (Quiz me) can use your local Ollama model.
1. Allow the app to call Ollama. In Command Prompt run:
   `setx OLLAMA_ORIGINS "https://YOUR-NAME.github.io"`
   then quit Ollama from the tray and start it again.
2. In the app, open **Settings → AI tutor**, keep the address `http://localhost:11434`, type your model name (see `ollama list`), and press **Test connection**.
3. From your phone: Ollama must listen on your network (`setx OLLAMA_HOST "0.0.0.0"`, restart Ollama, allow port 11434 in Windows Firewall) and you use `http://YOUR-PC-IP:11434` as the address. Note that some phone browsers block plain-http calls from https pages; the desktop app is the reliable route.

## 4. Moving progress between devices
The installed app saves progress on each device. Use **Settings → Your data → Export everything**, then paste into **Import** on the other device.

## Credits
math.js (Apache-2.0) and Skulpt (MIT) are bundled in `lib/` for offline use.

## 5. Make an APK (Android app file)
Your site must be online first (step 1). For the cleanest result, name your repository **YOUR-NAME.github.io** so the app lives at the root of your site: `https://YOUR-NAME.github.io/`.

1. Go to https://www.pwabuilder.com, paste your site address, and press **Start**.
2. Press **Package For Stores** → **Android** (Google Play) → **Generate Package**. Keep the signing key option on **New**.
3. Download the zip. Inside are the **.apk** (install it yourself), the **.aab** (only for the Play Store), your **signing key** files, and **assetlinks.json**.
4. **Keep the signing key and its password somewhere safe.** You need the same key to build updated versions.
5. Upload `assetlinks.json` into this repository’s `.well-known` folder, so it’s reachable at `https://YOUR-NAME.github.io/.well-known/assetlinks.json`. The `.nojekyll` file included here makes GitHub Pages serve that folder. Without it, the app opens with a browser address bar at the top.
6. Copy the .apk to your phone or tablet, open it, allow **Install unknown apps** for the app you opened it with, and install.

The APK loads your website inside a full-screen shell, so updates you upload to GitHub appear automatically; you only rebuild the APK if you change the name, icon or package ID.

## Uploading from a phone
GitHub’s app can’t upload files, so use Chrome with **⋮ → Desktop site** turned on at github.com. Phone uploads don’t keep folders: create `lib/keep.txt` and `icons/keep.txt` with **Add file → Create new file**, then open each folder and upload its files. Create `.nojekyll` the same way (empty file), since phone file pickers often hide files that start with a dot.
