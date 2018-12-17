/**
 * LSVb Bestuurswerving 2019
 */
const body = document.body
const GOOGLE_ANALYTICS_KEY = 'UA-34936797-5'

const scriptURLs = [
    'https://code.jquery.com/jquery-3.2.1.slim.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js',
    'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js',
    'https://use.fontawesome.com/releases/v5.5.0/js/all.js',
    '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js',
    'https://www.google-analytics.com/analytics.js'
]

const gaScriptURL = 'https://www.google-analytics.com/analytics.js'

const appendScript = (url, callback) => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = url
    script.onreadystatechange = callback;
    script.onload = callback;
    body.appendChild(script)
}

const initGa = key => {
    window.ga = function() {
        ga.q.push(arguments)
    }
    ga.q = []
    ga.l = +new Date()
    ga('create', key, 'auto')
    ga('send', 'pageview')
}

const cookiesAccepted = state => state ? appendScript('gaScriptURL', initGa(GOOGLE_ANALYTICS_KEY)) : void 0
const cookiesAccepted = (e, state) => state ? console.log('joeeee') : false

const cookieAccept = document.getElementById('cookieAccept')

cookieAccept.addEventListener('click', cookiesAccepted(true))

// ;(function() {
//     'use strict'

    /**
     * Add your Google Analytics API Key here.
     * @type {String}
     */


    /**
     * Initialize Google Analytics.
     * @param  {string} key - Google Analytics API Key
     */
    // const googleAnalytics = key => {
    //     window.ga = function() {
    //         ga.q.push(arguments)
    //     }
    //     ga.q = []
    //     ga.l = +new Date()
    //     ga('create', key, 'auto')
    //     ga('send', 'pageview')
    // }

    /**
     * Everything inside this functions gets called after
     * window.onload is available
     */
    // const init = () =>
    //     GOOGLE_ANALYTICS_KEY ? window.onload = googleAnalytics(GOOGLE_ANALYTICS_KEY) : ''

    /**
     * Attach the above 'init' function to the window.onload object.
     */
    // init()
// })()
