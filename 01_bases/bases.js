
//-------------------------
// 1- Commentaires
//-------------------------

//pour écrire un commentaire sur une seule ligne

/*
pour écrire des commentaires sur plusieurs lignes
*/


//-------------------------
// 2- Affichage
//-------------------------

document.write('mon premier message'); // affichage dans le navigateur

document.write('<h1>Les bases du JavaScript</h1>'); // on peut mettre des balises HTML, elles sont interprétées et donc insérées dans le HTML

// Toutes les instructions en JS se finissent par un ";". Elles se suivent et sont effectuées les une à la suite des autres du HAUT vers le BAS du script.

//-------
// Les boîtes de dialogue : 
//alert('Salut');    // affiche un message
//confirm('Etes-vous sûr ?');   // message avec boutton de confirmation "ok" ou "annuler"
//prompt('Quel est votre code postal ?');  // message avec champ à remplir


//-------
// Afficher dans la console :
console.log('attention aux erreurs de syntaxes dans la console');  //message écrit dans la console de debugage (F12 + onglet Console)


//--------------------
// 3- Variables - déclaration - affectation
//--------------------
document.write('<h2> 3 -Variables - déclaration - affectation</h2>');
// Définition : une variable est un espace mémoire nommé dans lequel nous allons stocker une donnée, une valeur. Cette donnée peut être de n'importe quel type : chiffre, châîne de caractères, une balise HTML, etc.

// Déclaration d'une variable : 
var maBoite;    // le mot clé var permet de déclarer (= créer) la variable nommé maBoite.

// Règle de nommage des variables : caractères acceptés : a à z, A à Z, 0 à 9 (jamais au début), _ (jamais au début ni à la fin). Premier mot en miniscule, puis majuscule à la 1ère lettre de chaque mot.


//------
// Affectation d'une variable : 
maBoite =10;   // on afecte une valeur à une variable avec le signe "=". maBoite contient donc 10

document.write(maBoite); // on affiche le contenu de la variable en ne mettan  pas de quote autour de son nom. Affiche 10

var maBoite = 10; // on peut déclarer et affecter une variable en même temps (nous retiendrons cette écriture)

//------
monAutreBoite = 'bonjour';  // cette écriture est possible (déclaration sans le mot clé var), mais ce n'est pas conventionnel. De plus, dans une fonction cela n'a pas la même signification (voir chapitre "portée des variables")

document.write('<br>');

//------
// Déclarer et affecter plusieurs variables en même temps : 
var prenom = 'Sylvie', 
    nom = 'Robert',
    genre = 'féminin'; // un seul var en séparant chaque déclaration par une virgule, un saut de ligne et une indentation. On termine par un ";"

document.write(prenom); //affiche Sylvie
document.write('<br>');

//-------
// Changer la valeur d'une variable : 
prenom = 'Pierre';   // nous changeons la valeur initiale Sylvie pour la remplacer par "Pierre"

document.write(prenom); // affiche Pierre
document.write('<br>');

prenom = nom; // nous affectons la valeur de la variable nom à la variable prenom, autrement dit on remplace "Pierre" par "Robert"

document.write(prenom); // affiche Robert
document.write('<br>');


//-------
// Ajouter une valeur à la valeur déjà existante d'une variable : 
var fruit = 'pomme';
fruit += ' fraise';   // on ajoute la chaîne de caractères "fraise" à "pomme" déjà existante dans la variable fruit avec l'opérateur += (sans espace) 

document.write(fruit); // affiche "pomme fraise"
document.write('<br>');

//-------
// Utiliser prompt avec une variable : 
var codePostal = prompt('Quel est votre code postal ?');

document.write(codePostal); // affiche le code postal indiqué par l'internaute
document.write('<br>');



//--------------------------
// 4- Types de données
//--------------------------
document.write('<h2> 4- Types de données </h2>');

// Nous commençons par les 3 principaux types de données dits primitifs : 

// Les types numériques appélés NUMBER :
var chiffre = 20;    // les numbers s'écrivent sans quotes ni guillemets
// Tous les types numériques sont possibles : entiers, décimaux, positifs, négatifs...


