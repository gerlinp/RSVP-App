const form = document.getElementById('registrar');
const input = form.querySelector('input');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = '';
  const ul = document.getElementById('invitedList');
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
});