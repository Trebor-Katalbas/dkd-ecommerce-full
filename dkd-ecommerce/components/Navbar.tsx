"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "@/components/navbar-components/SearchBar";
import NavigationLinks from "@/components/navbar-components/NavigationLinks";
import DropdownMenu from "@/components/navbar-components/DropdownMenu";
import UserControls from "@/components/navbar-components/UserControls";

interface NavbarProps {
  collections: CollectionType[];
  category: CategoryType[];
}

const Navbar: React.FC<NavbarProps> = ({ collections, category }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);

  return (
    <div className="sticky top-0 z-50 py-2 px-10 flex gap-2 justify-between items-center bg-white shadow-xl max-sm:px-3">
      <div className="flex items-center justify-start gap-5 max-lg:gap-5">
        <DropdownMenu collections={collections} category={category} />
        <Link className="flex-shrink-0" href="/">
          <Image src="/logo.png" alt="logo" height={80} width={110} />
        </Link>

        <NavigationLinks collections={collections} category={category} />
      </div>
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
      />
      <UserControls />
    </div>
  );
};

export default Navbar;
