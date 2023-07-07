import Code from "../../../../components/common/code/Code";
import QuestionAnswer, {
  Answer,
  Question,
} from "../../../../components/common/question-answer/QuestionAnswer";
import Typography from "../../../../components/common/typography/Typography";
import {
  EXERCISE_1,
  EXERCISE_10_AS_CONST,
  EXERCISE_10_AS_CONST_SOLUTION,
  EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS,
  EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS_SOLUTION,
  EXERCISE_12_GET_OBJECT_VALUES,
  EXERCISE_12_GET_OBJECT_VALUES_SOLUTION,
  EXERCISE_13_GET_ARRAY_VALUE,
  EXERCISE_13_GET_ARRAY_VALUE_SOLUTION,
  EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING,
  EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING_SOLUTION,
  EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS,
  EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS_SOLUTION,
  EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS,
  EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS_SOLUTION,
  EXERCISE_17_SPLITTING_STRINGS,
  EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS,
  EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS_SOLUTION,
  EXERCISE_19_UPPERCASE_OBJECT,
  EXERCISE_19_UPPERCASE_OBJECT_SOLUTION,
  EXERCISE_1_SOLUTION,
  EXERCISE_2,
  EXERCISE_2_SOLUTION,
  EXERCISE_3_AWAITED,
  EXERCISE_3_AWAITED_SOLUTION,
  EXERCISE_4_GET_OBJECT_KEYS,
  EXERCISE_4_GET_OBJECT_KEYS_SOLUTION,
  EXERCISE_5_TERMINOLOGY,
  EXERCISE_5_TERMINOLOGY_SOLUTION,
  EXERCISE_6_EXTRACT_FROM_DISCRIMINATED_UNION,
  EXERCISE_6_EXTRACT_FROM_DISCRIMINATED_UNION_SULUTION,
  EXERCISE_7_EXCLUDE_FROM_DISCRIMINATED_UNION,
  EXERCISE_7_EXCLUDE_FROM_DISCRIMINATED_UNION_SOLUCTION,
  EXERCISE_8_INDEXED_ACCESS,
  EXERCISE_8_INDEXED_ACCESS_SOLUTION,
  EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR,
  EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR_SOLUTION,
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
          <Code noHeader>
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
          <Code noHeader>
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
          <Code noHeader>
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
          <Code noHeader>
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
          <Code noHeader>
            <>{EXERCISE_5_TERMINOLOGY_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 6: Extract from Discriminated Union
      </Typography>
      <Code noHeader>
        <>{EXERCISE_6_EXTRACT_FROM_DISCRIMINATED_UNION}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_6_EXTRACT_FROM_DISCRIMINATED_UNION_SULUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 7: Exclude from Discriminated Union
      </Typography>
      <Code noHeader>
        <>{EXERCISE_7_EXCLUDE_FROM_DISCRIMINATED_UNION}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_7_EXCLUDE_FROM_DISCRIMINATED_UNION_SOLUCTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 8: Indexed Access</Typography>
      <Code noHeader>
        <>{EXERCISE_8_INDEXED_ACCESS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_8_INDEXED_ACCESS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 9: Discriminated Union to Discriminator
      </Typography>
      <Code noHeader>
        <>{EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_9_DISCRIMINATED_UNION_TO_DISCRIMINATOR_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 10: As Const</Typography>
      <Code noHeader>
        <>{EXERCISE_10_AS_CONST}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_10_AS_CONST_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 11: Indexed Access with Unions
      </Typography>
      <Code noHeader>
        <>{EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_11_INDEXED_ACCESS_WITH_UNIONS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 12: Get Object Values</Typography>
      <Code noHeader>
        <>{EXERCISE_12_GET_OBJECT_VALUES}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_12_GET_OBJECT_VALUES_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 13: Get Array Value</Typography>
      <Code noHeader>
        <>{EXERCISE_13_GET_ARRAY_VALUE}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_13_GET_ARRAY_VALUE_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h4">Section 3: Template Literals</Typography>

      <Typography variant="h6">
        Exercise 14: Template Literal with string
      </Typography>
      <Code noHeader>
        <>{EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_14_TEMPLATE_LITERAL_WITH_STRING_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 15: Extract with Template Literals
      </Typography>
      <Code noHeader>
        <>{EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_15_EXTRACT_WITH_TEMPLATE_LITERALS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 16: Union in Template Literals
      </Typography>
      <Code noHeader>
        <>{EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 17: Splitting Strings</Typography>
      <Code noHeader>
        <>{EXERCISE_17_SPLITTING_STRINGS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_16_UNIONS_IN_TEMPLATE_LITERALS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">
        Exercise 18: Template Literals in Object keys
      </Typography>
      <Code noHeader>
        <>{EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_18_TEMPLATE_LITERALS_IN_OBJECT_KEYS_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>

      <Typography variant="h6">Exercise 19: Uppercase Object</Typography>
      <Code noHeader>
        <>{EXERCISE_19_UPPERCASE_OBJECT}</>
      </Code>
      <QuestionAnswer>
        <Question>Solution</Question>
        <Answer>
          <Code noHeader>
            <>{EXERCISE_19_UPPERCASE_OBJECT_SOLUTION}</>
          </Code>
        </Answer>
      </QuestionAnswer>
    </>
  );
}
