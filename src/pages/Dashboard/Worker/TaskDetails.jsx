import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTasks from '../../../hooks/useTasks';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import LoadingSpinner from '../../../components/LoadingSnipper/LoadingSpinner';
import { AuthContext } from '../../../providers/AuthProvider';

const TaskDetails = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const [tasks] = useTasks();
    const [task, setTask] = useState(null);
    const [submissionDetails, setSubmissionDetails] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {

        const foundTask = tasks.find(task => task._id === id);
        setTask(foundTask);

    }, [tasks, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!task) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Task details not found.',
            });
            return;
        }

        const submission = {
            task_id: task._id,
            task_title: task.task_title,
            task_detail: task.task_detail,
            task_img: task.task_img,
            payable_amount: task.payable_amount,
            submission_details: submissionDetails,
            worker_name: user.displayName,
            worker_email: user.email,
            creator_name: task.creator_name,
            creator_email: task.creator_email,
            current_date: new Date().toISOString(),
            status: 'pending',
        };

        try {
            const result = await axiosSecure.post('/submissions', submission); // Use axiosSecure here

            if (result.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Submission Successful',
                    text: 'Your submission has been successfully recorded.',
                });

                setSubmissionDetails('');
                setSubmissionStatus('success');
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: result.data.message || 'Failed to submit the task. Please try again.',
                });
                setSubmissionStatus('error');
            }
        }
        catch (error) {
            console.error('Error submitting the task:', error);

            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Failed to submit the task. Please try again.',
            });
            setSubmissionStatus('error');
        }
    };

    if (!task) return <LoadingSpinner></LoadingSpinner>;

    return (

        <div className="p-8 bg-gray-100 min-h-screen">

            <div className="max-w-4xl mx-auto">

                {/* Task Details */}
                <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
                    <img
                        src={task.task_img}
                        alt={task.task_title}
                        className="w-full h-64 object-cover rounded-t-lg mb-6"
                    />

                    <h2 className="text-4xl font-bold text-gray-900 mb-4">{task.task_title}</h2>

                    <p className="text-gray-700 text-lg mb-6">{task.task_detail}</p>

                    <div className="flex justify-between items-center mb-4">

                        <div>
                            <p className="text-gray-600">
                                <strong>Creator: </strong>{task.creator_name}
                            </p>

                            <p className="text-gray-600">
                                <strong>Payable Amount: </strong>${task.payable_amount}
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-600">
                                <strong>Completion Date: </strong>{task.completion_date}
                            </p>

                            <p className="text-gray-600">
                                <strong>Quantity: </strong>{task.task_quantity}
                            </p>
                        </div>

                    </div>
                </div>

                {/* Submission Form */}
                <div className="bg-white shadow-lg rounded-lg p-8">

                    <h3 className="text-3xl font-semibold text-gray-800 mb-6">Submit Your Work</h3>

                    <form onSubmit={handleSubmit}>

                        <div className="mb-6">
                            <label htmlFor="submissionDetails" className="block text-gray-700 font-medium mb-2">
                                Submission Details
                            </label>

                            <textarea
                                id="submissionDetails"
                                name="submissionDetails"
                                rows="6"
                                value={submissionDetails}
                                onChange={(e) => setSubmissionDetails(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Describe how you completed the task..."
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] hover:from-[#48CAE4] hover:to-[#00B4D8] text-white font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 duration-50">
                            Submit Task
                        </button>

                    </form>

                    {submissionStatus === 'error' && <p className="text-red-600 mt-4">Failed to submit the task.</p>}

                </div>
            </div>
        </div>
    );
};

export default TaskDetails;
