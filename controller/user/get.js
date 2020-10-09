const { User } = require('../../models/user')

module.exports = {
    get: async (req, res) => {
        let data = await User.find({});
        res.status(200).json(data)
    }
}