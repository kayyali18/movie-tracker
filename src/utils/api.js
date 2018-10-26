
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

  if (req.ok) return true
  else return false
}