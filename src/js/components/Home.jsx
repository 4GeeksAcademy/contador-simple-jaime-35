import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Digit } from "./Digit.jsx";

//create your first component

const Home = () => {
	const [timer, settimer] = useState(0)
	const [active, setActive] = useState(false)

	useEffect(()=>{
		if (active){
		setTimeout(()=>{
			settimer(value=> value+1)
		},1000)
	}
	},[timer, active])

	const starTStop =()=>{
		setActive(value =>!value)
	}
    
	const resetTimer = () => settimer(value=>value=0)

	return (
		<main className="text-center">
			<section className="counter-holder"> 

			<Digit number={<span className="fa fa-clock"></span>}/>
			<Digit number={Math.floor(timer/100000)%10}/>
			<Digit number={Math.floor(timer/10000)%10}/>
			<Digit number={Math.floor(timer/1000)%10}/>
			<Digit number={Math.floor(timer/100)%10}/>
			<Digit number={Math.floor(timer/10)%10}/>
			<Digit number={Math.floor(timer%10)}/>
            </section>

			<section className="container text-center my-5">
			<h2 style={{ color: "white" }}>PULSAR</h2>
				<div>
					<button disabled={active} onClick={starTStop} className="mx-3 btn btn-success my-4">Start</button>
					<button disabled={!active} onClick={starTStop} className="mx-3 btn btn-secondary">stop</button>
					<button onClick={resetTimer} className="mx-3 btn btn-danger">reset</button>


				</div>



			</section>
			
		</main>
	);
};

export default Home;