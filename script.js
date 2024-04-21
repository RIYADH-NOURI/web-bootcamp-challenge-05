const storageredusial = document.getElementById('number-count');
let count = 1;

const interval = setInterval(() => {
storageredusial.textContent = count;
  count++;
  if (count > 185) {
    clearInterval(interval);
  }
}, 10); 