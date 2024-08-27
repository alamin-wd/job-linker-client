
const AdminHome = () => {

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="p-6 bg-gray-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">Manage Users</h3>

                    <p>View and manage user roles and permissions.</p>
                </div>

                <div className="p-6 bg-teal-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">Manage Tasks</h3>

                    <p>Oversee tasks created on the platform and maintain integrity.</p>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;

// import { useState } from "react";
// import Swal from "sweetalert2";

// const AdminHome = ({ adminStats, withdrawalRequests, onWithdrawSuccess }) => {
//   // Function to handle payment success
//   const handlePaymentSuccess = (request) => {
//     // Make API call to delete the withdrawal request from the database
//     // and deduct coins from the user's account

//     Swal.fire({
//       icon: "success",
//       title: "Payment Processed",
//       text: `The withdrawal for ${request.worker_name} has been successfully processed.`,
//     });

//     // Call the passed down function to update data after withdrawal success
//     onWithdrawSuccess(request);
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Dashboard</h1>

//       {/* Stats Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
//           <p className="text-2xl text-blue-600">{adminStats.totalUsers}</p>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <h2 className="text-xl font-semibold text-gray-800">Total Coins</h2>
//           <p className="text-2xl text-green-600">{adminStats.totalCoins}</p>
//         </div>
//         <div className="bg-white shadow-md rounded-lg p-6 text-center">
//           <h2 className="text-xl font-semibold text-gray-800">Total Payments</h2>
//           <p className="text-2xl text-yellow-500">${adminStats.totalPayments.toFixed(2)}</p>
//         </div>
//       </div>

//       {/* Withdraw Request Section */}
//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Withdrawal Requests</h2>

//         <table className="min-w-full bg-white">
//           <thead>
//             <tr>
//               <th className="py-2">Worker Name</th>
//               <th className="py-2">Withdraw Coin</th>
//               <th className="py-2">Withdraw Amount</th>
//               <th className="py-2">Payment Number</th>
//               <th className="py-2">Payment System</th>
//               <th className="py-2">Withdraw Time</th>
//               <th className="py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {withdrawalRequests.map((request) => (
//               <tr key={request.id} className="text-center">
//                 <td className="py-2">{request.worker_name}</td>
//                 <td className="py-2">{request.withdraw_coin}</td>
//                 <td className="py-2 text-green-600">${request.withdraw_amount}</td>
//                 <td className="py-2">{request.payment_number}</td>
//                 <td className="py-2">{request.payment_system}</td>
//                 <td className="py-2">{new Date(request.withdraw_time).toLocaleString()}</td>
//                 <td className="py-2">
//                   <button
//                     className="bg-green-500 text-white px-4 py-2 rounded"
//                     onClick={() => handlePaymentSuccess(request)}
//                   >
//                     Payment Success
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminHome;
