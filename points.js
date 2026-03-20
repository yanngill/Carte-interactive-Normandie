/* ######################################################################### */
/* ############################### CATÉGORIES ############################### */
/* ######################################################################### */

const CATEGORIES = {
  coastalDefense: {
    label: "WN / points de résistance allemand",
    color: "#bfc5cc",
    key: ""
  },
  germanBattery: {
    label: "Batteries allemandes",
    color: "#cc6b62",
    key: ""
  },
  oldphoto: {
    label: "Photos d’époque",
    color: "#36454F",
    key: ""
  },
  officeTourism: {
    label: "Offices de tourisme",
    color: "#1e88e5",
    key: ""
  },
  museum: {
    label: "Musées",
    color: "#6a1b9a",
    key: ""
  },
  cemetery: {
    label: "Cimetières militaires",
    color: "#2e7d32",
    key: ""
  },
};

/* ######################################################################### */
/* ############################ DONNÉES DE LA CARTE ######################### */
/* ######################################################################### */

const POINTS = [
 
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
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.3965263,-0.9881764"
},
  {
  title: "Volontaire de la Croix-Rouge et soldats américains à Sainte-Marie-du-Mont",
  category: "oldphoto",
  lat: 49.378584,
  lng: -1.226108,
  description:
    "Le 12 juin 1944, Marie-Esther Duchenes, volontaire de la Croix-Rouge, se tient aux côtés de soldats américains d’une Engineer Special Brigade devant la fontaine de Sainte-Marie-du-Mont.\n\nLa scène montre la reprise progressive de la vie locale et la coopération entre civils et militaires dans les jours suivant le débarquement à Utah Beach.",
  image: "https://i.imgur.com/LoVpicq.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.378584,-1.226108"
},
  {
  title: "Messe de soldats américains à Sainte-Marie-du-Mont",
  category: "oldphoto",
  lat: 49.378575,
  lng: -1.225267,
  description:
    "Le 11 juin 1944, de nombreux soldats américains assistent à une messe célébrée dans l’église de Sainte-Marie-du-Mont, quelques jours après le débarquement.\n\nCette scène illustre un moment de recueillement au cœur des opérations, dans une zone déjà sécurisée après les combats autour d’Utah Beach.",
  image: "https://i.imgur.com/rdC52BE.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.378575,-1.225267"
},
  {
  title: "Essai d’un Panzerschreck capturé à Sainte-Côme-du-Mont",
  category: "oldphoto",
  lat: 49.335792,
  lng: -1.272346,
  description:
    "Deux soldats américains testent le système un lance-roquettes allemand Panzerschreck capturé à Sainte-Côme-du-Mont. Ce type d’arme antichar était redouté pour sa capacité à détruire les blindés à courte distance.",
  image: "https://i.imgur.com/ucWSITW.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.335792,-1.272346"
},
  {
  title: "Char M3 Stuart détruit au Dead Man’s Corner (7 juin 1944)",
  category: "oldphoto",
  lat: 49.328481,
  lng: -1.268452,
  description:
    "Des soldats américains inspectent l’épave d’un char léger M3 Stuart détruit par un tir de Panzerfaust au carrefour au sud de Saint-Côme-du-Mont, surnommé « Dead Man’s Corner ».\n\nCe point clé marque la progression difficile des troupes américaines entre Utah Beach et Carentan, face à une résistance allemande organisée dans le bocage normand.",
  image: "https://i.imgur.com/rFF81U7.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.328481,-1.268452"
},
  {
  title: "Soldat américain place Vauban à Carentan",
  category: "oldphoto",
  lat: 49.304281,
  lng: -1.245453,
  description:
    "Un soldat américain observe un panneau directionnel sur la place Vauban à Carentan, peu après les combats. Les indications vers Cherbourg, Carentan, Paris et Saint-Lô témoignent de l’importance stratégique de la ville comme carrefour routier.\n\nLa vue est orientée en direction de l’actuel bureau de poste.",
  image: "https://i.imgur.com/bQJgkVH.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.304281,-1.245453"
},
  {
  title: "Défenses de plage à Grandcamp-les-Bains",
  category: "oldphoto",
  lat: 49.389394,
  lng: -1.038392,
  description: "Sur la plage de Grandcamp-les-Bains, devant une position allemande, un photographe américain observe des défenses de plage de type \"Holzpfähle\", constituées de pieux en bois inclinés. Ces obstacles étaient souvent surmontés de mines antichar \"Tellermine\", destinées à détruire les embarcations ou véhicules lors du débarquement.\n\nLa position exacte de la prise de vue reste approximative, mais correspond à cette plage où ces dispositifs défensifs étaient largement déployés.",
  image: "https://i.imgur.com/E8E52gL.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.389394,-1.038392"
},
  {
  title: "Défense de l’entrée du port de Grandcamp (1944)",
  category: "oldphoto",
  lat: 49.389653,
  lng: -1.047880,
  description: "Après la libération de 1944, l’entrée du port de Grandcamp apparaît fortement défendue. Un filet métallique barre l’accès, tandis qu’un tobrouk est équipé d’une tourelle de char Renault FT armée d’un canon de 37 mm. Ce type d’installation, typique du Mur de l’Atlantique, permettait de contrôler les accès portuaires et de repousser toute tentative d’intrusion par voie maritime.",
  image: "https://i.imgur.com/rLxDBsH.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.389653,-1.047880"
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
  title: "Habitants de Carentan célébrant la libération, place de la République (juin 1944)",
  category: "oldphoto",
  lat: 49.304282,
  lng: -1.243234,
  description:
    "Des habitants de Carentan déploient un drapeau français depuis un bâtiment de la place de la République pour célébrer la libération de la ville. Cette scène illustre le retour de la population civile après les combats et la fin de l’occupation allemande.\n\nAujourd’hui, le bâtiment se situe au niveau de l’actuel institut, au cœur du centre-ville.",
  image: "https://i.imgur.com/Caiqn6M.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.304282,-1.243234"
},
  {
  title: "Casemate 5 cm KwK (Vf Doppelstand) – Front de mer de Grandcamp",
  category: "coastalDefense",
  lat: 49.390684,
  lng: -1.056624,
  description:
    "Casemate allemande de type Vf Doppelstand située en front de mer à Grandcamp. Elle abritait un canon de 5 cm KwK destiné à la défense rapprochée du littoral et des accès portuaires.\n\nCe type d’ouvrage, plus léger que les casemates standardisées du Mur de l’Atlantique, était néanmoins intégré au dispositif défensif et permettait de compléter la couverture des plages et des zones de débarquement.\n\nLa photographie a été prise après les combats de 1944, montrant l’état de la position à la suite de la libération du secteur.",
  image: "https://i.imgur.com/znNydTU.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.390684,-1.056624"
},
  {
  title: "Parachutistes américains à Carentan avec une Kübelwagen capturée",
  category: "oldphoto",
  lat: 49.303114,
  lng: -1.247626,
  description:
    "À Carentan, des parachutistes américains de la 101st Airborne Division utilisent une Kübelwagen capturée aux forces allemandes. Cette scène illustre l’intensité des combats urbains et les récupérations de matériel ennemi dans les jours suivant la libération de la ville.\n\nLa prise de Carentan est un objectif stratégique majeur pour relier les têtes de pont d’Utah Beach et d’Omaha Beach.",
  image: "https://i.imgur.com/iDr9pnU.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.303114,-1.247626"
},
  {
  title: "Canon de 88 mm sous casemate H612 à Ravenoville",
  category: "oldphoto",
  lat: 49.462127,
  lng: -1.229918,
  description: "Cette photographie montre un canon de 88 mm installé sous casemate de type H612 sur le secteur de Ravenoville. Ces positions constituaient un obstacle sérieux pour les troupes alliées dans les premières heures suivant l’assaut sur Utah Beach.",
  image: "https://i.imgur.com/hp5PsI5.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.462127,-1.229918"
},
  {
  title: "Boeing B-17 sur l’aérodrome E-1 (12 juin 1944)",
  category: "oldphoto",
  lat: 49.361686,
  lng: -0.867092,
  description: "Le 12 juin 1944, un bombardier Boeing B-17 Flying Fortress est photographié sur l’aérodrome E-1, aménagé par les forces américaines sur le plateau de Saint-Laurent-sur-Mer, au-dessus d’Omaha Beach. Cet aérodrome fait partie des premières infrastructures construites après le Débarquement afin de soutenir les opérations aériennes alliées.\n\nUtilisé pour des missions logistiques, d’observation et de commandement, il illustre la mise en place rapide d’un dispositif aérien avancé directement au contact du front.",
  image: "https://i.imgur.com/817AyOu.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.361686,-0.867092"
},
  {
  title: "Artilleurs de la 101st Airborne à Carentan (juin 1944)",
  category: "oldphoto",
  lat: 49.302955,
  lng: -1.247369,
  description:
    "Des artilleurs de la 101st Airborne Division progressent dans les rues de Carentan après les combats. L’image montre la mise en place de moyens d’appui dans une ville récemment sécurisée.\n\nLa prise de Carentan permet aux forces américaines de relier Utah Beach et Omaha Beach, consolidant ainsi le dispositif allié en Normandie.",
  image: "https://i.imgur.com/uNbtp8E.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.302955,-1.247369"
},
  {
  title: "Place de l’église de Sainte-Marie-du-Mont",
  category: "oldphoto",
  lat: 49.382206,
  lng: -1.221943,
  description: "Le 7 juin 1944, au lendemain du Débarquement sur Utah Beach, des soldats américains de la 4th Infantry Division traversent la place de l’église de Sainte-Marie-du-Mont. On distingue un véhicule léger chenillé M29 Weasel utilisé pour progresser dans les zones inondées du secteur.\n\nSainte-Marie-du-Mont constitue alors un point clé du dispositif américain. Dès les premières heures du 6 juin, les troupes débarquées sur Utah Beach cherchent à sécuriser les sorties de plage et à rejoindre les parachutistes de la 101st Airborne Division. La prise rapide du village permet de consolider la tête de pont et d’organiser la progression vers l’intérieur des terres.",
  image: "https://i.imgur.com/YDB2Hrv.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.382206,-1.221943"
},
  {
  title: "Automitrailleuse M8 Greyhound à Canisy",
  category: "oldphoto",
  lat: 49.076241,
  lng: -1.175608,
  description: "Le 26 juillet 1944, une automitrailleuse M8 Greyhound de l’escadron C du 82nd Armored Reconnaissance Battalion (2nd Armored Division) progresse dans les rues de Canisy. Les bâtiments en flammes témoignent de la violence des combats lors de la percée américaine après l’opération Cobra. La position exacte de la prise de vue reste incertaine, mais correspond très probablement à ce secteur au vu de l’architecture visible à l’arrière-plan.",
  image: "https://i.imgur.com/yAM6YzR.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.076241,-1.175608"
},
  {
  title: "Prisonniers allemands au cimetière militaire d’Orglandes (12 juillet 1944)",
  category: "oldphoto",
  lat: 49.425884,
  lng: -1.448784,
  description: "Le 12 juillet 1944, des prisonniers allemands creusent des tombes pour leurs camarades tués lors des combats, sous la surveillance de soldats américains. Cette scène, photographiée au cimetière militaire d’Orglandes, illustre la violence des affrontements dans le Cotentin et la gestion immédiate des pertes après la bataille.",
  image: "https://i.imgur.com/LWLKhGO.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.425884,-1.448784"
},
{
  title: "Bombardement de la Pointe du Hoc (avril 1944)",
  category: "oldphoto",
  lat: 49.394487,
  lng: -0.986231,
  description:
    "Photographie aérienne montrant le bombardement de la Pointe du Hoc en avril 1944, dans le cadre de la préparation du Débarquement. Les bombardiers alliés visent la batterie allemande installée sur la falaise, considérée comme une menace majeure pour les plages d’Utah et d’Omaha. Les bombardements et tirs navals transforment progressivement le site en un paysage de cratères. Malgré ces frappes, les Rangers américains devront escalader la falaise le 6 juin 1944 pour neutraliser définitivement la position.",
  image: "https://i.imgur.com/T9S7mz8.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.394487,-0.986231"
},
{
  title: "Poste de direction de tir de la Pointe du Hoc après la bataille",
  category: "oldphoto",
  lat: 49.397251,
  lng: -0.989186,
  description:
    "Photographie montrant le poste de direction de tir situé à l’extrémité de la Pointe du Hoc après les combats de juin 1944. Cette position permettait aux Allemands d’observer la mer et de diriger les tirs de la batterie installée sur le site. On remarque sur la structure une 'seconde peau' de béton ajoutée autour de l’ouvrage, destinée à améliorer le camouflage et à renforcer la protection contre les bombardements et les tirs d’artillerie alliés.",
  image: "https://i.imgur.com/r8BE8KG.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.397251,-0.989186"
},
{
  title: "WN65 – Arrivée de la 2nd Infantry Division",
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
  title: "Véhicules américains sur la place Gambetta à Isigny-sur-Mer (4 juillet 1944)",
  category: "oldphoto",
  lat: 49.317970,
  lng: -1.101454,
  description: "Le 4 juillet 1944, des véhicules militaires américains circulent sur la place Gambetta à Isigny-sur-Mer, au cœur d’une ville fortement détruite par les bombardements. On distingue des camions logistiques traversant les ruines, témoignant de l’intense activité alliée après la libération et de l’importance stratégique d’Isigny dans la progression vers l’intérieur des terres.",
  image: "https://i.imgur.com/WFvWuPu.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.317970,-1.101454"
},
{
  title: "Prise d’armes au cimetière provisoire de Vierville (12 juin 1944)",
  category: "oldphoto",
  lat: 49.373388,
  lng: -0.885192,
  description:
    "Photographie prise le 12 juin 1944 lors d’une prise d’armes organisée au cimetière provisoire installé au pied de la falaise de Vierville, quelques jours après le Débarquement. La cérémonie se déroule lors de la visite de hauts responsables militaires américains venus de Washington. Dès le 7 juin 1944, les unités américaines chargées de l’enregistrement des sépultures militaires commencent à rassembler les corps des soldats tombés sur Omaha Beach. Le plateau n’étant pas encore déminé, un premier cimetière provisoire est aménagé au pied de la falaise. Les corps seront ensuite transférés vers le cimetière de Saint-Laurent-sur-Mer, puis après la guerre vers le cimetière américain actuel de Colleville-sur-Mer.",
  image: "https://i.imgur.com/bFZ55Ug.jpg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.373388,-0.885192"
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
  source: "US National Archives",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.356869,-0.832052"
},
{
  title: "WN 73 – Omaha Beach sous bombardement",
  category: "oldphoto",
  lat: 49.381114,
  lng: -0.907232,
  description:
    "Photographie aérienne prise pendant le débarquement sur le secteur ouest d’Omaha Beach près du WN73. On distingue une barge de débarquement tandis que des explosions dues aux bombardements frappent les positions allemandes. Cette zone correspond à la partie ouest du secteur de Vierville-sur-Mer.",
  image: "https://i.imgur.com/ULxmVlC.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.381114,-0.907232"
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
  title: "Civils et soldats américains à Carentan après la bataille (juin 1944)",
  category: "oldphoto",
  lat: 49.304428,
  lng: -1.243604,
  description:
    "Photographie prise sur la place de la République à Carentan après la libération de la ville en juin 1944. On y voit des soldats américains de la 101st Airborne Division assis au pied du monument aux morts, accompagnés de civils dont une jeune fille. La bataille de Carentan, menée du 10 au 13 juin 1944, permit de relier les têtes de pont d’Utah Beach et d’Omaha Beach. La ville avait déjà subi de lourdes destructions à la suite des bombardements alliés du 6 juin puis des tirs d’artillerie allemands. Au total, au moins 65 civils de Carentan, hommes, femmes et enfants, perdirent la vie durant les combats et bombardements liés à la libération de la ville.",
  image: "https://i.imgur.com/gC7FYtv.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "Archives photographiques",
  googleMapsLink:
    "https://www.google.com/maps/dir/?api=1&destination=49.304428,-1.243604"
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
  title: "WN 72 – Casemate avec canon antichar de 88 mm",
  category: "oldphoto",
  lat: 49.379157,
  lng: -0.902423,
  description:
    "Photographie prise après les combats montrant la casemate du WN72 équipée d’un canon antichar de 88 mm dominant la sortie de Vierville et l’ouest d’Omaha Beach. Des soldats américains inspectent la position. Le bunker est toujours visible aujourd’hui et constitue l’un des monuments les plus reconnaissables du secteur.",
  image: "https://i.imgur.com/urwKn2B.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.379157,-0.902423"
},
  {
  title: "WN66 – Canon de char de 5 cm KwK L/60 sur la plage",
  category: "oldphoto",
  lat: 49.369775,
  lng: -0.876389,
  description:
    "Vous vous trouvez à l’emplacement exact d’un canon de char allemand de 5 cm KwK L/60 installé très en avant sur la plage dans un ringstand Nr1694. Sur cette photographie prise après les combats, des soldats américains examinent la position. Le canon est encore en place et apparaît peu endommagé malgré l’intensité de la bataille sur ce secteur du centre d’Omaha Beach.",
  image: "https://i.imgur.com/x550obe.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.369775,-0.876389"
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
  title: "Vallée du Ruquet – Observation d’Omaha Beach après le débarquement",
  category: "oldphoto",
  lat: 49.363088,
  lng: -0.865405,
  description:
    "Des soldats américains observent Omaha Beach depuis les hauteurs de la vallée du Ruquet peu après le débarquement. Au large, la flotte alliée est visible au mouillage tandis que la plage sert déjà de vaste zone logistique pour les troupes et le matériel. Aujourd’hui, le paysage en face est beaucoup plus boisé qu’en 1944. Sur la colline visible en face se trouve désormais le cimetière américain de Colleville-sur-Mer, où reposent 9 388 soldats américains tombés lors de la bataille de Normandie.",
  image: "https://i.imgur.com/bGjmitr.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.363088,-0.865405"
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
  title: "WN 5 – Canon de 5 cm KwK – Utah Beach",
  category: "oldphoto",
  lat: 49.416125,
  lng: -1.175023,
  description:
    "Photographie prise en 1945 sur le site du WN5 à La Madeleine. On distingue un canon de char de 5 cm KwK installé dans un ringstand type Nr.1694. L’arme apparaît encore en très bon état après la bataille. Au second plan se trouvent la position du canon de campagne de 7,5 cm F.K.38 et plusieurs tobrouks du point d’appui. La photo a été prise alors que les structures étaient en train d’être transformées en mémorial, ce qui explique la présence d’échafaudages autour du ringstand.",
  image: "https://imgur.com/BMgLItY.jpeg",
  oldPhoto: "",
  video: "",
  website: "",
  source: "US National Archives",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.416125,-1.175023"
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
  title: "WN 65 – Défense de la vallée du Ruquet",
  category: "coastalDefense",
  lat: 49.364384,
  lng: -0.865269,
  description:
    "Le WN65 se trouvait à l’ouest de la vallée du Ruquet, correspondant à la sortie de plage E-1 vers Colleville-sur-Mer. Cette position allemande faisait face au WN64 situé de l’autre côté du vallon afin de créer un tir croisé destiné à verrouiller l’accès à l’intérieur des terres. Le point d’appui comprenait plusieurs tranchées, tobrouks et positions de mitrailleuses, ainsi que des canons antichars de 50 mm et des canons de char de 5 cm KwK installés dans des ringstands et dans des casemates R667, dont l’une était encore en construction. Un canon antichar de 7,5 cm Pak 40 était également positionné plus haut dans la vallée. Un long fossé antichar d’environ 800 mètres barrait l’accès du vallon, tandis que des champs de mines et des réseaux de barbelés protégeaient toute la position. La zone était occupée par une trentaine de soldats de la 10./Grenadier-Regiment 726.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.364384,-0.865269"
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
  },
  {
  title: "WN 66 – Défense du centre d’Omaha Beach",
  category: "coastalDefense",
  lat: 49.370053,
  lng: -0.877262,
  description:
    "Position allemande située au centre d’Omaha Beach. Environ vingt soldats du Grenadier-Regiment 726 défendaient ce secteur avec plusieurs mitrailleuses et un canon de char de 5 cm KwK L/60 installé très en avant sur la plage. Comme ailleurs sur la côte, les défenseurs passaient leurs journées à poser mines, barbelés et obstacles. Des photos prises après la bataille montrent le canon presque intact, laissant penser qu’il n’a pas été fortement engagé lors des combats.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.370053,-0.877262"
},
  {
  title: "WN 67 – Position dominante derrière Omaha Beach",
  category: "coastalDefense",
  lat: 49.367111,
  lng: -0.875312,
  description:
    "Position allemande située sur les hauteurs derrière WN66. Le WN67 était organisé en deux zones : une première sur le plateau herbeux dominant la plage avec tranchées, tobrouks, mortiers et postes de mitrailleuses, et une seconde plus bas derrière le mur antichar où plusieurs casemates étaient en construction. La défense comprenait notamment des mortiers de 81 mm, une tourelle de char Renault R35 réemployée, plusieurs tobrouks et de nombreuses positions de mitrailleuses. L’ensemble était occupé par des soldats de la 10./Grenadier-Regiment 726 et devait couvrir le centre d’Omaha Beach ainsi que la vallée derrière la plage.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.367111,-0.875312"
},
  {
  title: "WN 68 – Position double de mitrailleuses",
  category: "coastalDefense",
  lat: 49.368971,
  lng: -0.882154,
  description:
    "Vous vous trouvez à l’emplacement d’une position double de mitrailleuses appartenant au WN68, qui défendait le centre d’Omaha Beach. Ces positions couvraient directement la plage et participaient au tir croisé avec les autres points d’appui voisins. Le WN68 était encore en construction en juin 1944 et comprenait tranchées, tobrouks, mortiers et plusieurs casemates destinées à recevoir des canons de 5 cm KwK et d’autres pièces antichars. Le matin du 6 juin 1944, les défenseurs ouvrirent le feu sur les premières vagues américaines débarquant à marée basse.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.368971,-0.882154"
},
  {
  title: "WN 69 – Position de Nebelwerfer",
  category: "coastalDefense",
  lat: 49.362122,
  lng: -0.882550,
  description:
    "Position allemande du WN69 où étaient installés des lance-roquettes Nebelwerfer destinés à tirer sur Omaha Beach et les zones de débarquement. Dans la nuit du 5 au 6 juin 1944, un petit commando américain, probablement parachuté et bien renseigné, parvient à sectionner ici un câble téléphonique reliant les positions allemandes du secteur du Ruquet, perturbant les communications juste avant le début du Débarquement.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.362122,-0.882550"
},
  {
  title: "WN 70 – Position allemande en construction",
  category: "coastalDefense",
  lat: 49.374931,
  lng: -0.895209,
  description:
    "Le WN70 se trouvait au-dessus de la villa Hardelay et était encore en cours de construction en juin 1944. La position semble avoir été peu occupée. Une fois achevé, le point d’appui devait recevoir deux canons de 75 mm, dont un sous casemate en béton, ainsi qu’un canon antiaérien de 20 mm installé dans un encuvement bétonné. La présence d’un canon de 75 mm le 6 juin reste incertaine : aucune photographie ni témoignage de soldats américains n’en confirme l’installation lorsque la position fut rapidement neutralisée au début du débarquement.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.374931,-0.895209"
},
  {
  title: "WN 71 – Défense de la vallée de Vierville",
  category: "coastalDefense",
  lat: 49.377768,
  lng: -0.901458,
  description:
    "Le WN71 était situé sur la hauteur dominant la vallée de Vierville et couvrait le flanc est de la sortie de plage ainsi que le front de mer. La position comprenait deux fosses à mortiers de 80 mm installées sur la falaise, plusieurs positions de mitrailleuses et des tobrouks armés de mitrailleuses MG34. Un tobrouk couvrait l’arrière tandis qu’un autre protégeait le flanc est. D’autres mitrailleuses étaient installées dans des positions doubles et dans des tranchées le long du bord de la falaise. Comme la plupart des points d’appui du secteur, l’ensemble était relié par un réseau de tranchées et de câbles téléphoniques enterrés.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.377768,-0.901458"
},
  {
  title: "WN 72 – Défense de la sortie de Vierville",
  category: "coastalDefense",
  lat: 49.379312,
  lng: -0.903117,
  description:
    "Le WN72 faisait partie du dispositif défensif protégeant la sortie de plage de Vierville-sur-Mer (D-1). Situé sur les hauteurs dominant la vallée, ce point d’appui comprenait plusieurs positions de mitrailleuses, tobrouks et tranchées couvrant la plage et la route menant à l’intérieur des terres. Comme les autres points d’appui d’Omaha Beach, la position était reliée aux postes voisins par des tranchées et des câbles téléphoniques enterrés.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.379312,-0.903117"
},
  {
  title: "WN 73 – Défense de l’ouest d’Omaha Beach",
  category: "coastalDefense",
  lat: 49.380625,
  lng: -0.905892,
  description:
    "Le WN73 était l’un des points d’appui les plus à l’ouest d’Omaha Beach, situé au-dessus de Vierville-sur-Mer. La position comprenait des tobrouks, des positions de mitrailleuses et des tranchées destinées à couvrir la plage et l’approche de la vallée de Vierville. Ce point participait à la défense de la sortie D-1 et au dispositif de tir croisé avec les positions voisines.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.380625,-0.905892"
},

