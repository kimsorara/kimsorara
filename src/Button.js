import PropTypes from "prop-types";
import styles from "./Button.module.css";
function Btn({ value }) {
  return <button className={styles.btn}>{value}</button>;
}
Btn.propTypes = {
  value: PropTypes.string.isRequired,
};
export default Btn;
