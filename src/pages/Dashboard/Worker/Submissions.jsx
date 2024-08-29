
import { useEffect, useState, useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import LoadingSpinner from '../../../components/LoadingSnipper/LoadingSpinner';


const Submissions = () => {

    const [submissions, setSubmissions] = useState([]);
    const axiosSecure = useAxiosSecure();
    const { user, loading } = useContext(AuthContext);

    useEffect(() => {

        const fetchSubmissions = async () => {

            try {

                const result = await axiosSecure.get('/submissions', {
                    params: { workerEmail: user.email }
                });


                if (result.data.success) {
                    setSubmissions(result.data.data);
                }

            }
            catch (error) {
                console.error('Error getting submissions:', error);
            }

        };

        fetchSubmissions();

    }, [user.email, axiosSecure]);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (

        <div className="p-8 bg-gray-100 min-h-screen">

            <h2 className="text-4xl font-bold text-gray-900 mb-6">My Submissions</h2>

            <div className="bg-white shadow-lg rounded-lg p-8">

                <table className="bg-white border border-gray-200">

                    <thead>
                        <tr>
                            <th className="text-left py-3 px-4 text-gray-600 font-semibold border-b">Task Title</th>

                            <th className="text-left py-3 px-4 text-gray-600 font-semibold border-b">Submission Details</th>

                            <th className="text-left py-3 px-4 text-gray-600 font-semibold border-b">Payable Amount</th>

                            <th className="text-left py-3 px-4 text-gray-600 font-semibold border-b">Status</th>

                            <th className="text-left py-3 px-4 text-gray-600 font-semibold border-b">Submitted Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            submissions.map((submission) => (

                                <tr key={submission._id}>

                                    <td className="text-left py-3 px-4 border-b">{submission.task_title}</td>

                                    <td className="text-left py-3 px-4 border-b">{submission.submission_details}</td>

                                    <td className="text-left py-3 px-4 border-b">${submission.payable_amount}</td>

                                    <td className={`text-left py-3 px-4 border-b 
                                    ${submission.status === 'approved' ? 'text-green-600' :
                                            submission.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'
                                        }`}>

                                        {submission.status.charAt(0).toUpperCase() + submission.status.slice(1)}
                                    </td>

                                    <td className="text-left py-3 px-4 border-b">{new Date(submission.current_date).toLocaleDateString()}

                                    </td>

                                </tr>
                            ))}

                    </tbody>

                </table>

            </div>
        </div>
    );
};

export default Submissions;