{
  title: "WN 74 – Pointe de la Percée",
  category: "coastalDefense",
  lat: 49.387559,
  lng: -0.918817,
  description:
    "Le WN74 était situé au sommet de la falaise à la pointe de la Percée, à l’extrémité ouest d’Omaha Beach. La position comprenait deux canons de campagne de 76 mm d’origine tchèque (Skoda) installés pour tirer de flanc sur la plage. Depuis cette position dominante, les pièces pouvaient balayer une grande partie du secteur ouest d’Omaha et appuyer la défense des positions voisines.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.387559,-0.918817"
},
  {
  title: "WN 81 – Position défensive de Grandcamp-Maisy (ouest)",
  category: "coastalDefense",
  lat: 49.390737,
  lng: -1.056807,
  description:
    "Position allemande située à l’ouest de Grandcamp-Maisy, à proximité du littoral et du port. Le WN81 domine l’estuaire du Grand Vey ainsi que le secteur d’Utah Beach, offrant un point d’observation privilégié sur les opérations de débarquement.\n\nLe 6 juin 1944, ses défenseurs subissent les bombardements aériens alliés avant de pouvoir observer les débarquements sur Utah Beach. La position pouvait potentiellement diriger des tirs d’artillerie provenant des batteries de Maisy.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.390737,-1.056807"
},
  {
  title: "WN 5 – La Madeleine (Utah Beach)",
  category: "coastalDefense",
  lat: 49.415828,
  lng: -1.174847,
  description:
    "Le WN5 se trouvait à La Madeleine et correspond à l’endroit exact où la 4th Infantry Division américaine débarqua le 6 juin 1944 sur Utah Beach. Cette position allemande dépendait de la 709. Infanterie-Division (3./Grenadier-Regiment 919) et servait de poste de commandement local du lieutenant Arthur Jahnke. Le point d’appui comprenait plus de vingt positions défensives : bunkers, tobrouks, tranchées, mortier de 8 cm, plusieurs canons de 5 cm KwK et des pièces d’artillerie dont un canon de campagne de 7,5 cm. Malgré ces défenses, la position était moins fortifiée que celles prévues plus au nord. Aujourd’hui, le site abrite plusieurs mémoriaux et le Utah Beach Landing Museum.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.415828,-1.174847"
},
  {
  title: "WN 8 – Redoute d’Auderville / La Hubert (Utah Beach)",
  category: "coastalDefense",
  lat: 49.429145,
  lng: -1.189823,
  description:
    "Le WN8, situé à la Redoute d’Auderville près de La Hubert, faisait partie du dispositif défensif allemand du secteur nord d’Utah Beach. La position était installée devant un ancien tertre fortifié et traversée par la route principale d’Utah Beach. Le site comprenait plusieurs bunkers dont un abri R501 et un abri double R622 encore accessibles aujourd’hui. L’armement principal comprenait un canon de campagne de 7,62 cm, un canon français capturé de 4,7 cm et deux canons de 5 cm KwK installés dans des ringstands type 1694 couvrant la plage. La position comportait également plusieurs tobrouks, dont deux Ic116 et un tobrouk pour mortier de 8 cm, reliés par un réseau de tranchées.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "",
  source: "",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.429145,-1.189823"
},
    /* ======================================================================= */
  /* ========================== BATTERIES ALLEMANDES ======================== */
  /* ======================================================================= */

  {
    title: "Batterie de Longues-sur-Mer",
    category: "germanBattery",
    lat: 49.343613,
    lng: -0.695038,
    description:
      "Batterie côtière allemande majeure du Mur de l’Atlantique, située entre Omaha Beach et Gold Beach. Le site conserve plusieurs casemates de tir ainsi que son poste de direction de tir, ce qui en fait l’un des ensembles d’artillerie les mieux préservés de Normandie. Il permet de comprendre concrètement le rôle de l’artillerie allemande dans la défense du littoral le 6 juin 1944.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.longues-mer.fr/",
    source: "",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.343613,-0.695038"
  },
  {
    title: "Batterie de la Pointe du Hoc",
    category: "germanBattery",
    lat: 49.395949,
    lng: -0.989413,
    description:
      "Site emblématique du Débarquement, pris d’assaut par les Rangers américains le 6 juin 1944. La Pointe du Hoc occupait une position stratégique entre Utah Beach et Omaha Beach. On y observe encore un paysage profondément marqué par les bombardements alliés, avec de nombreux cratères, bunkers et postes d’observation. Ce lieu permet de saisir la violence des combats et l’importance tactique de cette batterie allemande sur la falaise.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.abmc.gov/cemeteries-memorials/about-pointe-du-hoc-ranger-monument/",
    source: "",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.395949,-0.989413"
  },
  {
    title: "Batterie d’Azeville",
    category: "germanBattery",
    lat: 49.460831,
    lng: -1.307505,
    description:
      "Important site d’artillerie allemand du secteur d’Utah Beach. La batterie d’Azeville comprenait plusieurs casemates reliées par des galeries souterraines et joua un rôle actif pendant les combats de juin 1944. Le site permet de découvrir l’organisation défensive d’une batterie côtière allemande dans le Cotentin.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://batterie-azeville.manche.fr/",
    source: "",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.460831,-1.307505"
  },
  {
    title: "Batterie de Crisbecq",
    category: "germanBattery",
    lat: 49.479181,
    lng: -1.296920,
    description:
      "Batterie allemande majeure couvrant les approches d’Utah Beach. Plus puissamment armée que de nombreuses autres positions du secteur, elle résista plusieurs jours après le 6 juin 1944. Le site présente aujourd’hui bunkers, encuvements et vestiges permettant de comprendre l’ampleur du dispositif défensif allemand dans le nord du Cotentin.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "https://www.batteriedecrisbecq.fr/",
    source: "",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.479181,-1.296920"
  },
  {
    title: "Batterie de Maisy",
    category: "germanBattery",
    lat: 49.376517,
    lng: -1.061353,
    description:
      "Ensemble défensif allemand composé de positions d’artillerie, tranchées, abris et ouvrages bétonnés, situé entre Omaha Beach et la Pointe du Hoc. Le site permet d’observer un ensemble de vestiges encore bien lisibles et d’appréhender la profondeur de la défense côtière allemande sur ce secteur du Débarquement.",
    image: "",
    oldPhoto: "",
    video: "",
    website: "",
    source: "",
    googleMapsLink:
      "https://www.google.com/maps/dir/?api=1&destination=49.376517,-1.061353"
  },
    /* ======================================================================= */
  /* ============================ OFFICE DE TOURISME  =========================== */
  /* ======================================================================= */
{
  title: "Office de tourisme – Longues-sur-Mer",
  category: "officeTourism",
  lat: 49.342961,
  lng: -0.691930,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.bayeux-bessin-tourisme.com",
  googleMapsLink: "https://www.google.com/maps?q=49.342961,-0.691930"
},
{
  title: "Office de tourisme – Bayeux",
  category: "officeTourism",
  lat: 49.276830,
  lng: -0.700897,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.bayeux-bessin-tourisme.com",
  googleMapsLink: "https://www.google.com/maps?q=49.276830,-0.700897"
},
{
  title: "Office de tourisme – Omaha Beach (Isigny-Omaha Tourisme)",
  category: "officeTourism",
  lat: 49.347322,
  lng: -0.856204,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.isigny-omaha-tourisme.fr",
  googleMapsLink: "https://www.google.com/maps?q=49.347322,-0.856204"
},

