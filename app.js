// ===== Navigation =====
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(link.dataset.section);
  });
});

function showSection(id, skipReset) {
  if (id === 'tools' && typeof requireAuth === 'function' && !requireAuth()) {
    window._pendingAuthAction = () => showSection(id, skipReset);
    return;
  }
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  const navLink = document.querySelector(`[data-section="${id}"]`);
  if (navLink) navLink.classList.add('active');
  if (id === 'favorites') renderFavorites();
  if (id === 'explore' && !skipReset) {
    currentRide = 'all';
    currentState = 'all';
    currentCategory = 'all';
    searchQuery = '';
    document.getElementById('search-input').value = '';
    updateFilters();
    renderAll();
  }
}

// ===== Favorites =====
let favorites = JSON.parse(localStorage.getItem('payanam-favs') || '[]');

function toggleFav(id) {
  const idx = favorites.indexOf(id);
  if (idx > -1) favorites.splice(idx, 1);
  else favorites.push(id);
  localStorage.setItem('payanam-favs', JSON.stringify(favorites));
  renderAll();
}

function isFav(id) { return favorites.includes(id); }

// ===== Filters =====
let currentRide = 'all';
let currentState = 'all';
let currentCategory = 'all';
let searchQuery = '';

document.querySelectorAll('.ride-card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.ride-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    currentRide = card.dataset.ride;
    currentState = 'all';
    currentCategory = 'all';
    searchQuery = '';
    document.getElementById('search-input').value = '';
    setTimeout(() => {
      showSection('explore', true);
      updateFilters();
      renderAll();
    }, 400);
  });
});

function buildStateButtons() {
  const container = document.querySelector('.state-filter');
  states.forEach(state => {
    const btn = document.createElement('button');
    btn.className = 'state-btn';
    btn.dataset.state = state;
    btn.textContent = state;
    container.appendChild(btn);
  });
  container.querySelectorAll('.state-btn').forEach(btn => {
    btn.addEventListener('click', () => { currentState = btn.dataset.state; updateFilters(); renderAll(); });
  });
}

function buildCategoryButtons() {
  const container = document.querySelector('.category-filter');
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'cat-btn';
    btn.dataset.category = cat.id;
    btn.textContent = cat.label;
    container.appendChild(btn);
  });
  container.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => { currentCategory = btn.dataset.category; updateFilters(); renderAll(); });
  });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => { currentRide = btn.dataset.filter; updateFilters(); renderAll(); });
});

// Search
document.getElementById('search-input').addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  if (searchQuery) {
    currentRide = 'all';
    currentState = 'all';
    currentCategory = 'all';
    updateFilters();
  }
  renderAll();
});

function updateFilters() {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.filter-btn[data-filter="${currentRide}"]`).classList.add('active');
  document.querySelectorAll('.state-btn').forEach(b => b.classList.remove('active'));
  const sb = document.querySelector(`.state-btn[data-state="${currentState}"]`);
  if (sb) sb.classList.add('active');
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  const cb = document.querySelector(`.cat-btn[data-category="${currentCategory}"]`);
  if (cb) cb.classList.add('active');
}

function getFiltered() {
  return destinations.filter(d => {
    const rideMatch = currentRide === 'all' || d.rideTypes.includes(currentRide);
    const stateMatch = currentState === 'all' || d.state === currentState;
    const catMatch = currentCategory === 'all' || d.category === currentCategory;
    const searchMatch = !searchQuery || d.name.toLowerCase().includes(searchQuery) || d.state.toLowerCase().includes(searchQuery) || d.description.toLowerCase().includes(searchQuery);
    return rideMatch && stateMatch && catMatch && searchMatch;
  });
}

const categoryLabels = { devotional: "🙏 Devotional", trekking: "🥾 Trekking", "hill-station": "🏔️ Hill Stations", beach: "🏖️ Beaches" };

// ===== Image helpers =====
function getImageUrl(dest) {
  if (typeof destinationImages !== 'undefined' && destinationImages[dest.name]) return destinationImages[dest.name];
  const q = encodeURIComponent(dest.name.split('(')[0].trim() + ' ' + dest.state + ' India');
  return `https://source.unsplash.com/600x400/?${q}`;
}

function getSpotImageUrl(spotName, _destName, state) {
  if (typeof spotImages !== 'undefined' && spotImages[spotName]) return spotImages[spotName];
  const q = encodeURIComponent(spotName + ' ' + state + ' India');
  return `https://source.unsplash.com/400x250/?${q}`;
}

function getDifficultyTag(desc) {
  if (desc.startsWith('🟢')) return '<span class="tag easy">🟢 Easy</span>';
  if (desc.startsWith('🟡')) return '<span class="tag moderate">🟡 Moderate</span>';
  if (desc.startsWith('🔴')) return '<span class="tag tough">🔴 Tough</span>';
  return '';
}

// ===== Render destination card HTML =====
function isSeasonalNow(category) {
  const month = new Date().getMonth() + 1;
  return typeof seasonalMonths !== 'undefined' && seasonalMonths[category] && seasonalMonths[category].includes(month);
}

function destCardHTML(dest) {
  return `
    <div class="dest-card" tabindex="0" role="button" aria-label="View details for ${dest.name}" data-id="${dest.id}">
      <div class="dest-img">
        <img src="${getImageUrl(dest)}" alt="${dest.name}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <span class="dest-img-fallback">${dest.emoji}</span>
        <button class="fav-btn ${isFav(dest.id) ? 'active' : ''}" data-fav="${dest.id}" aria-label="Save ${dest.name}">
          ${isFav(dest.id) ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="dest-info">
        <h3>${dest.name}</h3>
        <p class="dest-state">${dest.state}</p>
        <div class="dest-tags">
          <span class="tag cat-tag">${categoryLabels[dest.category]}</span>
          ${getDifficultyTag(dest.description)}
          ${dest.rideTypes.map(r => `<span class="tag">${r}</span>`).join('')}
        </div>
      </div>
    </div>`;
}

function bindCardEvents(container) {
  container.querySelectorAll('.dest-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.fav-btn')) return;
      openModal(Number(card.dataset.id));
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(Number(card.dataset.id)); }
    });
  });
  container.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFav(Number(btn.dataset.fav));
    });
  });
}

// ===== Render All (Explore) =====
function renderAll() {
  const container = document.getElementById('destinations-container');
  const filtered = getFiltered();

  const banner = document.getElementById('trek-info-banner');
  banner.classList.toggle('visible', filtered.some(d => d.category === 'trekking' && d.state === 'Tamil Nadu'));
  const epassBanner = document.getElementById('epass-banner');
  epassBanner.classList.toggle('visible', filtered.some(d => d.category === 'hill-station' && d.state === 'Tamil Nadu'));

  const grouped = {};
  filtered.forEach(d => {
    if (!grouped[d.state]) grouped[d.state] = {};
    if (!grouped[d.state][d.category]) grouped[d.state][d.category] = [];
    grouped[d.state][d.category].push(d);
  });

  if (Object.keys(grouped).length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--gray);padding:3rem;">No destinations found.</p>';
    return;
  }

  container.innerHTML = Object.entries(grouped).map(([state, cats]) => `
    <div class="state-group">
      <h3>📍 ${state}</h3>
      ${Object.entries(cats).map(([cat, dests]) => `
        <div class="category-group">
          <h4 class="cat-label">${categoryLabels[cat] || cat}</h4>
          <div class="destinations-grid">${dests.map(d => destCardHTML(d)).join('')}</div>
        </div>
      `).join('')}
    </div>
  `).join('');

  bindCardEvents(container);
}

