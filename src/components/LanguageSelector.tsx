import React from "react";
import { Lang } from "../locales/SimplePresentContent";

interface Props {
  selected: Lang;
  onSelect: (lang: Lang) => void;
}

const LanguageSelector: React.FC<Props> = ({ selected, onSelect }) => (
  <div className="lang-toggle">
    {(["en", "es", "pt"] as Lang[]).map((lng) => (
      <button
        key={lng}
        onClick={() => onSelect(lng)}
        className={selected === lng ? "active" : ""}
      >
        {lng === "en" ? "English" : lng === "es" ? "Español" : "Português"}
      </button>
    ))}
  </div>
);

export default LanguageSelector;
