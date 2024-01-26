import styles from 'components/tooltip/tooltip.module.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      {children}
      <div className={styles.tooltipPointer}>{text}</div>
    </div>
  );
};

export default Tooltip;