// ===== Render Favorites =====
function renderFavorites() {
  const container = document.getElementById('fav-container');
  const empty = document.getElementById('fav-empty');
  const favDests = destinations.filter(d => isFav(d.id));

  if (favDests.length === 0) {
    container.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';
  container.innerHTML = favDests.map(d => destCardHTML(d)).join('');
  bindCardEvents(container);
}

// ===== Modal =====
let currentMap = null;

function openModal(id) {
  if (typeof requireAuth === 'function' && !requireAuth()) {
    window._pendingAuthAction = () => openModal(id);
    return;
  }
  const dest = destinations.find(d => d.id === id);
  if (!dest) return;
  if (currentMap) { currentMap.remove(); currentMap = null; }

  const coords = typeof destinationCoords !== 'undefined' && destinationCoords[dest.name];
  const bestTime = typeof bestTimeToVisit !== 'undefined' && bestTimeToVisit[dest.category];

  document.getElementById('modal-content').innerHTML = `
    <img class="modal-hero-img" src="${getImageUrl(dest)}" alt="${dest.name}" loading="lazy">
    <div class="modal-title-row">
      <h2>${dest.emoji} ${dest.name}</h2>
      <button class="fav-btn modal-fav ${isFav(dest.id) ? 'active' : ''}" data-fav="${dest.id}">${isFav(dest.id) ? '❤️' : '🤍'}</button>
    </div>
    <p class="modal-state">${dest.state} · ${categoryLabels[dest.category]}</p>
    ${bestTime ? `<p class="best-time">🗓️ Best time: ${bestTime}</p>` : ''}
    <p>${dest.description}</p>

    ${coords ? `<h4>🗺️ Location</h4><div id="modal-map" class="modal-map"></div><p class="map-hint">📍 Click any marker for directions</p>` : ''}

    <h4>📍 Top Spots</h4>
    <div class="spots-grid">
      ${dest.spots.map(s => `
        <div class="spot-card">
          <img src="${getSpotImageUrl(s.name, dest.name, dest.state)}" alt="${s.name}" loading="lazy" onerror="this.style.display='none'">
          <div class="spot-info">
            <strong>${s.name}</strong>
            <span>${s.detail}</span>
            ${s.timing ? `<span class="spot-timing">🕐 ${s.timing}</span>` : ''}
          </div>
        </div>
      `).join('')}
    </div>

    <h4>🏨 Hotels</h4>
    <ul>${dest.hotels.map(h => `<li><strong>${h.name}</strong><span>${h.detail}</span></li>`).join('')}</ul>

    <h4>🏡 Stays</h4>
    <ul>${dest.stays.map(s => `<li><strong>${s.name}</strong><span>${s.detail}</span></li>`).join('')}</ul>

    ${(typeof foodSpecialties !== 'undefined' && foodSpecialties[dest.name]) ? `
    <h4>🍽️ Must-Try Food</h4>
    <div class="food-tags">${foodSpecialties[dest.name].map(f => `<span class="food-tag">${f}</span>`).join('')}</div>
    ` : ''}

    <h4>📍 Nearby Destinations</h4>
    <div class="nearby-grid" id="nearby-grid"></div>
  `;

  // Modal fav button
  document.querySelector('.modal-fav').addEventListener('click', (e) => {
    toggleFav(Number(e.target.dataset.fav));
    e.target.textContent = isFav(id) ? '❤️' : '🤍';
    e.target.classList.toggle('active', isFav(id));
  });

  // Nearby destinations
  const nearbyGrid = document.getElementById('nearby-grid');
  if (coords && nearbyGrid) {
    const nearby = destinations
      .filter(d => d.id !== dest.id && destinationCoords[d.name])
      .map(d => ({ dest: d, dist: haversine(coords, destinationCoords[d.name]) * 1.35 }))
      .filter(n => n.dist < 150)
      .sort((a, b) => a.dist - b.dist)
      .slice(0, 4);
    if (nearby.length > 0) {
      nearbyGrid.innerHTML = nearby.map(n => `
        <div class="nearby-card" data-id="${n.dest.id}">
          <img src="${getImageUrl(n.dest)}" alt="${n.dest.name}" loading="lazy" onerror="this.style.display='none'">
          <div class="nearby-info">
            <strong>${n.dest.emoji} ${n.dest.name}</strong>
            <span>${n.dist.toFixed(0)} km away · ${categoryLabels[n.dest.category]}</span>
          </div>
        </div>
      `).join('');
      nearbyGrid.querySelectorAll('.nearby-card').forEach(card => {
        card.addEventListener('click', () => openModal(Number(card.dataset.id)));
      });
    } else {
      nearbyGrid.innerHTML = '<p style="color:var(--gray);font-size:0.9rem;">No destinations within 150 km</p>';
    }
  }

  document.getElementById('modal-overlay').classList.add('open');

  // Map
  if (coords) {
    setTimeout(() => {
      const mapEl = document.getElementById('modal-map');
      if (!mapEl) return;
      const markers = [];
      dest.spots.forEach(s => {
        const sc = typeof spotCoords !== 'undefined' && spotCoords[s.name];
        if (sc) markers.push({ name: s.name, coords: sc });
      });

      currentMap = L.map('modal-map', { scrollWheelZoom: false });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(currentMap);

      const destIcon = L.divIcon({ className: 'dest-marker', html: `<div style="background:#ff6b35;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-size:16px;box-shadow:0 2px 8px rgba(0,0,0,0.3);border:2px solid #fff;">${dest.emoji}</div>`, iconSize: [32, 32], iconAnchor: [16, 16] });
      L.marker(coords, { icon: destIcon }).addTo(currentMap).bindPopup(`<strong>${dest.emoji} ${dest.name}</strong><br><a href="https://www.google.com/maps/dir/?api=1&destination=${coords[0]},${coords[1]}" target="_blank" style="color:#ff6b35;font-weight:600;">Get Directions →</a>`);

      const spotIcon = L.divIcon({ className: 'spot-marker', html: '<div style="background:#1a73e8;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:11px;box-shadow:0 2px 6px rgba(0,0,0,0.3);border:2px solid #fff;">📍</div>', iconSize: [24, 24], iconAnchor: [12, 12] });

      const allPts = [coords];
      markers.forEach(m => {
        allPts.push(m.coords);
        L.marker(m.coords, { icon: spotIcon }).addTo(currentMap).bindPopup(`<strong>${m.name}</strong><br><a href="https://www.google.com/maps/dir/?api=1&destination=${m.coords[0]},${m.coords[1]}" target="_blank" style="color:#ff6b35;font-weight:600;">Get Directions →</a>`);
      });

      if (allPts.length > 1) currentMap.fitBounds(L.latLngBounds(allPts.map(p => L.latLng(p[0], p[1]))), { padding: [30, 30], maxZoom: 14 });
      else currentMap.setView(coords, 13);
    }, 100);
  }
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

function closeModal() {
  if (currentMap) { currentMap.remove(); currentMap = null; }
  document.getElementById('modal-overlay').classList.remove('open');
}

// ===== Tools Tabs =====
document.querySelectorAll('.tool-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tool-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tool-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tool-' + tab.dataset.tool).classList.add('active');
  });
});

