import { Qcm } from "src/shared/interfaces/qcms"
import { Question } from "src/shared/interfaces/questions"
import { User } from "src/shared/interfaces/users"

export const data: any = {
    qcms : [
        {
            id:1,
            title: "Quelle est la différence entre une girafe",
            results: [
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782,
                    blank: [1,2,3],//[id],
                    suceeded: [], // id
                    failed: []
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 782
                },
                {
                    mark: 13,
                    date: "21/12/2021",
                    duration: 887
                },
                {
                    mark: 18,
                    date: "21/12/2021",
                    duration: 887
                },
            ],
            done: true
        },
        {
            id:2,
            title: "Quelle est la différence entre une poule en Patagonie",
            results: [
                {
                    mark: 18,
                    date: "01/03/2022",
                    duration: 1203,
                }
            ],
            done: true
        },
        {
            id:3,
            title: "Géopolitique du pingouin",
            results: [
                {
                    mark: null,
                    date: null,
                    duration: null,
                }
            ],
            done: false
        },
        {
            id:4,
            title: "JavaScript : async et promises",
            results: [
                {
                    mark: 14,
                    date: "01/01/2022",
                    duration: 3617,
                }
            ],
            done: true
        },
        {
            id:5,
            title: "Syncrétisme de la courge butternut",
            results: [
                {
                    mark: 19,
                    date: "01/04/2022",
                    duration: 4500,
                }
            ],
            done: true
        },
        {
            id:6,
            title: "Savoir se servir d'un clavier",
            results: [
                {
                    mark: null,
                    date: null,
                    duration: null,
                }
            ],
            done: false
        },
        {
            id:7,
            title: "JavaScript : les bases",
            results: [
                {
                    mark: null,
                    date: null,
                    duration: null,
                }
            ],
            done: false
        },
    ]
}

export const doQcmData: Qcm[] = [
    {
        "id": 1,
        "name": "Quelle est la différence entre une girafe",
        "description": "un qcm de test modifié je parle et j'écris je lis shakespeare je joue mozart chut corneille pas si fort",
        "author": "Djoni OLIDAY",
        "qcmQuestion": [
            {
                "id": 3,
                "enonce": "Qu'est-ce qu'une girafe ?",
                "responses": {
                    "Un animal": 1,
                    "Une vache": 0
                }
            },
            {
                "id": 2,
                "enonce": "Qu'est-ce qu'une différence ?",
                "responses": {
                    "Oui": 1,
                    "C'est pax faux": 0,
                    "C'est évident" : 1
                }
            },
            {
                "id": 4,
                "enonce": "Êtes vous débile ?",
                "responses": {
                    "Très certainement": 1,
                    "Bien entendu": 0
                }
            },
            {
                "id": 1,
                "enonce": "Que pensez-vous de Mireille Mathieu",
                "responses": {
                    "Elle est géniale": 1,
                    "C'est ma mère": 0,
                    "Mireille quoi ?" : 0,
                    "C'est une personne extraordinaire !" : 1
                }
            }
        ]
    },
    {
        "id": 2,
        "name": "Quelle est la différence entre une poule en Patagonie",
        "description": "un qcm de test 2",
        "author": "Verov NABAKO",
        "qcmQuestion": []
    },
    {
        "id": 3,
        "name": "Géopolitique du pingouin",
        "description": "un qcm de test 2",
        "author": "Jorge NERBANOS",
        "qcmQuestion": [{
            "id": 3,
            "enonce": "Qu'est-ce qu'une girafe ?",
            "responses": {
                "Un animal": 1,
                "Une vache": 0
            }
        },
        {
            "id": 2,
            "enonce": "Qu'est-ce qu'une différence ?",
            "responses": {
                "Oui": 1,
                "C'est pax faux": 0
            }
        },
        {
            "id": 1,
            "enonce": "Êtes vous débile ?",
            "responses": {
                "Très certainement": 1,
                "Bien entendu": 0
            }
        }]
    },
    {
        "id": 4,
        "name": "JavaScript : async et promises",
        "description": "un qcm de test 2",
        "author": "Théo FIL",
        "qcmQuestion": []
    },
    {
        "id": 5,
        "name": "Syncrétisme de la courge butternut",
        "description": "un qcm de test 2",
        "author": "Jacques LONDRES",
        "qcmQuestion": [{
            "id": 23,
            "enonce": "Qu'est-ce qu'une girafe chauve ?",
            "responses": {
                "Un animal": 1,
                "Une vache": 0
            }
        },
        {
            "id": 22,
            "enonce": "Qu'est-ce qu'une différence de temps ?",
            "responses": {
                "Oui": 1,
                "C'est pax faux": 0
            }
        },
        {
            "id": 21,
            "enonce": "Êtes vous débile ?",
            "responses": {
                "Très certainement": 1,
                "Bien entendu": 0
            }
        }]
    },
    {
        "id": 6,
        "name": "Savoir se servir d'un clavier",
        "description": "un qcm de test 2",
        "author": "Alex ANDROBARICAULT-JELAIDANLOS",
        "qcmQuestion": []
    },
    {
        "id": 7,
        "name": "JavaScript : les bases",
        "description": "un qcm de test 2",
        "author": "jean michel 2",
        "qcmQuestion": []
    }
]

