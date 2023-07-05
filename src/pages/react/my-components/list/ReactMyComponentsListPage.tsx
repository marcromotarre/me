import Button from "../../../../components/common/buttons/Button";
import Card from "../../../../components/common/card/Card";
import { ReactIcon } from "../../../../components/common/icons";
import List from "../../../../components/common/list/List";
import ListItem from "../../../../components/common/list/ListItem";
import Typography from "../../../../components/common/typography/Typography";

export default function ReactMyComponentsListPage() {
  return (
    <>
      <Typography>This is a List Item</Typography>
      <Card>
        <List ul>
          <ListItem>
            <Button startIcon={<ReactIcon />}>Item 1</Button>
          </ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
          <ListItem>Item 4</ListItem>
          <ListItem>Item 5</ListItem>
          <ListItem>Item 6</ListItem>
        </List>
      </Card>
    </>
  );
}
