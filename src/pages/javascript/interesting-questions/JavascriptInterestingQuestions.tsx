import QuestionAnswer, {
  Answer,
  Question,
} from "../../../components/common/question-answer/QuestionAnswer";
import Typography from "../../../components/common/typography/Typography";

const JavascriptInterestingQuestions = () => {
  return (
    <>
      <QuestionAnswer>
        <Question>What is the Virtual DOM in React?</Question>
        <Answer>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>
              React keeps a lightweight representation of the real DOM in the
              memory, and that is known as the virtual DOM. When the state of an
              object changes, virtual DOM changes only that object in the real
              DOM, rather than updating all the objects.
            </Typography>
            <Typography>
              High performance: React updates only those components that have
              changed, rather than updating all the components at once. This
              results in much faster web applications.
            </Typography>
          </div>
        </Answer>
      </QuestionAnswer>
    </>
  );
};

export default JavascriptInterestingQuestions;
