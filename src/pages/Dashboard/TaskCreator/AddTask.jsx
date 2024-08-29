import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProvider';
import { axiosSecure } from '../../../hooks/useAxiosSecure';


const AddTask = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {

        const {
            task_title,
            task_detail,
            task_img,
            completion_date,
            payable_amount,
            task_quantity
        } = data;

        const totalCost = task_quantity * payable_amount;

        if (totalCost > user.coins) {
            
            Swal.fire({
                icon: 'error',
                title: 'Not enough coins',
                text: 'Not enough coins available. Please purchase more coins.',
            });

            return;
        }

        const taskInfo = {
            task_title,
            task_detail,
            task_img,
            completion_date,
            payable_amount: parseFloat(payable_amount),
            task_quantity: parseInt(task_quantity),
            creator_name: user.displayName,
            creator_email: user.email,
            status: 'open',
            created_date: new Date().toISOString(),
        };

        try {

            const result = await axiosSecure.post('/tasks', taskInfo);

            if (result.status === 201) {

                Swal.fire({
                    icon: 'success',
                    title: 'Task Added',
                    text: 'Your task has been successfully added.',
                });

                reset();
            }
        }
        catch (error) {

            console.error('Error adding task:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error adding your task. Please try again.',
            });
        }
    };

    return (

        <div className="mt-10 p-6 bg-white shadow-md rounded">

            <h2 className="text-2xl font-bold mb-6">Add New Task</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                <div>
                    <label className="block text-sm font-medium text-gray-700">Task Title</label>

                    <input
                        type="text"
                        name="task_title"
                        placeholder="Task Title"
                        className="input input-bordered w-full"
                        {...register('task_title', { required: true })} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Task Details</label>

                    <textarea
                        name="task_detail"
                        placeholder="Task Details"
                        className="textarea textarea-bordered w-full"
                        {...register('task_detail', { required: true })} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Task Quantity</label>

                    <input
                        type="number"
                        name="task_quantity"
                        placeholder="Task Quantity"
                        className="input input-bordered w-full"
                        min="1"
                        {...register('task_quantity', { required: true })} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Payable Amount per Task</label>

                    <input
                        type="number"
                        name="payable_amount"
                        placeholder="Payable Amount per Task"
                        className="input input-bordered w-full"
                        min="0"
                        {...register('payable_amount', { required: true })} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Completion Date</label>

                    <input
                        type="date"
                        name="completion_date"
                        placeholder="Completion Date"
                        className="input input-bordered w-full"
                        {...register('completion_date', { required: true })} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Submission Info</label>

                    <input
                        type="text"
                        name="submission_info"
                        placeholder="Submission Info"
                        className="input input-bordered w-full"
                        {...register('submission_info', { required: true })} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Task Image URL</label>

                    <input
                        type="text"
                        name="task_img"
                        placeholder="Task Image URL"
                        className="input input-bordered w-full"
                        {...register('task_img', { required: true })} />
                </div>

                <button type="submit" className="btn btn-primary w-full">
                    Add This Task
                </button>

            </form>
        </div>

    );
};

export default AddTask;
