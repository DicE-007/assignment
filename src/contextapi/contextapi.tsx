import  { createContext, useState, useEffect, ReactNode } from 'react';
import { Person, myContextType } from '../interface/interface';

const markOrUnmarkFav = (item: Person, itemList: Person[]): Person[] => {
    const isExistIndex = itemList.findIndex((i) => item.name === i.name);
    if (isExistIndex !== -1) {
        return itemList.filter((_, index) => index !== isExistIndex);
    } else {
        return [...itemList, item];
    }
};



export const MyContext = createContext<myContextType>({
    favCount: 0,
    favUsers: [],
    selectFav: () => {},
    isExist: () => {return false}
});

type FavUserProviderProps = {
    children: ReactNode;
};

export const FavUserProvider = ({ children }: FavUserProviderProps) => {
    const [favUserList, setFavUserList] = useState<Person[]>([]);
    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        setCount(favUserList.length);
    }, [favUserList]);

    const selectFav = (item: Person) => {
        setFavUserList((prevList) => markOrUnmarkFav(item, prevList));
    };

    const isExist = (item:Person)=>{
        return favUserList.findIndex((i) => item.name === i.name)!==-1;
    }

    const value: myContextType = {
        favCount: count,
        favUsers: favUserList,
        selectFav,
        isExist:isExist
    };

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
