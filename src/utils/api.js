
export const loginUser = async (email, password) => {
  const url = `http://localhost:3000/api/users`
  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'content-type': 'application/json',
    },
  })


  if (req.ok) return req
  else return false
}

export const createUser = async (username, email, password) => {
  const url = `http://localhost:3000/api/users/new`
  const req = await fetch (url, {
    method: 'POST',
    body: JSON.stringify({
      name: username,
      email,
      password
    }),
    headers: {
      'content-type': 'application/json',
    }
  })
  return req

}

export const setFavs = (favs) => {
  localStorage.setItem('favs', JSON.stringify(favs))
}