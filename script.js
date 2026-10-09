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
