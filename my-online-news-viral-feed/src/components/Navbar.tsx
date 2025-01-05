"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const categories = [
  { name: "arts", color: "pink" },
  { name: "automobiles", color: "blue" },
  { name: "books", color: "green" },
  { name: "business", color: "yellow" },
  { name: "fashion", color: "red" },
  { name: "food", color: "teal" },
  { name: "health", color: "indigo" },
  { name: "insider", color: "gray" },
  { name: "magazine", color: "purple" },
  { name: "movies", color: "orange" },
  { name: "nyregion", color: "cyan" },
  { name: "obituaries", color: "lime" },
  { name: "opinion", color: "amber" },
  { name: "politics", color: "sky" },
  { name: "realestate", color: "fuchsia" },
  { name: "science", color: "rose" },
  { name: "sports", color: "violet" },
  { name: "sundayreview", color: "pink" },
  { name: "technology", color: "blue" },
  { name: "theater", color: "yellow" },
  { name: "t-magazine", color: "green" },
  { name: "travel", color: "red" },
  { name: "upshot", color: "teal" },
  { name: "us", color: "indigo" },
  { name: "world", color: "purple" },
];

const NYT_API_KEY = "Dvhi63kc4DEXVKWzm2IL9ySsP3wndAXy";

interface Multimedia {
  url: string;
  caption: string;
}

interface SearchResult {
  headline: {
    main: string;
  };
  snippet: string;
  web_url: string;
  multimedia: Multimedia[];
}

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    setSearchResults([]);

    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=${NYT_API_KEY}`;

    try {
      const response = await fetch(URL);
      const data = await response.json();

      if (data.response.docs) {
        setSearchResults(data.response.docs);
      } else {
        setError("No results found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* --- NAVBAR --- */}
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <h2 className="font-bold">ViralFeed</h2>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link href="/" className="text-sm/6 font-semibold text-zinc-900">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm/6 font-semibold text-zinc-900"
            >
              About Us
            </Link>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setOpenSearch(true)}
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
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-zinc-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h2 className="font-bold">ViralFeed</h2>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-zinc-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-zinc-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-zinc-900 hover:bg-zinc-50"
                  >
                    About Us
                  </Link>
                </div>
                <div className="py-6">
                  <button
                    className="btn btn-ghost btn-circle"
                    onClick={() => {
                      setOpenSearch(true);
                      setMobileMenuOpen(false);
                    }}
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
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <Dialog
        open={openSearch}
        onClose={setOpenSearch}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                    <button
                      type="button"
                      onClick={() => setOpenSearch(false)}
                      className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                    >
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">Close panel</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </TransitionChild>
                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div className="px-4 sm:px-6">
                    <DialogTitle className="text-base font-semibold text-gray-900">
                      Search News
                    </DialogTitle>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6">
                    <form
                      onSubmit={handleSearch}
                      className="flex justify-center items-center space-x-4"
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="min-w-0 flex-auto rounded-md bg-white/5 px-3.5 py-2 text-base outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-zinc-500 focus:outline focus:outline-1 focus:-outline-offset-1 focus:outline-zinc-500 sm:text-sm/6"
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-zinc-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
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
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                        </svg>
                      </button>
                    </form>

                    {loading && <div className="mt-4">Searching...</div>}
                    {error && <div className="mt-4 text-red-500">{error}</div>}

                    <div className="mt-6">
                      {searchResults.length > 0 ? (
                        <ul>
                          {searchResults.map((result, index) => (
                            <li key={index} className="py-4 flex">
                              <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                {result.multimedia &&
                                result.multimedia.length > 0 ? (
                                  <Image
                                    src={`https://static01.nyt.com/${result.multimedia[0].url}`}
                                    alt={result.multimedia[0].caption}
                                    width={500}
                                    height={300}
                                    className="w-full h-full object-cover rounded-md"
                                  />
                                ) : (
                                  <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center text-center">
                                    <small className="text-gray-400">
                                      &nbsp;
                                    </small>
                                  </div>
                                )}
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <a
                                  href={result.web_url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sky-600 hover:underline"
                                >
                                  {result.headline.main}
                                </a>
                                <p className="text-sm text-gray-500">
                                  {result.snippet}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        !loading && <div>No results found.</div>
                      )}
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex-1 flex justify-center bg-white p-6">
          <div className="text-center w-full max-w-lg">
            <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              ViralFeed
            </h2>
            <p className="mt-2 text-pretty text-md font-medium text-zinc-800 sm:text-lg/8">
              Never Miss a Trend: Your Daily Feed of Viral News
            </p>
          </div>
        </div>
        <div className="pt-8 pb-14 border-b border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs whitespace-nowrap">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/section/` + category.name}
                className={`relative z-10 rounded-full bg-zinc-50 px-3 py-1.5 font-medium text-zinc-600 hover:bg-zinc-100`}
              >
                <small className="font-semibold">
                  {category.name.toUpperCase()}
                </small>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
