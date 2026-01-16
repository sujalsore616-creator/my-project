import {useContext} from 'react';
import UserContext from '../Context/userContext';

function Home() {
    const user = useContext(UserContext); //Consuming the context value using useContext hook

    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h3>Role: {user.role}</h3>
        </div>
    );
}

export default Home;