/* =========================================================
   PERSONNALISATION RAPIDE
========================================================= */

const INITIAL_VIEW = {
  center: [49.38, -0.93],
  zoom: 10
};

const LABELS_VISIBLE_MAX_ZOOM = 10;

const HELMET_ICON_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="30" fill="#ffffff" />
  <path d="M14 34c0-11 8-20 18-20s18 9 18 20v2H14v-2z" fill="#556b2f"/>
  <rect x="12" y="36" width="40" height="8" rx="3" fill="#2f3a19"/>
  <circle cx="32" cy="32" r="30" fill="none" stroke="#111827" stroke-width="3"/>
</svg>
`;

const CATEGORIES = {
  remarkable: {
    label: "Lieu remarquable",
    color: "#c62828",
    key: "Rouge"
  },
  oldphoto: {
    label: "Photo d’époque",
    color: "#111111",
    key: "Noir"
  },
  info: {
    label: "Point d’information",
    color: "#ef6c00",
    key: "Orange"
  },
  museum: {
    label: "Musée / site visitable",
    color: "#2e7d32",
    key: "Vert"
  },
  testimony: {
    label: "Témoignage / vidéo / audio",
    color: "#6a1b9a",
    key: "Violet"
  },
  practical: {
    label: "Point pratique / logistique",
    color: "#1565c0",
    key: "Bleu"
  }
};

const POINTS = [
  {
    title: "Pointe du Hoc",
    category: "remarkable",
    lat: 49.3908,
    lng: -0.9886,
    description:
      "Site majeur du Débarquement américain, célèbre pour l’assaut des Rangers le 6 juin 1944. Lieu emblématique entre Utah et Omaha.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/59/Pointe_du_Hoc_2014_01.JPG",
    oldPhoto: "",
    video: "",
    googleMapsLink: "https://www.google.com/maps?q=49.3908,-0.9886"
  },
  {
    title: "Sainte-Mère-Église – Photo d’époque",
    category: "oldphoto",
    lat: 49.4085,
    lng: -1.3174,
    description:
      "Commune rendue célèbre par les parachutages américains. Ce point peut servir à afficher une photo ancienne liée aux combats ou à la libération.",
    image: "",
    oldPhoto:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Sainte-Mere-Eglise_1944.jpg",
    video: "",
    googleMapsLink: "https://www.google.com/maps?q=49.4085,-1.3174"
  },
  {
    title: "Carentan – Point d’information",
    category: "info",
    lat: 49.3032,
    lng: -1.2469,
    description:
      "Carentan est un point de liaison essentiel entre Utah Beach et Omaha Beach. Ce type de point peut servir à expliquer un contexte historique ou stratégique.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Carentan_les_marais.jpg",
    oldPhoto: "",
    video: "",
    googleMapsLink: "https://www.google.com/maps?q=49.3032,-1.2469"
  },
  {
    title: "Utah Beach Landing Museum",
    category: "museum",
    lat: 49.4184,
    lng: -1.1702,
    description:
      "Musée incontournable pour comprendre le débarquement américain à Utah Beach. Parfait pour un point de visite touristique.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Utah_Beach_Museum.jpg",
    oldPhoto: "",
    video: "",
    googleMapsLink: "https://www.google.com/maps?q=49.4184,-1.1702"
  },
  {
    title: "Omaha Beach – Témoignage / vidéo",
    category: "testimony",
    lat: 49.3677,
    lng: -0.8797,
    description:
      "Exemple de point destiné à intégrer un témoignage, une capsule vidéo ou un audio explicatif sur Omaha Beach.",
    image: "",
    oldPhoto: "",
    video: "https://www.youtube.com/embed/0oQ8z1mAFmI",
    googleMapsLink: "https://www.google.com/maps?q=49.3677,-0.8797"
  },
  {
    title: "Parking du cimetière américain de Colleville-sur-Mer",
    category: "practical",
    lat: 49.3592,
    lng: -0.8584,
    description:
      "Exemple de point pratique ou logistique : parking, accueil, point de départ, toilettes, restauration ou accès visiteurs.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/18/Normandy_American_Cemetery.jpg",
    oldPhoto: "",
    video: "",
    googleMapsLink: "https://www.google.com/maps?q=49.3592,-0.8584"
  }
];

const BIG_LABELS = [
  { text: "Sainte-Mère-Église", lat: 49.409, lng: -1.318 },
  { text: "Utah Beach", lat: 49.420, lng: -1.172 },
  { text: "Omaha Beach", lat: 49.370, lng: -0.880 },
  { text: "Carentan", lat: 49.303, lng: -1.247 },
  { text: "Pointe du Hoc", lat: 49.391, lng: -0.989 }
];

/* =========================================================
   OUTILS
========================================================= */

function escapeHtml(value) {
  if (typeof value !== "string") return "";
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isSafeUrl(url) {
  if (!url || typeof url !== "string") return false;
  try {
    const parsed = new URL(url, window.location.href);
    return ["http:", "https:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

function svgToDataUri(svgString) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svgString)}`;
}

