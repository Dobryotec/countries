import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const handleOnChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Виберіть регіон ');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchFormStyled onSubmit={handleOnSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        defaultValue=""
        onChange={handleOnChange}
      >
        <option disabled defaultValue="" value="">
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
