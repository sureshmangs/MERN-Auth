const dotenv = require('dotenv').config();

module.exports = {
    sendEmail: (message, user) => {
        const mailjet = require('node-mailjet')
            .connect(process.env.MAILJET_PUBLIC_KEY, process.env.MAILJET_SECRET_KEY)
        const request = mailjet
            .post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "sureshmangs3@gmail.com",
                            "Name": "MERN-Auth-Team"
                        },
                        "To": [
                            {
                                "Email": user.email,
                                "Name": user.name
                            }
                        ],
                        "Subject": message.subject,
                        "TextPart": "Email from MERN-Auth-Team",
                        "HTMLPart": message.body,
                        "CustomID": "AppGettingStartedTest"
                    }
                ]
            })
        request
            .then((result) => {
                console.log('Verification email sent successfully')
            })
            .catch((err) => {
                console.log('Error occured while sending verifcation email', err.statusCode)
            })
    }
}