// Les types chaînes de caractères appélés STRING : 
var texte = "phrase entre guillemets";
var apostrophe = 'il faut utiliser le caractère d\'échappement pour les apostrophes dans les quotes';   //AltGr + 8 pour le caractère d'échappement
// Le quotes ou les guillemets indiquent qu'il s'agit d'un type STRING.

var numero = '10'; // une chiffre dans des quotes ou des guillemets est interprété comme un STRING


// Le type booléen (ou boolean) : 
// Le type booléen ne prend que 2 valeurs : TRUE ou FALSE
var choix = true;  // s'écrit SANS quote

//------
// typeof permet de vérifier le type d'une variable : 
document.write(typeof(chiffre));  // number
document.write('<br>');

document.write(typeof(texte));  // string
document.write('<br>');

document.write(typeof(numero));  // string
document.write('<br>');

document.write(typeof(choix));  // boolean
document.write('<br>');



//--------------------------
// 5- Constante
//--------------------------
document.write('<h2> 5- Constante </h2>');

// Définition: les constantes sont comme des variables dont la valeur NE PEUT PAS être modifiée. Elles permettent de "protéger" cette valeur nécessaire au bon fonctionnement du script.

const CHANGE_PAS = 'ma constante impossible à modifier';  // par convention entre développeurs, on écrit les constantes en majuscules et avec un "_" si besoin.

document.write(CHANGE_PAS);   // affiche le contenu de la constante
document.write('<br>');

//CHANGE_PAS = 'autre valeur';  // erreur bloquante de type invalid assignment to const CHANGE_PAS




//--------------------------
// 6- Concaténation
//--------------------------
document.write('<h2> 6- Concaténation </h2>');

// En JS, on fait suivre des variables et des strings avec le symbole "+". On parle de concaténation.

var prenom = 'Bruce',
    nom = 'Wayne';

document.write(prenom + ' ' + nom + '<br>');  // concatène la variable prenom avec un espace avec la variable nom avec une balise <br>

var personnage = prenom + ' ' + nom + '<br>';   // on peut concaténer des éléments au sein d'une variable
document.write(personnage); 



//--------------------------
// 7- Opérateurs arithmétiques
//--------------------------
document.write('<h2> 7- Opérateurs arithmétiques </h2>');

var resultat;

resultat = 10 + 5;   // addition
resultat = 10 - 5;   // soustraction
resultat = 10 * 5;   // multiplication
resultat = 10 / 5;   // division
resultat = 3 % 2;    // modulo = reste de la divisino entière. Si j'ai 3 billes réparties sur 2 personnes, il m'en reste 1 seule : 3%2 vaut donc 1 (modulo de 2 pour vérifier si un chiifre est pair ou impaire, modulo de 10 si c'est une dizaine, ... )  


//------
// On peut appliquer les opérateurs aux variables : 
var chiffre1 = 10, 
    chiffre2 = 5;

resultat = chiffre1 + chiffre2;   // resultat vaut 15


var chiffre3= 10;
chiffre3 = chiffre3 + 5;  // 15
chiffre3 = chiffre3 + 5;  // 20. Mais cette syntaxe n'est pas conventionnelle. On utilise la syntaxe suivante : 
chiffre3 += 5;     // cette syntaxe fait la même chose que la précédente, mais c'est elle qu'on retiendra. chiffre3 vaut ici 25.

// Fonctionne avec tous les opérateurs : +=, -=, *=, /= et %=

//------
// Incrémenter et décrémenter :
var i = 0;
i++; // incrémenter i de +1. i vaut donc 1.
i--; // décrémenter i de -1. i vaut donc 0.

// i++ et ++i ont le même résultat à la différence près : 
// i++ retourne la valeur de i AVANT d'effectuer l'opération
// ++i retourne la valeur de i APRES avoir effectué l'opération

var x = 5;
var y = x++; // y prend la valeur de 5 PUIS x passe à 6

