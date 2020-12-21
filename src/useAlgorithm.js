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
import artworksData from "./assets/artworksData.json";

const useAlgorithm = () => {
  const currentArtwork =
    artworksData.artworks[
      getRandomInteger(0, artworksData.artworks.length - 1)
    ];
  const { author, date, phrase, size, techniques, title } = currentArtwork;

  const artist = { name: author.split(" ")[1], surname: author.split(" ")[0] };
  const horizontalRoads = calculateName(artist.name);
  const verticalRoads = calculateName(artist.surname);
};

export default useAlgorithm;
