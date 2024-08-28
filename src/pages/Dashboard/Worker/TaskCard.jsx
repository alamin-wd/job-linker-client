
import { useNavigate } from 'react-router-dom'; 
import PropTypes from 'prop-types';

const TaskCard = ({ task }) => {

    const navigate = useNavigate(); 

    const handleViewDetails = () => {

        navigate(`/dashboard/task-details/${task._id}`); 
    };

    const { task_img, task_title, creator_name, completion_date, payable_amount, task_quantity } = task;

    return (

        <div>

            <div className="bg-white shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col ">
                {/* Image */}
                <img
                    src={task_img}
                    alt="Task Thumbnail"
                    className="w-full h-52 mb-4"
                />

                {/* Completion Date */}
                <p className="text-gray-600 mb-2 text-center">
                    <strong>Completion Date:</strong>
                    <span className='text-sm ms-2'>{completion_date}</span>
                </p>

                {/* Task Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-2">{task_title}</h2>

                {/* Task Creator */}
                <p className="text-gray-600 mb-4">
                    <strong>Creator: </strong>
                    <span className='ms-1 font-medium'>{creator_name}</span>
                </p>

                {/* Payable Amount */}
                <p className="text-gray-600 mb-2 ">
                    <strong>Payable Amount:</strong> <span className="text-[#00B4D8] font-semibold">$ {payable_amount}</span>
                </p>

                {/* Task Quantity */}
                <p className="text-gray-600 mb-4">
                    <strong>Task Quantity: {task_quantity}</strong>
                </p>

                {/* View Details Button */}
                <button onClick={handleViewDetails}
                    className="w-full bg-gradient-to-r from-[#00B4D8] to-[#48CAE4] text-white font-semibold py-2 px-4 rounded-lg hover:from-[#48CAE4] hover:to-[#00B4D8] transition-transform transform hover:scale-105 duration-100"
                     >
                    View Details
                </button>

            </div>
        </div>
    );
};

TaskCard.propTypes = {
   task: PropTypes.node,
}

export default TaskCard;
