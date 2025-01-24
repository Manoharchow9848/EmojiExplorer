import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

const emojis = [
    { name: 'Grinning Face', symbol: '😀' },
    { name: 'Smiling Face with Smiling Eyes', symbol: '😊' },
    { name: 'Winking Face', symbol: '😉' },
     { name: 'Face with Tears of Joy', symbol: '😂' },
    { name: 'Slightly Smiling Face', symbol: '🙂' },
    { name: 'Upside-Down Face', symbol: '🙃' },
    { name: 'Grinning Face with Big Eyes', symbol: '😃' },
    { name: 'Grinning Face with Smiling Eyes', symbol: '😄' },
    { name: 'Grinning Face with Sweat', symbol: '😅' },
    { name: 'Rolling on the Floor Laughing', symbol: '🤣' },
    { name: 'Smiling Face with Heart Eyes', symbol: '😍' },
    { name: 'Star-Struck', symbol: '🤩' },
    { name: 'Kissing Face', symbol: '😘' },
    { name: 'Kissing Face with Smiling Eyes', symbol: '😗' },
    { name: 'Kissing Face with Closed Eyes', symbol: '😙' },
    { name: 'Face Savouring Delicious Food', symbol: '😋' },
     { name: 'Winking Face with Tongue', symbol: '😜' },
    { name: 'Squinting Face with Tongue', symbol: '😝' },
     { name: 'Money-Mouth Face', symbol: '🤑' },
    { name: 'Hugging Face', symbol: '🤗' },
    { name: 'Thinking Face', symbol: '🤔' },
    { name: 'Zipper-Mouth Face', symbol: '🤐' },
    { name: 'Face with Raised Eyebrow', symbol: '🤨' },
     { name: 'Neutral Face', symbol: '😐' },
    { name: 'Expressionless Face', symbol: '😑' },
     { name: 'Face Without Mouth', symbol: '😶' },
    { name: 'Smirking Face', symbol: '😏' },
    { name: 'Unamused Face', symbol: '😒' },
     { name: 'Face with Rolling Eyes', symbol: '🙄' },
    { name: 'Grimacing Face', symbol: '😬' },
    { name: 'Lying Face', symbol: '🤥' },
     { name: 'Relieved Face', symbol: '😌' },
    { name: 'Pensive Face', symbol: '😔' },
    { name: 'Sleepy Face', symbol: '😪' },
     { name: 'Drooling Face', symbol: '🤤' },
    { name: 'Sleeping Face', symbol: '😴' },
    { name: 'Face with Medical Mask', symbol: '😷' },
     { name: 'Face with Thermometer', symbol: '🤒' },
    { name: 'Face with Head-Bandage', symbol: '🤕' },
    { name: 'Nauseated Face', symbol: '🤢' },
     { name: 'Face Vomiting', symbol: '🤮' },
    { name: 'Sneezing Face', symbol: '🤧' },
    { name: 'Hot Face', symbol: '🥵' },
    { name: 'Cold Face', symbol: '🥶' },
     { name: 'Woozy Face', symbol: '🥴' },
    { name: 'Astonished Face', symbol: '😲' },
    { name: 'Flushed Face', symbol: '😳' },
    { name: 'Pleading Face', symbol: '🥺' },
    { name: 'Frowning Face with Open Mouth', symbol: '😦' },
     { name: 'Anguished Face', symbol: '😧' },
     { name: 'Fearful Face', symbol: '😨' },
    { name: 'Anxious Face with Sweat', symbol: '😰' },
     { name: 'Loudly Crying Face', symbol: '😭' },
     { name: 'Face Screaming in Fear', symbol: '😱' },
    { name: 'Confounded Face', symbol: '😖' },
     { name: 'Persevering Face', symbol: ' persevering' },
    { name: 'Disappointed Face', symbol: '😞' },
     { name: 'Downcast Face with Sweat', symbol: '😓' },
     { name: 'Weary Face', symbol: '😩' },
     { name: 'Tired Face', symbol: '😫' },
   
  ];

const EmojiList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmojis = useMemo(() => {
    if (!searchTerm) return emojis;
    return emojis.filter(emoji =>
      emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="container mx-auto">
        <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
           <Search className="h-5 w-5 text-gray-500"/>
         </div>
          <input
            type="text"
            placeholder="Search for an emoji..."
            className="w-full pl-10 pr-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

      <div className="grid grid-cols-5 gap-4">
        {filteredEmojis.map((emoji, index) => (
          <div key={index} className="bg-white p-4 rounded shadow-md text-center">
            <span className="text-4xl block">{emoji.symbol}</span>
            <p className="text-sm text-gray-700 mt-2">{emoji.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmojiList;
