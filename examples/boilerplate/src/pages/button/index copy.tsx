import { Content, Footer, Header, Page } from '@alita/flow';
import type { FC } from 'react';

interface ButtonPageProps {}

const ButtonPage: FC<ButtonPageProps> = () => {
  return (
    <Page>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </Page>
  );
};

export default ButtonPage;
