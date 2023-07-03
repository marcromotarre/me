import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsScopePage = () => {
  return (
    <>
      <Alert severity="info">Scope: where we look at for things.</Alert>
      <Typography>
        What is that we are looking for? So very simply, we are looking for
        identifiers.
      </Typography>
      <Code noHeader>
        <>{`
x = 42;
console.log(y);`}</>
      </Code>
      <Typography>
        Here you see an x that&apos;s being assigned to, or a y that&apos;s
        being a value retrieved from. . Whether you realize this or not, all
        variables are in one of those two roles in your program. All variables
        are either receiving the assignment of some value, or you are retrieving
        a value from the variable. That&apos;s it, there&apos;s no other
        existence for variables in our programs than that. So what we&apos;re
        doing is, we&apos;re fundamentally, when we&apos;re processing our code,
        when the scope is being processed by the JavaScript engine, it&apos;s
        essentially asking the question, when I see this variable, first of all,
        what position is it in?
      </Typography>
      <Typography>
        what scope does it belong to? In other words, this is basically like a
        game of matching marbles to their color-coded buckets. If you think
        about the way a JavaScript engine processes the code, it is going to
        find a variable and it is gonna say, hmm, this is a green marble so it
        goes in the green bucket. And this is a red marble, so it goes into the
        red bucket. So it&apos;s fundamentally a game of sorting colored
        marbles.
      </Typography>
      <Typography>
        All right, but there&apos;s something nuanced about that definition that
        may not be all that obvious, which is that this processing that
        we&apos;re talking about is an actual step within JavaScript. It&apos;s
        not simply inlined with the execution. It&apos;s extremely common for
        people to think about JavaScript as running top down, line by line,
        executing. Because when we think of interpreted programs, or dynamic
        scripted programs, we generally think of them as executing line by line,
        top down. And so when I assert to you that JavaScript is not an
        interpreted language, but is in fact actually a compiled language, that
        may not fit with your whole mental model because you&apos;re probably
        used to thinking of line-by-line JavaScript interpretation. So let me
        prove to you that JavaScript is, in fact, compiled, or at least, as we
        would say, it&apos;s parsed. That there&apos;s some processing step that
        has to happen before execution has occurred. If you have ever written a
        JavaScript, syntax error. Left off a comma, had an extra parenthesis, or
        curly brace somewhere, and then you try to run the program, and you
        immediately got a syntax error. That is, say you have a syntax error on
        line 10, but you immediately get that error reported to you before lines
        1 through 9 have executed. You may never have stopped to ask, but the
        question bears asking. How is it possible that JavaScript knew about the
        syntax error on line 10 before executing lines 1 through 9, unless
        JavaScript actually went through a processing step first as opposed to
        simply executing top down?
      </Typography>
      <Alert severity="info">
        Javascript organizes scopes with functions and blocks.
      </Alert>
      <Typography variant="h4">Compiltion & Scope</Typography>
      <Typography>
        In the next example you will see an example. We use colors to show the
        different scopes. See red as the global scope.
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc"; // red bucket

function otherClass() { // red bucket
  var teacher = "Suzy"; // blue bucket
  console.log("Welcome!");
}

function ask() { // red bucket
  var question = "Why?"; // green bucket
  console.log(question); // uses question of the green bucket
}

otherClass(); // Welcome!
ask(); // Why?`}</>
      </Code>
      <Typography variant="h4">Executing Code</Typography>
      <Typography>
        When the previous code is executed the JS Engine will asks the buckets
        created in the compilation. We can understand as it will ask to the
        bucked for the source values.
      </Typography>
      <Typography variant="h4">Compilation Review</Typography>
      <Typography>Lets see another interesting example:</Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

otherClass(); // Welcome!

teacher; // "Suzy"
topic;  // "React"   some of the bad part of Javascript`}</>
      </Code>
      <Typography>
        When you create a variable its override in the on top buckets
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

function otherClass() {
  teacher = "Suzy";
  topic = "React";
  console.log("Welcome!");
}

teacher; // "Marc"
topic;  // ReferenceError

otherClass(); // Welcome!
`}</>
      </Code>

      <Code noHeader>
        <>{`
var teacher = "Marc";

function otherClass() {
  teacher = "Suzy";
  function ask(question) {
    console.log(teacher, question);
  }

  ask("Why?");
}

otherClass(); // Suzy Why?
ask("??????") // Reference Error
`}</>
      </Code>
      <Typography variant="h4">undefined vs. undeclared</Typography>
      <Typography>
        undefined means a variable exists but at the moment it has no a value
      </Typography>
      <Typography>
        undeclared means never formally declared in any scope that we have
        accessed to.
      </Typography>
    </>
  );
};

export default JavascriptBasicsScopePage;
