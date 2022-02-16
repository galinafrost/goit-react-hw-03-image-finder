import PropTypes from 'prop-types';

const Loader = ({text}) => {
    return (
        <div>
            <p>{text}</p>
        </div>
    )
}

export default Loader

Loader.propTypes = {
    text: PropTypes.string
}