function buildImageBlock(label, url, altText) {
  if (!isSafeUrl(url)) return "";
  return `
    <div>
      <div class="popup-label">${escapeHtml(label)}</div>
      <img src="${url}" alt="${escapeHtml(altText)}" loading="lazy">
    </div>
  `;
}

function buildVideoBlock(url) {
  if (!isSafeUrl(url)) return "";
  return `
    <div>
      <div class="popup-label">Vidéo</div>
      <iframe
        src="${url}"
        title="Vidéo intégrée"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        referrerpolicy="strict-origin-when-cross-origin">
      </iframe>
    </div>
  `;
}

function buildPopupContent(point) {
  const category = CATEGORIES[point.category];
  const categoryLabel = category ? category.label : "Catégorie";
  const categoryColor = category ? category.color : "#333333";

  const mediaHtml = `
    ${buildImageBlock("Image actuelle", point.image, point.title)}
    ${buildImageBlock("Photo d’époque", point.oldPhoto, point.title + " - photo d’époque")}
    ${buildVideoBlock(point.video)}
  `.trim();

  const mapsButton = isSafeUrl(point.googleMapsLink)
    ? `<a class="popup-btn" href="${point.googleMapsLink}" target="_blank" rel="noopener noreferrer">Ouvrir dans Google Maps</a>`
    : "";

  return `
    <div class="popup-content">
      <h3 class="popup-title">${escapeHtml(point.title)}</h3>
      <span class="popup-badge" style="background:${categoryColor}">
        ${escapeHtml(categoryLabel)}
      </span>
      <p class="popup-description">${escapeHtml(point.description)}</p>
      ${mediaHtml ? `<div class="popup-media">${mediaHtml}</div>` : ""}
      ${mapsButton}
    </div>
  `;
}

/* =========================================================
   INITIALISATION CARTE
========================================================= */

const map = L.map("map", {
  center: INITIAL_VIEW.center,
  zoom: INITIAL_VIEW.zoom,
  zoomControl: true
});

const classicLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }
).addTo(map);

const satelliteLayer = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 19,
    attribution: "Tiles &copy; Esri"
  }
);

L.control.layers(
  {
    "Plan classique": classicLayer,
    "Vue satellite": satelliteLayer
  },
  {},
  {
    collapsed: false
  }
).addTo(map);

L.control.scale({
  metric: true,
  imperial: false
}).addTo(map);

/* =========================================================
   FILTRES / CATÉGORIES
========================================================= */

const activeCategories = {};
Object.keys(CATEGORIES).forEach((categoryKey) => {
  activeCategories[categoryKey] = true;
});

const categoryLayers = {};
Object.keys(CATEGORIES).forEach((categoryKey) => {
  categoryLayers[categoryKey] = L.layerGroup().addTo(map);
});

