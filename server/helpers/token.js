const { v4: uuidv4 } = require('uuid');

module.exports = {
    getToken: () => {
        return new Promise(async (resolve, reject) => {
            const token = await uuidv4();
            resolve(token);
        })
    }
}