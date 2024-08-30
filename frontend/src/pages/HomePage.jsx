import React from 'react';
import '../styles/page-styles/homepage.css';


const HomePage = () => {

    return (
        <div className='container homepage'>
            <div className="">
                <div className='text-center ourstory'><h1>Our Story</h1></div>
                <div className="text-center">
                    <p className='mycustompara'>
                        We believe in good. We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Pizzeria's vouchers. Their enthusiastic response proved that Pizzeria's Fresh Pan Pizza is the Tastiest Pan Pizza. Ever!<br/><br/>
                        Ever since we launched the Tastiest Pan Pizza, ever, people have not been able to resist the softest, cheesiest, crunchiest, butteriest Domino's Fresh Pan Pizza. They have been leaving the stage in the middle of a performance and even finding excuses to be disqualified in a football match.<br/><br/>
                        We launched Fresh Pan Pizza Best Excuse Awards on our Facebook fan page. Fans were given situations where they had to come up with wacky and fun excuses. The person with the best excuse won the Best Excuse Badge and won Domino's vouchers. Their enthusiastic response proved that Pizzeria's Fresh
                        an izza is the Tastest Pan Pezze Eve
                    </p>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <img className='homeimg' src='ingredients.jpeg' alt='ing'></img>
                    </div>
                    <div className="col mt-5">
                        <h4>Ingredients</h4> <br/>
                        <p className='mycustompara'>
                            We're ruthless about goodness. We have no qualms about tearing up a day-old lettuce leaf (straight from the farm), or steaming a baby (carrot). Cut. Cut. Chop.
                            Chop. Steam. Steam. Stir Stir. While they're still young and fresh - that's our motto. It makes the kitchen a better place.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col mt-5">
                        <h4>Our Chefs</h4> <br/>
                        <p className='mycustompara'>
                            They make sauces sing and salads dance. They create magic with skill, knowledge, passion, and stirring spoons (among other things). They make goodness so good, it doesn't know what to do with itself. We do though. We send it to you.
                        </p>
                    </div>
                    <div className="col">
                        <img className='homeimg' src='chef.jpeg' alt='chef'></img>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                    <img className='homeimg' src='timer.jpeg' alt='timer'></img>
                    </div>
                    <div className="col d-flex align-items-center">
                        <h4>45 min Delivery</h4><br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage