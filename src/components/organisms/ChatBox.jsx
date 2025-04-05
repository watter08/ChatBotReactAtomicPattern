import { useState, useEffect } from 'react';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';
import ChatMessage from '../molecules/ChatMessage';
import { faqs } from '../../libs/constants/faqs'; // Importamos el archivo de preguntas frecuentes

const ChatBox = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!prompt.trim()) return;
    const faq = faqs.find((item) =>
      item.question.toLowerCase().includes(prompt.toLowerCase())
    );

    let response = "Lo siento, no tengo una respuesta para esa pregunta.";

    if (faq) {
      response = faq.answer;
    }

    setMessages([
      ...messages,
      { prompt, response }
    ]);
    setPrompt('');
  };


  return (
    <div>
      <div className='message-container'>
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
