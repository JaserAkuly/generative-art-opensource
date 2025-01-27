const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const description = "This is an NFT made by JAkuly's generative code.";
const baseImageUri = "https://crunchycows/nft";
const startEditionFrom = 1;
const editionSize = 5;
const rarityWeights = [
  {
    value: "super_rare",
    from: 1,
    to: 1,
  },
  {
    value: "rare",
    from: 2,
    to: 3,
  },
  {
    value: "original",
    from: 4,
    to: editionSize,
  },
];

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i) => {
      return {
        name: cleanName(i),
        path: `${path}/${i}`,
      };
    });
};

const layers = [
  {
    elements: {
      original: getElements(`${dir}/background/original`),
      rare: getElements(`${dir}/background/rare`),
      super_rare: getElements(`${dir}/background/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/color/original`),
      rare: getElements(`${dir}/color/rare`),
      super_rare: getElements(`${dir}/color/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/spots/original`),
      rare: getElements(`${dir}/spots/rare`),
      super_rare: getElements(`${dir}/spots/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/hair/original`),
      rare: getElements(`${dir}/hair/rare`),
      super_rare: getElements(`${dir}/hair/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/eyes/original`),
      rare: getElements(`${dir}/eyes/rare`),
      super_rare: getElements(`${dir}/eyes/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/eyebrows/original`),
      rare: getElements(`${dir}/eyebrows/rare`),
      super_rare: getElements(`${dir}/eyebrows/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/mouth/original`),
      rare: getElements(`${dir}/mouth/rare`),
      super_rare: getElements(`${dir}/mouth/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/nose/original`),
      rare: getElements(`${dir}/nose/rare`),
      super_rare: getElements(`${dir}/nose/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/accessories/original`),
      rare: getElements(`${dir}/accessories/rare`),
      super_rare: getElements(`${dir}/accessories/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    elements: {
      original: getElements(`${dir}/food/original`),
      rare: getElements(`${dir}/food/rare`),
      super_rare: getElements(`${dir}/food/super_rare`),
    },
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
];

module.exports = {
  layers,
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  rarityWeights,
};