// ===== Fuel Calculator =====
document.getElementById('calc-fuel-btn').addEventListener('click', () => {
  const price = parseFloat(document.getElementById('fuel-price').value);
  const mileage = parseFloat(document.getElementById('mileage').value);
  const distance = parseFloat(document.getElementById('distance').value);
  if (!price || !mileage || !distance || price <= 0 || mileage <= 0 || distance <= 0) { alert('Please fill all fields with valid values'); return; }
  const litres = distance / mileage;
  const cost = litres * price;
  document.getElementById('res-litres').textContent = litres.toFixed(2) + ' L';
  document.getElementById('res-cost').textContent = '₹' + cost.toFixed(2);
  document.getElementById('res-perkm').textContent = '₹' + (cost / distance).toFixed(2);
  document.getElementById('res-round').textContent = '₹' + (cost * 2).toFixed(2);
  document.getElementById('fuel-result').style.display = 'block';
});

document.getElementById('vehicle-type').addEventListener('change', (e) => {
  const m = document.getElementById('mileage');
  if (!m.value) m.value = e.target.value === 'bike' ? 45 : 15;
});

// ===== Distance Calculator =====
function buildDistDropdowns() {
  const states = Object.keys(distanceLocations).sort();
  ['dist-from-state', 'dist-to-state'].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = '<option value="">Select State</option>' + states.map(s => `<option value="${s}">${s}</option>`).join('');
  });

  // Wire state → city cascading
  document.getElementById('dist-from-state').addEventListener('change', (e) => {
    populateCities('dist-from-city', e.target.value);
  });
  document.getElementById('dist-to-state').addEventListener('change', (e) => {
    populateCities('dist-to-city', e.target.value);
  });

  // Swap button
  document.getElementById('dist-swap').addEventListener('click', () => {
    const fs = document.getElementById('dist-from-state');
    const fc = document.getElementById('dist-from-city');
    const ts = document.getElementById('dist-to-state');
    const tc = document.getElementById('dist-to-city');
    const tmpS = fs.value, tmpC = fc.value;
    fs.value = ts.value; fs.dispatchEvent(new Event('change'));
    ts.value = tmpS; ts.dispatchEvent(new Event('change'));
    setTimeout(() => { fc.value = tc.value; tc.value = tmpC; }, 50);
  });
}

function populateCities(selectId, state) {
  const sel = document.getElementById(selectId);
  if (!state || !distanceLocations[state]) {
    sel.innerHTML = '<option value="">Select City/District</option>';
    return;
  }
  const cities = Object.keys(distanceLocations[state]).sort();
  sel.innerHTML = '<option value="">Select City/District</option>' + cities.map(c => `<option value="${c}">${c}</option>`).join('');
}

function getDistCoords(stateId, cityId) {
  const state = document.getElementById(stateId).value;
  const city = document.getElementById(cityId).value;
  if (!state || !city || !distanceLocations[state] || !distanceLocations[state][city]) return null;
  return { name: city + ', ' + state, coords: distanceLocations[state][city] };
}

function haversine(a, b) {
  const R = 6371;
  const dLat = (b[0] - a[0]) * Math.PI / 180;
  const dLon = (b[1] - a[1]) * Math.PI / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a[0] * Math.PI / 180) * Math.cos(b[0] * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

let distMap = null;
document.getElementById('calc-dist-btn').addEventListener('click', () => {
  const from = getDistCoords('dist-from-state', 'dist-from-city');
  const to = getDistCoords('dist-to-state', 'dist-to-city');
  if (!from || !to) { alert('Select state and city for both From and To'); return; }
  if (from.name === to.name) { alert('Pick two different locations'); return; }

  const a = from.coords, b = to.coords;
  const straight = haversine(a, b);
  const road = straight * 1.35;

  document.getElementById('res-dist').textContent = straight.toFixed(1) + ' km';
  document.getElementById('res-road').textContent = '~' + road.toFixed(0) + ' km';
  document.getElementById('res-bike-time').textContent = '~' + (road / 50).toFixed(1) + ' hrs';
  document.getElementById('res-car-time').textContent = '~' + (road / 60).toFixed(1) + ' hrs';
  document.getElementById('dist-result').style.display = 'block';

  if (distMap) { distMap.remove(); distMap = null; }
  setTimeout(() => {
    const el = document.getElementById('dist-map');
    if (!el) return;
    distMap = L.map('dist-map', { scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap', maxZoom: 18
    }).addTo(distMap);
    L.marker(a).addTo(distMap).bindPopup(`<strong>${from.name}</strong>`);
    L.marker(b).addTo(distMap).bindPopup(`<strong>${to.name}</strong>`);
    L.polyline([a, b], { color: '#ff6b35', weight: 3, dashArray: '8 8' }).addTo(distMap);
    distMap.fitBounds(L.latLngBounds([L.latLng(a[0], a[1]), L.latLng(b[0], b[1])]), { padding: [40, 40] });
  }, 100);
});

// ===== Toll Estimator =====
let tollVehicleType = 'car';
let tollMap = null;

// Populate toll dropdowns (reuse distanceLocations)
function buildTollDropdowns() {
  const states = Object.keys(distanceLocations).sort();
  ['toll-from-state', 'toll-to-state'].forEach(id => {
    const sel = document.getElementById(id);
    sel.innerHTML = '<option value="">Select State</option>' + states.map(s => `<option value="${s}">${s}</option>`).join('');
  });
  document.getElementById('toll-from-state').addEventListener('change', (e) => {
    populateCities('toll-from-city', e.target.value);
  });
  document.getElementById('toll-to-state').addEventListener('change', (e) => {
    populateCities('toll-to-city', e.target.value);
  });
}

// Vehicle type buttons
document.querySelectorAll('.toll-vtype').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.toll-vtype').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tollVehicleType = btn.dataset.vtype;
  });
});

// Find tolls in corridor between two points
function findTollsInCorridor(from, to, corridorWidth) {
  // corridorWidth in km — how far from the straight line to search
  const width = corridorWidth || 40;
  const results = [];

  tollPlazas.forEach(tp => {
    const point = [tp[0], tp[1]];
    // Check if toll is roughly between from and to
    const dFromStart = haversine(from, point);
    const dFromEnd = haversine(to, point);
    const totalDist = haversine(from, to);

    // Toll should be within the bounding corridor
    if (dFromStart + dFromEnd < totalDist * 1.5) {
      // Check perpendicular distance from the line
      const perpDist = pointToLineDist(from, to, point);
      if (perpDist < width) {
        results.push({
          coords: point,
          name: tp[2],
          highway: tp[3],
          rates: tp[4],
          distFromStart: dFromStart
        });
      }
    }
  });

  // Sort by distance from start
  results.sort((a, b) => a.distFromStart - b.distFromStart);
  return results;
}

// Approximate perpendicular distance from point to line (in km)
function pointToLineDist(lineStart, lineEnd, point) {
  const dAP = haversine(lineStart, point);
  const dAB = haversine(lineStart, lineEnd);
  const dBP = haversine(lineEnd, point);
  if (dAB === 0) return dAP;
  // Using triangle area method
  const s = (dAP + dAB + dBP) / 2;
  const area = Math.sqrt(Math.max(0, s * (s - dAP) * (s - dAB) * (s - dBP)));
  return (2 * area) / dAB;
}

