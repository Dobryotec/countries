import { BackLink } from './GoCountryBtn.styled';

export const GoCountryBtn = ({ path, children }) => {
  return <BackLink to={path}>{children}</BackLink>;
};
