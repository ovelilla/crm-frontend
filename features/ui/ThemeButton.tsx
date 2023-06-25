import { useTheme } from "@mui/material/styles";
import useThemeStore from "@/hooks/useThemeStore";
import IconButton from "@mui/material/IconButton";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ThemeButton = () => {
    const theme = useTheme();
    const { themeMode, setThemeMode } = useThemeStore();

    return (
        <IconButton
            size="large"
            aria-label="toggle theme"
            onClick={() => setThemeMode(themeMode === "light" ? "dark" : "light")}
        >
            {theme.palette.mode === "dark" ? <BsMoonStarsFill /> : <BsSunFill />}
        </IconButton>
    );
};

export default ThemeButton;
