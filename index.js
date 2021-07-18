const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('click', (event) => {
    inputs.forEach((input) => {
      if (input.checked) {
        input.checked = false;
        event.target.checked = true;
      }
    });
  });
});
