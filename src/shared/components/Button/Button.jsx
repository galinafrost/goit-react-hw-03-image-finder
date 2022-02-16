import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({text, onClick}) => {
    return (
            <div className={styles.btn}>
              <button className={styles.more} onClick={onClick} type="button">{text}</button>
            </div>
          );
}

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
