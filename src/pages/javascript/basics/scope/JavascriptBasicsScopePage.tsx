import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsScopePage = () => {
  var a = 32;
  function cd() {
    var a = 53;
    console.log(a);
  }
  console.log(a);
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

      <Alert severity="info">
        In JavaScript, the term &ldquo;shadow&ldquo; typically refers to the
        concept of shadowing or variable shadowing. Variable shadowing occurs
        when a variable declared within a particular scope has the same name as
        a variable declared in an outer scope. When a variable is shadowed, the
        inner variable takes precedence over the outer variable, effectively
        hiding it within the inner scope. This means that references to the
        variable within the inner scope will refer to the inner variable rather
        than the outer one.
      </Alert>
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
      <Typography variant="h4">Function Expressions</Typography>
      <Code noHeader>
        <>{`
function teacher() { /* .. */ }

var myTeacher = function anotherTeacher() {
  console.log(anotherTeacher)
};

console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher)  // ReferenceError
`}</>
      </Code>
      <Typography variant="h6">
        Named Function Expressions vs Anonimous Function Expressions
      </Typography>
      <Code noHeader>
        <>{`
// anonymous function expression
var clickHandler = function () {
  // ..
}

// named function expression
var keyHandler = function keyHandler() {
  // ..
};`}</>
      </Code>
      <Typography>
        You should always use Named Function Expressions. If you cannot come
        with a name maybe this function is too complex and need to be break in
        multiple subfunctions. This name is not write in stone age. So it will
        vary during the refactors. If you do not come with a name at the very
        beginning maybe you can call it TODO in order to rename it in the
        future.
      </Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>
            Reliable function self-reference (recursion, etc)
          </Typography>
        </li>
        <li>
          <Typography>More debuggable stack traces</Typography>
        </li>
        <li>
          <Typography>More self-documenting code</Typography>
        </li>
      </ol>
      <Typography variant="h6">Arrow Functions</Typography>
      <Code noHeader>
        <>{`
// arrow function
var ids = people.map(person => person.id);

// named function expression
var ids = people.map(function getId(person) {
  return person.id
});`}</>
      </Code>
      <Alert severity="info">Arrow functions are anonymous</Alert>
      <Typography variant="h4">Function Scoping</Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
}

anotherTeacher() // Suzy
console.log(teacher) // Marc`}</>
      </Code>

      <Typography variant="h4">
        IIFE (Immediately Invoking Function Expression)
      </Typography>
      <Typography>
        IIFE is used when we define a function that will only be called one.
        single time.
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
}

( anotherTeacher )() // Suzy this is the same as the Function Scoping example
console.log(teacher) // Marc`}</>
      </Code>

      <Code noHeader>
        <>{`
var teacher = "Marc";

( function anotherTeacher() {
  var teacher = "Suzy";
  console.log(teacher);
} )() // Suzy <-> this is IIFE

console.log(teacher) // Marc`}</>
      </Code>
      <Typography>
        Those parenthesis are turning the function declaration into a function
        expression
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

// this IIFE is anonymous :(
( function (teacher) {
  console.log(teacher); // Suzy
} )("Suzy");

console.log(teacher) // Marc`}</>
      </Code>
      <Typography>Another use of the IIFE Patter is the next one</Typography>
      <Code noHeader>
        <>{`
var teacher;
try {
  teacher = fetchTeacher();
} catch(err) {
  return "Marc";
}`}</>
      </Code>

      <Code noHeader>
        <>{`
var teacher = (function getTeacher() {
  try {
    return fetchTeacher();
  }catch (err) {
    return "Marc";
  }
});
`}</>
      </Code>

      <Typography variant="h4">Block Scoping</Typography>
      <Typography>
        In this case in the block you need to use the let instead of var.
        Because as it is not another scope it will override the var value .
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

{
  let teacher = "Suzy";
  console.log(teacher); // Suzy
}

console.log(teacher); // Marc `}</>
      </Code>
    </>
  );
};

export default JavascriptBasicsScopePage;
