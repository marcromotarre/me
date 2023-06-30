import QuestionAnswer, {
  Answer,
  Question,
} from "../../../components/common/question-answer/QuestionAnswer";
import Typography from "../../../components/common/typography/Typography";

const ReactInterestingQuestions = () => {
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

      <QuestionAnswer>
        <Question>Which are common Hooks in React?</Question>
        <Answer>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>
              useState, useEffect, useRef, useCallBack, useMemo, useContext
            </Typography>
          </div>
        </Answer>
      </QuestionAnswer>

      <QuestionAnswer>
        <Question>Whats the difference between useMemo & useCallback?</Question>
        <Answer>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>
              useMemo is used to cache variables & useCallback is used to catch
              functions
            </Typography>
          </div>
        </Answer>
      </QuestionAnswer>

      <QuestionAnswer>
        <Question>In React what is the Context?</Question>
        <Answer>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>
              Context is the answer from React of StateManagers
            </Typography>
            <Typography>
              Usually, you will pass information from a parent component to a
              child component via props. But passing props can become verbose
              and inconvenient if you have to pass them through many components
              in the middle, or if many components in your app need the same
              information. Context lets the parent component make some
              information available to any component in the tree below it—no
              matter how deep—without passing it explicitly through props.
            </Typography>
          </div>
        </Answer>
      </QuestionAnswer>

      <QuestionAnswer>
        <Question>
          In froms whats the difference between Controlled Components vs
          Uncontrolled Components?
        </Question>
        <Answer>
          <div className="grid grid-cols-1 gap-y-2">
            <Typography>
              In controlled components we wil store in the component the state
              of each component in the form. This will help us to keep track of
              the state changes. This can be not ideal in terms of efficiency.
            </Typography>
            <Typography>
              An uncontrolled functional component is a component that maintains
              its own internal state.
            </Typography>
          </div>
        </Answer>
      </QuestionAnswer>

      <QuestionAnswer>
        <Question>How would you avoid binding in React?</Question>
        <Answer>
          <div className="grid grid-cols-1 gap-y-2"></div>
        </Answer>
      </QuestionAnswer>
    </>
  );
};

export default ReactInterestingQuestions;
