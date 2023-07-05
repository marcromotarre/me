import Code from "../../../components/common/code/Code";
import Typography from "../../../components/common/typography/Typography";

export default function TypescriptTypeAliasesAndInterfacesPage() {
  return (
    <>
      <Typography variant="h4">Type Aliases & Interfaces</Typography>
      <Typography>
        TypeScript provides two mechanisms for centrally defining types and
        giving them useful and meaningful names: interfaces dn type aliases. We
        will study both concepts in depth, and explain when it makes sense to
        use each type.
      </Typography>
      <Typography variant="h6">Type Aliases</Typography>
      <Typography>
        Think back to the &#123; name: string; email: string &#125; syntax used
        up until this point for type annotations. This syntax will get
        increasingly complicated as more properties are added to this type.
        Furthermore, if we pass objects of this type around through various
        functions and variables, we will end up with a lot of types that need to
        be manually updated whenever we need to make any changes!
      </Typography>
      <Typography>
        Type aliases help to address this, by allowing us to:
      </Typography>
      <ol className="grid list-[disc] gap-y-2 pl-9">
        <li>
          <Typography>define a more meaningful name for this type</Typography>
        </li>
        <li>
          <Typography>
            declare the particulars of the type in a single place
          </Typography>
        </li>
        <li>
          <Typography>
            import and export this type from modules, the same as if it were an
            exported value
          </Typography>
        </li>
      </ol>
      <Typography>
        As we see in previous section this is the way you create a Type Alias
      </Typography>
      <Code noHeader>
        <>{`
type UserContactInfo = {
  name: string;
  email: string;
};

function printUserContactInfo(info: UserContactInfo) {
  console.log(info.name + " " + info.email);
}`}</>
      </Code>
    </>
  );
}
