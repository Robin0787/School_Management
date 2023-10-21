

const getRandomAnimation = () => {
    const styles = ['fade-up', "fade-in", "fade-right", "fade-left", "flip-left", "flip-right", "flip-up", "flip-down", 'zoom-in', "zoom-out", "zoom-in-up", "zoom-in-down", "zoom-in-right", "zoom-in-left", ""];
    const min = 0;
    const max = styles.length - 1;
    const randomIndex = Math.floor(Math.random() * (max - min)) + min;
    return styles[randomIndex];
};

export default getRandomAnimation;