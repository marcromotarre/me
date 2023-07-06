import Code from "../../../../components/common/code/Code";
import QuestionAnswer, {
  Answer,
  Question,
} from "../../../../components/common/question-answer/QuestionAnswer";
import Typography from "../../../../components/common/typography/Typography";
import {
  EXERCISE_1,
  EXERCISE_1_SOLUTION,
  EXERCISE_2,
  EXERCISE_2_SOLUTION,
  EXERCISE_3_AWAITED,
  EXERCISE_3_AWAITED_SOLUTION,
  EXERCISE_4_GET_OBJECT_KEYS,
  EXERCISE_4_GET_OBJECT_KEYS_SOLUTION,
  EXERCISE_5_TERMINOLOGY,
  EXERCISE_5_TERMINOLOGY_SOLUTION,
} from "./_code/TypescriptExercisesTypeTransformationsCode";

export default function TypescriptExercisesTypeTransformationsPage() {
  return (
    <>
      <Typography variant="h4">Section 1: Inference Basics</Typography>
      <Typography variant="h6">Exercise 1: Get Function Return Type</Typography>

      <Typography>
        In this file, How do we extract MyFuncReturn from myFunc?
      </Typography>
      <Code noHeader>
        <>{EXERCISE_1}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code>
            <>{EXERCISE_1_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>
      <Typography variant="h6">Exercise 2: Get Function Parameters</Typography>
      <Code noHeader>
        <>{EXERCISE_2}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code>
            <>{EXERCISE_2_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 3: Awaited</Typography>
      <Code noHeader>
        <>{EXERCISE_3_AWAITED}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code>
            <>{EXERCISE_3_AWAITED_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 4: Get Object Keys</Typography>
      <Code noHeader>
        <>{EXERCISE_4_GET_OBJECT_KEYS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code>
            <>{EXERCISE_4_GET_OBJECT_KEYS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h4">Section 2: Unions and Indexing</Typography>

      <Typography variant="h6">Exercise 5: Terminology</Typography>
      <Code noHeader>
        <>{EXERCISE_5_TERMINOLOGY}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code>
            <>{EXERCISE_5_TERMINOLOGY_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>
    </>
  );
}
