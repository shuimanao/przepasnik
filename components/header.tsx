import { useState, useContext } from 'react';
import Link from 'next/link';
import Container from './container';
import { PostsContext } from './layout';

const title = 'Przepaśnik.';

const Header = ({
  titleClickable,
  activeCategory,
  onCategoryChange,
  showSearchAndCategories,
}: {
  titleClickable: boolean;
  activeCategory: string | null;
  onCategoryChange: (arg: string | null) => void;
  showSearchAndCategories?: boolean;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { search, setSearch } = useContext(PostsContext);
  const categories = [
    { name: 'sweet', label: 'Słodki' },
    { name: 'salty', label: 'Słony' },
    { name: 'undefined', label: 'Nieokreślony' },
  ];

  return (
    <header className="bg-amber-50 border-b-4 border-amber-200">
      <Container>
        <section className="flex-col md:flex-row flex items-center md:justify-between py-6 gap-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight md:pr-8 text-amber-900">
            {titleClickable ? (
              <Link href="/" className="hover:text-amber-600 transition-colors">
                {title}
              </Link>
            ) : (
              title
            )}
          </h1>

          {/* Search input */}
          {showSearchAndCategories && (
            <div className="relative w-48 md:w-64">
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Szukaj..."
                className="border border-amber-200 rounded-md px-3 py-2 focus:outline-none focus:border-amber-400 transition-colors text-lg w-full bg-white shadow-sm pr-10"
              />
              {search && (
                <button
                  type="button"
                  aria-label="Wyczyść wyszukiwanie"
                  onClick={() => setSearch('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-amber-400 hover:text-amber-600 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Mobile menu button */}
          {showSearchAndCategories && (
            <button
              className="md:hidden p-2 rounded-md hover:bg-amber-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6 text-amber-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          )}

          {/* Navigation menu */}
          {showSearchAndCategories && (
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
                <li>
                  <button
                    onClick={() => onCategoryChange(null)}
                    className={`text-lg text-amber-900 hover:text-amber-600 transition-colors ${
                      activeCategory === null ? 'font-bold' : ''
                    }`}
                  >
                    Wszystkie
                  </button>
                </li>
                {categories.map(({ name, label }) => (
                  <li key={name}>
                    <button
                      onClick={() => onCategoryChange(name)}
                      className={`text-lg text-amber-900 hover:text-amber-600 transition-colors ${
                        activeCategory === name ? 'font-bold' : ''
                      }`}
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </section>
      </Container>
    </header>
  );
};

export default Header;
