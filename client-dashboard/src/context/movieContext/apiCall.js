import {
    createMovieFailure,
    createMovieStart,
    createMovieSuccess,
    updateMovieStart,
    updateMovieSuccess,
    updateMovieFailure,
    deleteMovieFailure,
    deleteMovieStart,
    deleteMovieSuccess,
    getMoviesFailure,
    getMoviesStart,
    getMoviesSuccess,
} from "./MovieAction";
import { fetchMovies, createNewMovie, upgradeMovie, removeMovie } from '../../actions/index'

//get all movies
export const getMovies = async(dispatch) => {
    dispatch(getMoviesStart());
    try {
        fetchMovies().then((res) => {
            dispatch(getMoviesSuccess(res.data));
        })
    } catch (err) {
        dispatch(getMoviesFailure());
    }
};

//create movie
export const createMovie = async(movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        createNewMovie(movie).then((res) => {
            dispatch(createMovieSuccess(res.data))
        })
    } catch (err) {
        dispatch(createMovieFailure());
    }
};

//update movie
export const updateMovie = async(id, movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        upgradeMovie(id, movie).then((res) => {
            dispatch(updateMovieSuccess(res.data))
        })
    } catch (err) {
        dispatch(updateMovieFailure());
    }
};

//delete movie
export const deleteMovie = async(id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await removeMovie(id);
        dispatch(deleteMovieSuccess(id));
    } catch (err) {
        dispatch(deleteMovieFailure());
    }
};