const InputField = ({ value, onChange, onKeyDown, placeholder }) => (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
    />
  );
  
  export default InputField;  