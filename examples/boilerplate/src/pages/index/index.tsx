import { Content, Footer, Header, Page } from '@alita/flow';
import {
  Checkbox,
  Divider,
  Fab,
  FilledButton,
  Icon,
  List,
  ListItem,
} from 'umy';

const HomePage = () => {
  return (
    <Page>
      <Header></Header>
      <Content>
        
      <Divider></Divider>

        <List>
          <ListItem>Fruits</ListItem>
          <ListItem>Apple</ListItem>
          <ListItem>Banana</ListItem>
          <ListItem>
            <div slot="supporting-text">
              Cucumbers are long green fruits that are just as long as this
              multi-line description
            </div>
            <div slot="headline">Cucumber</div>
          </ListItem>
          <ListItem
            interactive
            href="https://google.com/search?q=buy+kiwis&tbm=shop"
            target="_blank"
          >
            <div slot="headline">Shop for Kiwis</div>
            <div slot="supporting-text">
              This will link you out in a new tab
            </div>
            <Icon slot="end">open_in_new</Icon>
          </ListItem>
        </List>
        
        <FilledButton
          href=""
          onClick={() => {
            console.log(1231231);
          }}
        >
          12321
        </FilledButton>
        <Checkbox touchTarget="wrapper"></Checkbox>
        <Checkbox touch-target="wrapper" checked></Checkbox>
      </Content>
      <Footer><Fab aria-label="Edit">
          <Icon slot="icon">edit</Icon>
        </Fab></Footer>
    </Page>
  );
};

export default HomePage;
