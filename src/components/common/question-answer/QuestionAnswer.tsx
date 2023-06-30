import { cloneElement } from "react";
import Accordion from "../accordion/Accordion";
import AccordionDetails from "../accordion/AccordionDetails";
import AccordionSummary from "../accordion/AccordionSummary";
import Card from "../card/Card";
import Typography from "../typography/Typography";
import { UpIcon } from "../icons";

const QuestionAnswer = ({ children }: QuestionAnswerProps) => {
  const question = [...(Array.isArray(children) ? children : [children])].find(
    (child) => child?.props.__TYPE === "Question"
  );

  const answer = [...(Array.isArray(children) ? children : [children])].find(
    (child) => child?.props.__TYPE === "Answer"
  );
  console.log(answer);
  return (
    <Card style={{ width: "100%", padding: "0" }}>
      <Accordion>
        <AccordionSummary expandIcon={<UpIcon />}>{question}</AccordionSummary>
        <AccordionDetails>
          <div className="p-5">{answer}</div>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export const Question = ({ children }: QuestionProps) => {
  return (
    <>
      {typeof children === "string" ? (
        <Typography>{children}</Typography>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export const Answer = ({ children }: AnswerProps) => {
  return (
    <>
      {typeof children === "string" ? (
        <Typography>{children}</Typography>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

type QuestionProps = {
  children?: string | React.ReactElement;
  __TYPE?: string;
};

type AnswerProps = {
  children?: string | React.ReactElement;
  __TYPE?: string;
};

type QuestionAnswerProps = {
  children?:
    | React.ReactElement<QuestionProps>
    | React.ReactElement<AnswerProps>
    | React.ReactElement<QuestionProps | AnswerProps>[]
    | React.ReactElement<QuestionProps | AnswerProps>[];
};

Question.defaultProps = {
  __TYPE: "Question",
};

Answer.defaultProps = {
  __TYPE: "Answer",
};

export default QuestionAnswer;
