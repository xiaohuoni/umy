import { Checkbox, FilledButton } from 'umy';

const Page = () => {
  return (
    <>
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
    </>
  );
};

export default Page;
