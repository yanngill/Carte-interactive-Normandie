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
      <img
        src="${url}"
        alt="${escapeHtml(altText)}"
        loading="lazy"
        onclick="openLightbox(this.src)"
      >
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

  const websiteButton = isSafeUrl(point.website)
    ? `<a class="popup-btn" href="${point.website}" target="_blank" rel="noopener noreferrer">Site officiel</a>`
    : "";

  const mapsButton = isSafeUrl(point.googleMapsLink)
    ? `<a class="popup-btn" href="${point.googleMapsLink}" target="_blank" rel="noopener noreferrer">Ouvrir dans Google Maps</a>`
    : "";

  const buttonsHtml = `
    <div class="popup-buttons">
      ${websiteButton}
      ${mapsButton}
    </div>
  `;

  const mediaHtml = `
    ${buildImageBlock("Image actuelle", point.image, point.title)}
    ${buildImageBlock("Photo d’époque", point.oldPhoto, point.title + " - photo d’époque")}
    ${buildVideoBlock(point.video)}
  `.trim();

  const sourceHtml =
    point.source && point.source.trim() !== ""
      ? `<div class="popup-source">Source : ${escapeHtml(point.source)}</div>`
      : "";

  const extraNoteHtml =
    point.extraNote && point.extraNote.trim() !== ""
      ? `<div class="popup-extra-note">${escapeHtml(point.extraNote)}</div>`
      : "";

  return `
    <div class="popup-content">
      <h3 class="popup-title">${escapeHtml(point.title)}</h3>
      <span class="popup-badge" style="background:${categoryColor}">
        ${escapeHtml(categoryLabel)}
      </span>
      <p class="popup-description">${escapeHtml(point.description)}</p>
      ${mediaHtml ? `<div class="popup-media">${mediaHtml}</div>` : ""}
      ${extraNoteHtml}
      ${sourceHtml}
      ${buttonsHtml}
    </div>
  `;
}
/* =========================================================
   LIGHTBOX IMAGE
========================================================= */

function openLightbox(src) {
  if (!isSafeUrl(src)) return;

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) return;

  lightboxImg.src = src;
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox(event) {
  if (event) {
    event.stopPropagation();
  }

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) return;

  lightbox.classList.remove("open");
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

document.addEventListener("click", function (event) {
  const lightboxImg = document.getElementById("lightbox-img");
  if (lightboxImg && event.target === lightboxImg) {
    event.stopPropagation();
  }
});
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
    color: "#000000",
    weight: 2,
    opacity: 1,
    fillOpacity: 0.92
  });

  marker.bindPopup(buildPopupContent(point), {
    maxWidth: 320
  });

  marker.addTo(categoryLayers[point.category]);
});

/* =========================================================
   POPUPS SPÉCIALES AVEC CARROUSEL
========================================================= */

const specialOldPhotoStyle = {
  radius: 9,
  fillColor: CATEGORIES.oldphoto.color,
  color: "#000000",
  weight: 2,
  opacity: 1,
  fillOpacity: 0.92
};

// Chez Jeanne
const coordsChezJeanne = [49.408914, -1.317977];
const popupChezJeanne = `
  <div class="popup-content">
    <strong id="carousel-title-jeanne">7 juin 1944 – Libération du bourg</strong><br>
    <div id="carousel-description-jeanne">
      Des soldats américains de la 82e Airborne avancent dans les rues de Sainte-Mère-Église, au lendemain du Débarquement.
    </div>

    <div class="glider-contain">
      <div class="glider" id="glider-jeanne">
        <img src="https://imgur.com/L9wnNVX.jpg" alt="Soldats à pied" onclick="openLightbox(this.src)">
        <img src="https://imgur.com/NhRNtzs.jpg" alt="M3 Stuart 2e DB" onclick="openLightbox(this.src)">
      </div>
      <button class="glider-prev">«</button>
      <button class="glider-next">»</button>
      <div class="dots"></div>
    </div>

    <div style="font-size:10px; margin-top:5px;">Source : US National Archives / War Documentary – Maxim Chornyi</div>
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.408914,-1.317977" target="_blank" class="popup-btn">Ouvrir dans Google Maps</a>
  </div>
`;
L.circleMarker(coordsChezJeanne, specialOldPhotoStyle)
  .addTo(categoryLayers.oldphoto)
  .bindPopup(popupChezJeanne, {
    maxWidth: 320,
    autoPan: false
  });

// Mairie occupation allemande
const coordsMairieOccupation = [49.409768, -1.318364];
const popupMairieOccupation = `
  <div class="popup-content">
    <strong>Devant l'hôtel de ville – Occupation allemande</strong><br>
    Durant l’occupation, des soldats allemands se prennent en photo devant l’hôtel de ville de Sainte-Mère-Église.
    Ces images, prises bien avant le Débarquement, témoignent du quotidien militaire des occupants.

    <div class="glider-contain">
      <div class="glider" id="glider-mairie">
        <img src="https://imgur.com/7ybdNyn.jpg" alt="Soldats allemands mairie 1" onclick="openLightbox(this.src)">
        <img src="https://imgur.com/NV79BpD.jpg" alt="Soldats allemands mairie 2" onclick="openLightbox(this.src)">
        <img src="https://imgur.com/7lNsDqS.jpg" alt="Soldats allemands mairie 3" onclick="openLightbox(this.src)">
      </div>
      <button class="glider-prev">«</button>
      <button class="glider-next">»</button>
      <div class="dots"></div>
    </div>

    <div style="font-size:10px; margin-top:5px;">Source : Collection privée / Archives locales</div>
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.409768,-1.318364" target="_blank" class="popup-btn">Ouvrir dans Google Maps</a>
  </div>
`;
L.circleMarker(coordsMairieOccupation, specialOldPhotoStyle)
  .addTo(categoryLayers.oldphoto)
  .bindPopup(popupMairieOccupation, {
    maxWidth: 320,
    autoPan: false
  });

