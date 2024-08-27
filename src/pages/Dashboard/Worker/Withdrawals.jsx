// import { useState } from "react";
// import Swal from "sweetalert2";

// const Withdrawals = ({ worker }) => {
//   const [withdrawCoin, setWithdrawCoin] = useState("");
//   const [paymentSystem, setPaymentSystem] = useState("");
//   const [accountNumber, setAccountNumber] = useState("");

//   const maxWithdrawAmount = worker.coins / 20; // Calculate the maximum withdrawal amount in dollars

//   const handleWithdraw = () => {
//     const withdrawAmount = withdrawCoin / 20;

//     if (withdrawAmount > maxWithdrawAmount) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Request",
//         text: `You cannot withdraw more than $${maxWithdrawAmount.toFixed(2)}`,
//       });
//       return;
//     }

//     const withdrawData = {
//       worker_email: worker.email,
//       worker_name: worker.name,
//       withdraw_coin: withdrawCoin,
//       withdraw_amount: withdrawAmount,
//       payment_system: paymentSystem,
//       account_number: accountNumber,
//       withdraw_time: new Date().toISOString(),
//     };

//     // Insert the withdrawData into withdrawCollection (use a function or axios request here)

//     Swal.fire({
//       icon: "success",
//       title: "Withdrawal Request Submitted",
//       text: `You have successfully requested to withdraw $${withdrawAmount.toFixed(2)}.`,
//     });

//     // Reset form fields
//     setWithdrawCoin("");
//     setPaymentSystem("");
//     setAccountNumber("");
//   };

//   return (
//     <div className="p-8 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-gray-800 mb-8">Withdrawals</h1>

//       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Maximum Withdrawal Amount</h2>
//         <p className="text-2xl text-green-600">${maxWithdrawAmount.toFixed(2)}</p>
//       </div>

//       <div className="bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">Withdrawal Form</h2>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Coins to Withdraw</label>
//           <input
//             type="number"
//             value={withdrawCoin}
//             onChange={(e) => setWithdrawCoin(e.target.value)}
//             className="w-full p-4 border rounded-lg focus:outline-none focus:border-indigo-600"
//             min="0"
//             max={worker.coins}
//             placeholder="Enter number of coins to withdraw"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Withdrawal Amount (Dollars)</label>
//           <input
//             type="number"
//             value={(withdrawCoin / 20).toFixed(2)}
//             readOnly
//             className="w-full p-4 border rounded-lg bg-gray-100 text-gray-500"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Select Payment System</label>
//           <select
//             value={paymentSystem}
//             onChange={(e) => setPaymentSystem(e.target.value)}
//             className="w-full p-4 border rounded-lg focus:outline-none focus:border-indigo-600"
//           >
//             <option value="" disabled>Select Payment System</option>
//             <option value="Bkash">Bkash</option>
//             <option value="Rocket">Rocket</option>
//             <option value="Nagad">Nagad</option>
//           </select>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Account Number</label>
//           <input
//             type="text"
//             value={accountNumber}
//             onChange={(e) => setAccountNumber(e.target.value)}
//             className="w-full p-4 border rounded-lg focus:outline-none focus:border-indigo-600"
//             placeholder="Enter your account number"
//           />
//         </div>
//         <button
//           className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
//           onClick={handleWithdraw}
//         >
//           Withdraw
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Withdrawals;


const Withdrawals = () => {

    return (

        <div>
            <h3 className="text-3xl">Withdrawals</h3>
        </div>
    );
};

export default Withdrawals;
