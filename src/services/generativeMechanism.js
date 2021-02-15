import generateLogo from "./generateLogo.js";

const generativeMechanism = (desiredCount = 5, minCount = 2) => {
  let fuse = 10;
  let logo;

  while (fuse >= 0 && desiredCount > minCount) {
    logo = generateLogo();
    const { vertical, horizontal, oblique } = logo;
    let counter = vertical.length + horizontal.length + oblique.length;

    if (counter >= desiredCount) return logo;

    if (fuse === 0) {
      fuse = 100;
      desiredCount--;
    }

    fuse--;
  }

  return logo;
};

export default generativeMechanism;
