/* ============================================
   Chronos Time Pieces — script.js
   ============================================ */

// Set the current year in the footer automatically.
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Inventory =====
// Each watch is one object. To add a watch, copy a block and edit the values.
// Brand, model, ref, year, and price are plain facts — fine to use.
// (Photos and description text are what must be your own.)
const watches = [
  { brand: "Rolex", model: "Submariner Date",       ref: "126610LN",  year: 2022, cardPrice: 14900, wirePrice: 14250 },
  { brand: "Omega", model: "Speedmaster Moonwatch", ref: "310.30.42", year: 2022, cardPrice: 6900,  wirePrice: 6450  },
  { brand: "Rolex", model: "Datejust 41",           ref: "126300",    year: 2021, cardPrice: 12200, wirePrice: 11650 },
];

// Turn a number into a price string: 14250 -> "$14,250"
function money(n) {
  return "$" + n.toLocaleString("en-US");
}

// Build the HTML for ONE watch card from one object.
function watchCard(w) {
  return `
    <article class="watch-card">
      <div class="watch-photo">Photo coming soon</div>
      <p class="watch-brand">${w.brand}</p>
      <h3 class="watch-model">${w.model}</h3>
      <p class="watch-ref">Ref. ${w.ref} · ${w.year}</p>
      <p class="card-price">Card ${money(w.cardPrice)}</p>
      <p class="wire-label">Cash / Wire Price</p>
      <p class="wire-price">${money(w.wirePrice)}</p>
      <button class="inquire-btn">Request wire price</button>
    </article>
  `;
}

// Build a card for every watch and drop them all into the grid.
const grid = document.getElementById("watch-grid");
grid.innerHTML = watches.map(watchCard).join("");