import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const onSubmit = query => {
    console.log(query);
  };
  return (
    <Section>
      <Container>
        <h2>CountrySearch</h2>
      </Container>
    </Section>
  );
};
