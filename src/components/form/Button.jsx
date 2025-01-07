export default function FormControlButton({ className, text, onClick, type = 'button' }) {
  return (
    <button className={`btn ${className}`} onClick={onClick} type={type}>
      {text}
    </button>
  );
}
