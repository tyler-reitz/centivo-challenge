const User = require('../models/User')

const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id, age: { $gte: 21}})
    if (!user) return res.status(404).json({ message: 'User not found' })

    res.json(user)
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID format' })
  }
}

module.exports = { getUserById }

