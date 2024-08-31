import { useState } from 'react';
import useTasks from '../../../hooks/useTasks';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { FaEye, FaTrash } from 'react-icons/fa';
import LoadingSpinner from '../../../components/LoadingSnipper/LoadingSpinner';


const ManageTasks = () => {

    const axiosSecure = useAxiosSecure();
    const [tasks, Loading, refetch] = useTasks();

    const [selectedTask, setSelectedTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewTask = (task) => {

        setSelectedTask(task);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {

        setIsModalOpen(false);
        setSelectedTask(null);
    };

    const handleDeleteTask = (taskId) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {

                if (result.isConfirmed) {

                    axiosSecure.delete(`/tasks/${taskId}`)

                        .then(() => {
                            Swal.fire(
                                'Deleted!',
                                'The task has been deleted.',
                                'success'
                            );

                            refetch();
                        })
                        .catch((error) => {
                            console.error(error);

                            Swal.fire(
                                'Error!',
                                'Failed to delete the task. Please try again.',
                                'error'
                            );
                        });
                }
            });
    };

    if (Loading) {

        return <LoadingSpinner></LoadingSpinner>
    }

    return (

        <div className="p-8 bg-gray-100 min-h-screen">

            <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Manage Tasks</h2>

                <table className="w-full border-collapse">

                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border px-4 py-2">Task Title</th>
                            <th className="border px-4 py-2">Task Creator</th>
                            <th className="border px-4 py-2">Task Quantity</th>
                            <th className="border px-4 py-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {tasks.map(task => (

                            <tr key={task._id} className="hover:bg-gray-100">

                                <td className="px-4 py-3 border-t">{task.task_title}</td>

                                <td className="px-4 py-3 border-t">{task.creator_name}</td>

                                <td className="px-4 py-3 border-t">{task.task_quantity}</td>

                                <td className="px-4 py-3 border-t">

                                    <button
                                        className="text-blue-600 hover:text-blue-800 mr-6"
                                        onClick={() => handleViewTask(task)} >
                                        <FaEye size={20} />
                                    </button>

                                    <button
                                        className="text-red-600 hover:text-red-800"
                                        onClick={() => handleDeleteTask(task._id)}  >
                                        <FaTrash size={20} />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>

                </table>

                {/* Task Details Modal */}
                <Modal
                    isOpen={isModalOpen}

                    onRequestClose={handleCloseModal}

                    contentLabel="Task Details"

                    className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center" >

                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">

                        <h2 className="text-2xl font-bold mb-4">Task Details</h2>

                        {selectedTask && (
                            <div>
                                <p><strong>Title:</strong> {selectedTask.task_title}</p>

                                <p><strong>Detail:</strong> {selectedTask.task_detail}</p>

                                <p><strong>Creator:</strong> {selectedTask.creator_name}</p>

                                <p><strong>Quantity:</strong> {selectedTask.task_quantity}</p>

                                <p><strong>Completion Date:</strong> {selectedTask.completion_date}</p>
                            </div>
                        )}

                        <button
                            onClick={handleCloseModal}
                            className="mt-4 bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] hover:from-[#48CAE4] hover:to-[#00B4D8] text-white px-4 py-2 rounded-lg" >
                            Close
                        </button>

                    </div>
                </Modal>

            </div>
        </div>
    );
};

export default ManageTasks;
