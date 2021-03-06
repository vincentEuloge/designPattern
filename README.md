# designPattern
La base de toute application bien structurée

J'ai réalisé diverse implémentation de ces patterns, mais ils existent d'autre implémentation possible

On peut séparer les design pattern en trois types dont le but est de:

- créer (instancier)
- structurer
- ajouter un comportement


## **Créer** (/create)

1)  Class (ex prototype) (*npm run class*)

> Surement le plus connu de tous, utile pour instantier un nombre N d'objets qui partageront les même propriétés/functions/type.
>> on peut imaginer une class d'objet qui stockera les information lié à un document (son nom, date de modification, extension) et fonctionalité (sauvegarde, renommage)
    

1) Constructor (*npm run constructor*)

> Une extension du premier ... où une class va hériter des propriétés/comportements d' une autre class tout en y adjoignant d'autres, voir en surchargeant certains
>> On peut imaginer des FileDocument et FolderDocument qui hériteront de notre class Document

3) Singleton (*npm run singleton*)

> Une variante du premier mais cette fois ci on ne veut qu'une seule instance de notre objet
>> Si on reprend notre use case de document, on peut imaginer un manager de document qui aura comme prérogative de créer, renommer, supprimer et tenir une liste à jour de documents d'une application.

4) Factory 1 (*npm run factory1*)

> Pourquoi j'ai mis un 1 ? car dans la littérature une factory pointe vers deux principes très différents, voici le premier. On peut voir une factory comme une interface de création d'objet, évitant à l'utilisateur de connaitre tous les parametre utile à l'instanciation. Les burgers se prettent mieux à ce pattern que les documents, je te laisse allez voir l'implémentation.

4) Factory 2 (*npm run factory2*)

> Le javascript est très permissif, et on peut créer des "instances" d'objet de différentes manières, on a déjà vu les class, mais on peut simplement appeler une fonction qui nous renverra un nouvel object stockant les propriétés et fonctionnalités, cet appel de fonction créera ce qu'on appel une closure, sorte de bulle d'exécution. Ce pattern permet de créer des propriété privée et évite les bug lié au "this" (voir implém) mais il a un contre coup, l'emprunte mémoire est supérieur et le process de création est plus long (mais on parle de microbyte et de nanoseconde, ce qui peut jouer si on a des millions d'objet à instancié)

5) Abstract

> On peut voir se pattern comme Une factory de factories, factoryception. Je n'ai jamais rencontré de use case concret pour celui la, mais dans mon exemple avec des burger on peut imaginer un Abstract qui selon le type de burger, appellera une factory de Burger ou de VegeBurger, eux même, selon le nom, renverront la bonne instance de burger.

## **Structurer** (/structure)

1) Module (*npm run module*)

> On va retrouver notre concept de closure vu dans le pattern factory 2. Ici (ou ailleurs) la closure va nous permettre de ne pas polluer le scope global avec les variables et fonction déclaré à l'intérieur (à moins de le faire exprès), elles ne seront pas non plus accessible de l'exterieur à moins que la closure retourne une API d'intéraction. Selon moi on retrouve ici la notion de singleton car il suffit d'exporter ce module pour pouvoir l'importer n'importe où dans votre code et l'utiliser comme un singleton. Attention, lorsqu'on passe par un outil tel que webpack, il se charge d'enrobé le code du fichier dont on va exporter une API, d'une iife (fonction auto appelante).

1) Module 2 (*npm run module2* <= faire un npm install avant et ouvrir un browser sur localhost:3000) 

> Le pattern module utilisé de façon la plus simple possible. Ici le module est garant d'une information.

2) Mixins (*npm run mixins*)

> Une mixin va rajouter une propriété, et/ou un comportement/fonction à un object, on va en quelque sorte mélanger les attributs d'un object, class, fonction, dans un/une autre. On peut aussi voir ça comme un patch.

3) Facade

> Pour résumer, c'est l'art de cacher une certaine forme de compléxité. Une fonction qui contient quelques lignes de code, pourquoi pas même une seule, respecte le pattern de Facade. Lorsqu'on utilise une librairie tel que React, Vue ou Angular et qu'on a une approche composant, chaque composant est une facade qui masque une certaine forme de compléxité. Respecter ce pattern oblige à bien fragmenter son code source en petit module.

4) Flyweight

> On va parler optimisation mémoire, et surement aussi vitesse d'éxécution puisque qu'on va s'éviter d'instancié des class ou objet similaire. Reprenons notre class Burger, implémenter dans create/classPattern.js. Au lieu de créer deux instances d'un burger ayant les mêmes caractérisques, imaginons, celle d'un bigmac, et bien on va en créer qu'une seule, les deux variables qui stockeront votre variable pointeront vers la même instance, ainsi l'impact mémoire sera plus faible (et au passage on s'économisera le cout en temps d'éxécution de la création d'une nouvelle instance). Pour s'aider dans ce pattern, une factory nous sera fort utile.

*PS : Il faut garder en tête que le mieux est souvent l'ennemi du bien, et il vaut souvent mieux respecter le principe KISS (keep it simple, stupid. On ne devrait complexifié son architecture avec des pattern que lorsque cela présentera un véritable intérêt et pas juste pour la beauté du code.*