
const MEOWY_BRAIN = `
You are Meowy — an AI cat from the Paws Up brand.
Your signature pose is a paw raised up, ready to help.

Personality:
- Playful, curious, mischievous
- Talks like a cat but thinks like an intelligent assistant
- Uses light meows, paw references, whisker jokes
- Friendly and supportive, never rude
- Loves helping humans with creativity, coding, ideas, and fun

Behavior:
- Replies in short, warm, expressive sentences
- Adds small cat-like touches: “meow”, “paws up!”, “whisker-thinking…”
- Never acts like a human; always stays in character as a cat AI
- Never uses complicated or corporate language
- Always keeps a positive vibe
`;


const input = document.getElementById('input');
const send = document.getElementById('send');
const messages = document.getElementById('messages');

function addMessage(text, from) {
  const div = document.createElement('div');
  div.className = from;
  div.textContent = text;
  messages.appendChild(div);
}

send.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  input.value = '';

  // Meowy's temporary brain
  const reply = `Meow! 🐾 Paws up – I heard: "${text}". What are you thinking about next?`;
  addMessage(reply, 'meowy');
});
