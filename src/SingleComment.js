import React from 'react';
/*import profile1 from './image/Profile_Picture.png';
import profile2 from './image/icon-design-21-opt.png';
import profile3 from './image/cat_profile.jpeg';*/

const SingleComment = (props) => {
	return (
		<div className='comment'>
			<a href="/" className='avatar'>
				<img src={props.picture} alt="profile picture"/>
			</a>
			<div className='content'>
				<a href="/" className='author'>
					{props.name}
				</a>
				<div className='metadata'>
					<span className='date'>
						{props.date}
					</span>
				</div>
				<div className='text'>
					{props.text}					
				</div>
			</div>
		</div>
	)
}

export default SingleComment;
