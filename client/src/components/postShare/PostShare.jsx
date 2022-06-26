import './postShare.css'
import { useState, useRef } from 'react'
import ProfileImage from '../../img/assets/profile1.jpeg'
import {UilScenery} from "@iconscout/react-unicons"
import {UilPlayCircle} from "@iconscout/react-unicons"
import {UilLocationPoint} from "@iconscout/react-unicons"
import {UilSchedule} from "@iconscout/react-unicons"
import {UilTimes} from "@iconscout/react-unicons"
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '../../redux/actions/uploadAction'

const PostShare = () => {
  const dispatch = useDispatch()
  const [image, setImage] = useState(null)
  const imageRef = useRef()
  const description = useRef()
  const { user } = useSelector((state) => state.authReducer.authData)

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0]
      setImage(img)
    }    
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      userId: user._id,
      description: description.current.value
    }

    if (image) {
      const data = new FormData()
      const fileName = Date.now() + image.name
      data.append("name", fileName)
      data.append("file", image)
      newPost.image = fileName
      console.log(newPost)

      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div className="post_share">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's on your mind?" ref={description} required />
        <div className="post_options">
          <div className="option" style={{color: "var(--photo)"}} onClick={ () => imageRef.current.click() }>
            <UilScenery />
            Photo
          </div>
          <div className="option" style={{color: "var(--video)"}}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{color: "var(--location)"}}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{color: "var(--schedule)"}}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button" onClick={handleSubmit}>
            Share
          </button>
          <div style={{display: "none"}}>
            <input type="file" name="myImage" ref={imageRef} onChange={onImageChange} />
          </div>
        </div>
      {image && (
        <div className="preview_image">
          <UilTimes onClick={ () => setImage(null) } />
          <img src={URL.createObjectURL(image)} alt="" />
        </div>
      )}

      </div>
    </div>
  )
}

export default PostShare
