<?php
// Récupérer les données POST
$data = json_decode(file_get_contents('php://input'), true);

// Lire le contenu actuel du fichier data.json
$jsonData = file_get_contents('data.json');
$arrayData = json_decode($jsonData, true);

// Ajouter les nouvelles données
$arrayData[] = $data;

// Encoder les données en JSON et les écrire dans le fichier
file_put_contents('data.json', json_encode($arrayData, JSON_PRETTY_PRINT));

echo 'Données enregistrées avec succès';
?><?php
// Récupérer les données POST
$data = json_decode(file_get_contents('php://input'), true);

// Lire le contenu actuel du fichier data.json
$jsonData = file_get_contents('data.json');
$arrayData = json_decode($jsonData, true);

// Ajouter les nouvelles données
$arrayData[] = $data;

// Encoder les données en JSON et les écrire dans le fichier
file_put_contents('data.json', json_encode($arrayData, JSON_PRETTY_PRINT));

echo 'Données enregistrées avec succès';
?>