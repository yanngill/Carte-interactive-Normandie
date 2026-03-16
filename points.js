/* =========================================================
   CATÉGORIES
========================================================= */

const CATEGORIES = {
  remarkable: {
    label: "Lieu remarquable",
    color: "#c62828",
    key: ""
  },
  coastalDefense: {
    label: "Défense côtière allemande",
    color: "#bfc5cc",
    key: ""
  },
  oldphoto: {
    label: "Photo d’époque",
    color: "#36454F",
    key: ""
  },
  info: {
    label: "Point d’information",
    color: "#ef6c00",
    key: ""
  },
  museum: {
    label: "Musée",
    color: "#6a1b9a",
    key: ""
  },
  practical: {
    label: "Point pratique / logistique",
    color: "#1565c0",
    key: ""
  }
};

/* =========================================================
   POINTS
========================================================= */

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
  },

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

/* =========================================================
   GRANDS LABELS
========================================================= */

const BIG_LABELS = [
  { text: "Sainte-Mère-Église", lat: 49.409, lng: -1.318 },
  { text: "Utah Beach", lat: 49.420, lng: -1.172 },
  { text: "Omaha Beach", lat: 49.370, lng: -0.880 },
  { text: "Carentan", lat: 49.303, lng: -1.247 },
  { text: "Pointe du Hoc", lat: 49.391, lng: -0.989 }
];
