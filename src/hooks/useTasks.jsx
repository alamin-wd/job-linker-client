import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useTasks = () => {

    const axiosPublic = useAxiosPublic();

    const { data: tasks = [], isLoading } = useQuery({

        queryKey: ['tasks'],

        queryFn: async () => {

            const { data } = await axiosPublic.get('/tasks');
            
            return data;  
        },
    });

    return [tasks, isLoading];
};

export default useTasks;