document.getElementById('calc-toll-btn').addEventListener('click', () => {
  const from = getDistCoords('toll-from-state', 'toll-from-city');
  const to = getDistCoords('toll-to-state', 'toll-to-city');
  if (!from || !to) { alert('Select state and city for both From and To'); return; }
  if (from.name === to.name) { alert('Pick two different locations'); return; }

  const a = from.coords, b = to.coords;
  const tolls = findTollsInCorridor(a, b);
  const totalDist = haversine(a, b) * 1.35;
  let totalCost = 0;

  tolls.forEach(t => { totalCost += t.rates[tollVehicleType]; });

  document.getElementById('toll-count').textContent = tolls.length;
  document.getElementById('toll-cost').textContent = '₹' + totalCost;
  document.getElementById('toll-round').textContent = '₹' + (totalCost * 2);
  document.getElementById('toll-dist').textContent = '~' + totalDist.toFixed(0) + ' km';

  // Render toll list
  const listEl = document.getElementById('toll-list');
  if (tolls.length === 0) {
    listEl.innerHTML = '<p class="toll-empty">No major toll plazas found on this route. Short routes or local roads may not have tolls.</p>';
  } else {
    listEl.innerHTML = `<h4>🛣️ Toll Gates on Route</h4>` + tolls.map((t, i) => `
      <div class="toll-item">
        <span class="toll-num">${i + 1}</span>
        <div class="toll-detail">
          <strong>${t.name}</strong>
          <span>${t.highway} · ${t.distFromStart.toFixed(0)} km from start</span>
        </div>
        <span class="toll-price">₹${t.rates[tollVehicleType]}</span>
      </div>
    `).join('');
  }

  document.getElementById('toll-result').style.display = 'block';

  // Map
  if (tollMap) { tollMap.remove(); tollMap = null; }
  setTimeout(() => {
    const el = document.getElementById('toll-map');
    if (!el) return;
    tollMap = L.map('toll-map', { scrollWheelZoom: false });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap', maxZoom: 18
    }).addTo(tollMap);

    // Start & end markers
    const startIcon = L.divIcon({ className: 'toll-marker', html: '<div style="background:#4caf50;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 6px rgba(0,0,0,0.3);border:2px solid #fff;">🟢</div>', iconSize: [28, 28], iconAnchor: [14, 14] });
    const endIcon = L.divIcon({ className: 'toll-marker', html: '<div style="background:#f44336;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:14px;box-shadow:0 2px 6px rgba(0,0,0,0.3);border:2px solid #fff;">🔴</div>', iconSize: [28, 28], iconAnchor: [14, 14] });
    const tollIcon = L.divIcon({ className: 'toll-marker', html: '<div style="background:#ff9800;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-size:11px;box-shadow:0 2px 6px rgba(0,0,0,0.3);border:2px solid #fff;">💰</div>', iconSize: [24, 24], iconAnchor: [12, 12] });

    L.marker(a, { icon: startIcon }).addTo(tollMap).bindPopup(`<strong>Start: ${from.name}</strong>`);
    L.marker(b, { icon: endIcon }).addTo(tollMap).bindPopup(`<strong>End: ${to.name}</strong>`);

    const allPts = [a];
    tolls.forEach(t => {
      allPts.push(t.coords);
      L.marker(t.coords, { icon: tollIcon }).addTo(tollMap).bindPopup(`<strong>${t.name}</strong><br>${t.highway} · ₹${t.rates[tollVehicleType]}`);
    });
    allPts.push(b);

    // Draw route line through all points
    L.polyline(allPts, { color: '#ff6b35', weight: 3, opacity: 0.8 }).addTo(tollMap);
    tollMap.fitBounds(L.latLngBounds(allPts.map(p => L.latLng(p[0], p[1]))), { padding: [40, 40] });
  }, 100);
});

// ===== Weather Info (Open-Meteo — free, no API key) =====
function buildWeatherDropdown() {
  const sel = document.getElementById('weather-dest');
  const names = destinations.filter(d => destinationCoords[d.name]).map(d => d.name).sort();
  sel.innerHTML = '<option value="">Choose a destination...</option>' + names.map(n => `<option value="${n}">${n}</option>`).join('');
}

const weatherCodes = {
  0: ['☀️', 'Clear sky'], 1: ['🌤️', 'Mainly clear'], 2: ['⛅', 'Partly cloudy'], 3: ['☁️', 'Overcast'],
  45: ['🌫️', 'Foggy'], 48: ['🌫️', 'Rime fog'], 51: ['🌦️', 'Light drizzle'], 53: ['🌦️', 'Drizzle'],
  55: ['🌧️', 'Heavy drizzle'], 61: ['🌧️', 'Light rain'], 63: ['🌧️', 'Rain'], 65: ['🌧️', 'Heavy rain'],
  71: ['🌨️', 'Light snow'], 73: ['🌨️', 'Snow'], 75: ['❄️', 'Heavy snow'], 80: ['🌦️', 'Rain showers'],
  81: ['🌧️', 'Heavy showers'], 82: ['⛈️', 'Violent showers'], 95: ['⛈️', 'Thunderstorm'],
  96: ['⛈️', 'Thunderstorm + hail'], 99: ['⛈️', 'Severe thunderstorm']
};

function getWeatherIcon(code) { return (weatherCodes[code] || ['🌡️', 'Unknown'])[0]; }
function getWeatherDesc(code) { return (weatherCodes[code] || ['🌡️', 'Unknown'])[1]; }

function formatTime(iso) {
  const d = new Date(iso);
  return d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true });
}

function getWeatherTip(code, temp) {
  if (code >= 95) return '⛈️ Thunderstorm expected — avoid outdoor activities and trekking.';
  if (code >= 61) return '🌧️ Rain expected — carry an umbrella and waterproof bag.';
  if (code >= 51) return '🌦️ Light drizzle possible — a light raincoat would help.';
  if (code >= 71) return '🌨️ Snowfall expected — carry heavy woolens and snow gear.';
  if (temp > 38) return '🔥 Very hot — carry water, sunscreen, and a hat. Avoid midday travel.';
  if (temp > 32) return '☀️ Warm weather — stay hydrated and wear light clothing.';
  if (temp < 10) return '🥶 Cold weather — pack warm layers, gloves, and a beanie.';
  if (temp < 20) return '🧥 Pleasant but cool — a light jacket is recommended.';
  return '✅ Great weather for travel — enjoy your trip!';
}

