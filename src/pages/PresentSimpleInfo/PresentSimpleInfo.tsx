import React from "react";
import content from "../../locales/PresentSimpleContent";
import TenseInfo from "../../components/TenseInfo/TenseInfo";

const SimplePresentInfo: React.FC = () => {
  return <TenseInfo content={content} quizRoute="/quizzes/presentsimplequiz" />;
};

export default SimplePresentInfo;
