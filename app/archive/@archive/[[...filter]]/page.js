import React from "react";
import Link from "next/link";
import { getAvailableNewsYears } from "../../../../lib/news";

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;
  console.log(filter);
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // return <NewsList news={news} />;
};

export default FilteredNewsPage;
