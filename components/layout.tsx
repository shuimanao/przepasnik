import { useState, ReactNode, createContext } from 'react';
import { Post } from '../interfaces/post';
import Container from './container';
import Footer from './footer';
import Header from './header';

type PostsContextType = {
  posts: Post[] | undefined;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
};

export const PostsContext = createContext<PostsContextType>({
  posts: undefined,
  activeCategory: null,
  setActiveCategory: () => null,
});

type Props = {
  children: ReactNode;
  titleClickable?: boolean;
  posts?: Post[];
};

const Layout = ({ titleClickable = false, children, posts }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <PostsContext.Provider value={{ posts, activeCategory, setActiveCategory }}>
      <Header
        titleClickable={titleClickable}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </PostsContext.Provider>
  );
};

export default Layout;
