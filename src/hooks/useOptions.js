import { useOptionsStorage } from "../stores/optionsStorage";
import { DRAWER_POSITION, THEME_COLOR } from "../utils/utils";

export const useOptions = () => {
  const { options } = useOptionsStorage();
  const palett = THEME_COLOR[options.theme];
  const drawerPosition = DRAWER_POSITION[options.position];

  return { palett, drawerPosition };
};
