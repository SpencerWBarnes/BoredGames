function selectTheme(checkState)
{
    document.getElementById("dark-theme").disabled = !checkState;
    document.getElementById("light-theme").disabled = checkState;
}