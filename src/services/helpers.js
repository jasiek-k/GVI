import { techniquesArray, modernityAreas } from "../data/data";
import artworksData from "../data/artworksData.json";

const MAX_VERT_ROADS = 17;
const MIN_VERT_ROADS = 9;
const MAX_HORI_ROADS = 4;
const MIN_HORI_ROADS = 2;
const OBLIQUE_ROADS = 4;

export const getRandomArtwork = () => {
  const { artworks } = artworksData;

  return artworks[getRandomInteger(0, artworksData.artworks.length - 1)];
};

export const prepareNames = (name) => {
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

export const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) !== index);

export const findIndex = (item, array) => {
  for (let i = 0; i < array.length; i++) {
    if (item.toLowerCase() === array[i].toLowerCase()) return i;
  }

  return -1;
};

export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

export const sortAlphabetically = (array) =>
  array.sort((a, b) => a.localeCompare(b));

export const processCharName = (name) => {
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) * 1;
  }

  return sum;
};

export const processName = (value, roadType) => {
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

export const processTechniques = (techniques) => {
  let array = [];

  for (let i = 0; i < techniques.length; i++) {
    let index = findIndex(techniques[i], sortAlphabetically(techniquesArray));

    if (index !== -1) array.push(index);
    else console.error("Technique was not found");
  }

  return array;
};

export const matchIndexes = (waysArray, indexesLength) => {
  const indexesArray = shuffleArray(Array.from(Array(indexesLength).keys()));

  for (let i = 0; i < waysArray.length; i++) {
    let currentIndex = Math.floor(Math.random() * indexesArray.length);
    waysArray[i].order = indexesArray[currentIndex];
    indexesArray.splice(currentIndex, 1);
  }
};

export const processLineLength = (techniqueArray, maxLength) => {
  // maxLength = 20 dla pionowych i 70 dla poziomych
  if (techniqueArray.length === 1) {
    return Math.floor(Math.random() * maxLength) + 1;
  } else {
    const techniquesIndexes = processTechniques(techniqueArray);
    const techniqueSum = techniquesIndexes.reduce((a, b) => a + b, 0);
    const maxValue = Math.max.apply(Math, techniquesIndexes);
    const minValue = Math.min.apply(Math, techniquesIndexes);

    return getRandomInteger(
      Math.round((minValue / techniqueSum) * maxLength),
      Math.round((maxValue / techniqueSum) * maxLength)
    );
  }
};

export const processObliqueRoads = (dimensions) => {
  const dimensionsSum = Math.round(dimensions.reduce((a, b) => a + b, 0));
  const roadsNumber = dimensionsSum % OBLIQUE_ROADS;

  if (roadsNumber === 0) return 1;
  else return roadsNumber;
};

export const fillRoadsArray = (length) => {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push({ id: i, length: 0, order: 0, start: 0 });
  }

  return array;
};

export const processLineStart = (dateArray, maxLength) => {
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

  const maxValue = Math.max.apply(Math, digitsArray);
  const minValue = Math.min.apply(Math, digitsArray);

  return getRandomInteger(
    Math.round((minValue / digitSum) * maxLength),
    Math.round((maxValue / digitSum) * maxLength)
  );
};

const MATCHED_ROADS = {
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

const checkRange = (toDraw, unitId) => {
  if (toDraw.length > 0) {
    let array = [];
    console.log("TO DRAW", toDraw);
    for (let i = 0; i < toDraw.length; i++) {
      let line = [];
      let length = toDraw[i].start + toDraw[i].length;

      for (let j = toDraw[i].start; j < length; j++) {
        if (j >= unitId * 10 && j < (unitId + 1) * 10) line.push(j);
      }

      if (line.length > 0) array.push(convertIntoRoad(line, toDraw[i]));
    }

    return array;
  } else return [];
};

export const singleOutSquare = (phrase, roads) => {
  const { verticalRoads, horizontalRoads, obliqueRoads } = roads;
  const areaIndex = sortAlphabetically(modernityAreas).indexOf(phrase);

  if (areaIndex < 0) console.error("WRONG MODERNITY AREA: ", phrase);

  const rowId = areaIndex / 7 >= 1 ? 1 : 0;
  const colId = areaIndex % 7;

  console.log(`area: ${areaIndex} row: ${rowId} col: ${colId}`);

  const obliqueToDraw = [];
  const verticalToDraw = [];
  const horizontalToDraw = [];

  obliqueRoads.forEach((item) => {
    if (rowId * 2 <= item.order && item.order < (rowId + 1) * 2) {
      obliqueToDraw.push(item);
    }
  });
  verticalRoads.forEach((item) => {
    if (MATCHED_ROADS.vertical[colId].indexOf(item.order) >= 0) {
      verticalToDraw.push(item);
    }
  });

  horizontalRoads.forEach((item) => {
    if (MATCHED_ROADS.horizontal[rowId].indexOf(item.order) >= 0) {
      horizontalToDraw.push(item);
    }
  });

  console.log("horizontal", horizontalRoads);
  console.log("horizontalToDraw", horizontalToDraw);
  //console.log(sortAlphabetically(modernityAreas));
  //console.log(obliqueToDraw);

  const vertDraw = checkRange(verticalToDraw, colId);
  const horiDraw = checkRange(horizontalToDraw, rowId);
  console.log("VERT", vertDraw);
  console.log("HORI", horiDraw);
  return vertDraw.length + horiDraw.length;
  //verticalToDraw.forEach((item) => {});
};

const convertIntoRoad = (array, road) => {
  console.log(array);
  const min = Math.min.apply(Math, array);
  const max = Math.max.apply(Math, array);
  const length = max - min;
  console.log(min);
  road = { ...road, start: min, length };
  //road.length = max - min;

  return road;
};
