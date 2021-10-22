
import FriendSearchForm from "../../components/FriendSearch/FriendSearch"
import './AddFriend.css'

function AddFriend ({
  friends,
  friendRequestState,
  setFriendRequestState,
  sendFriendRequest,
  friendRequestSent,
  setFriendRequestSent,
  openFriendRequestSent,
  closeFriendRequestSent
}) {
  return (
    <div id={'addfriend'} style={{ height: '100vh', width: '91vw', position: 'relative', float: 'right' }}>
      <div style={{ position: 'relative', zIndex: 2 }}>
     <FriendSearchForm
     friends={friends}
     friendRequestState={friendRequestState}
     setFriendRequestState={setFriendRequestState}
     sendFriendRequest={sendFriendRequest}
      friendRequestSent={friendRequestSent}
      setFriendRequestSent={setFriendRequestSent}
      openFriendRequestSent={openFriendRequestSent}
       closeFriendRequestSent={closeFriendRequestSent}
     />
    </div>
    </div>
  )
}

export default AddFriend