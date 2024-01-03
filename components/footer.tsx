import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <p className="text-xs">© shuimanao</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
