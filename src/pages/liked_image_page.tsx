import { useContext } from 'react';
import { MyContext } from '../contextapi/contextapi';
import { Person, myContextType } from '../interface/interface';
import Card from '../components/card';
const LikedImagePage = () => {
    const { favUsers } = useContext<myContextType>(MyContext);
  return (
    <div>
      {(favUsers).map((person: Person, index: number) => (
          (<Card person={person} key={index} />)
        ))}
    </div>
  )
}

export default LikedImagePage
