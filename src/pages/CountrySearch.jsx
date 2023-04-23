import { Container, SearchForm, Section, CountryList } from 'components';
import { fetchByRegion } from 'service/country-service';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [results, setResults] = useState([]);

  const onSubmit = query => {
    console.log(query);
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    fetchByRegion(query).then(data => setResults(data));
  }, [searchParams]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={results} />
      </Container>
    </Section>
  );
};
