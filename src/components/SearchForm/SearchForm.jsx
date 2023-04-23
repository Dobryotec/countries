import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';
import {useState} from 'react'

export const SearchForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');
  const handleOnChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    setQuery('')
  }


  return (
    <SearchFormStyled onSubmit={handleOnSubmit}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select aria-label="select" name="region" required onChange={handleOnChange}>
        <option selected disabled defaultValue="">
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
