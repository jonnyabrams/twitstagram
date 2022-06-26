import UserModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' // BEWARE: no red line/error if you miss importing this!

// get user
export const getUser = async(req, res) => {
  const id = req.params.id
  
  try {
    const user = await UserModel.findById(id)
    if (user) {
      // remove password from returned user data
      const { password, ...otherDetails } = user._doc
      res.status(200).json(otherDetails)
    } else {
      res.status(404).json("No such user exists")
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

// update user
export const updateUser = async (req, res) => {
  const id = req.params.id
  const { _id, currentUserAdminStatus, password } = req.body

  if (id === _id) {
    try {
      // in case user wants to update password
      if(password) {
        const salt = await bcrypt.genSalt(10)
        req.body.password = await bcrypt.hash(password, salt)
      }

      const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true })
      const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_KEY, { expiresIn: "1hr" })
      res.status(200).json({ user, token })
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You can only update your own profile")
  }
}

// delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id

  const { currentUserId, currentUserAdminStatus } = req.body

  if (currentUserId === id || currentUserAdminStatus ) {
    try {
      await UserModel.findByIdAndDelete(id)
      res.status(200).json("User deleted successfully")
    } catch (error) {
      res.status(500).json(error)
    }
  } else {
    res.status(403).json("You can only delete your own profile")
  }
}

// follow user
export const followUser = async (req, res) => {
  const id = req.params.id
  const { currentUserId } = req.body

  if (currentUserId === id) {
    res.status(403).json("You can't follow yourself")
  } else {
    try {
      const followedUser = await UserModel.findById(id)
      const followingUser = await UserModel.findById(currentUserId)

      if (!followedUser.followers.includes(currentUserId)) {
        await followedUser.updateOne({ $push: { followers: currentUserId } })
        await followingUser.updateOne({ $push: { following: id } })
        res.status(200).json("User followed!")
      } else {
        res.status(403).json("You already follow this user")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

// unfollow user
export const unfollowUser = async (req, res) => {
  const id = req.params.id
  const { currentUserId } = req.body

  if (currentUserId === id) {
    res.status(403).json("You can't follow yourself")
  } else {
    try {
      const followedUser = await UserModel.findById(id)
      const followingUser = await UserModel.findById(currentUserId)

      if (followedUser.followers.includes(currentUserId)) {
        await followedUser.updateOne({ $pull: { followers: currentUserId } })
        await followingUser.updateOne({ $pull: { following: id } })
        res.status(200).json("User unfollowed")
      } else {
        res.status(403).json("You don't follow this user")
      }
    } catch (error) {
      res.status(500).json(error)
    }
  }
}