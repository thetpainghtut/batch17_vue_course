import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://api.thetpainghtut.com/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json'
  }
})

export default{
  getPosts(){
    return apiClient.get('/posts')
  },
  getPost(id){
    return apiClient.get('/posts/'+id)
  },
  getTags(){
    return apiClient.get('/tags')
  }
}