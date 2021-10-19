
import FriendSearchForm from "../../components/FriendSearch/FriendSearch"

function AddFriend ({
  friends,
  friendRequestState,
  setFriendRequestState,
  sendFriendRequest
}) {
  return (
    <div id={'addfriend'} style={{ backgroundColor: 'red', height: '100vh', width: '91vw', position: 'relative', float: 'right' }}>
     <FriendSearchForm
     friends={friends}
     friendRequestState={friendRequestState}
     setFriendRequestState={setFriendRequestState}
     sendFriendRequest={sendFriendRequest}
     />
    </div>
  )
}

export default AddFriend