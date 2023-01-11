function makeFriendsList(friends) {
  let ul = document.createElement("UL")
  

  for (let user of friends) {
      ul.insertAdjacentHTML("beforeEnd", `<li>${user.firstName} ${user.lastName}</li>`)
  }
  return ul

}
