import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import simplePresentContent, { Lang } from "../../locales/SimplePresentContent";
import "./SimplePresentInfo.css";

const SimplePresentInfo: React.FC = () => {
  const [lang, setLang] = useState<Lang>("en");
  const navigate = useNavigate();

  const content = simplePresentContent[lang];

  // Asegurarnos de que table y los otros datos existan
  const tableData = content.table || [];
  
  return (
    <section className="info-container">
      <div className="lang-toggle">
        <button onClick={() => setLang("en")} className={lang === "en" ? "active" : ""}>English</button>
        <button onClick={() => setLang("es")} className={lang === "es" ? "active" : ""}>Español</button>
        <button onClick={() => setLang("pt")} className={lang === "pt" ? "active" : ""}>Português</button>
      </div>

      <div className="content">
        <h2>{content.title}</h2>

        <table className="grammar-table">
          <thead>
            <tr>
              <th>{lang === "es" ? "Tipo" : lang === "pt" ? "Tipo" : "Type"}</th>
              <th>{lang === "es" ? "Estructura" : lang === "pt" ? "Estrutura" : "Structure"}</th>
              <th>{lang === "es" ? "Ejemplo" : lang === "pt" ? "Exemplo" : "Example"}</th>
              <th>{lang === "es" ? "Regla" : lang === "pt" ? "Regra" : "Rule"}</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.type}</td>
                <td>{row.structure}</td>
                <td>{row.example}</td>
                <td>{row.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>


        <div className="examples">
          {content.explanation.split("\n").map((sentence, index) => (
            <p key={index}>{sentence}</p>
          ))}
        </div>

        <button className="start-quiz" onClick={() => navigate("/simplepresentquiz")}>
          {content.buttonText}
        </button>
      </div>
    </section>
  );
};

export default SimplePresentInfo;
