const apiKey = import.meta.env.VITE_API_KEY;
const baseURL = "https://api.themoviedb.org/3/trending/movie/week"
const searchURL = "https://api.themoviedb.org/3/search/movie"
export async function getPopMovie() {
    const response = await fetch(`${baseURL}?api_key=${apiKey}`)
    const data = await response.json()
    return data.results
}

export async function searchPopMovie(query) {
    const response = await fetch(`${searchURL}?api_key=${apiKey}&query=${encodeURIComponent(query)}`)
    const data = await response.json()
    const fd = data.results.filter((movie) => {
        if (movie.poster_path != null && movie.overview != "") {
            return movie
        }
    })
    return fd
}

const removeDuplicates = (array, key) => {
  return array.filter((item, index, self) => {
    const firstIndex = self.findIndex(obj => obj[key] === item[key])
    return index === firstIndex
  })
}

export function loadFav() {
    let items = []
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        items.push(JSON.parse(localStorage.getItem(key)).movie)
    }
    const uitems=removeDuplicates(items,'id')
    return uitems
}
