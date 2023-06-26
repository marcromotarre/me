import Typography from "../../../components/common/Typography/Typography";
import Accordion from "../../../components/common/accordion/Accordion";
import AccordionDetails from "../../../components/common/accordion/AccordionDetails";
import AccordionSummary from "../../../components/common/accordion/AccordionSummary";
import Card from "../../../components/common/card/Card";
import { ReactIcon, UpIcon } from "../../../components/common/icons";

const ReactMyComponentsAccordionPage = () => {
  return (
    <>
      <Typography variant="h3">Accordion</Typography>
      <Typography>
        Accordion is a component to show or hide some data
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<UpIcon className="" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="flex items-center">
            <ReactIcon color="black" className="mr-2" />
            <Typography>Accordion 1</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion>
            <AccordionSummary
              expandIcon={<UpIcon className="" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="flex items-center">
                <ReactIcon color="black" className="mr-2" />
                <Typography>Accordion 1</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Accordion>
                <AccordionSummary
                  expandIcon={<UpIcon className="" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="flex items-center">
                    <ReactIcon color="black" className="mr-2" />
                    <Typography>Accordion 1</Typography>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default ReactMyComponentsAccordionPage;
