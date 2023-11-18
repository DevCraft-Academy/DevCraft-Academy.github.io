import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    // root: 'body',
    // autoShow: true,
    // disablePageInteraction: true,
    // hideFromBots: true,
    // mode: 'opt-in',
    // revision: 0,

    cookie: {
        name: 'cc_cookie',
        // domain: location.hostname,
        // path: '/',
        // sameSite: "Lax",
        // expiresAfterDays: 365,
    },

    // https://cookieconsent.orestbida.com/reference/configuration-reference.html#guioptions
    guiOptions: {
        consentModal: {
            layout: 'cloud inline',
            position: 'bottom center',
            equalWeightButtons: true,
            flipButtons: false
        },
        preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false
        }
    },

    onFirstConsent: ({cookie}) => {
        console.log('onFirstConsent fired',cookie);
    },

    onConsent: ({cookie}) => {
        console.log('onConsent fired!', cookie)
    },

    onChange: ({changedCategories, changedServices}) => {
        console.log('onChange fired!', changedCategories, changedServices);
    },

    onModalReady: ({modalName}) => {
        console.log('ready:', modalName);
    },

    onModalShow: ({modalName}) => {
        console.log('visible:', modalName);
    },

    onModalHide: ({modalName}) => {
        console.log('hidden:', modalName);
    },

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {
            autoClear: {
                cookies: [
                    {
                        name: /^_ga/,   // regex: match all cookies starting with '_ga'
                    },
                    {
                        name: '_gid',   // string: exact cookie name
                    }
                ]
            },

            // https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
            services: {
                ga: {
                    label: 'Google Analytics',
                    onAccept: () => {},
                    onReject: () => {}
                },
                // youtube: {
                //     label: 'Youtube Embed',
                //     onAccept: () => {},
                //     onReject: () => {}
                // },
            }
        },
        ads: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'Als Entwickler:in kennst du das ja: Wir wollen deine Kekse.  &#128521;',
                    description: 'Aber ernsthaft: Wir würden gerne verstehen, wie unsere Seite genutzt wird. Indem du Cookies akzeptierst, hilfst du uns, sie noch besser für andere Entwickler:innen zu gestalten. Wir versprechen dir, nur unbedingt notwendige Daten zu erfassen und behutsam damit umzugehen. Mehr dazu findest du in unserer Datenschutzerklärung.',
                    acceptAllBtn: 'Alle Akzeptieren',
                    acceptNecessaryBtn: 'Alle Ablehnen',
                    showPreferencesBtn: 'Einstellungen verwalten',
                    // closeIconLabel: 'Reject all and close modal',
                    footer: `
                        <a href="/dsgvo.html" target="_blank">Datenschutzerklärung</a>
                    `,
                },
                preferencesModal: {
                    title: 'Cookie Einstellungen',
                    acceptAllBtn: 'Alle Akzeptieren',
                    acceptNecessaryBtn: 'Alle Ablehnen',
                    savePreferencesBtn: 'Auswahl bestätigen',
                    closeIconLabel: 'Einstellungen schließen',
                    sections: [
                        {
                            title: '',
                            description: 'Hier kannst du der Setzung einzelner Cookies, die auf dieser Domain und ihren Subdomains verwendet werden, zustimmen oder ablehnen. Du kannst deine Cookie-Einstellungen jederzeit ändern, nutze dazu bitte den Link „Cookie-Einstellungen“ im Footer der Webseite unter dem Link zur Datenschutzerklärung.'
                        },
                        {
                            title: 'notwendige Cookies',
                            description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',

                            //this field will generate a toggle linked to the 'necessary' category
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance und Analytics',
                            description: 'Diese Cookies sammeln Informationen darüber, wie du unsere Website nutzt. Sämtliche Daten werden anonymisiert und lassen keinen Rückschluss auf deine Person zu.',
                            linkedCategory: 'analytics',
                            cookieTable: {
                                caption: 'Cookie table',
                                headers: {
                                    name: 'Cookie',
                                    domain: 'Domain',
                                    desc: 'Description'
                                },
                                body: [
                                    {
                                        name: '_ga',
                                        domain: location.hostname,
                                        desc: 'Description 1',
                                    },
                                    {
                                        name: '_gid',
                                        domain: location.hostname,
                                        desc: 'Description 2',
                                    }
                                ]
                            }
                        },
                        // {
                        //     title: 'Targeting and Advertising',
                        //     description: 'These cookies are used to make advertising messages more relevant to you and your interests. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.',
                        //     linkedCategory: 'ads',
                        // },
                        {
                            title: 'Mehr Informationen',
                            description: 'Bei Fragen zu den Cookie Richtlinien und deinen Auswahlmöglichkeiten lies bitte unsere <a href="/dsgvo.html">Datenschutzerklärung</a>.'
                        }
                    ]
                }
            }
        }
    },

    // Set status of the services provided the user has not set the status yet
    onConsent: function(){
        if(CookieConsent.acceptedCategory('analytics')){
            // Analytics category enabled
        }

        if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
            // Google Analytics enabled
        }
    },

    // Change the status of the services provided the user has already set the status once
    onChange: function({changedCategories, changedServices}){
        if(changedCategories.includes('analytics')){

            if(CookieConsent.acceptedCategory('analytics')){
                // Analytics category was just enabled
            }else{
                // Analytics category was just disabled
            }

            if(changedServices['analytics'].includes('Google Analytics')){
                if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
                    // Google Analytics was just enabled
                }else{
                    // Google Analytics was just disabled
                }
            }
        }
    }
});



