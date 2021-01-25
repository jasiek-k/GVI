import artworksData from "../data/artworksData.json";
import { techniquesArray, modernityAreas } from "../data/data";

const MAX_VERT_ROADS = 17;
const MIN_VERT_ROADS = 9;
const MAX_HORI_ROADS = 4;
const MIN_HORI_ROADS = 2;
const MAX_OBLI_ROADS = 4;
const ROADS_GRID = {
  vertical: [
    [0, 1],
    [2, 3, 4],
    [5, 6],
    [7, 8, 9],
    [10, 11],
    [12, 13, 14],
    [15, 16],
    [0, 1],
    [2, 3, 4],
    [5, 6],
    [7, 8, 9],
    [10, 11],
    [12, 13, 14],
    [15, 16],
  ],
  horizontal: [
    [0, 1],
    [2, 3],
  ],
};

const getMin = (array) => Math.min.apply(Math, array);

const getMax = (array) => Math.max.apply(Math, array);

const getRandomArtwork = () => {
  const { artworks } = artworksData;

  return artworks[getRandomInteger(0, artworksData.artworks.length - 1)];
};

const prepareNames = (name) => {
  if (typeof name === "string") {
    return { name: name.split(" ")[1], surname: name.split(" ")[0] };
  } else {
    let sum = { name: "", surname: "" };

    for (let i = 0; i < name.length; i++) {
      sum.name += name[i].split(" ")[1];
      sum.surname += name[i].split(" ")[0];
    }

    return sum;
  }
};

const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

const findIndex = (item, array) => {
  for (let i = 0; i < array.length; i++) {
    if (item.toLowerCase() === array[i].toLowerCase()) return i;
  }

  return -1;
};

const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const sortAlphabetically = (array) => array.sort((a, b) => a.localeCompare(b));

const processCharName = (name) => {
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) * 1;
  }

  return sum;
};

const processName = (value, roadType) => {
  let min = 0;
  let max = 0;

  if (roadType === "vert") {
    min = MIN_VERT_ROADS;
    max = MAX_VERT_ROADS;
  } else if (roadType === "hori") {
    min = MIN_HORI_ROADS;
    max = MAX_HORI_ROADS;
  }

  const drawnRoads = processCharName(value) % max;

  if (drawnRoads < min) return min;
  else return drawnRoads;
};

const processTechniques = (techniques) => {
  let array = [];

  for (let i = 0; i < techniques.length; i++) {
    const index = findIndex(techniques[i], sortAlphabetically(techniquesArray));

    if (index !== -1) array.push(index);
    else console.error("Technique was not found", techniques[i]);
  }

  return array;
};

const matchIndexes = (waysArray, indexesLength) => {
  const indexesArray = shuffleArray(Array.from(Array(indexesLength).keys()));

  for (let i = 0; i < waysArray.length; i++) {
    const currentIndex = Math.floor(Math.random() * indexesArray.length);
    waysArray[i].order = indexesArray[currentIndex];
    indexesArray.splice(currentIndex, 1);
  }
};

// maxLength = 20 dla pionowych i 70 dla poziomych
const getLineLength = (techniqueArray, lengths) => {
  if (techniqueArray.length === 1) {
    return Math.floor(Math.random() * lengths.max) + 1;
  } else {
    const techniquesIndexes = processTechniques(techniqueArray);
    const techniqueSum = techniquesIndexes.reduce((a, b) => a + b, 0);
    const maxValue = getMax(techniquesIndexes);
    const minValue = getMin(techniquesIndexes);
    const drawnLength = getRandomInteger(
      Math.round((minValue / techniqueSum) * lengths.max),
      Math.round((maxValue / techniqueSum) * lengths.max)
    );

    if (drawnLength < lengths.min) return lengths.min;
    else return drawnLength;
  }
};

const getObliqueRoads = (dimensions) => {
  const dimensionsSum = Math.round(dimensions.reduce((a, b) => a + b, 0));
  const roadsNumber = dimensionsSum % MAX_OBLI_ROADS;

  if (roadsNumber === 0) return 1;
  else return roadsNumber;
};

const fillRoadsArray = (length) => {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push({ id: i, length: 0, order: 0, start: 0 });
  }

  return array;
};

const getLineStart = (dateArray, maxLength, currentLength) => {
  if (currentLength === maxLength) return 0;

  let digitSum = 0;
  let digitsArray = [];
  let processedArray = dateArray;

  if (dateArray.length > 1) {
    processedArray = [
      Math.round(dateArray.reduce((a, b) => a + b, 0) / dateArray.length),
    ];
  }

  digitsArray = processedArray[0].toString().split("").map(Number);
  digitSum = digitsArray.reduce((a, b) => a + b, 0);

  const maxValue = getMax(digitsArray);
  const minValue = getMin(digitsArray);

  return getRandomInteger(
    Math.round((minValue / digitSum) * maxLength),
    Math.round((maxValue / digitSum) * maxLength)
  );
};

const convertIntoRoad = (array, road) => {
  const min = getMin(array);
  const max = getMax(array);

  return { ...road, start: min, length: max - min };
};

const checkRange = (toDraw, unitId) => {
  if (toDraw.length > 0) {
    let array = [];

    for (let i = 0; i < toDraw.length; i++) {
      let line = [];
      const length = toDraw[i]["start"] + toDraw[i]["length"];

      for (let j = toDraw[i].start; j <= length; j++) {
        if (j >= unitId * 10 && j <= (unitId + 1) * 10) line.push(j);
      }

      if (line.length > 1) array.push(convertIntoRoad(line, toDraw[i]));
    }

    return array;
  } else return [];
};

const singleOutSquare = (phrase, roads) => {
  const { verticalRoads, horizontalRoads, obliqueRoads } = roads;
  const areaIndex = sortAlphabetically(modernityAreas).indexOf(phrase);

  if (areaIndex < 0) console.error("WRONG MODERNITY AREA: ", phrase);

  const obliqueToDraw = [];
  const verticalToDraw = [];
  const horizontalToDraw = [];
  const rowId = areaIndex / 7 >= 1 ? 1 : 0;
  const colId = areaIndex % 7;

  obliqueRoads.forEach((item) => {
    if (rowId * 2 <= item.order && item.order < (rowId + 1) * 2) {
      obliqueToDraw.push(item);
    }
  });
  verticalRoads.forEach((item) => {
    if (ROADS_GRID.vertical[colId].indexOf(item.order) > -1) {
      verticalToDraw.push(item);
    }
  });
  horizontalRoads.forEach((item) => {
    if (ROADS_GRID.horizontal[rowId].indexOf(item.order) > -1) {
      horizontalToDraw.push(item);
    }
  });

  const verticalFinal = checkRange(verticalToDraw, rowId);
  const horizontalFinal = checkRange(horizontalToDraw, colId);

  return {
    areaIndex,
    vertical: verticalFinal,
    horizontal: horizontalFinal,
    oblique: obliqueToDraw,
  };
};

export {
  getRandomArtwork,
  singleOutSquare,
  getObliqueRoads,
  fillRoadsArray,
  getLineStart,
  getLineLength,
  matchIndexes,
  processName,
  processTechniques,
  sortAlphabetically,
  processCharName,
  prepareNames,
  findDuplicates,
  findIndex,
  getRandomInteger,
  shuffleArray,
  MAX_VERT_ROADS,
  MAX_HORI_ROADS,
  MAX_OBLI_ROADS,
};
