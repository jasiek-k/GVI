export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) != index);

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const calculateName = (name) => {
  let sum = 0;

  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i) * 1;
  }

  return sum;
};

export const sortAlphabetically = (array) =>
  array.sort((a, b) => a.localeCompare(b));

export const matchIndexes = (ways, indexes) => {
  const matchedArray = [];
  for (let i = 0; i < ways.length; i++) {
    let currentIndex = Math.floor(Math.random() * indexes.length);
    console.log(currentIndex);
    matchedArray.push({
      way: ways[i],
      ind: indexes[currentIndex],
    });

    indexes.splice(currentIndex, 1);
  }
  return matchedArray;
};

export const findIndex = (item, array) => {
  console.log(item);
  for (let i = 0; i < array.length; i++) {
    if (item.toLowerCase() === array[i].toLowerCase()) return i;
  }

  return -1;
};

export const calculateLineLength = (techniqueArray, maxLength) => {
  if (techniqueArray.length === 1) {
    return Math.floor(Math.random() * maxLength) + 1;
  } else {
    const techniqueSum = techniqueArray.reduce((a, b) => a + b, 0);
    console.log(techniqueSum);
    const maxValue = Math.max.apply(Math, techniqueArray);
    const minValue = Math.min.apply(Math, techniqueArray);
    console.log(Math.round((minValue / techniqueSum) * maxLength));
    return getRandomInteger(
      Math.round((minValue / techniqueSum) * maxLength),
      Math.round((maxValue / techniqueSum) * maxLength)
    );
  }
};