// /**
//  * All config. options available here:
//  * https://cookieconsent.orestbida.com/reference/configuration-reference.html
//  */
// CookieConsent.run({

//     categories: {
//         necessary: {
//             enabled: true,  // this category is enabled by default
//             readOnly: true  // this category cannot be disabled
//         },
//         analytics: {}
//     },

//     language: {
//         default: 'en',
//         translations: {
//             en: {
//                 consentModal: {
//                     title: 'Als Entwickler:in kennst du das ja: Wir wollen deinen Kekse.  &#128521;',
//                     description: 'Aber ernsthaft: Wir würden gerne verstehen, wie unsere Seite genutzt wird. Indem du Cookies akzeptierst, hilfst du uns, sie noch besser für andere Entwickler:innen zu gestalten. Wir versprechen dir, nur unbedingt notwendige Daten zu erfassen und behutsam damit umzugehen. Mehr dazu findest du in unserer Datenschutzerklärung.',
//                     acceptAllBtn: 'Alle Akzeptieren',
//                     acceptNecessaryBtn: 'Alle Ablehnen',
//                     showPreferencesBtn: 'Einstellungen verwalten'
//                 },
//                 preferencesModal: {
//                     title: 'Cookie Einstellungen',
//                     acceptAllBtn: 'Alle Akzeptieren',
//                     acceptNecessaryBtn: 'Alle Ablehnen',
//                     savePreferencesBtn: 'Auswahl bestätigen',
//                     closeIconLabel: 'Einstellungen schließen',
//                     sections: [
//                         {
//                             title: '',
//                             description: 'Hier kannst du der Setzung einzelner Cookies, die auf dieser Domain und ihren Subdomains verwendet werden, zustimmen oder ablehnen. Du kannst deine Cookie-Einstellungen jederzeit ändern, nutze dazu bitte den Link „Cookie-Einstellungen“ im Footer der Webseite unter dem Link zur Datenschutzerklärung.'
//                         },
//                         {
//                             title: 'notwendige Cookies',
//                             description: 'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich und können nicht deaktiviert werden.',

//                             //this field will generate a toggle linked to the 'necessary' category
//                             linkedCategory: 'necessary'
//                         },
//                         {
//                             title: 'Performance und Analytics',
//                             description: 'Diese Cookies sammeln Informationen darüber, wie du unsere Website nutzt. Sämtliche Daten werden anonymisiert und lassen keinen Rückschluss auf deine Person zu.',
//                             linkedCategory: 'analytics'
//                         },
//                         {
//                             title: 'Mehr Informationen',
//                             description: 'Bei Fragen zu den Cookie Richtlinien und deinen Auswahlmöglichkeiten lies bitte unsere <a href="/dsgvo.html">Datenschutzerklärung</a>.'
//                         }
//                     ]
//                 }
//             }
//         }
//     },

//     // Set status of the services provided the user has not set the status yet
//     onConsent: function(){
//         if(CookieConsent.acceptedCategory('analytics')){
//             // Analytics category enabled
//         }

//         if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
//             // Google Analytics enabled
//         }
//     },

//     // Change the status of the services provided the user has already set the status once
//     onChange: function({changedCategories, changedServices}){
//         if(changedCategories.includes('analytics')){

//             if(CookieConsent.acceptedCategory('analytics')){
//                 // Analytics category was just enabled
//             }else{
//                 // Analytics category was just disabled
//             }

//             if(changedServices['analytics'].includes('Google Analytics')){
//                 if(CookieConsent.acceptedService('Google Analytics', 'analytics')){
//                     // Google Analytics was just enabled
//                 }else{
//                     // Google Analytics was just disabled
//                 }
//             }
//         }
//     }
// });