POINTS.forEach((point) => {
  const category = CATEGORIES[point.category];
  if (!category) return;

  const marker = L.circleMarker([point.lat, point.lng], {
    radius: 9,
    fillColor: category.color,
    color: "#ffffff",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.92
  });

  marker.bindPopup(buildPopupContent(point), {
    maxWidth: 320
  });

  marker.addTo(categoryLayers[point.category]);
});

function updateCategoryVisibility() {
  Object.keys(CATEGORIES).forEach((categoryKey) => {
    const layer = categoryLayers[categoryKey];
    const isActive = activeCategories[categoryKey];

    if (isActive) {
      if (!map.hasLayer(layer)) {
        layer.addTo(map);
      }
    } else {
      if (map.hasLayer(layer)) {
        map.removeLayer(layer);
      }
    }
  });

  updateLegendUI();
}

function showAllCategories() {
  Object.keys(activeCategories).forEach((key) => {
    activeCategories[key] = true;
  });
  updateCategoryVisibility();
}

function hideAllCategories() {
  Object.keys(activeCategories).forEach((key) => {
    activeCategories[key] = false;
  });
  updateCategoryVisibility();
}

function showOnlyCategory(categoryKey) {
  Object.keys(activeCategories).forEach((key) => {
    activeCategories[key] = key === categoryKey;
  });
  updateCategoryVisibility();
}

function toggleCategory(categoryKey) {
  activeCategories[categoryKey] = !activeCategories[categoryKey];
  updateCategoryVisibility();
}

/* =========================================================
   LÉGENDE OUVRABLE / FERMABLE
========================================================= */

const legendList = document.getElementById("legendList");
const showAllBtn = document.getElementById("showAllBtn");
const hideAllBtn = document.getElementById("hideAllBtn");
const legendSidebar = document.getElementById("legendSidebar");
const openLegendBtn = document.getElementById("openLegendBtn");
const closeLegendBtn = document.getElementById("closeLegendBtn");
const legendToggleWrap = document.getElementById("legendToggleWrap");

function buildLegend() {
  legendList.innerHTML = "";

  Object.entries(CATEGORIES).forEach(([categoryKey, categoryData]) => {
    const item = document.createElement("li");
    item.className = "legend-item";
    item.dataset.category = categoryKey;

    item.innerHTML = `
      <span class="legend-color" style="background:${categoryData.color}"></span>
      <span class="legend-text-wrap">
        <span class="legend-name">${escapeHtml(categoryData.label)}</span>
        <span class="legend-key">${escapeHtml(categoryData.key)}</span>
      </span>
    `;

    item.addEventListener("click", () => {
      toggleCategory(categoryKey);
    });

    item.addEventListener("dblclick", (event) => {
      event.preventDefault();
      showOnlyCategory(categoryKey);
    });

    legendList.appendChild(item);
  });

  updateLegendUI();
}

function updateLegendUI() {
  const items = legendList.querySelectorAll(".legend-item");

  items.forEach((item) => {
    const categoryKey = item.dataset.category;
    const isActive = activeCategories[categoryKey];
    item.classList.toggle("inactive", !isActive);
  });
}

function openLegend() {
  legendSidebar.classList.add("open");
  legendToggleWrap.classList.add("hidden");
}

function closeLegend() {
  legendSidebar.classList.remove("open");
  legendToggleWrap.classList.remove("hidden");
}

openLegendBtn.addEventListener("click", openLegend);
closeLegendBtn.addEventListener("click", closeLegend);
showAllBtn.addEventListener("click", showAllCategories);
hideAllBtn.addEventListener("click", hideAllCategories);

map.on("click", () => {
  if (window.innerWidth <= 900 && legendSidebar.classList.contains("open")) {
    closeLegend();
  }
});

buildLegend();
updateCategoryVisibility();
closeLegend();

/* =========================================================
   GRANDS LABELS
========================================================= */

const labelsLayer = L.layerGroup().addTo(map);

