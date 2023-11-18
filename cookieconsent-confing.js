import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v3.0.0-rc.17/dist/cookieconsent.umd.js';

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },

    language: {
        default: 'en',
        translations: {
            en: {
                consentModal: {
                    title: 'Als Entwickler:in kennst du das ja: Wir wollen deinen Kekse.  &#128521;',
                    description: 'Aber ernsthaft: Wir würden gerne verstehen, wie unsere Seite genutzt wird. Indem du Cookies akzeptierst, hilfst du uns, sie noch besser für andere Entwickler:innen zu gestalten. Wir versprechen dir, nur unbedingt notwendige Daten zu erfassen und behutsam damit umzugehen. Mehr dazu findest du in unserer Datenschutzerklärung.',
                    acceptAllBtn: 'Alle Akzeptieren',
                    acceptNecessaryBtn: 'Alle Ablehnen',
                    showPreferencesBtn: 'Einstellungen verwalten'
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
                            linkedCategory: 'analytics'
                        },
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
