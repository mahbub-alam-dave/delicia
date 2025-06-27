const buttonColors = [
  "#FF6B6B", // Coral
  "#4ECDC4", // Aqua
  "#257885", // Deep Teal
  "#FF9F1C", // Amber
  "#8761BB", // Violet
];

  const getRandomButtonColors = () => {
    const randomIndex = Math.floor(Math.random() * buttonColors.length);
    return buttonColors[randomIndex];
  };

  export default getRandomButtonColors