import { useState, useEffect } from 'react';
import axios from 'axios';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import ChatMessage from '../molecules/ChatMessage';

const ChatBox = ({ userId }) => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!prompt.trim()) return;
    const res = await axios.post('https://tudominio/api/chat', { prompt, userId });
    setMessages([...messages, { prompt, response: res.data.response }]);
    setPrompt('');
  };

  useEffect(() => {
    const fetchHistory = async () => {
      try{
        const res = await axios.get(`https://tudominio/api/chat/history?user=${userId}`);
      setMessages(res.data);
      }catch(error){
        console.log(error.message)
      }
    };
    fetchHistory();
  }, [userId]);

  return (
    <div>
      <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <ChatMessage key={i} prompt={msg.prompt} response={msg.response} />
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: 20 }}>
        <InputField
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder="Escribe tu mensaje..."
        />
        <Button label="Enviar" onClick={sendMessage} />
      </div>
    </div>
  );
};

export default ChatBox;
