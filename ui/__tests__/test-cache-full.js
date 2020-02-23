export const testCacheFull = {
  upcomingEpisodes: ['prickards-quarrel'],
  characters: {
    'tycho': {
        'id': 'tycho',
        'name': 'Tycho of Dalinasus',
        'profession': 'Barbarian',
        'level': 4,
        'player_id': 'frank',
        'campaigns': ['the-history-of-edraston'],
        'tags': []
    },
    'larry': {
        'id': 'larry',
        'name': 'Larry D\'Avid',
        'profession': 'Awkward Wizard',
        'level': 6,
        'player_id': 'larry',
        'campaigns': ['the-history-of-edraston'],
        'tags': []
    }
  },
  topics: [{
    title: 'Legends of Erukar',
    description: 'A Multiplayer Roguelike set within the world of Eikalis after the end of the Second Scourge of Vrakaros',
    friendly_id: 'content%20selection%20#1',
    controls: [{
        text: 'Dismiss',
        route: '/legends/dismiss'
      }, {
        text: 'Learn More',
        route: '/help/legends'
      }
    ]
  }, {
    title: 'Content Selection #1',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%20#1'
  }, {
    title: 'Content Selection #2',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%20#1'
  }, {
    title: 'Content Selection #3',
    description: 'This is the first content selection that you should see. There\'s not a lot here, but hopefully it will wrap. Let\'s see what happens.',
    friendly_id: 'content%20selection%20#1'
  }, {
    title: 'The Will of Acethyrith',
    description: 'The legendary sword bestowed upon Arokan Falendar and wielded by Erevan Nightbreeze.',
    friendly_id: 'content%20selection%20#1'
  }],
  episodes: {
    'prickards-quarrel': {
      id: 'prickards-quarrel',
      title: 'Prickard\'s Quarrel',
      date: '2019-12-04T22:36:08.821Z',
      gm: 'Evan Kirsch',
      description: 'The Prickard Mine falls into chaos admist strikes and sabotage',
      summary: 'This is the summary for this episode.',
      artwork: [
          '/static/images/parvion-example.png'
      ],
      level: 4,
      'characters': ['larry', 'tycho']
    }
  },
  campaigns: [{
    id: 'the-history-of-edraston',
    title: 'The History of Edraston',
    gm: 'Evan Kirsch',
    description: 'A sandbox campaign set in the fourth century of the Thaedoth Theocratic Imperium',
    summary: '381, Thaedoth Era. Settlers flock to the Mt. Edras region following the discovery of a black crystal called "Salericite". The demand for Salericite skyrocketed overnight, causing an influx of fortune-seekers and career criminals. A settlement has started between the Edras and Prickard Mines. ',
    artwork: [
    '/static/images/ashta-example.jpg'
    ],
    upcomingEpisode: 'prickards-quarrel'
  }, {
    id: 'the-second-scourge',
    title: 'The Second Scourge',
    gm: 'Evan Kirsch',
    description: 'An ancient evil has reappeared after nearly two millennia. The future of society hangs on the actions of our heroes.',
    summary: 'In 542 CA, Alacron Draume, the High Justice of the Kingdom of Iuria, established a small task force to investigate an entity deep beneath the Moq Sulhan mines. This entity was discovered to be the Prime Defiler Karravaska who almost nearly destroyed the world with the First Vrakk Scourge. The High Justice\'s brother Rathod set Karravaska free, and the task force stepped up to stop the Second Scourge.',
    hasCompleted: true,
    artwork: [
      '/static/images/ygdiras-example.jpg'
    ]
  }, {
    id: 'consultants-and-dragons',
    title: 'Consultants and Dragons',
    gm: 'Evan Kirsch',
    description: 'The first campaign within the world of Eikalis',
    summary: 'The adventuring guild known as \'Consultants and Dragons\' was formed in Barlen, Iuria, by the retired Archmage Vorenus Magnus. Hijinks ensued, as the Consultants staged (failed) heists and expeditions into the no-man\'s-land, Erukar. This campaign concluded when the King of Iuria Riphel II was assassinated in Luinden on Kingsday, sparking the resistance war called the Iurian Reclamation.',
    hasCompleted: true,
    artwork: [
      '/static/images/shamradaer-example.png'
    ]
  }]
}

describe('test data full', () => {
  it('has all data', () => {
    expect(testCacheFull.campaigns).toBeTruthy
    expect(testCacheFull.episodes).toBeTruthy
  })
})
