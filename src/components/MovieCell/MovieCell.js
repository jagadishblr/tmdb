import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getPosterEndpoint } from '../../api';
import { Movie } from '../../models';
import Tag from '../Tag';
import './MovieCell.css';

class MovieCell extends Component {

  static propTypes = {
    movie: PropTypes.instanceOf(Movie).isRequired,

    genres: PropTypes.object.isRequired,
  }

  render() {
    const { genres, movie } = this.props;

    return (
      <div className="movie-cell">
        <img alt="poster" className="poster" src={getPosterEndpoint(movie.posterPath)} />

        <h2 className="title">{movie.title}</h2>
        <h3 className="rating"><b>Rating: </b>{movie.voteAverage}</h3>

        {(movie.genreIds || []).map(id => (
          <Tag key={id} text={genres[id].name} />
        ))}
      </div>
    )
  }
}

export default MovieCell;
