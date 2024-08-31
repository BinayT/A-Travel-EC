import React from 'react';
import './styles.css';

type comments = {
  name: string,
  image: string,
  comment: string,
  timestamp: string,
}
interface LatestCommentsProps {
  comments?: comments[];
}

const LatestComments: React.FC<LatestCommentsProps> = ({ comments = [] }) => {
  return (
    <div className='latestComments d-flex-fdc'>
        <h2 className='latestComments__title'>Latest Comments</h2>
        <h3>Total Comments: {comments?.length}</h3>
        {/* It might be a possibility that there are no comments or we do not recieve comment, thus a check. */}
        {!comments ||  comments.length === 0  ? <i>No comments available.</i> : 
        (comments.map(el=>(
            <div className='latestComments__item' key={el.image}>
              <img src={el.image} className='latestComments__userImage' />
              <div className='latestComments__details'>
                <div className='latestComments__nameTimestamp'>
                    <span className='latestComments__name'>{el.name}</span>
                    <span> said on </span>
                    <i className='latestComments__timestamp'>{el.timestamp}</i>
                </div>
                <div className='latestComments__comment'>
                  <i>{el.comment}</i>
                </div>
              </div>
            </div>
        )))}
    </div>
  );
};

export default LatestComments;