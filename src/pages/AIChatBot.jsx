import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, User, Send, Image as ImageIcon, Loader2, Sparkles, X } from 'lucide-react';
import Card from '../components/ui/Card';

const AIChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "Hi there! I'm Terra, your personal environmental AI assistant. You can ask me questions about your green impact, optimal tree planting locations, or even upload an image of a plant you want me to review or identify!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
      // Reset input so you can re-upload the same file if needed
      e.target.value = '';
    }
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() && !selectedImage) return;

    // Create a new user message
    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: input,
      image: selectedImage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setSelectedImage(null);
    setIsTyping(true);

    // Mock AI response delay based on content
    const processingTime = userMessage.image ? 3000 : 1500;

    setTimeout(() => {
      let aiResponseText = "That's a fantastic initiative! Planting trees natively helps rebuild local ecosystems.";
      
      if (userMessage.image) {
        aiResponseText = "I've reviewed the image you provided. This looks like a healthy Quercus virginiana (Southern Live Oak) sapling. It needs well-drained soil and plenty of direct sunlight. Would you like tips on how to properly transplant it?";
      } else if (userMessage.text.toLowerCase().includes('how')) {
        aiResponseText = "To maximize your impact, focus on finding local guilds doing consistent group plantings. You gain more points and help community cohesion!";
      }

      const aiMessage = {
        id: Date.now() + 1,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, aiMessage]);
    }, processingTime);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col pb-8">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 p-6 rounded-3xl shadow-lg shadow-emerald-600/20 text-white">
        <div>
          <h1 className="text-3xl font-extrabold flex items-center gap-3">
            <span className="p-2 bg-white/20 rounded-xl shadow-inner border border-white/30 backdrop-blur-sm">
              <Bot className="w-8 h-8 text-white" />
            </span>
            Terra AI Assistant
          </h1>
          <p className="text-emerald-50 mt-2 flex items-center gap-2 font-medium">
            Upload images for review or ask any environment-related queries. <Sparkles size={16} className="text-yellow-300" />
          </p>
        </div>
      </div>

      {/* Chat Bot Interface */}
      <Card className="flex-1 overflow-hidden p-0 border border-emerald-100 shadow-2xl bg-gradient-to-b from-emerald-50/50 to-white flex flex-col backdrop-blur-xl relative">
        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 flex flex-col scroll-smooth">
          <AnimatePresence>
            {messages.map((msg) => {
              const isAi = msg.sender === 'ai';
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className={`flex ${isAi ? 'justify-start' : 'justify-end'} w-full`}
                >
                  <div className={`flex gap-3 max-w-[85%] sm:max-w-[75%] ${isAi ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Avatar */}
                    <div className="flex-shrink-0 mt-auto mb-2">
                      {isAi ? (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white shadow-lg border-2 border-white">
                          <Bot size={20} />
                        </div>
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold shadow-lg border-2 border-white">
                          <User size={20} />
                        </div>
                      )}
                    </div>

                    {/* Chat Bubble */}
                    <div className="flex flex-col gap-1">
                      <div
                        className={`p-4 rounded-2xl shadow-md backdrop-blur-sm transition-all ${
                          isAi
                            ? 'bg-gradient-to-br from-emerald-50 to-green-100/80 border border-green-200/50 rounded-bl-none text-emerald-900'
                            : 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white rounded-br-none shadow-emerald-500/30'
                        }`}
                      >
                        {msg.image && (
                          <div className="mb-3 rounded-lg overflow-hidden border-2 border-white/20 shadow-sm">
                            <img src={msg.image} alt="User uploaded" className="max-w-full h-auto max-h-48 object-cover" />
                          </div>
                        )}
                        {msg.text && (
                          <p className={`text-[15px] leading-relaxed ${isAi ? '' : 'font-medium'}`}>
                            {msg.text}
                          </p>
                        )}
                      </div>
                      <span className={`text-[11px] text-gray-400 font-medium ${isAi ? 'ml-2' : 'mr-2 text-right'}`}>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start w-full">
              <div className="flex gap-3 max-w-[85%]">
                <div className="flex-shrink-0 mt-auto mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center text-white shadow-lg border-2 border-white">
                    <Bot size={20} />
                  </div>
                </div>
                <div className="p-4 rounded-2xl shadow-md bg-gradient-to-br from-emerald-50 to-green-100/80 border border-green-200/50 rounded-bl-none flex items-center gap-2 h-[52px]">
                   <span className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2.5 h-2.5 bg-teal-500 rounded-full animate-bounce"></span>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/80 border-t border-gray-100 shrink-0 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-10 rounded-b-2xl">
          {selectedImage && (
            <div className="mb-4">
              <div className="relative inline-block border-2 border-ts-green/30 rounded-xl overflow-hidden shadow-sm">
                <img src={selectedImage} alt="Preview" className="h-24 w-auto object-cover opacity-90" />
                <button
                  type="button"
                  onClick={removeSelectedImage}
                  className="absolute top-1 right-1 bg-gray-900/60 text-white rounded-full p-1 hover:bg-red-500/80 transition-colors backdrop-blur-md"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          )}

          <form onSubmit={handleSend} className="flex gap-2 relative items-end">
            <div className="flex-1 relative bg-gray-50 rounded-2xl border border-gray-200 focus-within:ring-2 focus-within:ring-ts-green focus-within:border-transparent transition-all overflow-hidden flex items-end shadow-sm">
              <label htmlFor="file-upload" className="p-3 text-gray-400 hover:text-ts-green cursor-pointer transition-colors flex shrink-0 h-12 items-center justify-center">
                <ImageIcon size={22} />
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder={selectedImage ? "Add a message about this image..." : "Ask Terra a question..."}
                className="w-full bg-transparent py-3 pr-4 pl-1 resize-none focus:outline-none text-gray-700 min-h-[48px] max-h-[120px] scrollbar-hide"
                style={{ height: "48px" }}
              />
            </div>
            <button
              type="submit"
              disabled={(!input.trim() && !selectedImage) || isTyping}
              className="bg-ts-green text-white p-3 h-12 rounded-2xl shadow-md shadow-ts-green/30 hover:bg-emerald-600 disabled:bg-gray-300 disabled:shadow-none transition-colors disabled:cursor-not-allowed flex items-center justify-center shrink-0 w-12"
            >
              {isTyping ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>
          <div className="text-center mt-3">
             <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1">
               <Bot size={10} /> Powered by Terra AI Models
             </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AIChatBot;
