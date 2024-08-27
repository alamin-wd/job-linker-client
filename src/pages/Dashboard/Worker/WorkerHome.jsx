
const WorkerHome = () => {

    return (

        <div>
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-7xl mx-auto space-y-6">
                    {/* Header */}
                    <h1 className="text-3xl font-bold text-gray-800">Worker Dashboard</h1>

                    {/* Stats Section */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Available Coins */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-700">Available Coins</h2>
                            <p className="text-4xl font-bold text-indigo-600 mt-2">120</p>
                        </div>

                        {/* Total Submissions */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-700">Total Submissions</h2>
                            <p className="text-4xl font-bold text-green-500 mt-2">45</p>
                        </div>

                        {/* Total Earnings */}
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h2 className="text-xl font-semibold text-gray-700">Total Earnings</h2>
                            <p className="text-4xl font-bold text-yellow-500 mt-2">$350</p>
                        </div>
                    </div>

                    {/* Approved Submissions Table */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Approved Submissions</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-6 py-3 font-bold text-gray-700">Task Title</th>
                                        <th className="px-6 py-3 font-bold text-gray-700">Payable Amount</th>
                                        <th className="px-6 py-3 font-bold text-gray-700">Creator Name</th>
                                        <th className="px-6 py-3 font-bold text-gray-700">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t hover:bg-gray-50">
                                        <td className="px-6 py-4">Task #1</td>
                                        <td className="px-6 py-4 text-green-500">$20</td>
                                        <td className="px-6 py-4">John Doe</td>
                                        <td className="px-6 py-4 text-green-600">Approved</td>
                                    </tr>
                                    <tr className="border-t hover:bg-gray-50">
                                        <td className="px-6 py-4">Task #2</td>
                                        <td className="px-6 py-4 text-green-500">$15</td>
                                        <td className="px-6 py-4">Jane Smith</td>
                                        <td className="px-6 py-4 text-green-600">Approved</td>
                                    </tr>
                                    {/* More rows... */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkerHome;