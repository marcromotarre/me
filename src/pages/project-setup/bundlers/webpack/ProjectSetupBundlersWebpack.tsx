import Alert from "../../../../components/common/alert/Alert";
import Code from "../../../../components/common/code/Code";
import Typography from "../../../../components/common/typography/Typography";

export default function ProjectSetupBundlersWebpack() {
  return (
    <>
      <Typography variant="h4">Origin</Typography>
      <Typography>
        How do you use JavaScript in the browser? There&apos;s really only two
        ways, that&apos;s it. There&apos;s only two ways that you can use
        JavaScript and load it in the browser. The first way is adding a script
        tag for passing a source attribute and a reference to that JavaScript
        file. And the second way is actually this write your job description to
        HTML, JS and HTML that new thing
      </Typography>
      <Alert severity="info">Javascript - It&apos;s just scripts!</Alert>
      <Typography>
        What is a problem for these things? It doesn&apos;t scale, whatsoever. I
        mean, you&apos;re either gonna have too many scripts that you&apos;re
        trying to load from script tags in the HTML. And each browser actually
        has bottlenecks. This creates a bottleneck. There&apos;s only a certain
        amount of concurrent requests that can fetch data at a single time. And
        so like breaking your application into a 100 JavaScript files and
        loading them in the browser is a huge performance problem.
      </Typography>
      <Typography>
        Do you remember that 10000 lines project in a single file?
      </Typography>
      <Typography>Then appeared the IIFE functions</Typography>
      <Code noHeader>
        <>{`
var outerScope = 1;

const whatever = (function(dataNowUsedInside) {
  var outerScope = 4;
  return {
    someAttribute: "youwant";
  }
})(1)

console.log(outerScope) 
// 1 (No inner scope leak)`}</>
      </Code>
      <Alert severity="success">
        Concatenate! We can safely combine files without concern of scope
        collision!
      </Alert>
      <Typography>
        What you&apos;re gonna notice that, anytime you want to change one file,
        you have to rebuild the whole thing. We&apos;re just concatenating all
        of these module. They are not modules but these scripts together.
      </Typography>
      <Alert severity="info">Lots of IIFE&apos;s are slow!</Alert>
      <Typography variant="h6">Birth of Javascript Modules</Typography>
      <Typography>
        Modules happened kind of around this early period thanks to Node.js. If
        you&apos;re using webpack, you&apos;re using node, you rely on node.
        Node is the canonical like you will find and maybe some, I know some
        .NET people don&apos;t like hearing this but if you want to build a
        canonical web application, be prepared to install node.
      </Typography>
      <Typography>
        We just solved scope here without iffies or anything. We now can pull in
        pieces of values, assign them to variables in a different module without
        having problems with scope or anything like that. And actually kinda
        gave us a little static analysis, right, we can tell right here exactly
        what is used for the most part. This is when the explosion of JavaScript
        starts. Like you may hear people, you may hear me say like JavaScript is
        taking over the world as a programming language, as a platform, as a way
        to rapidly develop and create fast running applications.
      </Typography>
      <Alert severity="error">No Browser support!</Alert>
      <Alert severity="error">No Live Bindings!</Alert>
      <Typography>
        Some Bundler like Browserify, requireJS, systemJS start to appear
      </Typography>
      <Typography>After that appeared EcmaScript</Typography>
      <Code noHeader>
        <>
          {`
import {uniq, forOf, bar} from 'lodash-es'
import *  as utils from 'utils'

export const uniqConst = uniq([1,2,2,4])`}
        </>
      </Code>
      <Typography>So then appeared webpack.</Typography>
      <Alert severity="info">
        Webpack. is a module bundler. Lets you write any module format (mixed!),
        compiles them for the browser. Supports static async bundling. Is
        performant!
      </Alert>
      <Typography variant="h4">What is webpack?</Typography>
      <Typography>
        At its core, webpack is a static module bundler for modern JavaScript
        applications. When webpack processes your application, it internally
        builds a dependency graph from one or more entry points and then
        combines every module your project needs into one or more bundles, which
        are static assets to serve your content from.
      </Typography>
      <Typography>
        Since version 4.0.0, webpack does not require a configuration file to
        bundle your project. Nevertheless, it is incredibly configurable to
        better fit your needs.
      </Typography>
      <Typography>
        To get started you only need to understand its Core Concepts:
      </Typography>
      <Typography variant="h6">Entries</Typography>
      <Typography>
        An entry point indicates which module webpack should use to begin
        building out its internal dependency graph. Webpack will figure out
        which other modules and libraries that entry point depends on (directly
        and indirectly). By default its value is ./src/index.js, but you can
        specify a different (or multiple) entry points by setting an entry
        property in the webpack configuration. For example:
      </Typography>
      <Code noHeader>
        <>{`
//  webpack.config.js

module.exports = {
  entry: './path/to/my/entry/file.js',
};`}</>
      </Code>
      <Typography variant="h6">Output</Typography>
      <Typography>
        The output property tells webpack where to emit the bundles it creates
        and how to name these files. It defaults to ./dist/main.js for the main
        output file and to the ./dist folder for any other generated file. You
        can configure this part of the process by specifying an output field in
        your configuration:
      </Typography>
      <Code noHeader>
        <>{`
//  webpack.config.js

const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};`}</>
      </Code>
      <Typography>
        In the example above, we use the output.filename and the output.path
        properties to tell webpack the name of our bundle and where we want it
        to be emitted to. In case you are wondering about the path module being
        imported at the top, it is a core Node.js module that gets used to
        manipulate file paths.
      </Typography>

      <Typography variant="h6">Loaders</Typography>
      <Typography>
        Out of the box, webpack only understands JavaScript and JSON files.
        Loaders allow webpack to process other types of files and convert them
        into valid modules that can be consumed by your application and added to
        the dependency graph.
      </Typography>
      <Typography>
        At a high level, loaders have two properties in your webpack
        configuration:
      </Typography>
      <ol className="grid list-[type1] gap-y-2 pl-9">
        <li>
          <Typography>
            The test property identifies which file or files should be
            transformed.
          </Typography>
        </li>
        <li>
          <Typography>
            The use property indicates which loader should be used to do the
            transforming.
          </Typography>
        </li>
      </ol>
      <Typography variant="h6">Plugins</Typography>
      <Typography>
        While loaders are used to transform certain types of modules, plugins
        can be leveraged to perform a wider range of tasks like bundle
        optimization, asset management and injection of environment variables.
      </Typography>
      <Typography variant="h6">Mode</Typography>
      <Typography>
        By setting the mode parameter to either development, production or none,
        you can enable webpack&apos;s built-in optimizations that correspond to
        each environment. The default value is production.
      </Typography>
      <Typography variant="h6">Output</Typography>
    </>
  );
}
