/**
 * LSVb Bestuurswerving 2019
 */
;(function() {
    'use strict'

    /**
     * Add your Google Analytics API Key here.
     * @type {String}
     */
    const GOOGLE_ANALYTICS_KEY = 'UA-34936797-5'

    /**
     * Initialize Google Analytics.
     * @param  {string} key - Google Analytics API Key
     */
    const googleAnalytics = key => {
        window.ga = function() {
            ga.q.push(arguments)
        }
        ga.q = []
        ga.l = +new Date()
        ga('create', key, 'auto')
        ga('send', 'pageview')
    }

    /**
     * Everything inside this functions gets called after
     * window.onload is available
     */
    const init = () =>
        GOOGLE_ANALYTICS_KEY ? googleAnalytics(GOOGLE_ANALYTICS_KEY) : null

    /**
     * Attach the above 'init' function to the window.onload object.
     */
    window.onload = init
})()
