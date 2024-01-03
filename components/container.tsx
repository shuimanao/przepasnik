type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="container mx-auto px-5 pt-6 pb-6">{children}</div>;
};

export default Container;
