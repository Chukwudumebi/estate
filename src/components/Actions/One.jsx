import PropTypes from 'prop-types';
import ToolTip from '../Tooltip';

function One({ isDisabled, onClick, tooltip, children }) {
  return (
    <ToolTip text={tooltip}>
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
    </ToolTip>
  );
}

One.defaultProps = {
  isDisabled: false,
};

One.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default One;
