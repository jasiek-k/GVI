import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../assets/Icons";
import {
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  resource1,
  resource2,
  resource3,
  resource4,
} from "../assets/images";

const verticalOffset = [
  { offset: 1, id: [2, 7, 12] },
  { offset: 3, id: [0, 5, 10, 15] },
  { offset: 5, id: [3, 8, 13] },
  { offset: 7, id: [1, 6, 11, 16] },
  { offset: 9, id: [4, 9, 14] },
];

const horizontalOffset = [
  { offset: 2, id: [2] },
  { offset: 4, id: [0] },
  { offset: 6, id: [3] },
  { offset: 8, id: [1] },
];

const msUrl = "https://msl.org.pl/";

const socialMediaArray = [
  {
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/muzeumsztuki",
  },
  {
    icon: <YoutubeIcon />,
    link: "https://www.youtube.com/user/MuzeumSztuki",
  },
  {
    icon: <TwitterIcon />,
    link: "https://twitter.com/muzeumsztuki",
  },
  {
    icon: <InstagramIcon />,
    link: "https://instagram.com/muzeumsztuki/",
  },
];

const linksArray = [
  {
    label: 'Facebook',
    link: "https://www.facebook.com/muzeumsztuki",
  },
  {
    label: 'YouTube',
    link: "https://www.youtube.com/user/MuzeumSztuki",
  },
  {
    label: 'Twitter',
    link: "https://twitter.com/muzeumsztuki",
  },
  {
    label: 'Instagram',
    link: "https://instagram.com/muzeumsztuki/",
  },
];

const galleryContentArray = [
  { id: 0, cropped: photo1, photo: photo1, description: "1/6" },
  { id: 1, cropped: photo2, photo: photo2, description: "2/6" },
  { id: 2, cropped: photo3, photo: photo3, description: "3/6" },
  { id: 3, cropped: photo4, photo: photo4, description: "4/6" },
  { id: 4, cropped: photo5, photo: photo5, description: "5/6" },
  { id: 5, cropped: photo6, photo: photo6, description: "6/6" },
];

const tableData = [
  {
    title: "informative:titlePlace",
    content: "informative:contentPlace",
  },
  {
    title: "informative:titleTime",
    content: "informative:contentTime",
  },
  {
    title: "informative:titleCurator",
    content: "informative:contentCurator",
  },
  {
    title: "informative:titleArrangement",
    content: "informative:contentArrangement",
  },
  {
    title: "informative:titleCoordinator",
    content: "informative:contentCoordinator",
  },
  {
    title: "informative:titleGraphics",
    content: "informative:contentGraphics",
  },
];

const resourceContent = [
  {
    photo: resource1,
    title: "resources:discusionTitle",
    link: "https://zasoby.msl.org.pl/mobjects/view/1520",
    caption: "resourceType:video",
  },
  {
    photo: resource2,
    title: "resources:folderDownloadTitle",
    link: "https://msl.org.pl/media/system/aktualnosci/ATLAS-NOWOCZESNOSCI-24-STRON-POL-2-.pdf",
    caption: "resourceType:docs",
  },
  {
    photo: resource3,
    title: "resources:movieTitle",
    link: "https://zasoby.msl.org.pl/mobjects/view/2218",
    caption: "resourceType:video",
  },
  {
    photo: resource4,
    title: "resources:buyTicketTitle",
    link: "https://bilety.msl.org.pl/expositions/view/3?bid=0&date=2018-02-03",
    caption: "resourceType:ref",
  },
];

const modernityAreas = [
  "muzeum",
  "autonomia",
  "kapitał",
  "maszyna",
  "miasto",
  "postęp",
  "eksperyment",
  "propaganda",
  "emancypacja",
  "rewolucja",
  "katastrofa",
  "ja",
  "norma",
  "tradycja",
];

