export const GreenPillButton = (props: {
  text: string;
  className?: string;
}) => {
  const className = `btn ${props.className}`;

  return (
    <button
      className={className}
      style={{ borderRadius: 25, backgroundColor: '#AAF0C4', color: '#095C37' }}
    >
      {props.text}
    </button>
  );
};
