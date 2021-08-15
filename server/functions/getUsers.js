const path = require('path');

const sortUsers = require('./sortUsers');
const parseUserLines = require('./parseUserLines');
const getFileLines = require('./getFileLines');

const getUsers = async () => {
    try {
        const userLines = await getFileLines(path.join(__dirname, '..', 'data-files', process.env.USERS_FILE_NAME));
        return sortUsers(parseUserLines(userLines));
    } catch (error) {
        console.log(error);
    }
}

module.exports = getUsers;