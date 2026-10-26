SURSPACE - FREE SONG WEBSITE TEMPLATE
======================================

ISME KYA HAI?
- Mobile-friendly music website
- Song/artist search
- In-page audio player
- MP3 download button
- No database required for this starter version

APNE SONGS ADD KARNE KE STEPS
1. ZIP extract karein.
2. Apni MP3 files `songs` folder mein copy karein.
3. `script.js` file ko text editor mein kholein.
4. `tracks` list mein har song ke liye entry add karein, jaise:
   { title: "Mera Song", artist: "Mera Naam", file: "songs/mera-song.mp3", cover: "" }
5. File save karein. `index.html` browser mein khol kar test karein.
6. Website publish karne ke liye poore folder ko GitHub repository mein upload karein aur
   repository Settings > Pages mein deploy karein, ya Cloudflare Pages par static site deploy karein.

IMPORTANT
- `songs/your-song.mp3` demo path hai. Isko apni actual MP3 file ke naam se badlein.
- Free static hosting par files aur traffic ki limits ho sakti hain. Bahut saare/bade MP3s ke liye
  dedicated object storage ya music hosting ki zaroorat pad sakti hai.
- Sirf aise tracks upload karein jinhe publicly distribute karne aur download dene ka haq aapke paas hai.
- Static website mein admin upload panel nahi hai. New song add karne ke liye files aur script.js update karke
  site ko dobara publish karna hoga.
- Local file se direct open karne par browser kuch audio behavior restrict kar sakta hai. Hosting par test karein.
