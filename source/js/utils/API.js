import { data } from 'autoprefixer'

/**
 * For calling Get API
 */
const callAPI = async (url = '', method = 'GET') => {
  try {
    const response = await fetch(url, {
      method: method,
    })

    return response.json()
  } catch (error) {
    console.warn(error)
    return error
  }
}

/**
 * For calling Post API
 */

// const postAPI = async (url = '', data = {}, method = 'POST') => {
//   try {
//     const response = await fetch(url, {
//       method: method,
//       body: JSON.stringify(data),
//     })

//     return response.json()
//   } catch (error) {
//     console.warn(error)
//     return error
//   }
// }

export { callAPI }
