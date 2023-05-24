export const defaultHotSpot = { top: 0, left: 0 };

export const defaultChoices = {
  image: "litecraft",
  color: "amaretto",
};

const glassOptions = {
  liteCraft: {
    optionTitle: "Glass Type: ",
    title: "1-Lite Craft",
    id: "litecraft",
    name: "glass",
    imageUrl:
      "https://res.cloudinary.com/dc6unffgo/image/upload/v1684521962/viz/glass/90dd47274db745d29239f57a664ae894.jpg",
    hotSpot: null,
    hotSpotName: null,
    useHotSpot: "base",
    width: 273,
    height: 189,
  },
  wendover: {
    optionTitle: "Glass Type: ",
    title: "Wendover",
    id: "wendover",
    name: "glass",
    imageUrl:
      "https://res.cloudinary.com/dc6unffgo/image/upload/v1684781411/viz/wendover.jpg",
    hotSpot: null,
    hotSpotName: null,
    useHotSpot: "base",
    width: 273,
    height: 189,
  },
  ardsley: {
    optionTitle: "Glass Type: ",
    name: "glass",
    title: "Ardsley",
    dataName: "ardsley",
    id: "ardsley",
    imageUrl:
      "https://res.cloudinary.com/dc6unffgo/image/upload/v1684871270/viz/ardsley.jpg",
    hotSpot: null,
    hotSpotName: null,
    useHotSpot: "base",
    width: 273,
    height: 189,
  },
};

const colorOptions = {
  amaretto: {
    optionTitle: "Door Color: ",
    title: "Amaretto",
    id: "amaretto",
    name: "color",
    hexColor: "#943f26",
    useHotSpot: "base",
    width: 451,
    height: 1000,
  },
  hazelnut: {
    optionTitle: "Door Color: ",
    title: "Hazelnut Cherry",
    id: "hazelnut",
    name: "color",
    hexColor: "#83603c",
    useHotSpot: "base",
    width: 451,
    height: 1000,
  },
  milkChocolate: {
    optionTitle: "Door Color: ",
    title: "Milk Chocolate",
    id: "milkChocolate",
    name: "color",
    hexColor: "#72442f",
    useHotSpot: "base",
    width: 451,
    height: 1000,
  },
  blackCherry: {
    optionTitle: "Door Color: ",
    title: "Black Cherry",
    id: "blackCherry",
    name: "color",
    hexColor: "#6f3025",
    useHotSpot: "base",
    width: 451,
    height: 1000,
  },
  mocha: {
    optionTitle: "Door Color: ",
    title: "Mocha",
    id: "mocha",
    name: "color",
    hexColor: "#72431e",
    useHotSpot: "base",
    width: 451,
    height: 1000,
  },
  coffeeBean: {
    optionTitle: "Door Color: ",
    title: "Coffee Bean",
    id: "coffeeBean",
    name: "color",
    hexColor: "#493333",
    useHotSpot: "base",
    width: 451,
    height: 1000,
  },
};

const getGlassOption = (choice) => {
  const selectedGlass = Object.keys(glassOptions).find(
    (item) => glassOptions[item]?.id === choice
  );
  const selectedGlassData = glassOptions[selectedGlass];
  return selectedGlassData;
};

const getColorOption = (choice) => {
  const selectedColor = Object.keys(colorOptions).find(
    (item) => colorOptions[item]?.id === choice
  );
  const selectedGlassData = colorOptions[selectedColor];
  return selectedGlassData;
};

export const buildLayers = (choices) => {
  const layers = [
    {
      optionTitle: "Door Type: ",
      title: "Door",
      name: "door",
      imageUrl:
        "https://res.cloudinary.com/dc6unffgo/image/upload/v1684519323/viz/door/dpf-mhog-topvw-cman-1lt-2pan-glspan.png",
      hotSpots: {
        glass: { top: 79, left: 364 },
        color: { top: 0, left: 274 },
      },
      hotSpotName: "base",
      useHotSpot: null,
      width: 1000,
      height: 1000,
    },
  ];

  const color = getColorOption(choices.color);
  layers.push(color);

  const glass = getGlassOption(choices.image);
  layers.push(glass);

  return layers;
};

export const options = [
  {
    key: "aksjdfkl;asfs",
    optionTitle: "Glass Type: ",
    optionType: "image",
    choices: [
      {
        title: "1-Lite craft",
        dataName: "liteCraft",
        id: "litecraft",
        imageUrl:
          "https://res.cloudinary.com/dc6unffgo/image/upload/v1684521962/viz/glass/90dd47274db745d29239f57a664ae894.jpg",
      },
      {
        title: "Wendover",
        dataName: "wendover",
        id: "wendover",
        imageUrl:
          "https://res.cloudinary.com/dc6unffgo/image/upload/v1684781411/viz/wendover.jpg",
      },
      {
        title: "Ardsley",
        dataName: "ardsley",
        id: "ardsley",
        imageUrl:
          "https://res.cloudinary.com/dc6unffgo/image/upload/v1684871270/viz/ardsley.jpg",
      },
    ],
  },
  {
    key: "aksjdfkl;asf",
    optionTitle: "Door Color: ",
    optionType: "color",
    choices: [
      {
        title: "Amaretto",
        id: "amaretto",
        dataName: "wendover",
        hex: "#943f26",
      },
      {
        title: "Hazelnut Cherry",
        id: "hazelnut",
        dataName: "liteCraft",
        hex: "#83603c",
      },
      {
        title: "Milk Chocolate",
        id: "milkChocolate",
        hex: "#72442f",
      },
      {
        title: "Black Cherry",
        id: "blackCherry",
        hex: "#6f3025",
      },
      {
        title: "Mocha",
        id: "mocha",
        hex: "#72431e",
      },
      {
        title: "Coffee Bean",
        id: "coffeeBean",
        hex: "#493333",
      },
    ],
  },
];
