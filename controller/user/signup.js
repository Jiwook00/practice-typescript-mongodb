const { User } = require('../../models/user')

module.exports = {
    post: async (req, res) => {
        const user = new User(req.body)

        let result = await user.save((err, data) => {
            if (err) return res.status(404).send(err);
            res.send(data.email)
            console.log(data)
        })
        console.log(`result ${result}`)
    }
}