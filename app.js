// Renders the food request cards from FOOD_REQUESTS (loaded from data.js),
// sorted newest to oldest, and opens each link in the same tab.

const cardsContainer = document.getElementById("food-cards");

const entries = FOOD_REQUESTS.slice().sort(
  (a, b) => new Date(b.date) - new Date(a.date)
);

if (entries.length === 0) {
  cardsContainer.innerHTML = '<p class="empty">No requests yet.</p>';
} else {
  entries.forEach((entry) => {
    const link = document.createElement("a");
    link.className = "card request-card";
    link.href = entry.link;
    link.setAttribute("aria-label", entry.title);

    const title = document.createElement("h3");
    title.textContent = entry.title;

    const meta = document.createElement("div");
    meta.className = "request-meta";

    const date = document.createElement("span");
    date.className = "request-date";
    date.textContent = formatDate(entry.date);

    const url = document.createElement("span");
    url.className = "request-url";
    url.textContent = entry.link;

    meta.appendChild(date);
    meta.appendChild(url);

    link.appendChild(title);
    link.appendChild(meta);

    cardsContainer.appendChild(link);
  });
}

function formatDate(dateStr) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
