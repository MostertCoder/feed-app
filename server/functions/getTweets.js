const path = require('path');

const parseTweetLines = require('./parseTweetLines');
const getFileLines = require('./getFileLines');

const getTweets = async () => {
    try {
        const tweetLines = await getFileLines(path.join(__dirname, '..', 'data-files', process.env.TWEETS_FILE_NAME));
        return parseTweetLines(tweetLines);
    } catch (error) {
        console.log(error);
    }
}

module.exports = getTweets;