import styled from 'styled-components'

const ProgressBar = ({ percent = 20 }) => {
	percent =percent>100?100:percent;
	let obj = {
		width:percent+"%",
		height:"100%",
		borderRadius:"5px",
		backgroundColor:"green"
	}
	let obj1 = {
		width:"100%",
		height:"20px",
		backgroundColor:"lightgrey",
		borderRadius:"5px"
	}
	return (
		<div data-testid="wrapper" style={obj1}>
			<div data-testid="progress" style={obj}/>
		</div>
	)
}

export default ProgressBar

