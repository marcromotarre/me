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
    </>
  );
};

export default JavascriptBasicsClosurePage;