const techniquesArray = [
  "olej",
  "deska",
  "płótno",
  "fotografia",
  "gips",
  "sztuczny kamień",
  "drewno",
  "thanina",
  "żywica",
  "instalacja",
  "drzeworyt",
  "papier",
  "offset",
  "druk barwny",
  "torba polietylenowa",
  "akwaforta",
  "karton",
  "kamień",
  "ołówek",
  "stal",
  "film",
  "zapis cyfrowy",
  "asamblaż",
  "polistyren",
  "metal",
  "plexi",
  "silnik",
  "zapis analogowy",
  "papier fotograficzny",
  "fotomontaż",
  "fotokolaż",
  "kolaż",
  "album fotograficzny",
  "kserokopia",
  "materiały różne",
  "akwarela",
  "tworzywo sztuczne",
  "dywan",
  "farba",
  "ceramika",
  "juta",
  "akryl",
  "aluminium anodowane",
  "aluminium",
  "płyta plastikowa",
  "ramy aluminowe",
  "szyba",
  "lustro",
  "litografia",
  "heliografia",
  "tektura",
  "serigrafia",
  "dzianina ze sznurka lnianego",
  "gwasz",
  "stelaż z drutu",
  "monotypia",
  "flamaster",
  "bibułka",
  "brąz",
  "plastik",
  "płyta pilśniowa",
  "taśma metalowa",
  "scotch blue",
  "akwatinta",
  "tempera",
  "tkanina",
  "emulsja",
  "dętka",
  "opona",
  "pismo maszynowe",
  "instalacja elektryczna",
  "linoryt",
  "żarówka",
  "nitro",
  "typolitografia",
  "aluminium malowane",
  "pastel",
  "szkło",
  "pianka",
  "włóczka akrylowa",
  "sklejka",
  "technika mieszana",
  "duraluminium",
  "płyta drewniana",
  "drewno polichromowane",
  "tusz",
  "kalka",
  "gips patynowany",
  "granit",
  "poliester kolorowy",
  "drewno fornirowane",
  "klej",
  "śruby",
  "technika własna",
  "terakota",
  "gwoździe",
  "lakier",
];

