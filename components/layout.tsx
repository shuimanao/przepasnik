import { useState, ReactNode, createContext } from 'react';
import { Post } from '../interfaces/post';
import Container from './container';
import Footer from './footer';
import Header from './header';

type PostsContextType = {
  posts: Post[] | undefined;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  search: string;
  setSearch: (search: string) => void;
};

export const PostsContext = createContext<PostsContextType>({
  posts: undefined,
  activeCategory: null,
  setActiveCategory: () => null,
  search: '',
  setSearch: () => null,
});

type Props = {
  children: ReactNode;
  titleClickable: boolean;
  showSearchAndCategories: boolean;
  posts?: Post[];
};

const Layout = ({ titleClickable, children, posts, showSearchAndCategories }: Props) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  return (
    <PostsContext.Provider value={{ posts, activeCategory, setActiveCategory, search, setSearch }}>
      <Header
        titleClickable={titleClickable}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        showSearchAndCategories={showSearchAndCategories}
      />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </PostsContext.Provider>
  );
};

export default Layout;
