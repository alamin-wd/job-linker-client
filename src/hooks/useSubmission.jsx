import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSubmission = () => {

    const axiosSecure = useAxiosSecure();

    const { data: submissions = [], isLoading, refetch } = useQuery({

        queryKey: ['submissions'],

        queryFn: async () => {
            const { data } = await axiosSecure.get('/submissions');

            return data;
        },
    });

    return [submissions, isLoading, refetch];
};

export default useSubmission;