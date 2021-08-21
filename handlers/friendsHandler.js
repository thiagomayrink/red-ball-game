function summonFriend() {
  let index = 0;
  if (friends.length > 0) index = friends.length - 1;

  friends.push(new Friend(1, 1, index));
}

function moveFriends() {
  friends.forEach((friend) => friend.move());
}

function handleFriendsBounce() {
  friends.forEach((friend) => friend.removeOnEdge());
}

function increaseFriendsSpeed() {
  friends.forEach((friend) => friend.increaseSpeed());
}

function drawFriends() {
  friends.forEach((friend) => friend.draw());
}
