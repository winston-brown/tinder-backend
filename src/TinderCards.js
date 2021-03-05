import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([{
        name: 'Sandra Bullock',
        url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1UY1200_CR94,0,630,1200_AL_.jpg"
    }, {
        name: 'Jeff Bezos',
        url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg"
    }]);

const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    // setLastDirection(direction);
};

const outOfFrame = (name) => {
    console.log(name + "left the screen!");
}

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">      
            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onSwipe={(dir) => swiped(dir, person.name)} 
                    onCardLeftScreen={() => outOfFrame(person.name)}>                     
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
