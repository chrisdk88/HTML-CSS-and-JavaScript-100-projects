let toogler = document.getElementById('switch')

toogler.addEventListener('click', () => {
  if (toogler.checked === true) {
    document.body.style.backgroundColor = 'black'
  } else {
    document.body.style.backgroundColor = 'white'
  }
})
