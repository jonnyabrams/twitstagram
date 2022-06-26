import * as uploadApi from '../api/uploadRequest'

export const uploadImage = (data) => async (dispatch) => {
  try {
    await uploadApi.uploadImage(data)
  } catch (error) {
    console.log(error)
  }
}