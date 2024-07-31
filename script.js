document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value
    };
  
    fetch('https://script.google.com/macros/s/AKfycbxbFSQ9l1ohcI5y5GnOGflhdCCcqKQpD5mu8gTpJ0mD4AtmILG5XLqf4SsyqKJht3VF/exec', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('formStatus').innerText = data;
    })
    .catch(error => console.error('Error:', error));
  });
  