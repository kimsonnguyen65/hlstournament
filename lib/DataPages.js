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
                    'team1': 'hornet', 'tag1': 'hor', 'lose1' : true,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2' : false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1' : false,
                    'team2': 'combatant', 'tag2': 'com', 'lose2' : false,
                }
            ],

            [
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1' : false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2' : false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1' : false,
                    'team2': '2k', 'tag2': 't2k', 'lose2' : false,
                },
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1' : false,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2' : false,
                }
            ],

            [
                {
                    'team1': 'combatant', 'tag1': 'com', 'lose1' : false,
                    'team2': '2k', 'tag2': 't2k', 'lose2' : false,
                },
                {
                    'team1': 'hornet', 'tag1': 'hor', 'lose1' : false,
                    'team2': 'combatant', 'tag2': 'com', 'lose2' : false,
                },
                {
                    'team1': '2k', 'tag1': 't2k', 'lose1' : false,
                    'team2': 'chicken slayers', 'tag2': 'tcs', 'lose2' : false,
                },
                {
                    'team1': 'pdsi', 'tag1': 'pdsi', 'lose1' : false,
                    'team2': 'hornet', 'tag2': 'hor', 'lose2' : false,
                },
                {
                    'team1': 'chicken slayers', 'tag1': 'tcs', 'lose1' : false,
                    'team2': 'pdsi', 'tag2': 'pdsi', 'lose2' : false,
                }
            ]
        ]
    },
]

export default DataPages;