import { ncOpts } from '../../backendLibs/nc';
import nc from 'next-connect';


const handler = nc(ncOpts);

handler.post(async (req, res) => {


    let query = req.body.query
   
    let movieObject;

    try{
        const moviesResponse = await fetch(`https://api.themoviedb.org/4/search/movie?query=${query}&page=1&api_key=${process.env.MOVIEDB_APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
        movieObject = await moviesResponse.json()
    }
    catch(err){
        console.log(err)
        res.json({ movies:null });
    }
  
    res.json({ movies:movieObject.results });

});

export default handler;

