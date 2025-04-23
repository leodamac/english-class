import React from "react";
import content from "../../locales/PresentContinuousContent";
import TenseInfo from "../../components/TenseInfo/TenseInfo";

const PresentContinuousInfo: React.FC = () => {
  return <TenseInfo content={content} quizRoute="/quizzes/presentContinuousquiz" />;
};

export default PresentContinuousInfo;
