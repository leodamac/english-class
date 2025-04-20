import { registerQuestionComponent } from "../../utils/questionComponentRegistry";
import MultipleChoice from "./MultipleChoice";
import FillInTheBlank from "./FillInTheBlank";
import AudioQuestion from "./AudioQuestion";

registerQuestionComponent("multiple-choice", MultipleChoice);
registerQuestionComponent("fill-in-the-blank", FillInTheBlank);
registerQuestionComponent("audio", AudioQuestion);