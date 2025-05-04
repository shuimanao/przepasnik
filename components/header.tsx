import { useState } from "react";
import Link from "next/link";
import Container from "./container";

const title = "Przepaśnik.";

const Header = ({ 
  titleClickable,
  activeCategory,
  onCategoryChange 
}: { 
  titleClickable: boolean;
  activeCategory: string | null;
  onCategoryChange: (arg: string | null) => void;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "sweet", label: "Słodki" },
    { name: "salty", label: "Słony" },
    { name: "undefined", label: "Nieokreślony" },
  ];

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
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
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

          {/* Navigation menu */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <li>
                <button
                  onClick={() => onCategoryChange(null)}
                  className={`text-lg hover:text-gray-600 transition-colors ${
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
                    className={`text-lg hover:text-gray-600 transition-colors ${
                      activeCategory === name ? 'font-bold' : ''
                    }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </Container>
    </header>
  );
};

export default Header;