const materialsTranslationsArray = [
  {
    item: "olej",
    lang: "oil",
  },
  {
    item: "deska",
    lang: "board",
  },
  {
    item: "płótno",
    lang: "canvas",
  },
  {
    item: "fotografia",
    lang: "photography",
  },
  {
    item: "gips",
    lang: "gypsum",
  },
  {
    item: "sztuczny kamień",
    lang: "artificial stone",
  },
  {
    item: "drewno",
    lang: "wood",
  },
  {
    item: "tkanina",
    lang: "fabric",
  },
  {
    item: "żywica",
    lang: "resin",
  },
  {
    item: "instalacja",
    lang: "installation",
  },
  {
    item: "drzeworyt",
    lang: "woodcut",
  },
  {
    item: "papier",
    lang: "paper",
  },
  {
    item: "offset",
    lang: "offset",
  },
  {
    item: "druk barwny",
    lang: "color printing",
  },
  {
    item: "torba polietylenowa",
    lang: "polyethylene bag",
  },
  {
    item: "akwaforta",
    lang: "etching",
  },
  {
    item: "karton",
    lang: "cardboard",
  },
  {
    item: "kamień",
    lang: "stone",
  },
  {
    item: "ołówek",
    lang: "pencil",
  },
  {
    item: "stal",
    lang: "steel",
  },
  {
    item: "film",
    lang: "movie",
  },
  {
    item: "zapis cyfrowy",
    lang: "digital record",
  },
  {
    item: "asamblaż",
    lang: "assemblage",
  },
  {
    item: "polistyren",
    lang: "polystyrene",
  },
  {
    item: "metal",
    lang: "metal",
  },
  {
    item: "plexi",
    lang: "plexiglass",
  },
  {
    item: "silnik",
    lang: "engine",
  },
  {
    item: "zapis analogowy",
    lang: "analog recording",
  },
  {
    item: "papier fotograficzny",
    lang: "photographic paper",
  },
  {
    item: "fotomontaż",
    lang: "photomontage",
  },
  {
    item: "fotokolaż",
    lang: "photo collage",
  },
  {
    item: "kolaż",
    lang: "collage",
  },
  {
    item: "album fotograficzny",
    lang: "photo album",
  },
  {
    item: "kserokopia",
    lang: "photocopy",
  },
  {
    item: "materiały różne",
    lang: "various materials",
  },
  {
    item: "akwarela",
    lang: "watercolor",
  },
  {
    item: "tworzywo sztuczne",
    lang: "plastic",
  },
  {
    item: "dywan",
    lang: "carpet",
  },
  {
    item: "farba",
    lang: "paint",
  },
  {
    item: "ceramika",
    lang: "ceramics",
  },
  {
    item: "juta",
    lang: "jute",
  },
  {
    item: "akryl",
    lang: "acrylic",
  },
  {
    item: "aluminium anodowane",
    lang: "anodized aluminum",
  },
  {
    item: "aluminium",
    lang: "aluminum",
  },
  {
    item: "płyta plastikowa",
    lang: "plastic plate",
  },
  {
    item: "ramy aluminowe",
    lang: "aluminum frames",
  },
  {
    item: "szyba",
    lang: "glass",
  },
  {
    item: "lustro",
    lang: "mirror",
  },
  {
    item: "litografia",
    lang: "lithography",
  },
  {
    item: "heliografia",
    lang: "heliography",
  },
  {
    item: "tektura",
    lang: "cardboard",
  },
  {
    item: "serigrafia",
    lang: "serigraphy",
  },
  {
    item: "gwasz",
    lang: "gouache",
  },
  {
    item: "monotypia",
    lang: "monotype",
  },
  {
    item: "flamaster",
    lang: "felt-tip pen",
  },
  {
    item: "bibułka",
    lang: "tissue",
  },
  {
    item: "brąz",
    lang: "brown",
  },
  {
    item: "plastik",
    lang: "plastic",
  },
  {
    item: "akwatinta",
    lang: "aquatint",
  },
  {
    item: "tempera",
    lang: "distemper",
  },
  {
    item: "tkanina",
    lang: "fabric",
  },
  {
    item: "emulsja",
    lang: "emulsion",
  },
  {
    item: "dętka",
    lang: "tube",
  },
  {
    item: "opona",
    lang: "tire",
  },
  {
    item: "linoryt",
    lang: "linocut",
  },
  {
    item: "żarówka",
    lang: "bulb",
  },
  {
    item: "nitro",
    lang: "nitro",
  },
  {
    item: "typolitografia",
    lang: "typolithography",
  },
  {
    item: "pastel",
    lang: "crayon",
  },
  {
    item: "szkło",
    lang: "glass",
  },
  {
    item: "pianka",
    lang: "foam",
  },
  {
    item: "klej",
    lang: "glue",
  },
  {
    item: "tusz",
    lang: "ink",
  },
  {
    item: "kalka",
    lang: "tracing paper",
  },
  {
    item: "śruby",
    lang: "bolts",
  },
  {
    item: "terakota",
    lang: "terracotta",
  },
  {
    item: "gwoździe",
    lang: "nails",
  },
  {
    item: "lakier",
    lang: "lacquer",
  },
  {
    item: "granit",
    lang: "granite",
  },
  {
    item: "sklejka",
    lang: "plywood",
  },
  {
    item: "duraluminium",
    lang: "duralumin",
  },
  {
    item: "dzianina ze sznurka lnianego",
    lang: "knitted fabric with linen cord",
  },
  {
    item: "stelaż z drutu",
    lang: "wire frame",
  },
  {
    item: "płyta pilśniowa",
    lang: "beaverboard",
  },
  {
    item: "taśma metalowa",
    lang: "metal tape",
  },
  {
    item: "scotch blue",
    lang: "scotch blue",
  },
  {
    item: "pismo maszynowe",
    lang: "typewriter",
  },
  {
    item: "instalacja elektryczna",
    lang: "electrical installation",
  },
  {
    item: "aluminium malowane",
    lang: "painted aluminum",
  },
  {
    item: "włóczka akrylowa",
    lang: "acrylic yarn",
  },
  {
    item: "technika mieszana",
    lang: "mixed technique",
  },
  {
    item: "płyta drewniana",
    lang: "wooden plate",
  },
  {
    item: "drewno polichromowane",
    lang: "polychrome wood",
  },
  {
    item: "gips patynowany",
    lang: "patinated plaster",
  },
  {
    item: "poliester kolorowy",
    lang: "colored polyester",
  },
  {
    item: "drewno fornirowane",
    lang: "veneered wood",
  },
  {
    item: "technika własna",
    lang: "own technique",
  },
];

export {
  msUrl,
  linksArray,
  verticalOffset,
  horizontalOffset,
  resourceContent,
  tableData,
  modernityAreas,
  techniquesArray,
  galleryContentArray,
  socialMediaArray,
  materialsTranslationsArray
};