BIG_LABELS.forEach((label) => {
  const marker = L.marker([label.lat, label.lng], {
    interactive: false,
    icon: L.divIcon({
      className: "place-label",
      html: `<div>${escapeHtml(label.text)}</div>`
    })
  });

  marker.addTo(labelsLayer);
});

function updateBigLabelsVisibility() {
  const currentZoom = map.getZoom();

  if (currentZoom <= LABELS_VISIBLE_MAX_ZOOM) {
    if (!map.hasLayer(labelsLayer)) {
      labelsLayer.addTo(map);
    }
  } else {
    if (map.hasLayer(labelsLayer)) {
      map.removeLayer(labelsLayer);
    }
  }
}

map.on("zoomend", updateBigLabelsVisibility);
updateBigLabelsVisibility();

/* =========================================================
   GÉOLOCALISATION UTILISATEUR
========================================================= */

const helmetIcon = L.icon({
  iconUrl: svgToDataUri(HELMET_ICON_SVG),
  iconSize: [34, 34],
  iconAnchor: [17, 17],
  popupAnchor: [0, -14]
});

let userMarker = null;
let userCircle = null;
let lastKnownUserLatLng = null;

function getUserPopupContent(latlng) {
  const mapsLink = `https://www.google.com/maps?q=${latlng.lat},${latlng.lng}`;

  return `
    <div class="popup-content">
      <h3 class="popup-title">Vous êtes ici</h3>
      <p class="popup-description">
        Votre position actuelle a été détectée sur la carte.
      </p>
      <a class="popup-btn" href="${mapsLink}" target="_blank" rel="noopener noreferrer">
        Ouvrir dans Google Maps
      </a>
    </div>
  `;
}

function updateUserLocation(latlng, accuracy = 0) {
  lastKnownUserLatLng = latlng;

  if (!userMarker) {
    userMarker = L.marker(latlng, {
      icon: helmetIcon
    }).addTo(map);

    userMarker.bindPopup(getUserPopupContent(latlng), {
      maxWidth: 260
    });
  } else {
    userMarker.setLatLng(latlng);
    userMarker.setPopupContent(getUserPopupContent(latlng));
  }

  if (accuracy > 0) {
    if (!userCircle) {
      userCircle = L.circle(latlng, {
        radius: accuracy,
        color: "#1565c0",
        fillColor: "#1565c0",
        fillOpacity: 0.08,
        weight: 1
      }).addTo(map);
    } else {
      userCircle.setLatLng(latlng);
      userCircle.setRadius(accuracy);
    }
  }
}

function initGeolocation() {
  if (!navigator.geolocation) return;

  navigator.geolocation.watchPosition(
    (position) => {
      const latlng = L.latLng(
        position.coords.latitude,
        position.coords.longitude
      );

      updateUserLocation(latlng, position.coords.accuracy);
    },
    (error) => {
      console.warn("Géolocalisation refusée ou indisponible :", error.message);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 15000
    }
  );
}

initGeolocation();

/* =========================================================
   BOUTON RECENTRAGE UTILISATEUR
========================================================= */

const RecenterControl = L.Control.extend({
  options: {
    position: "topleft"
  },

  onAdd: function () {
    const container = L.DomUtil.create("div", "leaflet-bar leaflet-control");
    const button = L.DomUtil.create("a", "custom-map-btn", container);

    button.href = "#";
    button.title = "Recentrer sur ma position";
    button.setAttribute("aria-label", "Recentrer sur ma position");
    button.innerHTML = "⌖";

    L.DomEvent.disableClickPropagation(container);
    L.DomEvent.on(button, "click", (event) => {
      L.DomEvent.preventDefault(event);

      if (lastKnownUserLatLng) {
        map.setView(lastKnownUserLatLng, 14);
        if (userMarker) {
          userMarker.openPopup();
        }
      } else {
        alert("Position utilisateur non disponible pour le moment.");
      }
    });

    return container;
  }
});

map.addControl(new RecenterControl());
