import { Modal, useMantineTheme } from '@mantine/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { uploadImage } from "../../redux/actions/uploadAction"
import { updateUser } from '../../redux/actions/userAction'

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
  const theme = useMantineTheme()
  const { password, ...otherData} = data
  const [formData, setFormData] = useState(otherData)
  const [profileImage, setProfileImage] = useState(null)
  const [coverImage, setCoverImage] = useState(null)
  const dispatch = useDispatch()
  const params = useParams()
  const { user } = useSelector((state) => state.authReducer.authData)
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      e.target.name === "profilePic" ? setProfileImage(img) : setCoverImage(img)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let userData = formData
    if (profileImage) {
      const data = new FormData()
      const fileName = Date.now() + profileImage.name
      data.append("name", fileName)
      data.append("file", profileImage)
      userData.profilePic = fileName

      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    if (coverImage) {
      const data = new FormData()
      const fileName = Date.now() + coverImage.name
      data.append("name", fileName)
      data.append("file", coverImage)
      userData.coverPic = fileName

      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
    dispatch(updateUser(params.id, userData))
    setModalOpened(false)
  }

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className='info_form'>
        <h3>Your info</h3>

        <div>
          <input type="text" className="info_input" name="firstname" placeholder="First name" onChange={handleChange} value={formData.firstname} />
          <input type="text" className="info_input" name="lastname" placeholder="Last name" onChange={handleChange} value={formData.lastname} />
        </div>

        <div>
          <input type="text" className="info_input" name="username" placeholder="Username" onChange={handleChange} value={formData.username} />
        </div>

        <div>
          <input type="text" className="info_input" name="livesIn" placeholder="Lives in" onChange={handleChange} value={formData.livesIn} />
          <input type="text" className="info_input" name="worksAt" placeholder="Works at" onChange={handleChange} value={formData.worksAt} />
        </div>

        <div>
          <input type="text" className="info_input" name="relationship" placeholder="Relationship status" onChange={handleChange} value={formData.relationship} />
        </div>

        <div>
          Profile image
          <input type="file" name="profilePic" onChange={onImageChange} />
          Cover image
          <input type="file" name="coverPic" onChange={onImageChange} />
        </div>

        <button className="button info_button" onClick={handleSubmit}>Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal
