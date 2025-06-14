import Container from './container';

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col">
          <p className="text-xs">
            To nie jest blog kulinarny. Nie ma tu zdjęć ani wyszukanych opisów. Traktuję tę stronę
            jako notes z moimi ulubionymi przepisami, do których wracam... żeby nie musieć ich
            szukać za każdym razem ;) Każdy przepis ma odnośnik do źródła... jeśli je pamiętam.
          </p>
          <p className="text-xs">© shuimanao</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
