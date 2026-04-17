const profile = {
  name: "Zinny",
  bio: "Frontend developer building accessible interfaces and scalable UI systems.",
  avatar: "./images/dp.jpg",
  socials: [    { name: "twitter", url: "https://twitter.com" },
    { name: "github", url: "https://github.com" },
    { name: "linkedin", url: "https://linkedin.com" }
  ],
  hobbies: ["Coding", "Music", "Reading docs"],
  dislikes: ["Messy UI", "Unclear requirements", "Slow websites"]
};

const nameEl = document.getElementById("name");
const bioEl = document.getElementById("bio");
const avatarEl = document.getElementById("avatar");
const socialsEl = document.getElementById("socials");
const hobbiesEl = document.getElementById("hobbies");
const dislikesEl = document.getElementById("dislikes");
const timeEl = document.getElementById("time");

function renderProfile() {
  nameEl.textContent = profile.name;
  bioEl.textContent = profile.bio;
  avatarEl.src = profile.avatar;

  socialsEl.innerHTML = profile.socials
    .map(s =>
      `<a
        href="${s.url}"
        target="_blank"
        rel="noopener noreferrer"
        data-testid="test-user-social-${s.name}"
      >${s.name}</a>`
    )
    .join(" ");

  hobbiesEl.innerHTML = profile.hobbies
    .map(h => `<li>${h}</li>`)
    .join("");

  dislikesEl.innerHTML = profile.dislikes
    .map(d => `<li>${d}</li>`)
    .join("");
}

function updateTime() {
  timeEl.textContent = Date.now();
}

renderProfile();
updateTime();
setInterval(updateTime, 1000);