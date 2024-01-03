import Link from "next/link";
import Container from "./container";

const title = "Przepaśnik.";

const Header = ({ titleClickable }: { titleClickable: boolean }) => {
  return (
    <header className="border-b-4 border-double border-neutral-200">
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8">
            {titleClickable ? (
              <Link href="/" className="hover:underline">
                {title}
              </Link>
            ) : (
              title
            )}
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
            here will be menu
          </h4>
        </section>
      </Container>
    </header>
  );
};

export default Header;
