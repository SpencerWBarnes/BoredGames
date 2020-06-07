function selectTheme(darkThemeSelected)
{
    if (darkThemeSelected)
        window.localStorage.setItem("theme", "dark");
    else
        window.localStorage.setItem("theme", "light");

    // Disable dark theme if darkTheme is not Selected
    document.getElementById("dark-theme").disabled = !darkThemeSelected;

    // Disable light them if darkTheme is Selected
    document.getElementById("light-theme").disabled = darkThemeSelected;
}