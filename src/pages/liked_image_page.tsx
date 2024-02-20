import { useContext } from 'react';
import { MyContext } from '../contextapi/contextapi';
import { Person, myContextType } from '../interface/interface';
import Card from '../components/card';
const LikedImagePage = () => {
    const { favUsers } = useContext<myContextType>(MyContext);
    return (
        <div>
            {favUsers.length !== 0 ? ((favUsers).map((person: Person, index: number) => (
                (<Card person={person} key={index} />)
            ))) : <p>NO data go back</p>}
        </div>
    )
}

export default LikedImagePage
