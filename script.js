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
  coastalDefense: {
    label: "Défense côtière allemande",
    color: "#bfc5cc",
    key: "Gris clair"
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
    label: "Musée",
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
    website: "",
    googleMapsLink: "https://www.google.com/maps?q=49.3908,-0.9886"
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
    website: "",
    googleMapsLink: "https://www.google.com/maps?q=49.3032,-1.2469"
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
    website: "",
    googleMapsLink: "https://www.google.com/maps?q=49.3592,-0.8584"
  },

  /* =========================================================
     PHOTOS D’ÉPOQUE
  ========================================================= */

  {
    title: "La Pointe du Hoc",
    category: "oldphoto",
    lat: 49.3965263,
    lng: -0.9881764,
    description:
      "Position stratégique prise d’assaut par les Rangers américains le 6 juin 1944. Lieu emblématique du secteur américain entre Utah et Omaha.",
    image: "https://i.imgur.com/1U8cKFq.jpeg",
    oldPhoto: "",
    video: "https://www.youtube.com/embed/zR7TCXmPq9M",
    website: "",
    source: "US National Archives",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.3965263,-0.9881764"
  },

  {
    title: "WN62 – Le Ruquet – Easy Red – Poste de commandement provisoire",
    category: "oldphoto",
    lat: 49.364435,
    lng: -0.863437,
    description:
      "Au lendemain du Débarquement, des unités d’intendance et d’état-major de l’armée américaine installent un poste de commandement provisoire devant un blockhaus capturé. Le secteur commence à être organisé pour accueillir les renforts et la logistique.",
    image: "https://i.imgur.com/P6rq0yq.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.364435,-0.863437"
  },

  {
    title: "WN62 – Le Ruquet – Easy Red – Arrivée de la 2nd Infantry Division",
    category: "oldphoto",
    lat: 49.364151,
    lng: -0.864825,
    description:
      "À partir du 7 juin 1944, les renforts américains de la 2nd Infantry Division débarquent sur Omaha Beach pour soutenir l’effort offensif vers l’intérieur des terres. La logistique massive commence à transformer la plage en zone de transit stratégique.",
    image: "https://i.imgur.com/azReUzU.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.364151,-0.864825"
  },

  {
    title: "Patrouille américaine à cheval – Sainte-Mère-Église",
    category: "oldphoto",
    lat: 49.408034,
    lng: -1.317192,
    description:
      "Vous vous situez à l’endroit où passe, peu après la libération du bourg, une patrouille de reconnaissance américaine montée. Ces cavaliers appartiennent à la 82e Division aéroportée et participent à la sécurisation du secteur.",
    image: "https://imgur.com/p3Uu4rr.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.407778,-1.317222"
  },

  {
    title: "Défilé de l’armée américaine – Sainte-Mère-Église",
    category: "oldphoto",
    lat: 49.408546,
    lng: -1.315331,
    description:
      "L’armée américaine progresse dans les rues de Sainte-Mère-Église, en passant devant l’église devenue symbole de la libération du bourg.",
    image: "https://imgur.com/5AUR1hk.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.408611,-1.315556"
  },

  {
    title: "Parachutistes américains – Rue Général Koenig",
    category: "oldphoto",
    lat: 49.408723,
    lng: -1.317109,
    description:
      "Des parachutistes américains progressent le long de la rue Général Koenig, dans le centre de Sainte-Mère-Église, au lendemain du Débarquement.",
    image: "https://imgur.com/USkLKdI.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.408333,-1.316667"
  },

  {
    title: "Entrée nord de Sainte-Mère-Église – 7 juin 1944",
    category: "oldphoto",
    lat: 49.412970,
    lng: -1.321191,
    description:
      "Le soldat Elmer Habbs, de la 82e Division aéroportée, se repose à l’entrée nord de Sainte-Mère-Église près du panneau indicateur du village. Une image restée célèbre du lendemain du Débarquement.",
    image: "https://imgur.com/8T1qi6n.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.412970,-1.321191"
  },

  {
    title: "Hospice – Regimental Aid Station du 505th PIR",
    category: "oldphoto",
    lat: 49.411297,
    lng: -1.319750,
    description:
      "Des personnels médicaux américains et allemands coopèrent brièvement à proximité de l’hospice, transformé en poste de secours par le 505th PIR de la 82e Airborne.",
    image: "https://imgur.com/AlpvDK3.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.411297,-1.319750"
  },

  /* =========================================================
     MUSÉES DU DÉBARQUEMENT AMÉRICAIN
  ========================================================= */

  {
    title: "Airborne Museum",
    category: "museum",
    lat: 49.408483,
    lng: -1.315161,
    description:
      "Grand musée consacré aux parachutistes américains des 82e et 101e divisions aéroportées. Plusieurs pavillons présentent avions, planeurs, équipements et objets authentiques.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://airborne-museum.org",
    googleMapsLink: "https://www.google.com/maps?q=49.408483,-1.315161"
  },

  {
    title: "Utah Beach Landing Museum",
    category: "museum",
    lat: 49.415358,
    lng: -1.174719,
    description:
      "Musée situé directement sur Utah Beach, à l’endroit même où les troupes américaines ont débarqué le 6 juin 1944. La visite retrace toute l’opération militaire et la libération du secteur.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://utah-beach.com",
    googleMapsLink: "https://www.google.com/maps?q=49.415358,-1.174719"
  },

  {
    title: "D-Day Experience – Dead Man's Corner",
    category: "museum",
    lat: 49.328950,
    lng: -1.268633,
    description:
      "Musée installé à Dead Man's Corner, lieu stratégique des combats entre parachutistes américains et forces allemandes. Le site propose plusieurs espaces d’exposition et une expérience immersive autour des opérations aéroportées.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://dday-experience.com",
    googleMapsLink: "https://www.google.com/maps?q=49.328950,-1.268633"
  },

  {
    title: "Normandy Victory Museum",
    category: "museum",
    lat: 49.304525,
    lng: -1.193036,
    description:
      "Musée consacré à la bataille de Normandie et aux combats dans le bocage après le Débarquement. De nombreuses scènes reconstituées et objets authentiques permettent de comprendre la progression des troupes américaines.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://normandy-victory-museum.fr",
    googleMapsLink: "https://www.google.com/maps?q=49.304525,-1.193036"
  },

  {
    title: "World War II Museum",
    category: "museum",
    lat: 49.515139,
    lng: -1.286089,
    description:
      "Musée original qui reconstitue une rue normande sous l’Occupation. La visite montre la vie quotidienne des civils entre 1940 et 1944 avec objets authentiques et scènes reconstituées.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://worldwar2-museum.com",
    googleMapsLink: "https://www.google.com/maps?q=49.515139,-1.286089"
  },

  {
    title: "Musée Mémorial d’Omaha Beach",
    category: "museum",
    lat: 49.367083,
    lng: -0.882086,
    description:
      "Musée situé à proximité immédiate d’Omaha Beach. Il présente une collection importante d’armes, d’uniformes et d’objets liés aux combats du 6 juin 1944.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.musee-memorial-omaha.fr",
    googleMapsLink: "https://www.google.com/maps?q=49.367083,-0.882086"
  },

  {
    title: "Overlord Museum",
    category: "museum",
    lat: 49.347881,
    lng: -0.856261,
    description:
      "L’un des grands musées consacrés au Débarquement en Normandie. Il présente une collection exceptionnelle de véhicules, chars et objets militaires utilisés pendant la bataille de Normandie.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.overlordmuseum.com",
    googleMapsLink: "https://www.google.com/maps?q=49.347881,-0.856261"
  },

  {
    title: "D-Day Omaha Museum",
    category: "museum",
    lat: 49.3748,
    lng: -0.9066,
    description:
      "Musée situé à Vierville-sur-Mer dans le secteur d’Omaha Beach. Il présente de nombreux objets retrouvés sur le champ de bataille et permet de mieux comprendre les combats du débarquement.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.dday-omaha.fr",
    googleMapsLink: "https://www.google.com/maps?q=49.3748,-0.9066"
  },

  {
    title: "Visitor Center – Normandy American Cemetery",
    category: "museum",
    lat: 49.358689,
    lng: -0.851481,
    description:
      "Centre d’interprétation du cimetière américain de Colleville-sur-Mer. Il présente une exposition sur les soldats américains tombés pendant la bataille de Normandie. L’accès est gratuit.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.abmc.gov",
    googleMapsLink: "https://www.google.com/maps?q=49.358689,-0.851481"
  },

  {
    title: "D-Day Collins Museum",
    category: "museum",
    lat: 49.375519,
    lng: -1.300947,
    description:
      "Petit musée familial consacré au Débarquement en Normandie. Il présente une collection privée d’objets, d’équipements et de souvenirs liés aux troupes américaines et à la bataille de Normandie.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "",
    googleMapsLink: "https://www.google.com/maps?q=49.375519,-1.300947"
  }
    /* =========================================================
     POINTS DEF COTIERE
  ========================================================= */
{
  title: "WN 60 – Défense de l’est d’Omaha",
  category: "coastalDefense",
  lat: 49.3566467,
  lng: -0.8321895,
  description:
    "Position allemande de défense côtière située à l’est d’Omaha Beach. Le site comprenait mortiers, tobrouk, bunker BF61a et plusieurs positions de tir pour canon de 75 mm reliées par tranchées et tunnels.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.3566467,-0.8321895"
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

/* =========================================================
   POPUPS SPÉCIALES AVEC CARROUSEL
========================================================= */

const specialOldPhotoStyle = {
  radius: 9,
  fillColor: CATEGORIES.oldphoto.color,
  color: "#ffffff",
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
