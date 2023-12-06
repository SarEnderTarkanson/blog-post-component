import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './image/Profile_Picture.png';
import profile2 from './image/icon-design-21-opt.png';
import profile3 from './image/cat_profile.jpeg';
import SingleComment from './SingleComment';
import UserCard from './UserCard';


const App = () => {
	return (
		<div className='ui comments'>
			<UserCard>
				<div>
					Hello my name is Sarah, I live in Istanbul.
				</div>
			</UserCard>
			<UserCard>
				<SingleComment 
					name='Alpy'
					date='Today at 05:00pm'
					text='it is amazing'
					picture={profile1}
				/>
			</UserCard>
			<UserCard>
				<SingleComment 
					name='Endo'
					date='Today at 06:00pm'
					text='great job'
					picture={profile2}
				/>
			</UserCard>
			<UserCard>
				<SingleComment
					name='Beyza'
					date='Today at 07:00pm'
					text='Thanks...'
					picture={profile3}
				/>
			</UserCard>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)
