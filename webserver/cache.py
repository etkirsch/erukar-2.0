import random

characters = {
    'tycho': {
        'id': 'tycho',
        'name': 'Tycho of Dalinasus',
        'profession': 'Barbarian',
        'level': 4,
        'player_id': 'frank',
        'icon': 'https://erukar-cloud.s3.amazonaws.com/bard.png',
        'campaigns': ['the-history-of-edraston'],
        'tags': []
    },
    'larry': {
        'id': 'larry',
        'name': 'Larry D\'Avid',
        'profession': 'Awkward Wizard',
        'level': 6,
        'player_id': 'larry',
        'icon': 'https://erukar-cloud.s3.amazonaws.com/merchant.png',
        'campaigns': ['the-history-of-edraston'],
        'tags': []
    },
    'redrigo': {
        'id': 'redrigo',
        'name': 'Redrigo de Rojo',
        'profession': 'The Rouge Rogue',
        'level': 4,
        'player_id': 'rod',
        'icon': 'https://erukar-cloud.s3.amazonaws.com/scout.png',
        'campaigns': ['the-history-of-edraston'],
        'tags': []
    }
}

topics = [{
    'title': 'Legends of Erukar',
    'description': 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
    'friendly_id': 'content%20selection%20#1',
    'controls': [
        { 'text': 'Dismiss', 'route': '/legends/dismiss' },
        { 'text': 'Learn More', 'route': '/help/legends' },
    ]
}, {
    'title': 'The Second Scourge',
    'description': 'The second Vrakk scourge, which nearly brought the Tolmean continent to total destruction and allowed Alacron Draume to usurp the Altaen Throne.',
    'friendly_id': 'the%20second%20scourge'
}, {
    'title': 'The Thaedoth Theocracy',
    'description': 'The first Tolmean superpower built on the religion of Thessen. The Theocracy existed for over a millenium and shaped the future of Tolmea.',
    'friendly_id': 'the%20thaedoth%20theocracy'
}, {
    'title': 'Aeges',
    'description': 'The Divine Font responsible for protection and longevity. Currently controlled by the god Aegea, who is aligned with Alacron Draume.',
    'friendly_id': 'aeges'
}, {
    'title': 'The Will of Aseferos',
    'description': 'The legendary sword bestowed upon Arokan Falendar and wielded by Erevan Nightbreeze.',
    'friendly_id': 'the%20will%20of%20Aseferos'
}, {
    'title': 'The Deceit of Yzerbos (Soulshard)',
    'description': 'The Soulshard of Yzerbos discovered by Bobbity Squiggles within the sealed tombs under Zethett.',
    'friendly_id': 'the%20deceit%20of%20yzerbos'
}, {
    'title': 'Barlen',
    'description': 'A town in Iuria whose primary trade is barley and flour production. Barlen is home to the Barlen Baker\'s Guild and Consultants and Dragons.',
    'friendly_id': 'the%20deceit%20of%20yzerbos'
}]

episodes = {
    'prickards-quarrel': {
        'id': 'prickards-quarrel',
        'campaign': 'the-history-of-edraston',
        'title': 'Prickard\'s Quarrel',
        'date': '2019-12-04T22:36:08.821Z',
        'gm': 'Evan Kirsch',
        'description': 'The Prickard Mine falls into chaos admist strikes and sabotage',
        'summary': 'This is the summary for this episode.',
        'artwork': [
            'https://erukar-cloud.s3.amazonaws.com/parvion-example.png'
        ],
        'level': 4,
        'characters': ['larry', 'tycho']
    },
    'the-first-episode': {
        'id': 'the-first-episode',
        'campaign': 'the-history-of-edraston',
        'title': 'The First Episode',
        'date': '2019-11-09T22:36:08.821Z',
        'gm': 'Evan Kirsch',
        'description': 'The party arrives to Edraston',
        'summary': 'The players arrived at Edraston. Hijinks ensued, and the players went off to examine the Edras Mines. After some cautionary battling, the players cleared the Mine and returned triumphant.',
        'artwork': [
            'https://erukar-cloud.s3.amazonaws.com/parvion-example.png'
        ],
        'level': 4,
        'characters': ['larry', 'tycho', 'redrigo']
    }
}

campaigns = [{
    'id': 'the-history-of-edraston',
    'title': 'The History of Edraston',
    'gm': 'Evan Kirsch',
    'description': 'A sandbox campaign set in the fourth century of the Thaedoth Theocratic Imperium',
    'summary': '381, Thaedoth Era. Settlers flock to the Mt. Edras region following the discovery of a black crystal called "Salericite". The demand for Salericite skyrocketed overnight, causing an influx of fortune-seekers and career criminals. A settlement has started between the Edras and Prickard Mines. ',
    'artwork': [
        'https://erukar-cloud.s3.amazonaws.com/ashta-example.jpg'
    ],
    'upcomingEpisode': 'prickards-quarrel',
    'episodes': ['the-first-episode', 'prickards-quarrel']
}, {
    'id': 'the-second-scourge',
    'title': 'The Second Scourge',
    'gm': 'Evan Kirsch',
    'description': 'An ancient evil has reappeared after nearly two millennia. The future of society hangs on the actions of our heroes.',
    'summary': 'In 542 CA, Alacron Draume, the High Justice of the Kingdom of Iuria, established a small task force to investigate an entity deep beneath the Moq Sulhan mines. This entity was discovered to be the Prime Defiler Karravaska who almost nearly destroyed the world with the First Vrakk Scourge. The High Justice\'s brother Rathod set Karravaska free, and the task force stepped up to stop the Second Scourge.',
    'hasCompleted': True,
    'artwork': [
        'https://erukar-cloud.s3.amazonaws.com/ygdiras-example.jpg'
    ]
}, {
    'id': 'consultants-and-dragons',
    'title': 'Consultants and Dragons',
    'gm': 'Evan Kirsch',
    'description': 'The first campaign within the world of Eikalis',
    'summary': 'The adventuring guild known as \'Consultants and Dragons\' was formed in Barlen, Iuria, by the retired Archmage Vorenus Magnus. Hijinks ensued, as the Consultants staged (failed) heists and expeditions into the no-man\'s-land, Erukar. This campaign concluded when the King of Iuria Riphel II was assassinated in Luinden on Kingsday, sparking the resistance war called the Iurian Reclamation.',
    'hasCompleted': True,
    'artwork': [
        'https://erukar-cloud.s3.amazonaws.com/shamradaer-example.png'
    ]
}]

random.shuffle(topics)
validEpisodes = [x.get('upcomingEpisode', '') for x in campaigns if x.get('upcomingEpisode','') != ''],

fake_cache_data = {
    'episodes': episodes,
    'campaigns': campaigns,
    'upcomingEpisodes': random.choice(validEpisodes),
    'topics': topics[:5],
    'characters': characters
}
