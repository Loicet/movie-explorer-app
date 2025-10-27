export async function getAllMovies() {
  const res = await fetch(`https://api.tvmaze.com/shows`);
  return await res.json();
}

export async function getMovieById(id) {
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  return await res.json();
}