export const userList: User[] = [
    {
        id: 1,
        name: "Michel DEPECHE",
        password: "passwordlol",
        type: {
            id: 1,
            name: "intern"
        },
        societe: "Capgemini"
    },
    {
        id: 2,
        name: "Manon TUDECONNES",
        password: "passwordlolilol",
        type: {
            id: 1,
            name: "intern"
        },
        societe: "Sogeti"
    },
    {
        id: 3,
        name: "Cyril HARENG",
        password: "trololo",
        type: {
            id: 1,
            name: "intern"
        },
        societe: "Carrouf lol"
    },
    {
        id: 4,
        name: "Chloé PATENT",
        password: "helloworld",
        type: {
            id: 1,
            name: "intern"
        },
        societe: "Thales"
    },
]

export const questionList: Question[] = [
    {
        "id": 119,
        "enonce": "Qu'est-ce qu'un tiramisu ?",
        "responses": {
            "Un animal": 1,
            "Une vache": 0
        }
    },
    {
        "id": 118,
        "enonce": "Qu'est-ce qu'une jument ?",
        "responses": {
            "Un animal": 1,
            "Une chèvre": 0
        }
    },
    {
        "id": 117,
        "enonce": "La blanquette est-elle bonne ?",
        "responses": {
            "Oui": 1,
            "Non": 0
        }
    },
    {
        "id": 116,
        "enonce": "Miaou ?",
        "responses": {
            "Warf": 1,
            "Cocorico": 0
        }
    },
    {
        "id": 115,
        "enonce": "Hello ?",
        "responses": {
            "Nonjfdddddddddddddddddddddd": 1,
            "Cocorico": 0,
            "zzzzzzzzzzzzzzzzzzzzzzz" : 1,
            "Boarf" : 0,
            "aaaaaaaaaaaaaaaaaaaaaa" : 1,
            "hello la compagnie je suis débile" : 0
        }
    },
    {
        "id": 146,
        "enonce": "Devenez votre propre smartphone !",
        "responses": {
            "Meuuuh": 1,
            "Ok frr": 0
        }
    },
    {
        "id": 157,
        "enonce": "Qu'est-ce qu'une mobilette ?",
        "responses": {
            "Oui": 1,
            "C'est pax faux": 0,
            "C'est évident" : 1
        }
    },
    {
        "id": 114,
        "enonce": "Êtes vous débile ?",
        "responses": {
            "Très certainement": 1,
            "Bien entendu": 0
        }
    },
    {
        "id": 122,
        "enonce": "Avez-vous déjà envisagé une reconversion en caisse automatique ?",
        "responses": {
            "Oui": 1,
            "Pourquoi faire ?": 0,
            "C'est indiscret comme question" : 0,
            "Je suis déjà en formation pour devenir chaise de jardin" : 1
        }
    }
]