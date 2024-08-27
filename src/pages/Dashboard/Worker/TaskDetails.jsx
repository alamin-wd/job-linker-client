// import { useState } from "react";
// { task }
const TaskDetails = () => {

    // const [submissionDetails, setSubmissionDetails] = useState("");

    // const handleSubmit = () => {

    //     const submissionData = {
    //         task_id: task._id,
    //         task_title: task.task_title,
    //         task_detail: task.task_detail,
    //         task_img_url: task.task_img_url,
    //         payable_amount: task.payable_amount,
    //         worker_email: "worker@example.com", // Replace with dynamic data
    //         submission_details: submissionDetails,
    //         worker_name: "John Doe", // Replace with dynamic data
    //         creator_name: task.creator_name,
    //         creator_email: task.creator_email,
    //         current_date: new Date().toISOString(),
    //         status: "pending",
    //     };

    //     // Submit the data to the backend (use a function or axios request here)
    // };

    return (

        <div>
            <h2 className="text-3xl">Task Details</h2>

            {/* <div className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">{task.task_title}</h1>
                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <img src={task.task_img_url} alt={task.task_title} className="w-full h-64 object-cover rounded mb-6" />
                    <p className="text-gray-600">{task.task_detail}</p>
                    <p className="text-gray-600 mt-4">Payable Amount: ${task.payable_amount}</p>
                    <p className="text-gray-600">Completion Date: {task.completion_date}</p>
                    <p className="text-gray-600">Creator: {task.creator_name}</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Submit Your Work</h2>
                    <textarea
                        className="w-full p-4 border rounded-lg focus:outline-none focus:border-indigo-600"
                        rows="5"
                        placeholder="Enter submission details..."
                        value={submissionDetails}
                        onChange={e => setSubmissionDetails(e.target.value)}
                    ></textarea>
                    <button
                        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div> */}
        </div>
    );
};

export default TaskDetails;
