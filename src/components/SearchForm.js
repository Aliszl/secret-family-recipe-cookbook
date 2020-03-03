import React from "react";
import { Input } from 'reactstrap'

export default function SearchForm({ handleChangeSearchbar }) {

  

  return (
    <section className="search-form">
      <Input
        className="recipeSearch"
        type="search"
        name="search"
        placeholder="Find a recipe..."
        onChange={handleChangeSearchbar}
      />
    </section>
  );
}