// Apne MP3 tracks yahan add karein. File names exact hone chahiye.
// Example: { title: "My Song", artist: "Your Name", file: "songs/my-song.mp3", cover: "covers/my-song.jpg" }
// cover optional hai. Song ko songs/ folder ke andar rakhein.
const tracks = [
  { title: "Add Your First Song", artist: "Your Artist Name", file: "songs/your-song.mp3", cover: "" },
  { title: "Add Your Second Song", artist: "Your Artist Name", file: "songs/your-second-song.mp3", cover: "" }
];

const list = document.getElementById("songs");
const search = document.getElementById("search");
const audio = document.getElementById("audio");
const nowTitle = document.getElementById("nowTitle");
const nowArtist = document.getElementById("nowArtist");
const count = document.getElementById("count");
document.getElementById("year").textContent = new Date().getFullYear();

function playTrack(track) {
  audio.src = track.file;
  nowTitle.textContent = track.title;
  nowArtist.textContent = track.artist || "Unknown artist";
  audio.play().catch(() => { nowArtist.textContent = "Play dabakar playback shuru karein."; });
}
function render() {
  const q = search.value.trim().toLowerCase();
  const filtered = tracks.filter(t => (t.title + " " + (t.artist || "")).toLowerCase().includes(q));
  count.textContent = `${filtered.length} song${filtered.length === 1 ? "" : "s"}`;
  list.innerHTML = "";
  if (!filtered.length) {
    list.innerHTML = '<div class="empty">Koi matching song nahi mila. Spelling check karein.</div>';
    return;
  }
  filtered.forEach(track => {
    const card = document.createElement("article");
    card.className = "song";
    const cover = document.createElement("div");
    cover.className = "cover";
    if (track.cover) {
      const img = document.createElement("img");
      img.src = track.cover; img.alt = ""; img.loading = "lazy";
      img.onerror = () => { cover.textContent = "♫"; };
      cover.appendChild(img);
    } else cover.textContent = "♫";
    const info = document.createElement("div"); info.className = "info";
    const title = document.createElement("h3"); title.textContent = track.title;
    const artist = document.createElement("p"); artist.textContent = track.artist || "Independent artist";
    const actions = document.createElement("div"); actions.className = "actions";
    const play = document.createElement("button"); play.className = "play"; play.textContent = "▶ Play";
    play.addEventListener("click", () => playTrack(track));
    const download = document.createElement("a"); download.className = "download"; download.textContent = "↓ Download";
    download.href = track.file; download.download = track.file.split("/").pop();
    actions.append(play, download); info.append(title, artist, actions); card.append(cover, info); list.appendChild(card);
  });
}
search.addEventListener("input", render);
document.getElementById("clear").addEventListener("click", () => { search.value = ""; render(); search.focus(); });
render();
