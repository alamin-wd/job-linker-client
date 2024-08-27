
const CreatorHome = () => {

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="p-6 bg-indigo-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">Add New Task</h3>

                    <p>Create and manage tasks for workers to complete.</p>
                </div>

                <div className="p-6 bg-red-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">My Task's</h3>

                    <p>Track and review the tasks you have created.</p>
                </div>

                <div className="p-6 bg-orange-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">Purchase Coins</h3>

                    <p>Buy coins to offer rewards for task completion.</p>
                </div>

            </div>
        </div>
    );
};

export default CreatorHome;

// import { useState } from "react";
// import Swal from "sweetalert2";

// const TaskCreatorHome = ({ creator, submissions }) => {
//     const [selectedSubmission, setSelectedSubmission] = useState(null);

//     // Calculate total pending tasks and total payment paid by the user
//     const pendingTasks = creator.tasks.reduce((acc, task) => acc + task.task_quantity, 0);
//     const totalPaid = creator.totalPaid;

//     const handleApprove = (submission) => {
//         // Increment worker's coins and update the submission status to "approved"
//         // Make API call to update the submission in the database

//         Swal.fire({
//             icon: "success",
//             title: "Task Approved",
//             text: `You have approved ${submission.worker_name}'s submission.`,
//         });

//         // Update the submission state or refresh data
//     };

//     const handleReject = (submission) => {
//         // Update the submission status to "rejected" in the database

//         Swal.fire({
//             icon: "warning",
//             title: "Task Rejected",
//             text: `You have rejected ${submission.worker_name}'s submission.`,
//         });

//         // Update the submission state or refresh data
//     };

//     return (

//         <div>
            
//             <div className="p-8 bg-gray-100 min-h-screen">
//                 <h1 className="text-3xl font-bold text-gray-800 mb-8">Task Creator Dashboard</h1>

//                 {/* Stats Section */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//                     <div className="bg-white shadow-md rounded-lg p-6 text-center">
//                         <h2 className="text-xl font-semibold text-gray-800">Available Coins</h2>
//                         <p className="text-2xl text-green-600">{creator.coins}</p>
//                     </div>
//                     <div className="bg-white shadow-md rounded-lg p-6 text-center">
//                         <h2 className="text-xl font-semibold text-gray-800">Pending Tasks</h2>
//                         <p className="text-2xl text-yellow-500">{pendingTasks}</p>
//                     </div>
//                     <div className="bg-white shadow-md rounded-lg p-6 text-center">
//                         <h2 className="text-xl font-semibold text-gray-800">Total Payments Made</h2>
//                         <p className="text-2xl text-blue-500">${totalPaid.toFixed(2)}</p>
//                     </div>
//                 </div>

//                 {/* Task to Review Section */}
//                 <div className="bg-white shadow-md rounded-lg p-6">
//                     <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks to Review</h2>

//                     <table className="min-w-full bg-white">
//                         <thead>
//                             <tr>
//                                 <th className="py-2">Worker Name</th>
//                                 <th className="py-2">Worker Email</th>
//                                 <th className="py-2">Task Title</th>
//                                 <th className="py-2">Payable Amount</th>
//                                 <th className="py-2">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {submissions.map((submission) => (
//                                 <tr key={submission.id} className="text-center">
//                                     <td className="py-2">{submission.worker_name}</td>
//                                     <td className="py-2">{submission.worker_email}</td>
//                                     <td className="py-2">{submission.task_title}</td>
//                                     <td className="py-2 text-green-600">{submission.payable_amount}</td>
//                                     <td className="py-2 space-x-2">
//                                         <button
//                                             className="bg-indigo-500 text-white px-4 py-2 rounded"
//                                             onClick={() => setSelectedSubmission(submission)}
//                                         >
//                                             View Submission
//                                         </button>
//                                         <button
//                                             className="bg-green-500 text-white px-4 py-2 rounded"
//                                             onClick={() => handleApprove(submission)}
//                                         >
//                                             Approve
//                                         </button>
//                                         <button
//                                             className="bg-red-500 text-white px-4 py-2 rounded"
//                                             onClick={() => handleReject(submission)}
//                                         >
//                                             Reject
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>

//                 {/* Submission Detail Modal */}
//                 {selectedSubmission && (
//                     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//                         <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-lg">
//                             <h2 className="text-2xl font-bold mb-4">Submission Details</h2>
//                             <p>
//                                 <strong>Task Title:</strong> {selectedSubmission.task_title}
//                             </p>
//                             <p>
//                                 <strong>Submission Details:</strong> {selectedSubmission.submission_details}
//                             </p>
//                             <button
//                                 className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
//                                 onClick={() => setSelectedSubmission(null)}
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default TaskCreatorHome;
