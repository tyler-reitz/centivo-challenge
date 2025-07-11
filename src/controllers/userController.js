const User = require('../models/User')

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' })

    res.json(user)
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID format' })
  }
}

module.exports = { getUserById }

