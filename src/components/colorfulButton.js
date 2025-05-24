const buttonColors = [
    "#FF6B6B",
    "#4ECDC4",
    "#FFD586",
    "#257885",
    "#FF9F1C",
    "#8761bb",
  ];

  const getRandomButtonColors = () => {
    const randomIndex = Math.floor(Math.random() * buttonColors.length);
    return buttonColors[randomIndex];
  };

  export default getRandomButtonColors