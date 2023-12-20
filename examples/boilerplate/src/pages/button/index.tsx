import { Content, Footer, Header, Page } from '@alita/flow';
import type { FC } from 'react';
import {
  Divider,
  FilledButton,
  FilledTonalButton,
  OutlinedButton,
  TextButton,
  ElevatedButton
} from 'umy';
interface ButtonPageProps {}

const ButtonPage: FC<ButtonPageProps> = () => {
  return (
    <Page>
      <Header></Header>
      <Content>
        <h1>Usage</h1>
        <Divider></Divider>
        <p>
          Buttons have label text that describes the action that will occur if a
          user taps a button.
        </p>
        <OutlinedButton>Back</OutlinedButton>
        <FilledButton>Complete</FilledButton>
        <h2>Usage</h2>
        <p>
          An icon may optionally be added to a button to help communicate the
          button's action and help draw attention.
        </p>
        <FilledTonalButton>
          Send
          <svg slot="icon" viewBox="0 0 48 48">
            <path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" />
          </svg>
        </FilledTonalButton>
        <TextButton trailing-icon>
          Open
          <svg slot="icon" viewBox="0 0 48 48">
            <path d="M9 42q-1.2 0-2.1-.9Q6 40.2 6 39V9q0-1.2.9-2.1Q7.8 6 9 6h13.95v3H9v30h30V25.05h3V39q0 1.2-.9 2.1-.9.9-2.1.9Zm10.1-10.95L17 28.9 36.9 9H25.95V6H42v16.05h-3v-10.9Z" />
          </svg>
        </TextButton>
        <h2>Accessibility</h2>
        <p>Add an aria-label attribute to buttons whose labels need a more descriptive label.</p>
        <ElevatedButton aria-label="Add a new contact">Add</ElevatedButton>
      </Content>
      <Footer></Footer>
    </Page>
  );
};

export default ButtonPage;
