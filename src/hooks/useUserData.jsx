import { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure'; 

const useUserData = () => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true); 
    const axiosSecure = useAxiosSecure();
 
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const { data } = await axiosSecure.get('/users'); 
                setUserData(data);
                setLoading(false);
            } 
            catch (error) {
                console.error('Failed to fetch user data:', error);
                setLoading(false);
            }
        };

        fetchUserData();

    }, [axiosSecure]);

    return { userData, loading };
};

export default useUserData;
