// ================================
// 🎵 Forest Blakk - Fall Into Me (sincronizado)
// ================================

var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// 🔧 Ajuste fino de sincronía si notas micro-retraso o adelanto.
// Valores negativos = letras antes; positivos = letras después.
let LYRICS_OFFSET = -0.35;

// Letras y tiempos exactos (segundos)
const lyricsData = [
  { text: "The day that I met you, the world had", time: 8 },
  { text: "just spit me out", time: 12 },
  { text: "On my way to the bottom, sure I'd", time: 15 },
  { text: "never be found", time: 20 },
  { text: "Then you saw me for me, made me", time: 23 },
  { text: "believe in myself", time: 28 },
  { text: "On the day that I met you", time: 32 },
  { text: "It all turned around", time: 35 },
  { text: "You said close your eyes, don't", time: 38 },
  { text: "look down", time: 43 },
  { text: "Fall into me and I'll catch you darling", time: 44 },
  { text: "We'll dance in the street like nobody's watching", time: 48 },
  { text: "It's just you and me and the song on repeat in my head", time: 55 },
  { text: "Playing over and over", time: 59 },
  { text: "I'm drunk on your voice, high on the moment", time: 63 },
  { text: "I'd fall for you twice if that's what you wanted", time: 67 },
  { text: "I'd give you my life from now till forever", time: 71 },
  { text: "I'm falling in love with you over and over again", time: 75 },

  { text: "Until I had met you, there's no sun in my sky", time: 81 },
  { text: "No mirrors for monsters and no love inside", time: 90 },
  { text: "Then you walked down those stairs", time: 96 },
  { text: "And I knew my heart wasn't mine", time: 100 },
  { text: "On the day that I met you my whole world came alive", time: 105 },
  { text: "You said close your eyes, I got you now", time: 112 },
  { text: "Fall into me and I'll catch you darling", time: 117 },
  { text: "We'll dance in the street like nobody's watching", time: 121 },
  { text: "It's just you and me and the song on repeat in my head", time: 127 },
  { text: "Playing over and over", time: 132 },
  { text: "I'm drunk on your voice, high on the moment", time: 136 },
  { text: "I'd fall for you twice, if that's what you wanted", time: 140 },
  { text: "I'd give you my life from now till forever", time: 144 },
  { text: "I'm falling in love with you over and over again", time: 148 },

  { text: "I'm falling in love with you", time: 154 },
  { text: "I'm falling in love with you", time: 158 },
  { text: "I'm falling in love with you over and over", time: 162 },
  { text: "I'm falling in love with you over and over", time: 167 },
  { text: "Fall into me and I'll catch you darling", time: 171 },
  { text: "Let's dance in the street like nobody's watching", time: 175 },
  { text: "It's just you and me and the song on repeat in my head", time: 180 },
  { text: "Playing over and over", time: 184 },
  { text: "I'm drunk on your voice, high on the moment", time: 188 },
  { text: "I'd fall for you twice if that's what you wanted", time: 192 },
  { text: "I'd give you my life from now till forever", time: 196 },
  { text: "I'm falling in love with you over and over again", time: 200 },
  { text: "Fall into me and I'll catch you darling", time: 206 },
  { text: "Let's dance in the streets like nobody's watching", time: 209 },
  { text: "It's just you and me and the song on repeat in our heads", time: 213 },
];

// 🎵 Render en tiempo real (suave y preciso)
let currentIndex = -1;

function updateLyrics() {
  const t = audio.currentTime + LYRICS_OFFSET;
  let next = lyricsData.findIndex(
    (line, i) =>
      t >= line.time && (i === lyricsData.length - 1 || t < lyricsData[i + 1].time)
  );

  if (next !== -1 && next !== currentIndex) {
    currentIndex = next;
    lyrics.innerHTML = lyricsData[currentIndex].text;
    lyrics.style.opacity = 1;
  } else if (next === -1) {
    lyrics.style.opacity = 0;
  }

  requestAnimationFrame(updateLyrics);
}

audio.addEventListener("play", () => requestAnimationFrame(updateLyrics));

// ✨ Oculta el título al final (~3:25)
setTimeout(() => {
  const titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(() => (titulo.style.display = "none"), 3000);
}, 205000);
