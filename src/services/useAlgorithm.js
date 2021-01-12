/* eslint-disable no-unused-vars */
import {
  processLineLength,
  matchIndexes,
  fillRoadsArray,
  processObliqueRoads,
  processLineStart,
  sortAlphabetically,
  processName,
  prepareNames,
  getRandomArtwork,
} from "./helpers";

import { modernityAreas } from "../data/data";

const MAX_HORI_LENGTH = 70;
const MAX_VERT_LENGTH = 20;

// TO DO:
// dokonczyc przeliczanie
// mechanizm losowania dopóki długość dróg nie bedzie wystarczająca
// sprawdzic zgodność z załozeniami algorytmu (np jesli jest 100% to nie losujemy pkt początkowego)
const useAlgorithm = () => {
  // losujemy jedną prace
  const drawnArtwork = getRandomArtwork();
  const { author, size, date, techniques } = drawnArtwork;
  // const { author, date, phrase, size, techniques, title } = currentArtwork;

  //console.log(sortAlphabetically(modernityAreas));

  const artist = prepareNames(author);

  // wyliczamy liczbę dróg
  const horizontalRoads = fillRoadsArray(processName(artist.name, "hori"));
  const verticalRoads = fillRoadsArray(processName(artist.surname, "vert"));
  const obliqueRoads = fillRoadsArray(processObliqueRoads(size));

  // wyznaczamy długości dróg
  horizontalRoads.map(
    (item) => (item.length = processLineLength(techniques, MAX_HORI_LENGTH))
  );
  verticalRoads.map(
    (item) => (item.length = processLineLength(techniques, MAX_VERT_LENGTH))
  );

  matchIndexes(horizontalRoads, 4);
  matchIndexes(verticalRoads, 17);
  matchIndexes(obliqueRoads, 4);

  horizontalRoads.map(
    (item) => (item.start = processLineStart(date, MAX_HORI_LENGTH))
  );
  verticalRoads.map(
    (item) => (item.start = processLineStart(date, MAX_VERT_LENGTH))
  );

  console.log(horizontalRoads);
  console.log(verticalRoads);
  //console.log(obliqueRoads);
};

export default useAlgorithm;
