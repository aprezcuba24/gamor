import { memo } from "react";
import { BsFillSunFill, BsMoonStarsFill } from "react-icons/bs";

type Props = {
  isDark: boolean;
  onClick: () => void;
}

const ThemeToggle = ({ isDark, ...props }: Props) => {
  return isDark ? <BsFillSunFill {...props} /> : <BsMoonStarsFill {...props} />
};

export default memo(ThemeToggle);
