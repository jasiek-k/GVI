import {
  getLineLength,
  matchIndexes,
  fillRoadsArray,
  getObliqueRoads,
  getLineStart,
  processName,
  prepareNames,
  getRandomArtwork,
  getObliqueStart,
  singleOutSquare,
  MAX_VERT_ROADS,
  MAX_HORI_ROADS,
  MAX_OBLI_ROADS,
} from "./helpers";

const HORI_LENGTHS = { max: 70, min: 0 };
const VERT_LENGTHS = { max: 20, min: 0 };

const generateLogo = () => {
  const drawnArtwork = getRandomArtwork();
  const { author, date, phrase, size, materials } = drawnArtwork;
  const artist = prepareNames(author);

  const horizontalRoads = fillRoadsArray(processName(artist.name, "hori"));
  const verticalRoads = fillRoadsArray(processName(artist.surname, "vert"));
  const obliqueRoads = fillRoadsArray(getObliqueRoads(size));

  horizontalRoads.map(
    (item) => (item.length = getLineLength(materials, HORI_LENGTHS))
  );
  verticalRoads.map(
    (item) => (item.length = getLineLength(materials, VERT_LENGTHS))
  );

  matchIndexes(horizontalRoads, MAX_HORI_ROADS);
  matchIndexes(verticalRoads, MAX_VERT_ROADS);
  matchIndexes(obliqueRoads, MAX_OBLI_ROADS);

  horizontalRoads.map(
    (item) => (item.start = getLineStart(date, HORI_LENGTHS.max, item.length))
  );
  verticalRoads.map(
    (item) => (item.start = getLineStart(date, VERT_LENGTHS.max, item.length))
  );
  obliqueRoads.map((item) => (item.start = getObliqueStart(phrase)));

  return {
    roadsData: singleOutSquare(phrase, {
      horizontalRoads,
      verticalRoads,
      obliqueRoads,
    }),
    artwork: drawnArtwork,
  };
};

export default generateLogo;
