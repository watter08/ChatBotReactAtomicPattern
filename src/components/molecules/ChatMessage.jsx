const ChatMessage = ({ prompt, response }) => (
    <div style={{ marginBottom: 20 }}>
      <p><strong>Tú:</strong> {prompt}</p>
      <p><strong>Bot:</strong> {response}</p>
    </div>
  );
  
  export default ChatMessage;  