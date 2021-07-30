import React from 'react'
import Codepen from 'codepen-react'

const UnderDev = () => {
	return (
		<div className="underDev-container">
			<div className="underDev">
				<h1>My portfolio site is currently going through some much needed updates</h1>
				<h2>I hope to have all this complete by</h2>
				<div className="timed"><p>August 2021</p></div>
				<h3>In the meantime, here is a cool game which I made for you to play in the meantime</h3>
				<p>Click on the board to start. Then use your keyboard arrow keys to control the snake towards each highlighted food square without biting your own tail. Good Luck!</p>
				<div className="game"><Codepen user="AnnupKapur" hash="YzVVGvv" /></div>
				<div className="bye-container">
					<div className="bye">See you soon</div>
					<div className="my-details">
						<p>- Annup Raj Kapur</p>
						<p><a href="tel:+447540195785">t: 07540195785</a></p>
						<p><a href="mailto:AnnupKapur@gmail.com">e: AnnupKapur@gmail.com</a></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UnderDev
