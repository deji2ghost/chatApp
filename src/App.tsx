// import { useState } from "react";
import "./App.css";

function App() {
  // const [inputText, setInputText] = useState("");
  // const [messages, setMessages] = useState<{ text: string; language?: string; summary?: string; translation?: string }[]>([]);
  // const [selectedLanguage, setSelectedLanguage] = useState("en");
  // const [error, setError] = useState("");

  // const handleSend = async () => {
  //   if (!inputText.trim()) {
  //     setError("Please enter some text.");
  //     return;
  //   }
  //   setError("");
  //   const newMessage = { text: inputText };
  //   setMessages((prev) => [...prev, newMessage]);
  //   setInputText("");
    
  //   try {
  //     // Language Detection API
  //     const langResponse = await fetch("https://chromeai.googleapis.com/v1/detectLanguage", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer YOUR_API_KEY`,
  //       },
  //       body: JSON.stringify({ text: newMessage.text }),
  //     });
  //     const langData = await langResponse.json();
  //     newMessage.language = langData.language;
      
  //     setMessages((prev) => prev.map((msg, index) => (index === prev.length - 1 ? newMessage : msg)));
  //   } catch (err) {
  //     setError("Language detection failed.");
  //   }
  // };

  // const handleSummarize = async (index: number) => {
  //   try {
  //     const response = await fetch("https://chromeai.googleapis.com/v1/summarize", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer YOUR_API_KEY`,
  //       },
  //       body: JSON.stringify({ text: messages[index].text }),
  //     });
  //     const data = await response.json();
  //     const updatedMessages = [...messages];
  //     updatedMessages[index].summary = data.summary;
  //     setMessages(updatedMessages);
  //   } catch (err) {
  //     setError("Summarization failed.");
  //   }
  // };

  // const handleTranslate = async (index: number) => {
  //   try {
  //     const response = await fetch("https://chromeai.googleapis.com/v1/translate", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer YOUR_API_KEY`,
  //       },
  //       body: JSON.stringify({ text: messages[index].text, targetLanguage: selectedLanguage }),
  //     });
  //     const data = await response.json();
  //     const updatedMessages = [...messages];
  //     updatedMessages[index].translation = data.translation;
  //     setMessages(updatedMessages);
  //   } catch (err) {
  //     setError("Translation failed.");
  //   }
  // };

  return (
    <div className="container mx-auto p-4 flex flex-col h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">AI-Powered Text Processor</h1>
      {/* <div className="flex-1 overflow-y-auto border p-4 rounded bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="mb-4 p-2 border rounded bg-white">
            <p>{msg.text}</p>
            {msg.language && <p className="text-sm text-gray-500">Detected Language: {msg.language}</p>}
            {msg.text.length > 150 && msg.language === "en" && (
              <button className="bg-blue-500 text-white p-1 mt-1 rounded" onClick={() => handleSummarize(index)}>
                Summarize
              </button>
            )}
            {msg.summary && <p className="text-sm mt-2 font-semibold">Summary: {msg.summary}</p>}
            <div className="flex mt-2">
              <select
                className="border p-1 rounded mr-2"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="pt">Portuguese</option>
                <option value="es">Spanish</option>
                <option value="ru">Russian</option>
                <option value="tr">Turkish</option>
                <option value="fr">French</option>
              </select>
              <button className="bg-green-500 text-white p-1 rounded" onClick={() => handleTranslate(index)}>
                Translate
              </button>
            </div>
            {msg.translation && <p className="text-sm mt-2 font-semibold">Translation: {msg.translation}</p>}
          </div>
        ))}
      </div>
      <div className="flex items-center p-2 border-t">
        <textarea
          className="flex-1 p-2 border rounded"
          rows={2}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..."
        ></textarea>
        <button className="bg-blue-500 text-white p-2 ml-2 rounded" onClick={handleSend}>
          ➤
        </button>
      </div>
      {error && <p className="text-red-500 text-center mt-2">Error: {error}</p>} */}
    </div>
  );
}

export default App;
