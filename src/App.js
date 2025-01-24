import React from 'react';
import EmojiList from './components/EmojiList/EmojiList';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Emoji Explorer 🚀</h1>
      </header>
      <main>
         <EmojiList />
      </main>
     
    </div>
  );
};

export default App;
