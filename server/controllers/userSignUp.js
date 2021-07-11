const User = require('../models/user');
const UnverifiedUser = require('../models/unverifiedUser');
const { getHash } = require('../helpers/passwordHash');
const { getToken } = require('../helpers/token');

module.exports = {
    signUp: async (req, res, next) => {

        // checking if user aleady exists
        await User.findOne({ "email": req.body.email })
            .then(async (user) => {
                // user already exists in the user DB
                if (user) {
                    res.status(200).json({ "message": "User with this e-mail already exists" })
                } else {
                    // user doesn't exists in user DB

                    // user may exists in the unverifiedUser DB
                    // ie: user didn't verified when he tried to signup for the first time
                    // ie: user is signing up multiple times but has yet not verified his account
                    // so we have to either update his details or delete his previously stored details
                    // here we will delete it's previous details and store the new details 

                    await UnverifiedUser.findOne({ "email": req.body.email })
                        .then(async (user) => {
                            // user already exists in the unverifiedUser DB
                            if (user) {
                                // deleting previous entry of the user
                                await UnverifiedUser.deleteOne({ "email": req.body.email })
                                    .then(result => console.log('user successfully deleted'))
                                    .catch(err => {
                                        console.log('Error occured ', err);;
                                        res.status(500).json({ "message": "Internal Server Error" });
                                    })
                            }

                            // creating a new user and save it to the unverifiedUser DB

                            const newUser = new UnverifiedUser({
                                "name": req.body.name,
                                "email": req.body.email,
                                "password": await getHash(req.body.password),
                                "token": await getToken()
                            });

                            // storing user in the unverifiedUser DB

                            newUser.save()
                                .then(result => console.log('user successfully saved in unverifiedUser db'))
                                .catch(err => {
                                    console.log('Error occured ', err);;
                                    res.status(500).json({ "message": "Internal Server Error" });
                                })
                        })
                        .catch(err => {
                            console.log('Error occured ', err);;
                            res.status(500).json({ "message": "Internal Server Error" });
                        })

                    res.status(200).json({ "message": "Please verify your account" });
                }
            })
            .catch(err => {
                console.log('Error occured ', err);;
                res.status(500).json({ "message": "Internal Server Error" });
            });
    }
}