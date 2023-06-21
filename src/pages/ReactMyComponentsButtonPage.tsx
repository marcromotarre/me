import Button from "../components/common/buttons/Button";
import Code from "../components/common/code/Code";
import { ReactIcon, ReduxIcon } from "../components/common/icons";
import { ButtonCode } from "../data/codes/ButtonCode";
import {
  ButtonTestingCode1,
  ButtonTestingCode10,
  ButtonTestingCode11,
  ButtonTestingCode12,
  ButtonTestingCode13,
  ButtonTestingCode14,
  ButtonTestingCode15,
  ButtonTestingCode2,
  ButtonTestingCode3,
  ButtonTestingCode4,
  ButtonTestingCode5,
  ButtonTestingCode6,
  ButtonTestingCode7,
  ButtonTestingCode8,
  ButtonTestingCode9,
} from "../data/codes/ButtonTestingCode";

const ReactMyComponentsButtonPage = () => {
  return (
    <>
      <p className="text-xl">Button</p>

      <p className="font-light">
        {`As part of my components library I created a component <Button />`}
      </p>
      <p className="font-light">{`It's very easy to use:`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button>text</Button>
        <Code noHeader>
          <>{`<Button>text</Button>`}</>
        </Code>
      </div>
      <p className="font-light">
        {`You can mouseover the button component and you can notice that the button color changes.`}
      </p>
      <p className="font-light">{`Also the mouse icon is set to clickable.`}</p>
      <p className="font-light">
        {`Let's se in more depth what properties we can edit about the <Button /> Component`}
      </p>

      <p className="text-xl">Icon Text Button</p>
      <p className="font-light">
        {`If we combine the <Button /> Component with the <Icon /> Component we can beautiful unique Iconed Buttons`}
      </p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button startIcon={<ReactIcon />}>text</Button>
        <Code noHeader>
          <>{`<Button startIcon={<ReactIcon />}>text</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`Or after the text`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button endIcon={<ReactIcon />}>text</Button>
        <Code noHeader>
          <>{`<Button endIcon={<ReactIcon />}>text</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`Or both`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button startIcon={<ReactIcon />} endIcon={<ReactIcon />}>
          React
        </Button>
        <Code noHeader>
          <>{`<Button startIcon={<ReactIcon />}  endIcon={<ReactIcon />}>React</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`Maybe you want to set different Icons in each side`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button startIcon={<ReactIcon />} endIcon={<ReduxIcon />}>
          React-Redux
        </Button>
        <Code noHeader>
          <>{`<Button startIcon={<ReactIcon />}  endIcon={<ReduxIcon />}>React-Redux</Button>`}</>
        </Code>
      </div>

      <p className="text-xl">Icon Button</p>
      <p className="font-light">{`We show just the icon wihtout text`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button startIcon={<ReactIcon />} />
        <Code noHeader>
          <>{`<Button startIcon={<ReactIcon />} />`}</>
        </Code>
      </div>

      <p className="text-xl">Button Variant</p>
      <p className="font-light">{`I've created a property called variant to change easily the look & feel of the button`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="text">variant</Button>
        <Code noHeader>
          <>{`<Button variant="text">variant</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="contained">variant</Button>
        <Code noHeader>
          <>{`<Button variant="contained">variant</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="outlined">variant</Button>
        <Code noHeader>
          <>{`<Button variant="outlined">variant</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`And of course we can use Icons and variants at the same time`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="text" startIcon={<ReactIcon />}>
          variant
        </Button>
        <Code noHeader>
          <>{`<Button variant="text" startIcon={<ReactIcon />}>variant</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="contained" startIcon={<ReactIcon />}>
          variant
        </Button>
        <Code noHeader>
          <>{`<Button variant="contained" startIcon={<ReactIcon />}>variant</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="outlined" startIcon={<ReactIcon />}>
          variant
        </Button>
        <Code noHeader>
          <>{`<Button variant="outlined" startIcon={<ReactIcon />}>variant</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`Or just the icon`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="text" startIcon={<ReactIcon />} />
        <Code noHeader>
          <>{`<Button variant="text" startIcon={<ReactIcon />} />`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="contained" startIcon={<ReactIcon />} />
        <Code noHeader>
          <>{`<Button variant="contained" startIcon={<ReactIcon />} />`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="outlined" startIcon={<ReactIcon />} />
        <Code noHeader>
          <>{`<Button variant="outlined" startIcon={<ReactIcon />} />`}</>
        </Code>
      </div>

      <p className="text-xl">Button Size</p>
      <p className="font-light">{`I've created 3 different sizes for the buttons (small, medium & large)`}</p>

      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button size="small" startIcon={<ReactIcon />}>
          React
        </Button>
        <Code noHeader>
          <>{`<Button size="small" startIcon={<ReactIcon />}>React</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button size="medium" startIcon={<ReactIcon />}>
          React
        </Button>
        <Code noHeader>
          <>{`<Button size="medium" startIcon={<ReactIcon />}>React</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button size="large" startIcon={<ReactIcon />}>
          React
        </Button>
        <Code noHeader>
          <>{`<Button size="large" startIcon={<ReactIcon />}>React</Button>`}</>
        </Code>
      </div>

      <p className="text-xl">Button Color</p>
      <p className="font-light">{`Also I've added the color property`}</p>
      <p className="font-light">{`I defined some standard values`}</p>
      <p className="font-light">{`As error`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="text" color="error">
          Error
        </Button>
        <Code noHeader>
          <>{`<Button variant="text" color="error">Error</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="contained" color="error">
          Error
        </Button>
        <Code noHeader>
          <>{`<Button variant="contained" color="error">Error</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Code noHeader>
          <>{`<Button variant="outlined" color="error">Error</Button>`}</>
        </Code>
      </div>

      <p className="font-light">{`Or success`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="text" color="success">
          success
        </Button>
        <Code noHeader>
          <>{`<Button variant="text" color="success">success</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="contained" color="success">
          success
        </Button>
        <Code noHeader>
          <>{`<Button variant="contained" color="success">success</Button>`}</>
        </Code>
      </div>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button variant="outlined" color="success">
          success
        </Button>
        <Code noHeader>
          <>{`<Button variant="outlined" color="success">success</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`Last but not least, we can setup our defined colors`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button color="#FFDF00" startIcon={<ReactIcon />}>
          BEAUTifUL
        </Button>
        <Code noHeader>
          <>{`<Button color="#FFDF00" startIcon={<ReactIcon />}>BEAUTifUL</Button>`}</>
        </Code>
      </div>
      <p className="font-light">{`As you may notice depends of the choosen color you will not be able to read the text properly. For that reaon you can also set a color to the transparent parts. Using the secondaryColor prop`}</p>
      <div className="display grid grid-cols-[max-content_auto] gap-x-3">
        <Button
          color="#FFDF00"
          secondaryColor="black"
          startIcon={<ReactIcon />}
        >
          BEAUTifUL
        </Button>
        <Code noHeader>
          <>{`<Button color="#FFDF00" secondaryColor="black" startIcon={<ReactIcon />}>BEAUTifUL</Button>`}</>
        </Code>
      </div>

      <p className="text-xl">Code</p>
      <p className="font-light">{`Let's have a look at the code. As the other components in the library <Button /> component has been developed in typescript`}</p>
      <Code>
        <>{ButtonCode}</>
      </Code>

      <p className="text-xl">Testing</p>
      <p className="font-light">{``}</p>
      <Code>
        <>{ButtonTestingCode1}</>
      </Code>
      <Code>
        <>{ButtonTestingCode2}</>
      </Code>
      <Code>
        <>{ButtonTestingCode3}</>
      </Code>
      <Code>
        <>{ButtonTestingCode4}</>
      </Code>
      <Code>
        <>{ButtonTestingCode5}</>
      </Code>
      <Code>
        <>{ButtonTestingCode6}</>
      </Code>
      <Code>
        <>{ButtonTestingCode7}</>
      </Code>
      <Code>
        <>{ButtonTestingCode8}</>
      </Code>
      <Code>
        <>{ButtonTestingCode9}</>
      </Code>
      <Code>
        <>{ButtonTestingCode10}</>
      </Code>
      <Code>
        <>{ButtonTestingCode11}</>
      </Code>
      <Code>
        <>{ButtonTestingCode12}</>
      </Code>
      <Code>
        <>{ButtonTestingCode2}</>
      </Code>
      <Code>
        <>{ButtonTestingCode13}</>
      </Code>
      <Code>
        <>{ButtonTestingCode14}</>
      </Code>
      <Code>
        <>{ButtonTestingCode15}</>
      </Code>
    </>
  );
};

export default ReactMyComponentsButtonPage;
