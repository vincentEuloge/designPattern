# designPattern
La base de toute application bien structurée

J'ai réalisé diverse implémentation de ces patterns, mais ils existent d'autre implémentation possible

On peut séparer les design pattern en trois types dont le but est de:

- créer (instancier)
- structurer
- ajouter un comportement


## **Création** (/create)

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

> On peut voir se pattern comme Une factory de factories, factoryception. Je n'a jamais rencontré de use case concret pour celui la, mais dans mon exemple avec des burger on peut imaginer un Abstract qui selon le type de burger, appellera une factory de Burger ou de VegeBurger, eux même, selon le nom, renverront la bonne instance de burger.


*PS : Il faut garder en tête que le mieux est souvent l'ennemi du bien, et il vaut souvent mieux respecter le principe KISS (keep it simple, stupid. On ne devrait complexifié son architecture avec des pattern que lorsque cela présentera un véritable intérêt et pas juste pour la beauté du code.*