interface Props {
  isDarkMode: boolean;
  onDarkModeClick(): void;
}

function Header({ isDarkMode, onDarkModeClick }: Props) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}

export default Header;
