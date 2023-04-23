import { Section, Container, CountryInfo} from 'components';
import { fetchCountry } from 'service/country-service';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { GoCountryBtn } from '../components/GoCountryBtn/GoCountryBtn';

export const Country = () => {
  const { countryId } = useParams();
  const [countryInfo, setCountryInfo] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchCountry(countryId).then(data => setCountryInfo(data));
  }, [countryId]);
  if (!countryInfo) return;
  return (
    <Section>
      <Container>
        <GoCountryBtn path={location?.state?.from ?? '/'}>
          Back to countries
        </GoCountryBtn>
        <CountryInfo results={countryInfo} />
      </Container>
    </Section>
  );
};