{
  title: "Office de tourisme – Grandcamp-Maisy (Isigny-Omaha Tourisme)",
  category: "officeTourism",
  lat: 49.389085,
  lng: -1.040118,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.isigny-omaha-tourisme.fr",
  googleMapsLink: "https://www.google.com/maps?q=49.389085,-1.040118"
},

{
  title: "Office de tourisme – Isigny-sur-Mer (Isigny-Omaha Tourisme)",
  category: "officeTourism",
  lat: 49.319007,
  lng: -1.100563,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.isigny-omaha-tourisme.fr",
  googleMapsLink: "https://www.google.com/maps?q=49.319007,-1.100563"
},

{
  title: "Office de tourisme – Cotentin",
  category: "officeTourism",
  lat: 49.507204,
  lng: -1.470540,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.encotentin.fr",
  googleMapsLink: "https://www.google.com/maps?q=49.507204,-1.470540"
},

{
  title: "Office de tourisme – Sainte-Mère-Église",
  category: "officeTourism",
  lat: 49.408056,
  lng: -1.316417,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.encotentin.fr",
  googleMapsLink: "https://www.google.com/maps?q=49.408056,-1.316417"
},

{
  title: "Office de tourisme – Carentan-les-Marais",
  category: "officeTourism",
  lat: 49.304526,
  lng: -1.244190,
  description:
    "Office de tourisme : point d’accueil pour obtenir informations, cartes, visites guidées, hébergements, restaurants et services touristiques du secteur.",
  website: "https://www.baieducotentin.com",
  googleMapsLink: "https://www.google.com/maps?q=49.304526,-1.244190"
},
     /* ======================================================================= */
  /* ============================ Cimetière  =========================== */
  /* ======================================================================= */
  {
  title: "Cimetière militaire allemand de Marigny",
  category: "cemetery",
  lat: 49.112869,
  lng: -1.235958,
  description:
    "Cimetière militaire allemand. 11 169 soldats allemands y reposent. Il regroupe principalement des morts des combats autour de Saint-Lô et du bocage normand. Le site a été inauguré en 1961.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "https://kriegsgraeberstaetten.volksbund.de/fr/cimetiere-militaire/marigny",
  source: "Volksbund",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.112869,-1.235958"
},
{
  title: "Cimetière militaire allemand d’Orglandes",
  category: "cemetery",
  lat: 49.425365,
  lng: -1.448244,
  description:
    "Cimetière militaire allemand. Plus de 10 100 soldats allemands y sont enterrés. Il est lié aux combats du Cotentin et d’Utah Beach. Le cimetière a été réaménagé après-guerre puis inauguré en 1961.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "https://kriegsgraeberstaetten.volksbund.de/en/military-cemetery/orglandesmanche",
  source: "Volksbund",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.425365,-1.448244"
},
{
  title: "Cimetière militaire allemand de La Cambe",
  category: "cemetery",
  lat: 49.342989,
  lng: -1.026606,
  description:
    "Cimetière militaire allemand. 21 245 soldats allemands y reposent, ce qui en fait le plus grand cimetière allemand de Normandie. Son tumulus central renferme notamment des soldats inconnus et identifiés.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "https://kriegsgraeberstaetten.volksbund.de/en/military-cemetery/la-cambe",
  source: "Volksbund",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.342989,-1.026606"
},
{
  title: "Normandy American Cemetery – Colleville-sur-Mer",
  category: "cemetery",
  lat: 49.358198,
  lng: -0.851555,
  description:
    "Cimetière militaire américain. 9 389 soldats américains y reposent et 1 557 disparus sont inscrits sur le mémorial. Il domine Omaha Beach depuis les hauteurs de Colleville-sur-Mer.",
  image: "",
  oldPhoto: "",
  video: "",
  website: "https://www.abmc.gov/normandy",
  source: "ABMC",
  googleMapsLink: "https://www.google.com/maps/dir/?api=1&destination=49.358198,-0.851555"
},
];

/* ######################################################################### */
/* ############################# GRANDS LABELS ############################## */
/* ######################################################################### */

const BIG_LABELS = [
  { text: "Omaha Beach", lat: 49.37, lng: -0.88, minZoom: 8, maxZoom: 14 },
  { text: "Utah Beach", lat: 49.42, lng: -1.172, minZoom: 9, maxZoom: 14 },
  { text: "Sainte-Mère-Église", lat: 49.409, lng: -1.318, minZoom: 10, maxZoom: 15 },
  { text: "Carentan", lat: 49.303, lng: -1.247, minZoom: 11, maxZoom: 15 },
  { text: "Pointe du Hoc", lat: 49.391, lng: -0.989, minZoom: 11, maxZoom: 15 }
];
