const DataPages = [
    // DATA HOMEPAGE
    {
        'title': 'Home', 'slug': '',
        'footer': [
            { 'title': 'Richtlijnen', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'cta_text': 'Check onze richtlijnen', 'cta_link': '/richtlijnen' },
            { 'title': 'Social media', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'cta_text': 'Zo pak je social media aan', 'cta_link': '/social' },
            { 'title': 'Campagnemateriaal', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'cta_text': 'Bekijk het campagnemateriaal', 'cta_link': '/campagnemateriaal' },
        ]
    },

    // DATA SCHEDULE
    {
        'title': 'Schedule', 'slug': 'schedule',
        'schedule': [
            [
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1': true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2': false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1': false,
                    'team2': 'combatant', 'tag2': 'com', 'lose2': true,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1': true,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2': false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1': false,
                    'team2': '2k', 'tag2': 't2k', 'lose2': true,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1': false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2': true,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1': true,
                    'team2': '2k', 'tag2': 't2k', 'lose2': false,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1': true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2': false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1': true,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2': false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1': false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2': true,
                },
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1': true,
                    'team2': 'combatant', 'tag2': 'com', 'lose2': false,
                },
            ]
        ],

        'result': [
            { 'team': 'pdsi', 'win': 4, 'lose': 0, 'kill': [28, 20, 30, 41] },
            { 'team': 'hornet', 'win': 0, 'lose': 4, 'kill': [7, 20, 19, 16] },
            { 'team': 'chicken slayers', 'win': 3, 'lose': 1, 'kill': [26, 23, 32, 12] },
            { 'team': 'combatant', 'win': 1, 'lose': 3, 'kill': [11, 7, 20, 39] },
            { 'team': '2k', 'win': 2, 'lose': 2, 'kill': [8, 33, 39, 28] }
        ]
    },

    // DATA TEAM INGAME

    // combatant = com
    // chickenslayers = tcs
    // pdsi = pdsi
    // hornet = hor
    // 2k = t2k
    {
        'title': 'Team Ingame', 'slug': 'teamingame',
        'day': [
            {
                'match': [
                    {
                        'team1': 'hornet', 'tag1': 'hor',
                        'team2': 'chicken slayers', 'tag2': 'tcs',
                    },
                    {
                        'team1': 'chicken slayers', 'tag1': 'tcs',
                        'team2': 'combatant', 'tag2': 'com',
                    }
                ]
            },

            {
                'match': [
                    {
                        'team1': 'combatant', 'tag1': 'com',
                        'team2': 'pdsi', 'tag2': 'pdsi',
                    },
                    {
                        'team1': 'pdsi', 'tag1': 'pdsi',
                        'team2': '2k', 'tag2': 't2k',
                    },
                    {
                        'team1': '2k', 'tag1': 't2k',
                        'team2': 'hornet', 'tag2': 'hor',
                    }
                ]
            },

            {
                'match': [
                    {
                        'team1': 'pdsi', 'tag1': 'pdsi',
                        'team2': 'chicken slayers', 'tag2': 'tcs',
                    },
                    {
                        'team1': 'chicken slayers', 'tag1': 'tcs',
                        'team2': 'pdsi', 'tag2': 'pdsi',
                    },
                    {
                        'team1': 'chicken slayers', 'tag1': 'tcs',
                        'team2': 'pdsi', 'tag2': 'pdsi',
                    },
                    {
                        'team1': 'pdsi', 'tag1': 'pdsi',
                        'team2': 'chicken slayers', 'tag2': 'tcs',
                    },
                    {
                        'team1': 'hornet', 'tag1': 'hor',
                        'team2': 'combatant', 'tag2': 'com',
                    },
                ]
            }
        ],
    },

    // DATA NEXT GAME
    {
        'title': 'Next Game', 'slug': 'nextgame',
    },

    // DATA RESULT
    {
        'title': 'Result', 'slug': 'result',
        'result': [
            { 'team': 'pdsi', 'win': 4, 'lose': 0, 'kill': [28, 20, 30, 41] },
            { 'team': 'hornet', 'win': 0, 'lose': 4, 'kill': [7, 20, 19, 16] },
            { 'team': 'chicken slayers', 'win': 3, 'lose': 1, 'kill': [26, 23, 32, 12] },
            { 'team': 'combatant', 'win': 1, 'lose': 3, 'kill': [11, 7, 20, 39] },
            { 'team': '2k', 'win': 2, 'lose': 2, 'kill': [8, 33, 39, 28] }
        ]
    },

    // DATA NEXT DAY
    {
        'title': 'Next day', 'slug': 'nextday',
        'schedule': [
            [
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1': true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2': false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1': false,
                    'team2': 'combatant', 'tag2': 'com', 'lose2': true,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1': true,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2': false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1': false,
                    'team2': '2k', 'tag2': 't2k', 'lose2': true,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1': false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2': true,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1': true,
                    'team2': '2k', 'tag2': 't2k', 'lose2': false,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1': true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2': false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1': true,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2': false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1': false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2': true,
                },
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1': true,
                    'team2': 'combatant', 'tag2': 'com', 'lose2': false,
                },
            ]
        ],
    },

    // TEST
    {
        'title': 'Next day', 'slug': 'test',
        'schedule': [
            [
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1': true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2': false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1': false,
                    'team2': 'combatant', 'tag2': 'com', 'lose2': true,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1': true,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2': false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1': false,
                    'team2': '2k', 'tag2': 't2k', 'lose2': true,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1': false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2': true,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1': true,
                    'team2': '2k', 'tag2': 't2k', 'lose2': false,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1': true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2': false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1': true,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2': false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1': false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2': true,
                },
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1': true,
                    'team2': 'combatant', 'tag2': 'com', 'lose2': false,
                },
            ]
        ],
    },
]

export default DataPages;