
import { useState, useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Withdrawals = () => {

    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [coinToWithdraw, setCoinToWithdraw] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('Bkash');
    const [accountNumber, setAccountNumber] = useState('');

    const coins = 300;
    const maxWithdrawAmount = Math.floor(coins / 20);

    const handleCoinChange = (e) => {

        const coins = parseInt(e.target.value, 10);

        setCoinToWithdraw(coins);

        setWithdrawAmount(coins / 20);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (withdrawAmount > maxWithdrawAmount) {

            Swal.fire({
                icon: 'error',
                title: 'Withdrawal Error',
                text: `You cannot withdraw more than $${maxWithdrawAmount}.`,
            });

            return;
        }

        const withdrawalInfo = {

            worker_email: user.email,
            worker_name: user.name,
            withdraw_coin: coinToWithdraw,
            withdraw_amount: withdrawAmount,
            payment_Method: paymentMethod,
            account_number: accountNumber,
            withdraw_time: new Date().toISOString(),
        };

        try {

            const result = await axiosSecure.post('/withdrawals', withdrawalInfo);

            if (result.data.success) {

                Swal.fire({
                    icon: 'success',
                    title: 'Withdrawal Successful',
                    text: 'Your withdrawal request has been processed.',
                });

                setCoinToWithdraw('');
                setWithdrawAmount(0);
                setPaymentMethod('Bkash');
                setAccountNumber('');
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: result.data.message || 'Failed to process the withdrawal. Please try again.',
                });
            }
        }
        catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Submission Failed',
                text: 'Failed to process the withdrawal. Please try again.',
            });
        }
    };

    return (

        <div className="p-8 bg-gray-100 min-h-screen">

            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">

                <h2 className="text-4xl font-bold text-gray-900 mb-6">Withdrawal Form</h2>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="flex flex-col">

                        <label htmlFor="coinToWithdraw" className="text-gray-700 font-medium mb-2">
                            Coins to Withdraw
                        </label>

                        <input
                            id="coinToWithdraw"
                            type="number"
                            value={coinToWithdraw}
                            onChange={handleCoinChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            min="0"
                            required />

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="withdrawAmount" className="text-gray-700 font-medium mb-2">
                            Withdrawal Amount (Dollar)
                        </label>

                        <input
                            id="withdrawAmount"
                            type="number"
                            value={withdrawAmount}
                            readOnly
                            className="p-3 border border-gray-300 rounded-lg bg-gray-100" />

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="paymentMethod" className="text-gray-700 font-medium mb-2">
                            Select Your Payment Method
                        </label>

                        <select
                            id="paymentMethod"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required >

                            <option value="Bkash">Bkash</option>

                            <option value="Rocket">Rocket</option>

                            <option value="Nagad">Nagad</option>
                        </select>

                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="accountNumber" className="text-gray-700 font-medium mb-2">
                            Account Number
                        </label>

                        <input
                            id="accountNumber"
                            type="text"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                            required />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-transform transform hover:scale-105 duration-50"  >

                        Withdraw
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Withdrawals;
