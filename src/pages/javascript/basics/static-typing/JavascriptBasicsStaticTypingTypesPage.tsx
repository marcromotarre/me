import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

const JavascriptBasicsStaticTypingTypesPage = () => {
  return (
    <>
      <Typography variant="h4">Typescript & Flow</Typography>
      <Typography>Benefits:</Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>Catch type-related mistakes</Typography>
        </li>
        <li>
          <Typography>Communicate type intent</Typography>
        </li>
        <li>
          <Typography>Provide IDE feedback</Typography>
        </li>
      </ol>
      <Typography>Caveats:</Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>Inferencing is best-guess, not a guarantee</Typography>
        </li>
        <li>
          <Typography>Annotations are optional</Typography>
        </li>
        <li>
          <Typography>
            Any part of the application that is not typed introduces uncertainty
          </Typography>
        </li>
      </ol>
      <Typography variant="h4">Inferencing</Typography>
      <Typography>
        So some examples of TypeScript and Flow, if you do not do any typing at
        all, both TypeScript and Flow by default will do some inferencing. So
        here they are doing a static types inference, which means my intent that
        they are guessing, is that I want teacher, the variable to only ever
        hold strings. And when I later try to assign it something non-string, it
        throws me an error, and says, you are doing an assignment that you
        should not do.
      </Typography>
      <Typography>
        That is their best guess. Some people feel that one of the biggest
        problems within types is that we accidentally assign a value to a
        variable that is not the type we thought. And so for them, static types
        are a big deal. But if you control the situation and feel confident
        about reasign variables with different types. This feature about static
        typing will not help you at all.
      </Typography>
      <Typography>
        JavaScript variables do not have types, but we are layering on this
        extra requirement if you will, okay? So that is when we do not annotate
        the types, but of course we can annotate the types.
      </Typography>
      <Code noHeader>
        <>{`
var teacher = "Marc";

// ..

teacher = {name: "Marc"}
// Error: Type 'number' is not assignable to type 'string'`}</>
      </Code>
      <Code noHeader>
        <>{`
var teacher: string = "Marc";

// ..

teacher = {name: "Marc"}
// Error: Type 'number' is not assignable to type 'string'`}</>
      </Code>
      <Typography>
        We can say teacher is definitely a string. We are gonna get basically
        the same error, but here we are not guessing at the error. We are
        literally saying I intended for this thing to only ever hold strings,
        and now you are trying to put something non-string to it. In both cases
        TypeScript and Flow are gonna throw us an error and say, you are
        assigning something you should not have, okay?
      </Typography>

      <Typography variant="h4">Custom Types</Typography>
      <Typography>
        We can get much more sophisticated when we talk about function
        parameters and return values. You can define custom types like this.
        Here I am defining that an object of a type that has a property called
        name that is of type string, that is a type. And then I can pass values
        of that type as parameters.
      </Typography>
      <Code noHeader>
        <>{`
type student = { name: string };

function getName(studentRec: student): string {
  return studentRec.name;
}

var firstStudent: student = { name: "Frank" };

var firstStudentName: string = getName(firstStudent);`}</>
      </Code>
      <Typography>
        And I can receive values back as parameters. So here I am passing in
        studentRec of the type student. I am defining my own type if you will.
        So it is much more powerful in that you can define these custom types.
        And this program, just to be clear, this program does not have any
        errors.
      </Typography>
      <Typography>
        I probably would define many more of my parameters as say union types.
        Or I would say, you know what, I am gonna allow strings, numbers, and
        nulls. Because it is rare that I want it to be so restrictive that it
        can only ever receive exactly this kind of structured object for
        example.
      </Typography>
      <Typography>
        But nevertheless, it is able to do some very useful guarantees if the
        problems that you have are misassignments of types.
      </Typography>

      <Typography variant="h4">Validating Operand Types</Typography>
      <Typography>
        One thing that I think is undervalued within TypeScript this is actually
        where many more of my bugs have come from. It is that in addition to
        being able to a static typing information about variable assignments, it
        can also tell us that certain operations would be invalid. In this
        particular case, it is saying you can&apos;t subtract a string from a
        number.
      </Typography>
      <Code noHeader>
        <>{`
var studentName: string = "Frank";

var studentCount: number = 16 - studentName;
// error: can't substract string`}</>
      </Code>
      <Typography>
        Because that particular preference is saying do not allow that coercion,
        and in this particular case, that would be a really useful help for me.
        I would really like for a linter to tell me, do not try to subtract a
        string from a number. What I would really like is a linter that let me
        have that, but not let me have all the complaints about all my static
        type assignments.
      </Typography>
      <Typography>
        That would be my preference. But this is, I think, an undervalued part
        of what they do. Is that they are actually allowing us to check the
        operations that we are doing where most of our business logic is, and
        making sure that those operations are valid. It would be nice if
        TypeScript would have some mechanism by which you could allow some more
        coercion to occur.
      </Typography>
      <Typography>
        Because there are plenty of places, as I have already made the case,
        where I would like to be able to do coercion and other Places I would
        like to avoid it. It appears to me in my research that Typescript is
        kind of all or nothing. You opt into it or you don&apos;t opt into it. I
        would prefer there to be more nuance and configuration.
      </Typography>
      <Typography variant="h4">Typescript & Flow Summary</Typography>
      <Typography>
        If you are curious about TypeScript and Flow and their differences, this
        is both similarities and differences, but especially differences, I
        found this particular article to be very helpful. They went through
        essentially both projects side by side, big long list of all the
        different characteristics and where they are the same, same, same, same,
        and the places where they are different.
      </Typography>
      <Typography>
        It is a good article, so I would recommend checking it out. In summary,
        what I would say is that TypeScript and flow are very useful in that a
        lot of people are finding them to be helpful to solve their typing
        issues, helpful to make their types more obvious. Where I find them to
        be frustrating or maybe it is just me frustrated about the ecosystem is
        that we seem to jump immediately to, that is the only option.
      </Typography>

      <Alert severity="info">
        https://github.com/niieani/typescript-vs-flowtype
      </Alert>

      <Typography>
        If you have types, you can either ignore types entirely and use triple
        equals, or you can jump to this other extreme, which is layer on
        something on top of JavaScript, which I would argue is fundamentally not
        really the DNA of JavaScript. And I would like for there to be something
        in between.
      </Typography>

      <Typography variant="h4">Static Typing Props</Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>They make types more obvious in code</Typography>
        </li>
        <li>
          <Typography>
            Familiarity: they look like other language&apos;s type systems
          </Typography>
        </li>
        <li>
          <Typography>Extremely popular these days</Typography>
        </li>
        <li>
          <Typography>
            They are very sophisticades and good at what they do
          </Typography>
        </li>
      </ol>
      <Typography variant="h4">Static Typing Cons</Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>
            They use non-JS-standard syntax (or code comments)
          </Typography>
        </li>
        <li>
          <Typography>
            They require a build process which raises the barrier to entry
          </Typography>
        </li>
        <li>
          <Typography>
            Their sopistication can be intimidating to those without prior
            formal types experience
          </Typography>
        </li>
        <li>
          <Typography>
            They focus more on static types (variables, parameters, return,
            properties, etc) than value types
          </Typography>
        </li>
      </ol>
      <Typography variant="h4">Understanding your types</Typography>
      <Typography>
        Javascript has a (dynamic) type system, which uses various forms of
        coercion for value type conversion, including equality comparisons.
      </Typography>
      <Typography>
        However the prevailing response seems to be: avoid as much of this
        system as possible, and use === to &ldquo;protect&ldquo; from needing to
        worry about types.
      </Typography>
      <Typography>
        Part of the problem with avoidance of whole swaths of JS, like
        pretending === saves you from needing to know types, is that it tends to
        systemically perpetuate bugs.
      </Typography>
      <Typography>
        You simply cannot write quality JS programs without knowing the types
        involved in your operations.
      </Typography>
      <Typography>
        Alternately, many choose to adopt a different &ldquo;static types&ldquo;
        system layered on top, while certainly helpful in some respects, this is
        &ldquo;avoidance&ldquo; of a different sort
      </Typography>
      <Typography>
        Apparently, JS&apos;s type system in inferior so it must be replaced,
        rather than learned and leveraged. Many claim that JS&apos;s type system
        is too difficult for newer devs to learn, and that static types are
        (somehow) more learnable.
      </Typography>
      <Typography>
        My claim: the better approach is to embrace and learn JS&apos;s type
        system, and to adopt a coding style which makes types as obvious as
        possible. By doing so, you will make your code more readable and more
        robust, for experienced and new developers alike. As an option to aid in
        that effort, Kyle Simons created Typl, which embraces and unlocks the
        best parts of JS&apos;s types and coercion.
      </Typography>
    </>
  );
};

export default JavascriptBasicsStaticTypingTypesPage;
