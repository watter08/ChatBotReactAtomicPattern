const Button = ({ label, onClick }) => (
    <button
      onClick={onClick}
      style={{ padding: '10px 20px', marginLeft: '10px', borderRadius: '8px', backgroundColor: '#1976d2', color: '#fff', border: 'none' }}
    >
      {label}
    </button>
  );
  
  export default Button;
  