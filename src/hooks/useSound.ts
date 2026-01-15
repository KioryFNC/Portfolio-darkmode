import hoverSoundFile from "../assets/sounds/hover1.mp3";
import clickSoundFile from "../assets/sounds/click.mp3";

export function useSound() {
  const hoverSound = new Audio(hoverSoundFile);
  const clickSound = new Audio(clickSoundFile);

  const playHover = () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  };

  const playClick = () => {
    clickSound.currentTime = 0;
    clickSound.play();
  };

  return { playHover, playClick };
}
