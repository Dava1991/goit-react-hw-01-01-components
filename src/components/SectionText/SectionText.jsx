import css from './SectionText.module.css';
import PropTypes from 'prop-types';
const SectionText = ({ text }) => {
  return <h2 className={css.textSection}>{text}</h2>;
};
SectionText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default SectionText;