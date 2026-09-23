import { THEMES, useTheme, type ThemeId } from "../../context/ThemeContext";

export function ThemeSwitcher({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`theme-switcher${compact ? " theme-switcher--compact" : ""}`}
      role="group"
      aria-label="Color theme"
    >
      {THEMES.map((t) => (
        <button
          key={t.id}
          type="button"
          className={`theme-swatch${theme === t.id ? " is-active" : ""}`}
          aria-label={`${t.label} theme`}
          aria-pressed={theme === t.id}
          title={t.label}
          onClick={() => setTheme(t.id as ThemeId)}
          style={{ ["--swatch" as string]: t.swatch }}
        >
          <span className="theme-swatch-dot" />
          {!compact && <span className="theme-swatch-label">{t.label}</span>}
        </button>
      ))}
    </div>
  );
}
