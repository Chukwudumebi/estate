import PropTypes from 'prop-types';


function One({ isDisabled, onClick, children }) {
  return (
 
      <button
        className={`${
          isDisabled
            ? ''
            : ''
        }`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
   
  );
}

One.defaultProps = {
  isDisabled: false,
};

One.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,

  children: PropTypes.node.isRequired,
};

export default One;
