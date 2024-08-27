import React from 'react';
import './styles.css';

interface LatestCommentsProps {
  comments: string[];
}

const LatestComments: React.FC<LatestCommentsProps> = ({ comments }) => {
    
  return (
    <div className='latestComments'>
        {comments.map(el=>(
            <span className='latestComments__item'>{el}</span>
        ))}
    </div>
  );
};

export default LatestComments;