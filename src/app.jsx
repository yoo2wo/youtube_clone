import { useState, useEffect } from 'react';
import './app.css';
import Video_list from './components/video_list/video_list';

function App() {
	const [videos, setVideos] = useState([]);
	useEffect(()=> {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow'
		  };

		  fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAwzQaf2NwozFM0iCjfL3THP_2TV5osHpA", requestOptions)
			.then(response => response.json())
			.then(result => setVideos(result.items))
			.catch(error => console.log('error', error));
	}, []);
	return (
		<Video_list videos={videos} />
	);
}

export default App;
