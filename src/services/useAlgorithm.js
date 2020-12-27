import {
  getRandomInteger,
  calculateName,
  calculateLineLength,
  matchIndexes,
  fillRoadsArray,
  calculateObliqueRoads,
  calculateLineStart,
} from "./helpers";

import artworksData from "../data/artworksData.json";

const useAlgorithm = () => {
  // losujemy jedną prace
  const currentArtwork =
    artworksData.artworks[
      getRandomInteger(0, artworksData.artworks.length - 1)
    ];
  const { author, date, size, techniques } = currentArtwork;
  // const { author, date, phrase, size, techniques, title } = currentArtwork;

  // zmienić dla nazwisk tablicowych
  const artist = { name: author.split(" ")[1], surname: author.split(" ")[0] };
  // wyliczamy liczbę dróg poziomych
  const horizontalRoads = fillRoadsArray(
    calculateName(artist.name, "horizontal")
  );
  // wyliczamy liczbę dróg pionowych
  const verticalRoads = fillRoadsArray(
    calculateName(artist.surname, "vertical")
  );
  // wyliczamy liczbę dróg ukośnych
  const obliqueRoads = fillRoadsArray(calculateObliqueRoads(size));

  // wyznaczamy długości dróg poziomych
  horizontalRoads.map(
    (item) => (item.length = calculateLineLength(techniques, 70))
  );

  // wyznaczamy długości dróg poionowych
  verticalRoads.map(
    (item) => (item.length = calculateLineLength(techniques, 20))
  );

  matchIndexes(horizontalRoads, 4);
  matchIndexes(verticalRoads, 17);
  matchIndexes(obliqueRoads, 4);

  horizontalRoads.map((item) => (item.start = calculateLineStart(date)));

  console.log(horizontalRoads);
  console.log(verticalRoads);
  console.log(obliqueRoads);
};

export default useAlgorithm;
