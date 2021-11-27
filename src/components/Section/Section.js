import PropTypes from "prop-types";
import s from "../Section/Section.module.css";
const Section = ({ title, children }) => (
  <section className={s.section}>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  cildren: PropTypes.any,
};
export { Section };
