
import FriendSearchForm from "../../components/FriendSearch/FriendSearch"

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
    <div id={'addfriend'} style={{ backgroundColor: 'red', height: '100vh', width: '91vw', position: 'relative', float: 'right' }}>
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
  )
}

export default AddFriend