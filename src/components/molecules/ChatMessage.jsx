const ChatMessage = ({ prompt, response }) => (
    <div className="question-container">
      <p className="question"><strong>Tú:</strong> {prompt}</p>
      <p className="anwser"><strong>Bot:</strong> {response}</p>
    </div>
  );
  
  export default ChatMessage;  