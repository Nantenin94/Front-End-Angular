# Front-End-Angular

Ce TP a pour but de créer  un frontend en Angular 1 ou 2. Nous avons choisi d'utiliser Angular 2 pour mener à bien notre mission.

Ce tp a été réalisé par:

- CONDE Aly Laye
- DOUMBIA Nantenin 

## Partie Client

La partie client se compose de 5 modules :
 - electronicdevice
 - heater
 - home
 - menu
 -person. 
 Chaqu'un des  modules est composé d'un component en angularJS, d'une page HTML et d'une page CSS liées au component. 
Pour accéder à ces modules, nous avons définis une page app.route.ts et nous les avons importés dans l'application via la page app.module.ts.
- Les modules electronicdevice, heater, home et person contiennent 3 fonctions qui permettent soit de récupérer la liste des objets relatifs au module appelé, soit de récupérer un objet précis ou alors d'ajouter un objet en renseignant un formulaire. On peut lier des persons, des heaters et des electronicdevices à une home.
- Le module menu, quant à lui, charge une navbar bootstrap qui contient les différents liens permettant d'accéder aux modules de l'application.


