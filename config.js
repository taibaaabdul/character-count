const textarea = document.getElementById('message');
const counter = document.getElementById('counter');
const maxLength = 200;

textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  const remaining = maxLength - length;

  if (remaining < 0) {
    counter.innerHTML = `<span class="warning">Character limit exceeded!</span>`;
    textarea.value = textarea.value.substring(0, maxLength);
  } else {
    counter.textContent = `${length} / ${maxLength} characters`;
  }
});