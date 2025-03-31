// Team data configuration
const TEAMS = {
    'pdsi': { name: 'pdsi', tag: 'pdsi' },
    'hornet': { name: 'hornet', tag: 'hor' },
    'chicken_slayers': { name: 'chicken slayers', tag: 'tcs' },
    'combatant': { name: 'combatant', tag: 'com' },
    '2k': { name: '2k', tag: 't2k' }
};

// Helper function to create a match
const createMatch = (team1, team2, winner) => ({
    team1: TEAMS[team1].name,
    tag1: TEAMS[team1].tag,
    team2: TEAMS[team2].name,
    tag2: TEAMS[team2].tag,
    winner: TEAMS[winner].tag // Tag của đội thắng
});

// Helper function to create team result
const createTeamResult = (team, win, lose, kills) => ({
    team: TEAMS[team].name,
    win,
    lose,
    kill: kills,
    totalKills: kills.reduce((a, b) => a + b, 0),
    winRate: (win / (win + lose)) * 100
});

// Common schedule data
const SCHEDULE_DATA = [
    [
        createMatch('hornet', 'chicken_slayers', 'chicken_slayers'),
        createMatch('chicken_slayers', 'combatant', 'chicken_slayers')
    ],
    [
        createMatch('combatant', 'pdsi', 'pdsi'),
        createMatch('pdsi', '2k', 'pdsi'),
        createMatch('2k', 'hornet', '2k')
    ],
    [
        createMatch('combatant', '2k', '2k'),
        createMatch('2k', 'chicken_slayers', 'chicken_slayers'),
        createMatch('chicken_slayers', 'pdsi', 'pdsi'),
        createMatch('pdsi', 'hornet', 'pdsi'),
        createMatch('hornet', 'combatant', 'combatant')
    ]
];

// Common result data
const RESULT_DATA = [
    createTeamResult('pdsi', 4, 0, [28, 20, 30, 41]),
    createTeamResult('hornet', 0, 4, [7, 20, 19, 16]),
    createTeamResult('chicken_slayers', 3, 1, [26, 23, 32, 12]),
    createTeamResult('combatant', 1, 3, [11, 7, 20, 39]),
    createTeamResult('2k', 2, 2, [8, 33, 39, 28])
].sort((a, b) => {
    // Sort by win rate first
    if (b.winRate !== a.winRate) {
        return b.winRate - a.winRate;
    }
    // If win rate is equal, sort by total kills
    return b.totalKills - a.totalKills;
});

const DataPages = [
    {
        'title': 'Home',
        'slug': '',
        'footer': [
            { 'title': 'Richtlijnen', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'cta_text': 'Check onze richtlijnen', 'cta_link': '/richtlijnen' },
            { 'title': 'Social media', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'cta_text': 'Zo pak je social media aan', 'cta_link': '/social' },
            { 'title': 'Campagnemateriaal', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'cta_text': 'Bekijk het campagnemateriaal', 'cta_link': '/campagnemateriaal' },
        ]
    },
    {
        'title': 'Schedule',
        'slug': 'schedule',
        'schedule': SCHEDULE_DATA,
        'result': RESULT_DATA
    },
    {
        'title': 'Team Ingame',
        'slug': 'teamingame',
        'day': [
            {
                'match': [
                    createMatch('hornet', 'chicken_slayers', 'chicken_slayers'),
                    createMatch('chicken_slayers', 'combatant', 'chicken_slayers')
                ]
            },
            {
                'match': [
                    createMatch('combatant', 'pdsi', 'pdsi'),
                    createMatch('pdsi', '2k', 'pdsi'),
                    createMatch('2k', 'hornet', '2k')
                ]
            },
            {
                'match': [
                    createMatch('pdsi', 'chicken_slayers', 'pdsi'),
                    createMatch('chicken_slayers', 'pdsi', 'chicken_slayers'),
                    createMatch('chicken_slayers', 'pdsi', 'chicken_slayers'),
                    createMatch('pdsi', 'chicken_slayers', 'pdsi'),
                    createMatch('hornet', 'combatant', 'combatant')
                ]
            }
        ],
    },
    {
        'title': 'Next Game',
        'slug': 'nextgame',
    },
    {
        'title': 'Result',
        'slug': 'result',
        'result': RESULT_DATA
    },
    {
        'title': 'Next day',
        'slug': 'nextday',
        'schedule': SCHEDULE_DATA,
    }
];

export default DataPages;