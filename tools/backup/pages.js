/* eslint-disable no-multi-spaces */

const pages = [
  // Vital
  { name: 'chapter-notices',                  url: 'https://theashenchapter.enjin.com/forum/m/8190140/viewthread/22789972-chapter-notices',                         numberOfPages: 101    },
  { name: 'indv-stories-indv-heroes',         url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/30357399-individual-stories-for-heroes',            numberOfPages: 2      },

  // Game Discussion -> Screenshots
  { name: 'random-screens',                   url: 'https://theashenchapter.enjin.com/forum/m/8190140/viewthread/4393196-random-screenshot-thread',                 numberOfPages: 66     },
  { name: 'screen-junkies',                   url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/8932149-for-all-you-screenie-junkies-out-there',    numberOfPages: 66     },

  // Vigil Keep -> Letterbox
  { name: 'chapter-letters',                  url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/13737479-ashen-chapter-letters',                    numberOfPages: 210    },
  { name: 'command-letters',                  url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/12931928-command-letters',                          numberOfPages: 94     },
  { name: 'commendations-citations-public',   url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33563703-commendations-citations',                  numberOfPages: 1      },

  // Vigil Keep -> Field Reports
  { name: 'beastmaster-logbook',              url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/30783684-beastmasters-logbook',                     numberOfPages: 4      },
  { name: 'blade-reports',                    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29571033-blade-squadron-reports',                   numberOfPages: 37     },
  { name: 'command-reports',                  url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/17631104-ashen-command-reports',                    numberOfPages: 25     },
  { name: 'engi-reports',                     url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29630480-engineering-reports',                      numberOfPages: 4      },
  { name: 'engineering-logbook',              url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33604957-engineering-logbook',                      numberOfPages: 2      },
  { name: 'lance-reports',                    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29547207-lance-squadron-reports',                   numberOfPages: 29     },
  { name: 'magical-studies-reports',          url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/28719199-magical-studies-reports',                  numberOfPages: 26     },
  { name: 'medical-checkup-reports',          url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29892839-medical-checkup-reports',                  numberOfPages: 13     },
  { name: 'medical-reports',                  url: 'https://theashenchapter.enjin.com/forum/m/8190140/viewthread/29709585-medical-reports',                         numberOfPages: 115    },
  { name: 'qm-logs',                          url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29968719-quartermaster-logbook',                    numberOfPages: 63     },
  { name: 'scout-reports',                    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/26755261-scout-reports',                            numberOfPages: 22     },

  // Vigil Keep -> Notices
  { name: 'bm-notices',                       url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/30783686-beastmaster-notices',                      numberOfPages: 3      },
  { name: 'engineering-notices',              url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/28939835-engineering-notices',                      numberOfPages: 14     },
  { name: 'magstud-notices',                  url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/28658175-magical-studies-notices',                  numberOfPages: 20     },
  { name: 'medical-notices',                  url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/22865481-medical-notices',                          numberOfPages: 14     },
  { name: 'qm-notices',                       url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/5983763-quartermaster-notices',                     numberOfPages: 192    },
  { name: 'scouting-notices',                 url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/22875580-scouting-notices',                         numberOfPages: 27     },
  { name: 'signals-notices',                  url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33690628-signals-notices',                          numberOfPages: 1      },

  // Manuals & Compendiums.
  { name: 'bm-comp',                          url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/31273054-beastmasterys-compendium',                 numberOfPages: 1      },
  { name: 'cook-ration',                      url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/23775911-cooking-ration-compendium',                numberOfPages: 1      },
  { name: 'engi-comp',                        url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33598663-engineering-compendium',                   numberOfPages: 1      },
  { name: 'handbook',                         url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29279299-vigil-crusaders-military-handbook',        numberOfPages: 1      },
  { name: 'magstud-comp',                     url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29505484-magical-studies-compendium',               numberOfPages: 1      },
  { name: 'med-comp',                         url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33585788-medical-compendium-1334ae-edition',        numberOfPages: 1      },
  { name: 'sigop-comp',                       url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33271597-signal-operators-handbook',                numberOfPages: 1      },

  // Guild Rules & Player Resources
  { name: 'bm-compendium',                    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33090540-beastmasters-compendium',                  numberOfPages: 1      },
  { name: 'camp-layout',                      url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/8730985-current-camp-layout',                       numberOfPages: 12     },
  { name: 'chapterhouse',                     url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/4460221-chapterhouse',                              numberOfPages: 1      },
  { name: 'courier-availability',             url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/21106796-courier-availability',                     numberOfPages: 1      },
  { name: 'dprts-and-you',                    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33671249-chapter-departments-you',                  numberOfPages: 1      },
  { name: 'dyes',                             url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/31917613-armour-dyes',                              numberOfPages: 1      },
  { name: 'elite-specs-and-you',              url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/31045923-elite-specializations-you',                numberOfPages: 1      },
  { name: 'guide-to-uniform',                 url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33685863-guide-to-uniform',                         numberOfPages: 1      },
  { name: 'injury-guideline',                 url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/30857093-taking-injury-guideline',                  numberOfPages: 1      },
  { name: 'magic-spell-guidelines',           url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/32296560-magic-spell-guidelines',                   numberOfPages: 1      },
  { name: 'mdls-decorations',                 url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/31889262-medals-decorations',                       numberOfPages: 1      },
  { name: 'mount-roster',                     url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/33053875-ashen-mount-roster',                       numberOfPages: 1      },
  { name: 'npcs',                             url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/30802996-auxiliary-camp-personnel-npcs',            numberOfPages: 1      },
  { name: 'oath',                             url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/5064112-vigil-oath',                                numberOfPages: 1      },
  { name: 'payscale',                         url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29665570-vigil-payscale',                           numberOfPages: 1      },
  { name: 'qm-rules-guidelines',              url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/32684267-quartermaster-rules-guidelines',           numberOfPages: 1      },
  { name: 'ranks-and-you',                    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/30186233-chapter-ranks-you',                        numberOfPages: 1      },
  { name: 'ration-ticket-system',             url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/22856600-ration-ticket-system',                     numberOfPages: 1      },
  { name: 'rev-andyou',                       url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/32929944-revenancy-you',                            numberOfPages: 1      },
  { name: 'rev-you-2',                        url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/31066073-revenancy-you',                            numberOfPages: 1      },
  { name: 'rosters',                          url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/29670796-rosters',                                  numberOfPages: 1      },
  { name: 'service-permit-dblood-weapons',    url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/32879232-service-permit-dragonsblood-weapons',      numberOfPages: 1      },
  { name: 'sparring-dming',                   url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/32916002-sparring-dming',                           numberOfPages: 1      },
  { name: 'vigil-chapters',                   url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/9359065-vigil-chapters',                            numberOfPages: 1      },
  { name: 'wall-of-rememberance-rosalie',     url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/32693373-wall-remembrance',                         numberOfPages: 1      },

  // Vigil Keep. Last, because of the enormous number of posts
  { name: 'fact-thread', url: 'https://theashenchapter.enjin.com/home/m/8190140/viewthread/6930939-fact-thread',                                                    numberOfPages: 1364   },
]

module.exports = pages
