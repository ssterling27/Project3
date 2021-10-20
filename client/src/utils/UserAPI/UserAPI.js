import axios from 'axios'

const UserAPI = {
  sendFriendRequest: (user_id) => axios.put(`/api/users/requestAddFriend/${user_id}`, {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .catch(err => console.log(err)),
  getUser: () => axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  register: user => axios.post('/api/users/register', user),
  login: user => axios.post('/api/users/login', user),

  addFriend: (user_id) => axios.post(`/api/users/addFriend/${user_id}`, {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  denyFriendRequest: (user_id) => axios.put(`/api/users/requestRemoveFriend/${user_id}`, {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  searchFriend: (query) => axios.post('/api/users/search', query),
  removeFriend: (user_id) => axios.post(`/api/users/removeFriend/${user_id}`, {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
}

export default UserAPI