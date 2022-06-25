import UserModel from '../models/userModel.js'
import bcrypt from 'bcrypt'

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
  req.body.password = hashedPassword
  const newUser = new UserModel(req.body)

  try {
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await UserModel.findOne({ email: email })

    if (user) {
      const valid = await bcrypt.compare(password, user.password)

      valid ? res.status(200).json(user) : res.status(400).json("Wrong password")
    } else {
      res.status(404).json("User does not exist")
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }

}