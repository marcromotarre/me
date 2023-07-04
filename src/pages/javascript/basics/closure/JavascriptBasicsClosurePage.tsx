import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsClosurePage = () => {
  return (
    <>
      <Typography>
        In JavaScript, a closure is a combination of a function and its lexical
        environment (the scope in which the function was defined). It allows a
        function to access variables from its outer scope even after the outer
        function has finished executing. In other words, a closure &ldquo;closes
        over&rdquo; the variables in its outer scope, preserving them for later
        use.
      </Typography>
      <Alert severity="info">
        Closure is when a function is able to remember and access its lexical
        scope, the variables outside of itself, so-called free variables, when
        it&apos;s able to access that lexical scope, even when that function
        executes in a different scope.
      </Alert>
      <Typography>Here you have a couple of examples:</Typography>
      <Code noHeader>
        <>{`
function outerFunction() {
  let outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: "I am from the outer function"`}</>
      </Code>

      <Code noHeader>
        <>{`
function ask() {
  setTimeout(function waitASec(){
    console.log(question)
  }, 1000);
}
ask("What is closure?);
// What is closure?
`}</>
      </Code>
      <Typography>
        See this example here it is using the same variable:
      </Typography>

      <Code noHeader>
        <>{`
for (var i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("i: " + i);

  }, i * 1000);
}
// i: 4
// i: 4
// i: 4`}</>
      </Code>
      <Typography>
        So we&apos;re expecting it to print out i 1, i 2, i 3, but when we run
        it it prints out 4, 4, 4. Why? Cuz there&apos;s only one i variable.
        There&apos;s an i variable on line 1 and there&apos;s only one of them,
        and we have three functions. If we wanted to have three separate values,
        how many variables would we need? 3!
      </Typography>
      <Typography>
        We can&apos;t effectively use closure until we separate ourselves from
        that perception of capturing values. It&apos;s not capturing a value,
        preserving access to a variable, okay? So, if we wanted to solve this
        problem, and we analyzed that, I need separate variables, we&apos;ve
        seen several multiple different examples of how to create variables. If
        we wanna create more than one variable with the same name, we need to
        make new scopes, right? So we could do an iffy here, but the much more
        common way now that we have ES six, now that we have blockscoping, is to
        just stick a block scoped declaration in the iteration.
      </Typography>
      <Code noHeader>
        <>{`
for (var i = 1; i <= 3; i++) {
  let j = i;
  setTimeout(function() {
    console.log("j: " + j);

  }, j * 1000);
}
// j: 1
// j: 2
// j: 3`}</>
      </Code>
      <Typography>There is one more better solution:</Typography>
      <Code noHeader>
        <>{`
for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log("i: " + i);

  }, i * 1000);
}
// i: 1
// i: 2
// i: 3`}</>
      </Code>
      <Typography>
        Which means the closure just magically works, okay? The point is if you
        need multiple different values being closed over you need multiple
        different variables. You need to close over different variables, not try
        to capture values.
      </Typography>
      <Typography variant="h4">Module Pattern</Typography>
      <Typography>
        Now, we finally get to talk about the module pattern. We have built
        ourselves up through a solid understanding of lexical scope. Lexical
        scope gives us an understanding of how closure works, and closure then
        is a necessary component to understand the module pattern. Before we
        look at what the module pattern is, we need to look at what the module
        pattern is not. This is an extremely common pattern, a common pattern
        where you have a set of behavior-like functions and a set of data that
        those functions operate on. And you wanna collect them together into
        some logical unit, the simplest way is to just make an object and put
        your data and your functions directly on the object.
      </Typography>
      <Typography>
        I would say that this has a name, unofficially, but this had a name as a
        pattern, this is the namespace pattern. Taking a set of functions and
        data and putting them inside of an object, putting them as properties
        instead of variables, it is effectively collecting them into a
        namespace. Not really a syntactic feature of the language, but it is an
        idiom that we make namespaces with objects. And for years, this was an
        extremely common pattern. This is how people collected functionality
        together. This was sort of the primitive data structure, if you will.
        Nothing wrong with this particular pattern.
      </Typography>
      <Code noHeader>
        <>{`
var workshop = {
  teacher: "Marc",
  ask(question) {
    console.log(this.teacher, question);
  },
}

workshop.ask("Is this a module?")
// Marc Is this a module?`}</>
      </Code>
      <Alert severity="info">
        Modules encapsulate data and behavior (methods) together. The state
        (data) of a module is held by its methods via closure.
      </Alert>
      <Typography>
        You can not have a module without closure. Minimally expose only
        what&apos;s necessary. That&apos;s the module pattern.
      </Typography>
      <Typography variant="h4">ES6 Modules</Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

export default function ask(question) {
  console.log(teacher, question);
}`}</>
      </Code>
      <Typography>
        Wrapped in a scope that is by default private. The way you make
        something public is you use the export keyword, like you see on line 3.
        So anything you export is public, everything that you don&apos;t export
        is private. The other thing to know about modules is that they are
        file-based. Which means it is impossible to have more than one ES6
        module in the same file. If your application is composed of say, 1,000
        modules, the way many of your applications are, and you write all of
        them in ES6 modules, you&apos;ll be writing them all as separate files,
        which is fine.
      </Typography>

      <Code noHeader>
        <>{`
import ask from "workshop.mjs"
ask("It is a default import, right?")
// Marc It is a default import, right?`}</>
      </Code>

      <Code noHeader>
        <>{`
import * as workshop from "workshop.mjs"
workshop.ask("It is a namespace import, right?")
// Marc It is a namespace import, right?`}</>
      </Code>
    </>
  );
};

export default JavascriptBasicsClosurePage;
