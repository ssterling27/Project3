import axios from 'axios'

const EventAPI = {
  getEvents: (user_id, date) => axios.get(`/api/events/${user_id}/${date}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  create: event => axios.post('/api/events', event, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  update: (id, updates) => axios.put(`/api/events/${id}`, updates, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  delete: id => axios.delete(`/api/events/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default EventAPI