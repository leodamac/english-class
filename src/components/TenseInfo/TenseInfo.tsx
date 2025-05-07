import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TenseInfo.css";

export type Lang = "en" | "es" | "pt";

type TableRow = {
  type: string;
  structure: string;
  example: string;
  rule: string;
};

type TenseContent = {
  title: string;
  explanation: string;
  table: TableRow[];
  buttonText: string;
  notes?: string;
};

type Props = {
  content: Record<Lang, TenseContent>;
  quizRoute: string;
};

const TenseInfo: React.FC<Props> = ({ content, quizRoute }) => {
  const [lang, setLang] = useState<Lang>("en");
  const navigate = useNavigate();

  const data = content[lang];
  const tableData = data.table || [];

  return (
    <div>
      <section className="info-container">
        <div className="lang-toggle">
          {(["en", "es", "pt"] as Lang[]).map((l) => (
            <button key={l} onClick={() => setLang(l)} className={lang === l ? "active" : ""}>
              {l === "en" ? "English" : l === "es" ? "Español" : "Português"}
            </button>
          ))}
        </div>

        <div className="content">
          <h2>{data.title}</h2>

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
            {data.explanation.split("\n").map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
          </div>

          <div className="notes">
            {data.notes?.split("\n").map((sentence, index) => (
              <p key={index}>{sentence}</p>
            ))}
          </div>

          <div className="buttons">
            
            <button className="start-quiz" onClick={() => navigate(quizRoute)}>
              {data.buttonText}
            </button>
          </div>
        </div>
      </section>
      <button className="go-back" onClick={() => navigate("/")}>
        {lang === "es" ? "Volver al índice" : lang === "pt" ? "Voltar ao índice" : "Back to Index"}
      </button>
    </div>
  );
};

export default TenseInfo;
