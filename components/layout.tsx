import Container from "./container";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
  titleClickable?: boolean;
};

const Layout = ({ titleClickable = false, children }: Props) => {
  return (
    <>
      <Header titleClickable={titleClickable} />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
