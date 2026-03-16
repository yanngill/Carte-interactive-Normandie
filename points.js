/* ######################################################################### */
/* ############################### CATÉGORIES ############################### */
/* ######################################################################### */

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

/* ######################################################################### */
/* ############################ DONNÉES DE LA CARTE ######################### */
/* ######################################################################### */

const POINTS = [
  /* ======================================================================= */
  /* ========================= LIEUX REMARQUABLES =========================== */
  /* ======================================================================= */

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

  /* ======================================================================= */
  /* ========================= POINTS D’INFORMATION ========================= */
  /* ======================================================================= */

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

  /* ======================================================================= */
  /* ======================== POINTS PRATIQUES / ACCÈS ====================== */
  /* ======================================================================= */

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

  /* ======================================================================= */
  /* ============================ PHOTOS D’ÉPOQUE =========================== */
  /* ======================================================================= */

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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.3965263,-0.9881764"
  },
  {
    title: "WN65 - Poste de commandement provisoire",
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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.364435,-0.863437"
  },
  {
    title: "WN65 –  Arrivée de la 2nd Infantry Division",
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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.364151,-0.864825"
  },
  {
    title: "Vue depuis le WN60 – Armada alliée au large d’Omaha Beach (10 juin 1944)",
    category: "oldphoto",
    lat: 49.356869,
    lng: -0.832052,
    description:
      "Photographie prise depuis le secteur du WN60 en regardant vers l’ouest, quelques jours après le Débarquement. On distingue au large une concentration impressionnante de navires alliés assurant le flux logistique vers Omaha Beach : transports de troupes, cargos, LST et bâtiments de soutien. La plage est alors devenue une immense zone de débarquement où hommes, véhicules et matériel sont acheminés en continu.",
    image: "https://i.imgur.com/avcMEZf.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives – Omaha Beach, 10 juin 1944",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.356869,-0.832052"
  },
  {
    title: "WN61 – Casemate allemande capturée",
    category: "oldphoto",
    lat: 49.3597,
    lng: -0.838975,
    description:
      "Photographie prise quelques jours après le Débarquement. Des soldats américains se tiennent au sommet d’une casemate allemande du WN61 où flotte désormais un drapeau américain accompagné d’un pavillon médical. Le bunker avait abrité un canon antichar couvrant la plage d’Omaha. En regardant derrière vous aujourd’hui, on aperçoit encore la grande casemate du WN61 dominant la plage.",
    image: "https://i.imgur.com/XmxW4yX.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.359700,-0.838975"
  },
  {
  title: "WN62 – Intérieur de la casemate du canon de 75 mm",
  category: "oldphoto",
  lat: 49.360469,
  lng: -0.847178,
  description:
    "À l’intérieur de la casemate basse du WN62 abritant un canon antichar de 75 mm Pak 40. Sur cette photographie prise après la capture de la position, des soldats américains inspectent le bunker. Il s’agit probablement d’hommes du génie (Engineer Combat Battalion), reconnaissables au demi-cercle peint sur leurs casques.",
  image: "https://i.imgur.com/LJW2nga.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.360469,-0.847178"
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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.407778,-1.317222"
  },
  {
    title: "WN60 – Tourelle de char Renault R35",
    category: "oldphoto",
    lat: 49.356417,
    lng: -0.830743,
    description:
      "Tourelle de char Renault R35 français réemployée par les Allemands au WN60 pour la défense d’Omaha Beach. Armée d’un canon de 37 mm, cette position faisait partie du système de tir couvrant la plage.",
    image: "https://i.imgur.com/YuR0zrT.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives – Photo du 336th Engineer Combat Battalion",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.356417,-0.830743"
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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.408611,-1.315556"
  },
  {
  title: "WN 64 – Défense de la vallée du Ruquet",
  category: "coastalDefense",
  lat: 49.363617,
  lng: -0.862771,
  description:
    "Position allemande dominant la vallée du Ruquet, correspondant à la sortie de plage E-1 vers Colleville-sur-Mer. À l’origine, la position comprenait des tranchées et abris de campagne, puis deux tobrouks, des bunkers feldmäßig et un canon de campagne de 7,62 cm furent installés. Une casemate R612 destinée à accueillir un canon était en cours de construction au moment du Débarquement. Si ce bunker avait été achevé et armé, il aurait pu tirer directement dans la vallée du Ruquet et ravager toute tentative de progression depuis la plage. Avec le WN65 situé en face, la position permettait également un tir croisé destiné à verrouiller l’accès vers Colleville.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.363617,-0.862771"
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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.408333,-1.316667"
  },
  {
    title: "Entrée nord de Sainte-Mère-Église – 7 juin 1944",
    category: "oldphoto",
    lat: 49.41297,
    lng: -1.321191,
    description:
      "Le soldat Elmer Habbs, de la 82e Division aéroportée, se repose à l’entrée nord de Sainte-Mère-Église près du panneau indicateur du village. Une image restée célèbre du lendemain du Débarquement.",
    image: "https://imgur.com/8T1qi6n.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.412970,-1.321191"
  },
  {
    title: "Hospice – Regimental Aid Station du 505th PIR",
    category: "oldphoto",
    lat: 49.411297,
    lng: -1.31975,
    description:
      "Des personnels médicaux américains et allemands coopèrent brièvement à proximité de l’hospice, transformé en poste de secours par le 505th PIR de la 82e Airborne.",
    image: "https://imgur.com/AlpvDK3.jpg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives / War Documentary – Maxim Chornyi",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.411297,-1.319750"
  },

  /* ======================================================================= */
  /* ===================== MUSÉES DU DÉBARQUEMENT AMÉRICAIN ================ */
  /* ======================================================================= */

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
    lat: 49.32895,
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

  /* ======================================================================= */
  /* ===================== DÉFENSE CÔTIÈRE ALLEMANDE ======================== */
  /* ======================================================================= */

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
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.3566467,-0.8321895"
  },
  {
  title: "WN 63 – Poste de commandement souterrain",
  category: "coastalDefense",
  lat: 49.349510861286554,
  lng: -0.8462947337976718,
  description:
    "À l’endroit où vous vous trouvez se trouve l’entrée d’un abri souterrain allemand utilisé comme poste de commandement. La petite porte visible aujourd’hui permettait d’accéder au bunker enterré. Ce poste servait notamment aux compagnies 3/726 et 8/916 pour coordonner la défense du secteur d’Omaha Beach et les communications entre les différents points d’appui.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.349510861286554,-0.8462947337976718"
},
  {
    title: "WN 61 – Défense côtière d’Omaha Beach",
    category: "coastalDefense",
    lat: 49.359379,
    lng: -0.838862,
    description:
      "Petit point fortifié allemand situé en contrebas du WN60, au pied des falaises d’Omaha Beach. Il comprenait plusieurs positions de tir dont un canon antichar de 88 mm orienté pour prendre la plage de flanc. Le site était protégé par un fossé antichar inondé et plusieurs tobrouks et bunkers légers. Aujourd’hui, les vestiges se mêlent aux habitations et au bâtiment Éolia.",
    image: "https://i.imgur.com/mCmsRCb.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source:
      "US National Archives - Reconnaissance aérienne américaine – 19 mai 1944 (RF-38 Lightning)",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.359379,-0.838862"
  },
  {
    title: "WN 62 – Point d’appui principal d’Omaha Beach",
    category: "coastalDefense",
    lat: 49.360173,
    lng: -0.847433,
    description:
      "Le WN62 était l’un des principaux points fortifiés allemands d’Omaha Beach et probablement le plus puissant. Autour de vous se trouvaient plusieurs casemates et bunkers abritant deux canons de 75 mm, des canons antichars de 50 mm, des mortiers et de nombreuses mitrailleuses. Un poste d’observation d’artillerie relié à la batterie de Houtteville permettait de diriger les tirs sur la plage. La position était occupée par environ 25 soldats de la 3./Grenadier-Regiment 726 (716. Infanterie-Division) renforcés par des artilleurs de la 352. Infanterie-Division.",
    image: "https://i.imgur.com/HerD1dj.jpeg",
    oldPhoto: "",
    video: "",
    website: "",
    source: "US National Archives – WN62 bombardé, 6 juin 1944 vers 7h30",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.360173,-0.847433"
  }
];

/* ######################################################################### */
/* ############################# GRANDS LABELS ############################## */
/* ######################################################################### */

const BIG_LABELS = [
  { text: "Sainte-Mère-Église", lat: 49.409, lng: -1.318 },
  { text: "Utah Beach", lat: 49.42, lng: -1.172 },
  { text: "Omaha Beach", lat: 49.37, lng: -0.88 },
  { text: "Carentan", lat: 49.303, lng: -1.247 },
  { text: "Pointe du Hoc", lat: 49.391, lng: -0.989 }
];
