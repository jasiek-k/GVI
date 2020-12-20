import React from "react";

import {
  getRandomInteger,
  findDuplicates,
  shuffleArray,
  calculateName,
  sortAlphabetically,
  calculateLineLength,
  matchIndexes,
  findIndex,
} from "./helpers";
import { techniquesArray, modernityAreas } from "./config";

const useAlgorithm = () => {
  const test = matchIndexes([1, 2, 3, 4, 5, 6, 7, 8], shuffleArray(horizInd));
  console.log("start1", calculateLineLength([2, 0, 0, 0], 70));

  console.log("vertical", test);
  const vertInd = [1, 2, 3, 4];
  const horizInd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  /*
  const test = matchIndexes([1, 2, 3, 4, 5, 6, 7], shuffleArray(horizInd));
  console.log(test);
  const var1 = "olej";
  const var2 = "płótno";
  console.log("index", findIndex(var2, sortAlphabetically(techniquesArray)));

  console.log("pion1", calculateLineLength([1, 9, 1, 6], 70));
  console.log(getRandomInteger(1, 11));
  */
  console.log("postep", sortAlphabetically(modernityAreas));

  console.log(calculateName("Boto"));
  console.log(calculateName("Martha"));
  //console.log("mat1", findIndex("metal", sortAlphabetically(techniquesArray)));
  //console.log("mat2", findIndex("plexi", sortAlphabetically(techniquesArray)));
  //console.log("mat3", findIndex("silnik", sortAlphabetically(techniquesArray)));

  console.log("pion1", calculateLineLength([49, 62, 72], 20));
  console.log("pion2", calculateLineLength([49, 62, 72], 20));
};

export default useAlgorithm;
