import {useLocation} from 'react-router-dom';

const useCurrentLocation = () => {
    const location = useLocation();

    return { pathname: location.pathname };
};

export default useCurrentLocation;