import { registerQuestionComponent } from "../../utils/questionComponentRegistry";
import MultipleChoice from "./MultipleChoice";
import FillInTheBlank from "./FillInTheBlank";
import SingleSelectQuestion from "./SingleSelect";
import TextQuestion from "./TextQuestion";


registerQuestionComponent("multi-select", MultipleChoice);
registerQuestionComponent("fill-in-the-blank", FillInTheBlank);
registerQuestionComponent("single-select",SingleSelectQuestion)
registerQuestionComponent("text", TextQuestion);