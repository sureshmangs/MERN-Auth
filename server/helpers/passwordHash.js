const bcrypt = require('bcrypt');

module.exports = {
    getHash: (token) => {
        return new Promise(async (resolve, reject) => {
            // generate a salt
            const salt = await bcrypt.genSalt(10);
            // generate the hashed token (ie; salt + password)
            const passwordHash = await bcrypt.hash(token, salt);
            resolve(passwordHash);
        })
    }
}