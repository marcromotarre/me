import Alert from "../../components/common/alert/Alert";
import Code from "../../components/common/code/Code";
import Typography from "../../components/common/typography/Typography";

export default function TypescriptPage() {
  type UserContactInfo = {
    name: string;
    email: string;
  };

  function printUserContactInfo(info: UserContactInfo) {
    console.log(info.name + " " + info.email);
  }
  return (
    <>
      <Typography>
        TypeScript is an open-source programming. Is a statically-typed superset
        of JavaScript that compiles to plain JavaScript code. TypeScript adds
        optional static type checking, classes, interfaces, and other features
        to JavaScript, enhancing its functionality and tooling support.
      </Typography>
    </>
  );
}