document.getElementById('check-weather-btn').addEventListener('click', async () => {
  const name = document.getElementById('weather-dest').value;
  if (!name) { alert('Select a destination'); return; }
  const coords = destinationCoords[name];
  if (!coords) { alert('No coordinates for this destination'); return; }

  const btn = document.getElementById('check-weather-btn');
  btn.textContent = '⏳ Fetching...';
  btn.disabled = true;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&timezone=Asia/Kolkata&forecast_days=7`;
    const res = await fetch(url);
    const data = await res.json();
    const c = data.current;
    const d = data.daily;

    document.getElementById('w-icon').textContent = getWeatherIcon(c.weather_code);
    document.getElementById('w-temp').textContent = Math.round(c.temperature_2m);
    document.getElementById('w-desc').textContent = getWeatherDesc(c.weather_code);
    document.getElementById('w-location').textContent = name;
    document.getElementById('w-humidity').textContent = c.relative_humidity_2m + '%';
    document.getElementById('w-wind').textContent = c.wind_speed_10m + ' km/h';
    document.getElementById('w-feels').textContent = Math.round(c.apparent_temperature) + '°C';
    document.getElementById('w-rain').textContent = (d.precipitation_probability_max[0] || 0) + '%';
    document.getElementById('w-sunrise').textContent = formatTime(d.sunrise[0]);
    document.getElementById('w-sunset').textContent = formatTime(d.sunset[0]);

    // 7-day forecast
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    document.getElementById('w-forecast').innerHTML = '<h4>📅 7-Day Forecast</h4><div class="forecast-grid">' +
      d.time.map((t, i) => {
        const dt = new Date(t);
        return `<div class="forecast-day">
          <span class="fd-day">${days[dt.getDay()]}</span>
          <span class="fd-date">${dt.getDate()}/${dt.getMonth() + 1}</span>
          <span class="fd-icon">${getWeatherIcon(d.weather_code[i])}</span>
          <span class="fd-temps"><span class="fd-hi">${Math.round(d.temperature_2m_max[i])}°</span><span class="fd-lo">${Math.round(d.temperature_2m_min[i])}°</span></span>
          <span class="fd-rain">💧${d.precipitation_probability_max[i] || 0}%</span>
        </div>`;
      }).join('') + '</div>';

    document.getElementById('w-tip').textContent = getWeatherTip(c.weather_code, c.temperature_2m);
    document.getElementById('weather-result').style.display = 'block';
  } catch (err) {
    alert('Failed to fetch weather. Check your internet connection.');
  }
  btn.textContent = '🌤️ Check Weather';
  btn.disabled = false;
});

// ===== Compare Destinations =====
function buildCompareDropdowns() {
  const names = destinations.map(d => d.name).sort();
  ['compare-start', 'compare-a', 'compare-b'].forEach(id => {
    const sel = document.getElementById(id);
    const placeholder = id === 'compare-start' ? 'Select starting point...' : 'Choose...';
    sel.innerHTML = `<option value="">${placeholder}</option>` + names.map(n => `<option value="${n}">${n}</option>`).join('');
  });
}

let compareVehicle = 'car';
const defaultMileage = { car: 15, bike: 45, bus: 5 };
document.querySelectorAll('.compare-vtype').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.compare-vtype').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    compareVehicle = btn.dataset.cvtype;
    document.getElementById('compare-mileage').value = defaultMileage[compareVehicle];
  });
});

document.getElementById('compare-btn').addEventListener('click', () => {
  const startName = document.getElementById('compare-start').value;
  const aName = document.getElementById('compare-a').value;
  const bName = document.getElementById('compare-b').value;
  if (!startName) { alert('Select a starting point'); return; }
  if (!aName || !bName) { alert('Select both destinations'); return; }
  if (aName === bName) { alert('Pick two different destinations'); return; }

  const a = destinations.find(d => d.name === aName);
  const b = destinations.find(d => d.name === bName);
  if (!a || !b) return;

  const coordsStart = destinationCoords[startName];
  const coordsA = destinationCoords[a.name];
  const coordsB = destinationCoords[b.name];
  const roadDistA = (coordsStart && coordsA) ? (haversine(coordsStart, coordsA) * 1.35) : 0;
  const roadDistB = (coordsStart && coordsB) ? (haversine(coordsStart, coordsB) * 1.35) : 0;
  const distA = roadDistA ? roadDistA.toFixed(0) + ' km' : 'N/A';
  const distB = roadDistB ? roadDistB.toFixed(0) + ' km' : 'N/A';

  // Travel time estimation
  const avgSpeed = { car: 60, bike: 50, bus: 45 };
  const speed = avgSpeed[compareVehicle] || 60;
  const fmtTime = (km) => { if (!km) return 'N/A'; const h = Math.floor(km / speed); const m = Math.round((km / speed - h) * 60); return h + 'h ' + m + 'm'; };
  const timeA = fmtTime(roadDistA);
  const timeB = fmtTime(roadDistB);

  // Toll estimation
  const tollKey = compareVehicle === 'bike' ? null : (compareVehicle === 'bus' ? 'bus' : 'car');
  const tollsA = (coordsStart && coordsA && tollKey) ? findTollsInCorridor(coordsStart, coordsA) : [];
  const tollsB = (coordsStart && coordsB && tollKey) ? findTollsInCorridor(coordsStart, coordsB) : [];
  const tollCostA = tollsA.reduce((sum, t) => sum + (t.rates[tollKey] || 0), 0);
  const tollCostB = tollsB.reduce((sum, t) => sum + (t.rates[tollKey] || 0), 0);

  // Fuel cost estimation (user inputs)
  const mileage = parseFloat(document.getElementById('compare-mileage').value) || defaultMileage[compareVehicle];
  const fuelPrice = parseFloat(document.getElementById('compare-fuel-price').value) || 102;
  const fuelCostA = roadDistA ? Math.round((roadDistA / mileage) * fuelPrice) : 0;
  const fuelCostB = roadDistB ? Math.round((roadDistB / mileage) * fuelPrice) : 0;

  // Total trip cost (fuel + toll one-way)
  const totalA = fuelCostA + tollCostA;
  const totalB = fuelCostB + tollCostB;

  // Food specialties
  const foodA = (typeof foodSpecialties !== 'undefined' && foodSpecialties[a.name]) ? foodSpecialties[a.name].slice(0, 3).join(', ') : '—';
  const foodB = (typeof foodSpecialties !== 'undefined' && foodSpecialties[b.name]) ? foodSpecialties[b.name].slice(0, 3).join(', ') : '—';

  const bestA = bestTimeToVisit[a.category] || 'Year-round';
  const bestB = bestTimeToVisit[b.category] || 'Year-round';

  const minHotelPrice = (dest) => {
    const prices = dest.hotels.map(h => {
      const m = h.detail.match(/₹([\d,]+)/);
      return m ? parseInt(m[1].replace(',', '')) : 99999;
    });
    return Math.min(...prices);
  };

  const priceA = minHotelPrice(a);
  const priceB = minHotelPrice(b);

  function compareRow(label, valA, valB, highlight) {
    let classA = '', classB = '';
    if (highlight === 'lower') {
      if (parseFloat(valA) < parseFloat(valB)) classA = 'compare-win';
      else if (parseFloat(valB) < parseFloat(valA)) classB = 'compare-win';
    } else if (highlight === 'higher') {
      if (parseFloat(valA) > parseFloat(valB)) classA = 'compare-win';
      else if (parseFloat(valB) > parseFloat(valA)) classB = 'compare-win';
    }
    return `<div class="compare-row">
      <span class="cr-val ${classA}">${valA}</span>
      <span class="cr-label">${label}</span>
      <span class="cr-val ${classB}">${valB}</span>
    </div>`;
  }

  const vLabel = compareVehicle === 'car' ? 'Car' : compareVehicle === 'bike' ? 'Bike' : 'Bus';

  document.getElementById('compare-result').innerHTML = `
    <div class="compare-header">
      <div class="compare-col-head">
        <span class="compare-emoji">${a.emoji}</span>
        <strong>${a.name}</strong>
        <span>${a.state}</span>
      </div>
      <div class="compare-col-head compare-mid">⚖️</div>
      <div class="compare-col-head">
        <span class="compare-emoji">${b.emoji}</span>
        <strong>${b.name}</strong>
        <span>${b.state}</span>
      </div>
    </div>
    <div class="compare-body">
      ${compareRow('Category', categoryLabels[a.category], categoryLabels[b.category])}
      ${compareRow('Spots', a.spots.length, b.spots.length, 'higher')}
      ${compareRow('Hotels', a.hotels.length, b.hotels.length, 'higher')}
      ${compareRow('Min Hotel ₹/night', '₹' + priceA, '₹' + priceB, 'lower')}
      ${compareRow('Ride Types', a.rideTypes.join(', '), b.rideTypes.join(', '))}
      ${compareRow('Best Time', bestA, bestB)}
      ${compareRow('🍽️ Must Try', foodA, foodB)}
      <div class="compare-section-label">🚗 Route from ${startName} (${vLabel})</div>
      ${compareRow('Distance', distA, distB, 'lower')}
      ${compareRow('Travel Time', timeA, timeB, 'lower')}
      ${compareRow('⛽ Fuel Cost', '₹' + fuelCostA, '₹' + fuelCostB, 'lower')}
      ${tollKey ? compareRow('🛣️ Toll Gates', tollsA.length, tollsB.length, 'lower') : ''}
      ${tollKey ? compareRow('🛣️ Toll One-way', '₹' + tollCostA, '₹' + tollCostB, 'lower') : ''}
      ${tollKey ? compareRow('🛣️ Toll Round Trip', '₹' + (tollCostA * 2), '₹' + (tollCostB * 2), 'lower') : ''}
    </div>
    <div class="compare-spots">
      <div class="compare-spot-col">
        <h4>📍 Top Spots</h4>
        ${a.spots.slice(0, 5).map(s => `<div class="cs-item"><strong>${s.name}</strong><span>${s.detail}</span></div>`).join('')}
      </div>
      <div class="compare-spot-col">
        <h4>📍 Top Spots</h4>
        ${b.spots.slice(0, 5).map(s => `<div class="cs-item"><strong>${s.name}</strong><span>${s.detail}</span></div>`).join('')}
      </div>
    </div>
    <p class="toll-disclaimer">⛽ Fuel: ₹${fuelPrice}/L · Mileage: ${mileage} km/L · Tolls: Bikes exempt</p>
  `;
  document.getElementById('compare-result').style.display = 'block';
});

// ===== Packing Checklist =====
const packingData = {
  devotional: {
    essentials: ['ID Proof / Aadhaar', 'Cash + UPI-enabled phone', 'Water bottle', 'Comfortable walking shoes', 'Sunscreen', 'Small backpack'],
    clothing: ['Modest full-length clothes', 'Dhoti / Saree for temple entry', 'Extra set of clothes', 'Socks (temples require barefoot)', 'Shawl / Dupatta for head cover'],
    extras: ['Prasad containers', 'Small pooja items', 'Coin pouch for donations', 'Wet wipes', 'Hand sanitizer', 'Umbrella']
  },
  trekking: {
    essentials: ['Trekking shoes (ankle support)', 'Backpack (30-40L)', 'Water bottles (2L min)', 'First aid kit', 'Torch / Headlamp', 'Power bank', 'Whistle'],
    clothing: ['Moisture-wicking t-shirts', 'Trek pants (quick-dry)', 'Windcheater / Rain jacket', 'Warm fleece layer', 'Cap / Hat', 'Extra socks (2 pairs)', 'Gloves (for cold treks)'],
    extras: ['Trail snacks (nuts, energy bars)', 'ORS packets', 'Insect repellent', 'Sunscreen SPF 50+', 'Trekking pole', 'Garbage bags (carry your waste)', 'Camera', 'Binoculars']
  },
  'hill-station': {
    essentials: ['Warm jacket / Sweater', 'ID Proof', 'Cash (ATMs may not work)', 'Power bank', 'Medicines', 'Umbrella'],
    clothing: ['Layered warm clothing', 'Thermal innerwear', 'Woolen cap & muffler', 'Warm socks', 'Waterproof jacket', 'Comfortable walking shoes'],
    extras: ['Hot water flask', 'Moisturizer & lip balm', 'Sunglasses', 'Camera', 'Board games / Cards', 'Snacks for the drive', 'E-Pass (Ooty/Kodaikanal)']
  },
  beach: {
    essentials: ['Sunscreen SPF 50+', 'Sunglasses', 'Water bottle', 'Waterproof phone pouch', 'Flip flops + Shoes', 'Light backpack'],
    clothing: ['Swimwear', 'Light cotton clothes', 'Beach shorts', 'Cover-up / Sarong', 'Hat / Cap', 'Extra change of clothes'],
    extras: ['Beach towel', 'Snorkeling gear (optional)', 'Waterproof camera', 'Aloe vera gel', 'Insect repellent', 'Reusable bag', 'Portable speaker']
  }
};

const durationMultiplier = { day: 1, weekend: 1.5, week: 3 };

let currentPackType = 'devotional';
let currentDuration = 'day';
let checkedItems = JSON.parse(localStorage.getItem('payanam-packing') || '{}');

document.querySelectorAll('.packing-type').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.packing-type').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentPackType = btn.dataset.pack;
    renderPacking();
  });
});

document.querySelectorAll('.dur-type').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dur-type').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentDuration = btn.dataset.dur;
    renderPacking();
  });
});

document.getElementById('pack-reset').addEventListener('click', () => {
  checkedItems = {};
  localStorage.removeItem('payanam-packing');
  renderPacking();
});

function renderPacking() {
  const data = packingData[currentPackType];
  if (!data) return;
  const mult = durationMultiplier[currentDuration];
  const key = currentPackType + '-' + currentDuration;

  const sections = [
    { title: '🎒 Essentials', items: data.essentials },
    { title: '👕 Clothing' + (mult > 1 ? ` (×${mult} sets)` : ''), items: data.clothing },
    { title: '✨ Extras & Nice-to-Have', items: data.extras }
  ];

  let totalItems = 0;
  let checkedCount = 0;

  const html = sections.map(sec => {
    return `<div class="pack-section">
      <h4>${sec.title}</h4>
      ${sec.items.map(item => {
        const itemKey = key + ':' + item;
        totalItems++;
        const checked = checkedItems[itemKey] ? 'checked' : '';
        if (checked) checkedCount++;
        return `<label class="pack-item ${checked}">
          <input type="checkbox" ${checked} data-key="${itemKey}">
          <span class="pack-check"></span>
          <span class="pack-text">${item}</span>
        </label>`;
      }).join('')}
    </div>`;
  }).join('');

  document.getElementById('packing-list').innerHTML = html;
  updatePackProgress(checkedCount, totalItems);

  // Bind checkboxes
  document.querySelectorAll('.pack-item input').forEach(cb => {
    cb.addEventListener('change', (e) => {
      const k = e.target.dataset.key;
      if (e.target.checked) checkedItems[k] = true;
      else delete checkedItems[k];
      localStorage.setItem('payanam-packing', JSON.stringify(checkedItems));
      e.target.parentElement.classList.toggle('checked', e.target.checked);
      // Recount
      const all = document.querySelectorAll('.pack-item input');
      const done = document.querySelectorAll('.pack-item input:checked');
      updatePackProgress(done.length, all.length);
    });
  });
}

function updatePackProgress(done, total) {
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;
  document.getElementById('pack-progress').innerHTML = `${done} / ${total} packed <span class="pack-pct">(${pct}%)</span>`;
}

// ===== Budget Trip Planner =====
let budgetVehicle = 'car';
document.querySelectorAll('[data-bvtype]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.smart-vtypes').querySelectorAll('.smart-vtype').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    budgetVehicle = btn.dataset.bvtype;
  });
});

function buildBudgetDropdown() {
  const names = destinations.map(d => d.name).sort();
  const sel = document.getElementById('budget-start');
  sel.innerHTML = '<option value="">Select location...</option>' + names.map(n => `<option value="${n}">${n}</option>`).join('');
}

document.getElementById('budget-find-btn').addEventListener('click', () => {
  const budget = parseFloat(document.getElementById('budget-amount').value);
  const startName = document.getElementById('budget-start').value;
  const nights = parseInt(document.getElementById('budget-nights').value);
  if (!budget || budget < 500) { alert('Enter a budget of at least ₹500'); return; }
  if (!startName) { alert('Select your starting location'); return; }

  const startCoords = destinationCoords[startName];
  if (!startCoords) { alert('Location coordinates not found'); return; }

  const mileage = budgetVehicle === 'bike' ? 45 : 15;
  const fuelPrice = 102;
  const tollKey = budgetVehicle === 'bike' ? null : 'car';

  const results = destinations
    .filter(d => d.name !== startName && destinationCoords[d.name])
    .map(d => {
      const coords = destinationCoords[d.name];
      const dist = haversine(startCoords, coords) * 1.35;
      const fuelCost = Math.round((dist / mileage) * fuelPrice) * 2; // round trip
      const tolls = tollKey ? findTollsInCorridor(startCoords, coords) : [];
      const tollCost = tolls.reduce((sum, t) => sum + (t.rates[tollKey] || 0), 0) * 2;
      const minHotel = d.hotels.reduce((min, h) => {
        const m = h.detail.match(/₹([\d,]+)/);
        const p = m ? parseInt(m[1].replace(',', '')) : 99999;
        return p < min ? p : min;
      }, 99999);
      const hotelCost = minHotel * nights;
      const totalCost = fuelCost + tollCost + hotelCost;
      return { dest: d, dist, fuelCost, tollCost, hotelCost, totalCost, bestNow: isSeasonalNow(d.category) };
    })
    .filter(r => r.totalCost <= budget)
    .sort((a, b) => a.totalCost - b.totalCost);

  const container = document.getElementById('budget-results');
  if (results.length === 0) {
    container.innerHTML = '<p class="budget-empty">😔 No destinations fit this budget. Try increasing it or reducing nights.</p>';
  } else {
    container.innerHTML = `
      <p class="budget-count">🎉 ${results.length} destination${results.length > 1 ? 's' : ''} within ₹${budget} budget</p>
      <div class="budget-cards">
        ${results.slice(0, 12).map(r => `
          <div class="budget-card" data-id="${r.dest.id}">
            <img src="${getImageUrl(r.dest)}" alt="${r.dest.name}" loading="lazy" onerror="this.style.display='none'">
            <div class="budget-card-info">
              <strong>${r.dest.emoji} ${r.dest.name}</strong>
              <span class="budget-state">${r.dest.state} · ${categoryLabels[r.dest.category]}</span>
              <div class="budget-breakdown">
                <span>⛽ ₹${r.fuelCost}</span>
                <span>🛣️ ₹${r.tollCost}</span>
                <span>🏨 ₹${r.hotelCost}</span>
              </div>
              <div class="budget-total">💰 Total: ₹${r.totalCost} <span class="budget-dist">(${r.dist.toFixed(0)} km)</span></div>
            </div>
          </div>
        `).join('')}
      </div>
    `;
    container.querySelectorAll('.budget-card').forEach(card => {
      card.addEventListener('click', () => openModal(Number(card.dataset.id)));
    });
  }
  container.style.display = 'block';
});

// ===== Weekend Trip Suggest =====
let weekendVehicle = 'car';
document.querySelectorAll('[data-wvtype]').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.smart-vtypes').querySelectorAll('.smart-vtype').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    weekendVehicle = btn.dataset.wvtype;
  });
});

function buildWeekendDropdown() {
  const names = destinations.map(d => d.name).sort();
  const sel = document.getElementById('weekend-start');
  sel.innerHTML = '<option value="">Select location...</option>' + names.map(n => `<option value="${n}">${n}</option>`).join('');
}

document.getElementById('weekend-find-btn').addEventListener('click', () => {
  const startName = document.getElementById('weekend-start').value;
  if (!startName) { alert('Select your location'); return; }

  const startCoords = destinationCoords[startName];
  if (!startCoords) { alert('Location coordinates not found'); return; }

  const speed = weekendVehicle === 'bike' ? 50 : 60;
  const maxHours = 5;
  const maxDist = speed * maxHours;

  const results = destinations
    .filter(d => d.name !== startName && destinationCoords[d.name])
    .map(d => {
      const coords = destinationCoords[d.name];
      const dist = haversine(startCoords, coords) * 1.35;
      const hours = dist / speed;
      return { dest: d, dist, hours, bestNow: isSeasonalNow(d.category) };
    })
    .filter(r => r.dist <= maxDist)
    .sort((a, b) => {
      // Prioritize "best now" destinations, then by distance
      if (a.bestNow && !b.bestNow) return -1;
      if (!a.bestNow && b.bestNow) return 1;
      return a.dist - b.dist;
    });

  const container = document.getElementById('weekend-results');
  if (results.length === 0) {
    container.innerHTML = '<p class="budget-empty">😔 No destinations within 5 hours. Try a different location.</p>';
  } else {
    container.innerHTML = `
      <p class="budget-count">🚗 ${results.length} weekend getaway${results.length > 1 ? 's' : ''} within ${maxHours} hours</p>
      <div class="budget-cards">
        ${results.slice(0, 12).map(r => {
          const h = Math.floor(r.hours);
          const m = Math.round((r.hours - h) * 60);
          return `
          <div class="budget-card weekend-card" data-id="${r.dest.id}">
            <img src="${getImageUrl(r.dest)}" alt="${r.dest.name}" loading="lazy" onerror="this.style.display='none'">
            <div class="budget-card-info">
              <strong>${r.dest.emoji} ${r.dest.name}</strong>
              <span class="budget-state">${r.dest.state} · ${categoryLabels[r.dest.category]}</span>
              <div class="budget-breakdown">
                <span>📏 ${r.dist.toFixed(0)} km</span>
                <span>⏱️ ${h}h ${m}m</span>
              </div>
            </div>
          </div>
        `}).join('')}
      </div>
    `;
    container.querySelectorAll('.budget-card').forEach(card => {
      card.addEventListener('click', () => openModal(Number(card.dataset.id)));
    });
  }
  container.style.display = 'block';
});

// ===== Split Expenses =====
let splitMembers = [];
let splitExpenses = [];

document.getElementById('split-add-member').addEventListener('click', addSplitMember);
document.getElementById('split-member-name').addEventListener('keydown', (e) => { if (e.key === 'Enter') addSplitMember(); });

function addSplitMember() {
  const input = document.getElementById('split-member-name');
  const name = input.value.trim();
  if (!name) return;
  if (splitMembers.includes(name)) { alert('Member already added'); return; }
  splitMembers.push(name);
  input.value = '';
  renderSplitMembers();
  updateSplitUI();
}

function removeSplitMember(name) {
  splitMembers = splitMembers.filter(m => m !== name);
  splitExpenses = splitExpenses.filter(e => e.paidBy !== name);
  renderSplitMembers();
  updateSplitUI();
  renderSplitExpenses();
  calculateSplit();
}

function renderSplitMembers() {
  const container = document.getElementById('split-member-tags');
  container.innerHTML = splitMembers.map(m => `<span class="split-tag">${m} <button class="split-tag-remove" data-name="${m}">&times;</button></span>`).join('');
  container.querySelectorAll('.split-tag-remove').forEach(btn => {
    btn.addEventListener('click', () => removeSplitMember(btn.dataset.name));
  });
}

function updateSplitUI() {
  const show = splitMembers.length >= 2;
  document.getElementById('split-expense-section').style.display = show ? 'block' : 'none';
  const sel = document.getElementById('split-paid-by');
  sel.innerHTML = '<option value="">Who paid?</option>' + splitMembers.map(m => `<option value="${m}">${m}</option>`).join('');
}

document.getElementById('split-add-expense').addEventListener('click', () => {
  const desc = document.getElementById('split-desc').value.trim();
  const amount = parseFloat(document.getElementById('split-amount').value);
  const paidBy = document.getElementById('split-paid-by').value;
  if (!desc) { alert('Enter a description'); return; }
  if (!amount || amount <= 0) { alert('Enter a valid amount'); return; }
  if (!paidBy) { alert('Select who paid'); return; }
  splitExpenses.push({ desc, amount, paidBy });
  document.getElementById('split-desc').value = '';
  document.getElementById('split-amount').value = '';
  document.getElementById('split-paid-by').value = '';
  renderSplitExpenses();
  calculateSplit();
});

function removeSplitExpense(idx) {
  splitExpenses.splice(idx, 1);
  renderSplitExpenses();
  calculateSplit();
}

function renderSplitExpenses() {
  const container = document.getElementById('split-expenses-list');
  if (splitExpenses.length === 0) { container.innerHTML = ''; return; }
  container.innerHTML = '<h4>📋 Expenses</h4>' + splitExpenses.map((e, i) => `
    <div class="split-expense-item">
      <div class="split-expense-info">
        <strong>${e.desc}</strong>
        <span>Paid by ${e.paidBy}</span>
      </div>
      <span class="split-expense-amt">₹${e.amount.toFixed(2)}</span>
      <button class="split-expense-del" data-idx="${i}">&times;</button>
    </div>
  `).join('');
  container.querySelectorAll('.split-expense-del').forEach(btn => {
    btn.addEventListener('click', () => removeSplitExpense(Number(btn.dataset.idx)));
  });
}

function calculateSplit() {
  const summary = document.getElementById('split-summary');
  const resetBtn = document.getElementById('split-reset');
  if (splitExpenses.length === 0 || splitMembers.length < 2) {
    summary.style.display = 'none';
    resetBtn.style.display = 'none';
    document.getElementById('split-share-wa').style.display = 'none';
    return;
  }
  summary.style.display = 'block';
  resetBtn.style.display = 'inline-block';
  document.getElementById('split-share-wa').style.display = 'inline-block';

  const total = splitExpenses.reduce((s, e) => s + e.amount, 0);
  const perPerson = total / splitMembers.length;

  // Calculate how much each person paid
  const paid = {};
  splitMembers.forEach(m => paid[m] = 0);
  splitExpenses.forEach(e => paid[e.paidBy] += e.amount);

  // Net balance: positive = overpaid (is owed), negative = underpaid (owes)
  const balance = {};
  splitMembers.forEach(m => balance[m] = paid[m] - perPerson);

  // Totals grid
  document.getElementById('split-totals-grid').innerHTML = `
    <div class="fuel-stat"><span class="fuel-stat-icon">💰</span><span class="fuel-stat-label">Total Spent</span><span class="fuel-stat-value">₹${total.toFixed(2)}</span></div>
    <div class="fuel-stat"><span class="fuel-stat-icon">👤</span><span class="fuel-stat-label">Per Person</span><span class="fuel-stat-value">₹${perPerson.toFixed(2)}</span></div>
    <div class="fuel-stat"><span class="fuel-stat-icon">👥</span><span class="fuel-stat-label">Members</span><span class="fuel-stat-value">${splitMembers.length}</span></div>
    <div class="fuel-stat"><span class="fuel-stat-icon">📋</span><span class="fuel-stat-label">Expenses</span><span class="fuel-stat-value">${splitExpenses.length}</span></div>
  `;

  // Settle debts using greedy algorithm
  const debtors = []; // owe money
  const creditors = []; // are owed money
  splitMembers.forEach(m => {
    const b = Math.round(balance[m] * 100) / 100;
    if (b < -0.01) debtors.push({ name: m, amount: -b });
    else if (b > 0.01) creditors.push({ name: m, amount: b });
  });
  debtors.sort((a, b) => b.amount - a.amount);
  creditors.sort((a, b) => b.amount - a.amount);

  const settlements = [];
  let di = 0, ci = 0;
  while (di < debtors.length && ci < creditors.length) {
    const pay = Math.min(debtors[di].amount, creditors[ci].amount);
    if (pay > 0.01) {
      settlements.push({ from: debtors[di].name, to: creditors[ci].name, amount: pay });
    }
    debtors[di].amount -= pay;
    creditors[ci].amount -= pay;
    if (debtors[di].amount < 0.01) di++;
    if (creditors[ci].amount < 0.01) ci++;
  }

  const listEl = document.getElementById('split-settlements-list');
  if (settlements.length === 0) {
    listEl.innerHTML = '<p class="split-settled">✅ All settled — no payments needed!</p>';
  } else {
    listEl.innerHTML = settlements.map(s => `
      <div class="split-settle-item">
        <span class="split-from">${s.from}</span>
        <span class="split-arrow">→ pays ₹${s.amount.toFixed(2)} to →</span>
        <span class="split-to">${s.to}</span>
      </div>
    `).join('');
  }

  // Store settlements for sharing
  window._splitShareData = { total, perPerson, members: splitMembers, expenses: splitExpenses, settlements };
}

document.getElementById('split-reset').addEventListener('click', () => {
  splitMembers = [];
  splitExpenses = [];
  renderSplitMembers();
  updateSplitUI();
  renderSplitExpenses();
  document.getElementById('split-summary').style.display = 'none';
  document.getElementById('split-reset').style.display = 'none';
  document.getElementById('split-share-wa').style.display = 'none';
  window._splitShareData = null;
});

document.getElementById('split-share-wa').addEventListener('click', () => {
  const d = window._splitShareData;
  if (!d) return;
  let msg = `*TRIP EXPENSE SPLIT*\n`;
  msg += `━━━━━━━━━━━━━━━━━━\n`;
  msg += `Members: ${d.members.join(', ')}\n`;
  msg += `Total Spent: Rs.${d.total.toFixed(2)}\n`;
  msg += `Per Person: Rs.${d.perPerson.toFixed(2)}\n\n`;
  msg += `*EXPENSES*\n`;
  d.expenses.forEach((e, i) => { msg += `${i + 1}. ${e.desc} - Rs.${e.amount.toFixed(2)} (${e.paidBy} paid)\n`; });
  msg += `\n*SETTLEMENTS*\n`;
  if (d.settlements.length === 0) {
    msg += `All settled - no payments needed!\n`;
  } else {
    d.settlements.forEach((s, i) => { msg += `${i + 1}. ${s.from} pays Rs.${s.amount.toFixed(2)} to ${s.to}\n`; });
  }
  msg += `━━━━━━━━━━━━━━━━━━\n`;
  msg += `Plan your trip: https://payanam-explore.netlify.app/`;
  window.open('https://wa.me/?text=' + encodeURIComponent(msg), '_blank');
});

// ===== Init =====
buildStateButtons();
buildCategoryButtons();
buildDistDropdowns();
buildTollDropdowns();
buildWeatherDropdown();
buildCompareDropdowns();
buildBudgetDropdown();
buildWeekendDropdown();
renderPacking();
renderAll();

// ===== Back to Top Button =====
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  backToTop.classList.toggle('visible', window.scrollY > 400);
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
