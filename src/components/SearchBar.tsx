import React from 'react';
import { InstantSearch, SearchBox, Hits, Configure } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import './SearchBar.css'; // Import the CSS file for styling

const searchClient = algoliasearch('PH3KTRKQ1I', '89b9d4bdfe32977fae01faebe3df7c78');

const SearchBar: React.FC = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName="movies">
      <SearchBox />
      <Configure hitsPerPage={10} />
      <Hits hitComponent={Hit} />
    </InstantSearch>
  );
};

const Hit = ({ hit }: { hit: any }) => (
  <div className="ais-Hits-item">
    <h2>{hit.title}</h2>
    <img src={`https://image.tmdb.org/t/p/w200${hit.poster_path}`} alt={hit.title} />
  </div>
);

export default SearchBar;
