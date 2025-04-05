import ChatBox from '../organisms/ChatBox';

const ChatPage = () => {
  const userId = 'usuario123'; // o traído desde login/contexto

  return (
    <div style={{ padding: 40 }}>
      <h2>Chatbot con IA</h2>
      <ChatBox userId={userId} />
    </div>
  );
};

export default ChatPage;
