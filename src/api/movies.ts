const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_ACCESS_TOKEN}`
  }
}

export async function getData(endpoint: string) {
  const response = await fetch(endpoint, options);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return await response.json();
}

export async function getUpcomingMovies() {
  return await getData(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`);
}

export async function getMovie(id: string | undefined) {
  return await getData(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
}
