import React from 'react';
import classes from './ProductReview.module.css';
import star from '../../../assets/images/icons/star.svg';

const ProductReview = props => {
    const rate = props.review.rate;
    const votes = props.review.votes;

    const drawStarts = () => {
        const count = Math.ceil(rate);
        const stars = []
        for(let i = 0; i < count; i++){
          stars.push(<img alt="star" src={star} key={i}/>)
        }
        return stars;
    }

  return (
        <div className={classes.review}>
            <div className={classes.stars}>
                {drawStarts()}
            </div>
            <div>
                <span> {rate}</span>
                <span className={classes.votes}> ({votes})</span>
            </div>
            
        </div>
  );
};

export default ProductReview;
