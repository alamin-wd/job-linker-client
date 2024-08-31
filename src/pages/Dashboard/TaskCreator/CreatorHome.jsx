import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import useSubmission from '../../../hooks/useSubmission';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext, useState } from 'react';
import LoadingSpinner from '../../../components/LoadingSnipper/LoadingSpinner';

const CreatorHome = () => {
    const [submissions, isLoading, refetch] = useSubmission();
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext); 
    const [selectedSubmission, setSelectedSubmission] = useState(null); 

    const userSubmissions = submissions.filter(submission => 
        submission.creator_email === user.email && submission.status === 'pending'
    );

    const pendingTasks = userSubmissions.reduce((acc, submission) => {
        const exists = acc.find(task => task.task_id === submission.task_id);
        if (!exists) {
            acc.push({
                task_id: submission.task_id,
                task_title: submission.task_title,
                task_detail: submission.task_detail,
                payable_amount: submission.payable_amount,
                task_img: submission.task_img,
            });
        }
        return acc;
    }, []);

    const handleApprove = async (submission) => {
        try {
            await axiosSecure.put(`/submissions/${submission._id}/approve`);
            refetch(); 
        } catch (error) {
            console.error('Failed to approve submission:', error);
        }
    };

    const handleReject = async (submission) => {
        try {
            await axiosSecure.put(`/submissions/${submission._id}/reject`);
            refetch(); 
        } catch (error) {
            console.error('Failed to reject submission:', error);
        }
    };

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Creator Dashboard</h2>

            <div className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">Pending Tasks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pendingTasks.map(task => (
                        <div key={task.task_id} className="p-4 bg-white shadow-lg rounded-lg">
                            <img src={task.task_img} alt={task.task_title} className="mb-4 w-full h-32 object-cover rounded-lg" />
                            <h3 className="text-xl font-semibold">{task.task_title}</h3>
                            <p className="text-gray-600">{task.task_detail}</p>
                            <p className="text-gray-800 font-semibold">Reward: {task.payable_amount} coins</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Submissions to Review</h2>
                <table className="min-w-full bg-white rounded-lg shadow-md overflow-hidden">
                    <thead>
                        <tr className="bg-gray-800 text-white">
                            <th className="py-2 px-4">Worker Name</th>
                            <th className="py-2 px-4">Worker Email</th>
                            <th className="py-2 px-4">Task Title</th>
                            <th className="py-2 px-4">Payable Amount</th>
                            <th className="py-2 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userSubmissions.map(submission => (
                            <tr key={submission._id} className="border-b">
                                <td className="py-2 px-4">{submission.worker_name}</td>
                                <td className="py-2 px-4">{submission.worker_email}</td>
                                <td className="py-2 px-4">{submission.task_title}</td>
                                <td className="py-2 px-4">{submission.payable_amount} coins</td>
                                <td className="py-2 px-4 flex space-x-2">
                                    <button 
                                        className="text-blue-500 hover:underline"
                                        onClick={() => setSelectedSubmission(submission)}>
                                        View Submission
                                    </button>
                                    <button 
                                        className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                        onClick={() => handleApprove(submission)}>
                                        Approve
                                    </button>
                                    <button 
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                        onClick={() => handleReject(submission)}>
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedSubmission && (
                <Modal 
                    open={Boolean(selectedSubmission)} 
                    onClose={() => setSelectedSubmission(null)}
                    center>
                    <h2 className="text-xl font-semibold mb-4">Submission Details</h2>
                    <p><strong>Worker:</strong> {selectedSubmission.worker_name} ({selectedSubmission.worker_email})</p>
                    <p><strong>Task:</strong> {selectedSubmission.task_title}</p>
                    <p><strong>Details:</strong> {selectedSubmission.submission_details}</p>
                    <div className="flex justify-end space-x-2 mt-4">
                        <button 
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                            onClick={() => { handleApprove(selectedSubmission); setSelectedSubmission(null); }}>
                            Approve
                        </button>
                        <button 
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                            onClick={() => { handleReject(selectedSubmission); setSelectedSubmission(null); }}>
                            Reject
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CreatorHome;
