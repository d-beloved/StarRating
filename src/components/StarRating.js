import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  };

  // Write a function that returns 5 Star components
  renderStarRating = () => {
    let stars = [];
    let maxStars = 5;

    for (let i = 0; i < maxStars; i++) {
      stars.push(
        <Star
          isSelected={this.state.rating > i}
          setRating = {() => this.handleSetRating(i + 1)}
          key= {i}
        />
      )
    }
    return stars;
  }

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  handleSetRating = (rating) => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 })
    } else {
      this.setState({ rating })
    }
  }

  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        { this.renderStarRating() }
      </ul>
    );
  }
}

export default StarRating;