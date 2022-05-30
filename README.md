# Cinema-CircleCI

Création de l'application frontend «Cinema-CircleCI» sous React.js et Redux.\
Le développement de cette application aura été l'occasion de mettre en place un pipeline de CI/CD (à l'aide de Circle-CI et de Terraform) et d'automatiser son déploiement sous AWS S3 et CloudFront.\
À cette occasion, de « bonnes pratiques » d'utilisation des branches sous GitHub (main, staging, development avec sous-branches pour le développement de chaque feature) auront été suivies.\
La remontée des erreurs (en production) est gérée par Sentry et les différentes notifications de build sont centralisées sous un canal Slack. 

## Adresses de déploiement

L'application est disponible en 3 versions :

### `version de développement`

Contient les dernières modifications (et les éventuels bugs inhérents…) :\
[https://cinema-circleci-development](https://d2z5bar3s1aloh.cloudfront.net/)

### `version de staging`

Version similaire à celle de production (parce que je développe seul et que j'ai le bonheur d'être toujours d'accord avec moi-même ;-P) :\
[https://cinema-circleci-staging](https://d1pwdeiyvkxrmr.cloudfront.net)

### `version de production`

Et voici l'application sous sa version finale :\
[https://cinema-circleci-production](https://d3aahwnj1lw9c5.cloudfront.net)



## Quelques remarques

Le suivi de ce [tutoriel](https://www.udemy.com/course/build-a-modern-react-and-redux-app-with-circleci-cicd-aws/?utm_source=adwords&utm_medium=udemyads&utm_campaign=LongTail_la.EN_cc.ROW&utm_content=deal4584&utm_term=_._ag_77879424134_._ad_535397245863_._kw__._de_c_._dm__._pl__._ti_dsa-1007766171312_._li_9055186_._pd__._&matchtype=&gclid=Cj0KCQjw1tGUBhDXARIsAIJx01k_JnVEm0FjeAkcDuK6RfsrVi_gcODA24N_QpYwaLF25lU_njx1jWcaAi9REALw_wcB) Udemy par Uzochukwu Eddie Odozi aura été riche d'enseignement sur une utilisation plus « professionnelle » de GitHub et sur le côté « devOps » du CI/CD et du déploiement automatique.

Par contre, l'utilisation que fait l'auteur de Redux avec les méthodes connect(), mapStateToProps, mapDispatchToProps me semble obsolète et j'ai profité des hooks React-Redux (useDispatch, useSelector) pour écrire une version du code plus d'actualité.\
De la même façon, l'auteur m'a semblé ne pas utiliser à sa juste valeur le state centralisé de l'application par Redux, en adjoignant des states locaux redondant dans plusieurs composants. Ce double emploi aura été évité dans ma version du code.\
Enfin, je tiens à signaler que j'ai essayé de présenter (scinder) mes actions à la façon de Brad Traversy, c'est-à-dire sous la forme:
* NOM_DE_L_ACTION_REQUEST ;
* NOM_DE_L_ACTION_SUCCESS ;
* NOM_DE_L_ACTION_FAILED ;
* et éventuellement NOM_DE_L_ACTION_RESET.

Bien sûr, ce code est toujours en développement et je reste ouvert à toute critique constructive visant à l'améliorer.
