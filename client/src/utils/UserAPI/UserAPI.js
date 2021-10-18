import axios from 'axios'

const UserAPI = {
 getUser: () => axios.get('/api/user', {
  headers: {
   Authorization: `Bearer ${localStorage.getItem('token')}`
  }
 }),
 register: user => axios.post('/api/users/register', user),
 login: user => axios.post('/api/users/login', user),

  addFriend: (user_id, user) => axios.post(`/api/users/addFriend/${user_id} `, {
    headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}),
  searchFriend: (query) => axios.post('/api/users/search', query)
}

export default UserAPI