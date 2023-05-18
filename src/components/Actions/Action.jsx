import PropTypes from 'prop-types';
import ToolTip from '../Tooltip';

function Action({ isDisabled, onClick, tooltip, children }) {
  return (
    <ToolTip text={tooltip}>
      <button
        className={`${
          isDisabled
            ? 'border-grey-600 group pointer-events-none relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal before:absolute before:left-0 before:aspect-square before:w-full before:rounded before:bg-white/70'
            : 'border-grey-600 group relative grid aspect-square grid-flow-col items-center justify-center rounded border px-2 py-1 font-normal shadow-sm hover:border-sky-700 hover:bg-sky-700 hover:text-neutral-100'
        }`}
        onClick={onClick}
        type="button"
      >
        {children}
      </button>
    </ToolTip>
  );
}

Action.defaultProps = {
  isDisabled: false,
};

Action.propTypes = {
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  tooltip: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Action;
