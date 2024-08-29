import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useTasks from '../../../hooks/useTasks';
import LoadingSpinner from '../../../components/LoadingSnipper/LoadingSpinner';

const MyTasks = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [tasks, isLoading, refetch] = useTasks();

    const [editingTask, setEditingTask] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const handleDelete = async (taskId) => {

        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'This action will delete the task permanently.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            try {

                await axiosSecure.delete(`/tasks/${taskId}`);

                Swal.fire({
                    icon: 'success',
                    title: 'Task Deleted',
                    text: 'The task has been successfully deleted.',
                });

                refetch();

            }
            catch (error) {

                console.error('Error deleting task:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Deletion Failed',
                    text: 'Failed to delete the task. Please try again.',
                });
            }
        }
    };


    const handleUpdate = async (data) => {

        try {
            const { task_title, task_detail, submission_info } = data;

            await axiosSecure.patch(`/tasks/${editingTask._id}`, {
                task_title,
                task_detail,
                submission_info
            });

            Swal.fire({
                icon: 'success',
                title: 'Task Updated',
                text: 'The task has been successfully updated.',
            });

            setEditingTask(null);
            refetch();
        }
        catch (error) {
            console.error('Error updating task:', error);
            Swal.fire({
                icon: 'error',
                title: 'Update Failed',
                text: 'Failed to update the task. Please try again.',
            });
        }
    };

    const openUpdateForm = (task) => {

        setEditingTask(task);

        reset({
            task_title: task.task_title,
            task_detail: task.task_detail,
            submission_info: task.submission_info
        });
    };

    const closeUpdateForm = () => {
        setEditingTask(null);
    };

    if (isLoading) {

        return <LoadingSpinner></LoadingSpinner>;
    }

    const userTasks = tasks.filter(task => task.creator_email === user.email);

    return (

        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded">

            <h2 className="text-2xl font-bold mb-6">My Tasks</h2>

            {/* Tasks Table */}
            <table className="min-w-full divide-y divide-gray-200">

                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payable Amount</th>

                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">

                    {userTasks.map(task => (

                        <tr key={task._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{task.task_title}</td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.task_quantity}</td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{task.payable_amount}</td>

                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">

                                <button
                                    onClick={() => openUpdateForm(task)}
                                    className="text-indigo-600 hover:text-indigo-900 mr-4"  >

                                    Update
                                </button>

                                <button
                                    onClick={() => handleDelete(task._id, task.task_quantity, task.payable_amount)}
                                    className="text-red-600 hover:text-red-900" >

                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Update Form Modal */}
            {editingTask && (

                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">

                    <div className="bg-white p-6 rounded shadow-md w-full max-w-lg">

                        <h2 className="text-2xl font-bold mb-4">Update Task</h2>

                        <form onSubmit={handleSubmit(handleUpdate)} className="space-y-4">

                            <input
                                type="text"
                                name="task_title"
                                {...register('task_title')}
                                placeholder="Task Title"
                                className="input input-bordered w-full" />

                            <textarea
                                name="task_detail"
                                {...register('task_detail')}
                                placeholder="Task Details"
                                className="textarea textarea-bordered w-full" />

                            <input
                                type="text"
                                name="submission_info"
                                {...register('submission_info')}
                                placeholder="Submission Info"
                                className="input input-bordered w-full" />

                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={closeUpdateForm}
                                    className="btn btn-secondary mr-4"  >

                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] hover:from-[#48CAE4] hover:to-[#00B4D8] text-white px-4 rounded-lg" >

                                    Update Task
                                </button>

                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyTasks;
