import {
  YoutubeIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "../assets/Icons";
import {
  grid1,
  grid2,
  grid3,
  grid4,
  grid5,
  grid6,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
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

const galleryContentArray = [
  { id: 0, cropped: grid1, photo: photo1, description: "1/6" },
  { id: 1, cropped: grid2, photo: photo2, description: "2/6" },
  { id: 2, cropped: grid3, photo: photo3, description: "3/6" },
  { id: 3, cropped: grid4, photo: photo4, description: "4/6" },
  { id: 4, cropped: grid5, photo: photo5, description: "5/6" },
  { id: 5, cropped: grid6, photo: photo6, description: "6/6" },
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
    type: "redirect",
    title: "resources:discusionTitle",
    redirect: "https://zasoby.msl.org.pl/mobjects/view/1520",
  },
  {
    type: "redirect",
    title: "resources:movieTitle",
    redirect: "https://zasoby.msl.org.pl/mobjects/view/1520",
  },
  {
    type: "redirect",
    title: "resources:buyTicketTitle",
    redirect: "https://zasoby.msl.org.pl/mobjects/view/1520",
  },
  {
    type: "download",
    title: "resources:folderDownloadTitle",
    redirect: "https://zasoby.msl.org.pl/mobjects/view/1520",
  },
];

export {
  verticalOffset,
  horizontalOffset,
  resourceContent,
  tableData,
  modernityAreas,
  techniquesArray,
  galleryContentArray,
  socialMediaArray,
};
