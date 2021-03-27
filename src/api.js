const API_KEY = '7baad29758afcd2d641f47ecdb487b37';
const API_BASE = 'https://api.themoviedb.org/3';




const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json
}


const Api =  {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items:  await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items:  await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Açao',
                items:  await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'comédia',
                items:  await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'terror',
                items:  await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'romance',
                items:  await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'documentários',
                items:  await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            },

        ]
    },
    getMovieInfo: async (movieId, type) => {
        let info = {

        };

        if(movieId){
            switch (type) {
                case "movie":
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
                case "tv":
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
                    break;
            
                default:
                    break;
            }
        }

        return info
    }
}

export default Api