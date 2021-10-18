import axios from 'axios'

const UserAPI = {
 getUser: _ => axios.get('/api/user', {
  headers: {
   Authorization: `Bearer ${localStorage.getItem('token')}`
  }
 }),
 register: user => axios.post('/api/users/register', user),
 login: user => axios.post('/api/users/login', user),
 addFriend: (user_id, user) => axios.post(`/users/addFriend/${user_id}`, {
  headers: {
   Authorization: `Bearer ${localStorage.getItem('token')}` }}, user),
 searchFriend: query => axios.post('/api/users/search', query)
}

export default UserAPI