// Neuville / StuG
const coordsStugNeuville = [49.411824, -1.320132];
const popupStugNeuville = `
  <div class="popup-content">
    <strong>Contre-attaque allemande – Neuville-au-Plain</strong><br>
    Le 7 juin 1944 au matin, les parachutistes de la 82e Airborne subissent une violente contre-attaque allemande venant de Neuville-au-Plain.
    Les hommes du 505e PIR tiennent leur position, et le soldat John E. Atchley détruit un StuG III engagé dans l’assaut.

    <div class="glider-contain">
      <div class="glider" id="glider-stug">
        <img src="https://imgur.com/ZhC6iiU.jpg" alt="Vue de loin" onclick="openLightbox(this.src)">
        <img src="https://imgur.com/s1i2wHR.jpg" alt="StuG détruit face" onclick="openLightbox(this.src)">
        <img src="https://imgur.com/hdosB1y.jpg" alt="StuG côté" onclick="openLightbox(this.src)">
        <img src="https://imgur.com/NavjP4l.jpg" alt="StuG côté" onclick="openLightbox(this.src)">
      </div>
      <button class="glider-prev">«</button>
      <button class="glider-next">»</button>
      <div class="dots"></div>
    </div>

    <div style="font-size:11px; margin-top:8px; font-style:italic;">
      StuG III Ausf. G : canon de 75 mm L/48, blindage frontal 80 mm, équipage de 4 hommes.
    </div>

    <div style="font-size:10px; margin-top:5px;">Source : US National Archives / War Documentary – Maxim Chornyi</div>
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.411824,-1.320132" target="_blank" class="popup-btn">Ouvrir dans Google Maps</a>
  </div>
`;
L.circleMarker(coordsStugNeuville, specialOldPhotoStyle)
  .addTo(categoryLayers.oldphoto)
  .bindPopup(popupStugNeuville, {
    maxWidth: 320,
    autoPan: false
  });

// Débarquement 2e DB
const coordsLeclerc = [49.445259, -1.208396];
const popupLeclerc = `
  <div class="popup-content">
    <strong>Débarquement de la 2e DB – 1er août 1944</strong><br>
    Le 1er août 1944, la 2e Division Blindée du général Leclerc débarque sur Utah Beach,
    au niveau des villages de Saint-Martin-de-Varreville et Saint-Germain-de-Varreville.
    Ici débute la progression de la 2e DB vers la libération de la France.

    <div class="glider-contain">
      <div class="glider" id="glider-leclerc">
        <img src="https://i.imgur.com/RNu3elD.jpeg" alt="Photo 1" onclick="openLightbox(this.src)">
        <img src="https://i.imgur.com/48QAgaj.jpeg" alt="Photo 2" onclick="openLightbox(this.src)">
        <img src="https://i.imgur.com/vqDfznp.jpeg" alt="Photo 3" onclick="openLightbox(this.src)">
      </div>
      <button class="glider-prev">«</button>
      <button class="glider-next">»</button>
      <div class="dots"></div>
    </div>

    <div style="font-size:10px; margin-top:5px;">Source : Fondation Maréchal Leclerc de Hauteclocque</div>
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.445259,-1.208396" target="_blank" class="popup-btn">Ouvrir dans Google Maps</a>
  </div>
`;
L.circleMarker(coordsLeclerc, specialOldPhotoStyle)
  .addTo(categoryLayers.oldphoto)
  .bindPopup(popupLeclerc, {
    maxWidth: 320,
    autoPan: false
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

const helmetIcon = L.divIcon({
  className: "user-location-icon",
  html: "🪖",
  iconSize: [30, 30],
  iconAnchor: [10, 22],
  popupAnchor: [0, -22]
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

function enablePopupFocusMode() {
  if (window.innerWidth <= 900) {
    document.body.classList.add("popup-focus");
  }
}

function disablePopupFocusMode() {
  document.body.classList.remove("popup-focus");
}
/* =========================================================
   ACTIVATION SIMPLE DES CARROUSELS
========================================================= */

map.on("popupopen", function (e) {
  enablePopupFocusMode();

  const popupElement = e.popup.getElement();
  if (!popupElement) return;

  const gliderElement = popupElement.querySelector(".glider");

  if (gliderElement && !gliderElement.dataset.gliderInitialized) {
    new Glider(gliderElement, {
      slidesToShow: 1,
      draggable: true,
      scrollLock: true,
      dots: popupElement.querySelector(".dots"),
      arrows: {
        prev: popupElement.querySelector(".glider-prev"),
        next: popupElement.querySelector(".glider-next")
      }
    });

    gliderElement.dataset.gliderInitialized = "true";
  }
});

map.on("popupclose", function () {
  disablePopupFocusMode();
});
