import { PropTypes } from 'prop-types';
import Box from 'components/Box/Box';
import { Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <Box
      mx="auto"
      width={500}
      p={10}
      boxShadow="3px 20px 20px #888888"
      backgroundColor="#c5c5c5"
    >
      <Title>{title}</Title>
      {children}
    </Box>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
