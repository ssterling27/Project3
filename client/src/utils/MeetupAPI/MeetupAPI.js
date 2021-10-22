import axios from 'axios'

const MeetupAPI = {
  sendMeetupRequest: (meetup, user_id) => axios.post(`/api/sendMeetupRequest/${user_id}`, meetup, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
  }
}),
  acceptMeetupRequest: (user_id, meetup_id, event) => axios.post(`/api/acceptMeetupRequest/${user_id}/${meetup_id}`, event, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  denyMeetupRequest: (meetup_id) => axios.delete(`/api/denyMeetupRequest/${meetup_id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
}

export default MeetupAPI