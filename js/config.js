var config = {
    lang: 'EN',
    time: {
        timeFormat: 12
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Kent,Us',
            units: 'imperial',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'EN',
            APPID: '1f285bb3f05e2b9ec58c48f341850be5'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot RJ!',
            'Nice Choice!',
            'Go to bed!'
        ]
    },
    calendar: {
        maximumEntries: 10
    },
    news: {
        feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }
}
