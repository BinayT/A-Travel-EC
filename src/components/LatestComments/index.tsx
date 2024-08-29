import React from 'react';
import './styles.css';

type comments = {
  name: string,
  image: string,
  comment: string,
  timestamp: string,
}
interface LatestCommentsProps {
  comments: comments[];
}

const LatestComments: React.FC<LatestCommentsProps> = ({ comments }) => {
    
  return (
    <div className='latestComments d-flex-fdc'>
        <h2 className='latestComments_title'>Latest Comments</h2>
        <h3>Total Comments: {comments.length}</h3>
        {comments.map(el=>(
            <div className='latestComments__item' key={el.image}>
              <img src={el.image} className='latestComments__userImage' />
              <div className='latestComments__details'>
                <div className='latestComments__nameTimestamp'>
                    <span className='latestComments__name'>{el.name}</span>
                    <span> said on </span>
                    <i className='latestComments__timestamp'>{el.timestamp}</i>
                </div>
                <div className='latestComments__comment'>
                  <span>{el.comment}</span>
                </div>
              </div>
            </div>
        ))}
    </div>
  );
};

export default LatestComments;