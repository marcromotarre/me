import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsObjectsPage = () => {
  return (
    <>
      <Typography>
        The objects, the this keyword and the prototypes, those make up the
        objects oriented system. I&apos;m deliberately saying objects oriented
        instead of object oriented because this is not strictly a class system,
        there is classes that have been layered on top of it. And that is an
        option that many people prefer, but it is not inherently a class system.
        So we&apos;re gonna start by understanding this keyword, which is one of
        the foundational pieces here.
      </Typography>
      <Typography>
        We&apos;ll look at what the class system does, the class keyword layered
        on top of JavaScript. And then we&apos;ll circle back to understand
        where that is syntactic sugar on top of, which is actually the prototype
        system. And then after we&apos;ve fully understood how JavaScript&apos;s
        objects system has been used to implement the class pattern, what
        I&apos;m gonna leave you with at the end of this unit is a discussion
        about the inheritance pattern from classes as opposed to the delegation
        pattern. And I&apos;m gonna argue that the delegation pattern is a more
        powerful pattern that we basically aren&apos;t taking advantage of
        because we&apos;re focused on only doing classes with JavaScript&apos;s
        prototypes. The delegation pattern is much more powerful and much more
        widespread, but we sort of focus very myopically only on classes.
      </Typography>
      <Typography>
        And that leads us to a comparison of coding styles where OO is class
        oriented in JavaScript, and I&apos;ve come up with a different style of
        code that I call OLOO, which stands for objects linked to other objects.
      </Typography>
      <Typography variant="h4">this keyword</Typography>
      <Alert severity="info">
        A function&apos;s this references the execution context for that call,
        determined entirely by how the function was called.
      </Alert>
      <Typography>
        Which is the counterintuitive part because most people think that you
        could look at a function, and figure out what this keyword is gonna
        point out. But the definition of the function does not matter at all, to
        determining the this keyword. The only thing that matters is how does
        that function get invoked?
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

function ask(question) {
  console.log(teacher, question);
}

function otherClass() {
  var teacher = "Suzy";
  ask("Why?");
}

otherClass();`}</>
      </Code>
      <Typography>
        f that sounds familiar to you, it&apos;s because we&apos;ve sort of
        already talked about a flexible reusable context. It was what we talk
        about when we talk about dynamic scoping, and the scope you need of our
        discussion. So in other words, that these keyword is JavaScript&apos;s
        version of dynamic scope if it&apos;s this way of having as flexible,
        reusable behavior.
      </Typography>
      <Code noHeader>
        <>{`
function ask(question) {
  console.log(this.teacher, question);
}

function otherClass() {
  var myContext = {
    teacher: "Suzy"
  };
  ask.call(myContent, "Why?"); // Suzy Why?
}

otherClass();`}</>
      </Code>
      <Typography>
        So this keyword in this particular case, will end up pointing at my
        context. So you see that sort of dynamic flexibility happening here. You
        see that I could call that same ask function, lots of different ways.
        And provide lots of different context objects for the this keyword point
        on, that&apos;s the dynamic flexible reusability of the this keyword..
        That&apos;s why it exists by the way, it exists so that we can invoke
        functions in these different contexts.
      </Typography>
      <Typography variant="h4">Implicit Binding</Typography>
      <Code noHeader>
        <>{`
var workshop = {
  teacher: "Marc",
  ask(question) {
    console.log(this.teacher, question);
  }
};

workshop.ask("What is the implicit binding?");
// Marc What is the implicit binding?`}</>
      </Code>

      <Code noHeader>
        <>{`
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Marc",
  ask: ask,
};

var workshop2 = {
  teacher: "Suzy",
  ask: ask,
};

workshop1.ask("How do I share a method?");
// Marc How do I share a method?

workshop2.ask("How do I share a method?");
// Suzy How do I share a method?`}</>
      </Code>
      <Typography variant="h4">Explicit Binding</Typography>

      <Code noHeader>
        <>{`
function ask(question) {
  console.log(this.teacher, question);
}

var workshop1 = {
  teacher: "Marc",
};

var workshop2 = {
  teacher: "Suzy",
};

ask.call(workshop1, "Can I explicitly set context?");
// Marc Can I explicitly set context?

ask.call(workshop2, "Can I explicitly set context?");
// Suzy Can I explicitly set context?`}</>
      </Code>
      <Typography variant="h4">Hard Binding</Typography>
      <Code noHeader>
        <>{`
var workshop = {
  teacher: "Marc",
  ask(question) {
    console.log(this.teacher, question);
  },
};

setTimeout(workshop.ask, 10, "Lost this?");
// undefined Lost this?

setTimeout(workshop.ask.bind(workshop), 10, "Hard bound this?");
// Marc,Hard bound this?`}</>
      </Code>
      <Typography variant="h4">The new Keyword</Typography>
      <Typography>
        The purpose of the new keyword is actually to invoke a function with a
        this keyword pointing at a whole new empty object. If we have invoking
        functions and pointing them at a context object, like a workshop.ask,
        that&aps;s one way. Or we say I&aps;m gonna invoke a function and give
        it a specific object with .call or .apply or I&aps;m gonna force it with
        a .bind.
      </Typography>
      <Code noHeader>
        <>{`
function ask(question) {
  console.log(this.teacher, question);
}

var newEmptyObject = new ask("What is 'new' doing here?");
// undefined What is 'new' ddoing here?`}</>
      </Code>
      <Typography>What the new keyword does?</Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>Create a brand new empty object</Typography>
        </li>
        <li>
          <Typography>* Link that object to another object</Typography>
        </li>
        <li>
          <Typography>Call function with this set to the new object</Typography>
        </li>
        <li>
          <Typography>
            If function does not return an object, assume return of this
          </Typography>
        </li>
      </ol>
      <Typography variant="h4">Default Binding</Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

function ask(question) {
  console.log(this.teacher, question);
}

function askAgain(question) {
  "use strict";
  console.log(this.teacher, question);
}

ask("What's the non-strict-mode default?");
// Marc What's the non-strict-mode default?


askAgain("What's the strict-mode default?");
// TypeError
// we are getting an error because this is undefined, we need to use .call .apply or .bind to send the this`}</>
      </Code>
      <Typography variant="h4">Binding Precedence</Typography>
      <Code noHeader>
        <>{`
var workshop = {
  teacher: "Marc",
  ask: function ask(question) {
    console.log(this.teacher, question);
  },
};

new (workshop.ask.bind(workshop))("What does this do?");
// undefined What does this do?`}</>
      </Code>

      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>Is this function called by new?</Typography>
        </li>
        <li>
          <Typography>Is the function called by call() or apply()?</Typography>
          <ol className="grid gap-y-2 pl-9">
            <li>
              <Typography>Note: bind() effectively uses apply()</Typography>
            </li>
          </ol>
        </li>
        <li>
          <Typography>Is the function called on a context object?</Typography>
        </li>
        <li>
          <Typography>DEFAULT: global object (except strict mode)</Typography>
        </li>
      </ol>
      <Typography variant="h4">Arrow Functions & Lexical this</Typography>
    </>
  );
};

export default JavascriptBasicsObjectsPage;
