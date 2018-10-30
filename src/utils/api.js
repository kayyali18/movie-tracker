export const loginUser = async (email, password) => {
  const url = `http://localhost:3000/api/users`
  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
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
  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: username,
      email,
      password,
    }),
    headers: {
      'content-type': 'application/json',
    },
  })
  return req
}

export const setFavs = favs => {
  localStorage.setItem('favs', JSON.stringify(favs))
}

export const addFav2DB = async (movie, id) => {
  const url = `http://localhost:3000/api/users/favorites/new`
  const req = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      movie_id: movie.movie_id,
      user_id: id,
      title: movie.title,
      poster_path: movie.poster,
      release_date: movie.releaseDate,
      vote_average: movie.rating,
      overview: movie.overview,
    }),
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
  })
}

export const postFav = async (movie, id) => {
  const url = `http://localhost:3000/api/users/favorites/new`
  const data = {
    movie_id: movie.id,
    user_id: id,
    title: movie.title,
    poster_path: movie.poster,
    release_date: movie.releaseDate,
    vote_average: movie.rating,
    overview: movie.overview,
  }
  console.log (data)

  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  return await response.json()
}
