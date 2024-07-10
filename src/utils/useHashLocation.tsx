import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface params{
    setIsActive: (num: number) => void;
}

const useHashLocation = ({setIsActive}: params) => {
    const location = useLocation();
    useEffect(() => {
        switch (location.hash){
            case '#intro-section':
                setIsActive(0);
                break;
            case '#about-section':
                setIsActive(1);
                break;
            case '#showcase-section':
                setIsActive(2);
                break;
            case '#footer':
                setIsActive(3);
                break;
            default:
                break;
        }
    }, [location, setIsActive]);
}

export default useHashLocation;