document.write('y vaut ' + y);  // 5
document.write('x vaut ' + x);  // 6

x = 5; 
var z = ++x;   // x passe à 6 PUIS z prend la valeur de 6
document.write('z vaut ' + z);  // 6
document.write('x vaut '+ x);   // 6

//---------------
// Exercice : 
/*
L'internaute a acheté 0.8 kg de pommes et 0.7kg de poires.
Vous déclarez 4 variables, une qui contient "pommes", une qui contient "poires", une qui contient le poids des pommes et une qui contient le poids des poires.
Puis affichez la phrase "Vous avez acheté des pommes et des poires pour un poids total de 1.5kg." où les fruits et le poids total sont remplacés par des variables. 
*/

var fruit1 = 'pommes',
    fruit2 = 'poires',
    poids1 = 0.8,
    poids2 = 0.7;

var poidsTotal = poids1 + poids2;

document.write('<p> Vous avez acheté des ' + fruit1  + ' et des ' + fruit2 + ' pour un poids total de ' + poidsTotal + ' kg. <p>');



//--------------------------
// 8- Conditions
//--------------------------
document.write('<h2> 8- Conditions </h2>');

var a = 10,
    b = 5,
    c = 2;

//-----
// La condition if / else : 
if ( a > b) {
    // si la condition est évaluée à true, on entre dans les accolades qui suivent : 
    document.write('a est supérieur à b <br>');
} else {
    // Sinon... si la condition est évaluée à false, on exécute le else : 
    document.write('b est supérieur ou égal à a <br>');
}


//-----
// if avec AND :
if ( a > b && b > c ) {
    // Si a est supérieur a b ET que dans le même temps b est supérieur à c, on entre dans les accolades qui suivent : 
    document.write('Ok pour les 2 conditions <br>');
}


//------
// if avec OR : 

if ( a == 9 || b > c ) {
    // si a est égal (==) à 9 ou alors que b est supérieur à c, on entre dans les accolades qui suivent :
    document.write('Ok pour au moins une des deux conditions <br>');
}


//-----
// if... else if... else : 
if ( a == 8 ) {
    // si a vaut 8, on exécute ce qui suit :
    document.write('a est égal à 8 <br>');
} else if ( a !=10 ) {
    // sinon si a est différent de 10, on exécute ce qui suit
    document.write('a est différent de 10 <br>');
} else {
    // sinon, c'est que je ne suis ni tombé dans le if; ni dans le else if, je me trouve donc dans ce
    document.write('Les 2 conditions précédentes sont fausses <br>');
}

// Notes : jamais de () après un else. Le else n'est pas obligatoire si il est vide. En revanche, après un if il y a toujours une condition.


// L'opérateur NOT :
// L'opérateur NOT qui s'écrit "!", permet d'inverser quelque chose ded TRUE en FALSE, ou quelque chose de FALSE en TRUE. Il s'agit d'une négation.

var test = 3 < 1;

console.log('test vaut : ' + test);  // pour vérifier que le test vaut false

if (!test) {
    // le "!" est une négation qui inverse le sens du booléen : test seul valant false, !test vaut donc true. La condition finale étant donc évaluée à true, on entre dans les accolades : 
    document.write('On éxécute ce code... <br>');
}

// Conclusion : les instructions des conditions seront toujours executées que si la condition renvoie TRUE.


//------
// La comparaison avec le tripe "===" : 
var varA = 1,  // number
    varB = '1';  // string

    if ( varA == varB ) {
        // varA et varB valent tous les deux 1 en VALEUR : la condition avec "==" est donc vraie. On exécute les accoaldes qui suivent : 
        document.write('Egalité en valeur uniquement <br>');
    } else {
        document.write('Différence en valeur uniquement <br>');
}


if (  varA === varB) {
    // comparaison en valeur ET en type avec le triple "===". Ici nous avons un string et un number, il n'y a donc pas stricte égalité entre els 2 variables : on va dans le else
    document.write('Egalité en valeur ET en type <br>');
} else {
    document.write('Différence en valeur OU en type <br>');
}

