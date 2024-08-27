// { submissions }
const Submissions = () => {

    return (

        <div>

            <h3 className="text-3xl">Submissions</h3>

            {/* <div className="p-8 bg-gray-100 min-h-screen">
                <h1 className="text-3xl font-bold text-gray-800 mb-8">My Submissions</h1>
                <div className="bg-white shadow-md rounded-lg p-6 overflow-x-auto">
                    <table className="min-w-full text-left text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-6 py-3 font-bold text-gray-700">Task Title</th>
                                <th className="px-6 py-3 font-bold text-gray-700">Submission Details</th>
                                <th className="px-6 py-3 font-bold text-gray-700">Payable Amount</th>
                                <th className="px-6 py-3 font-bold text-gray-700">Status</th>
                                <th className="px-6 py-3 font-bold text-gray-700">Date Submitted</th>
                            </tr>
                        </thead>
                        <tbody>
                            {submissions.map(submission => (
                                <tr key={submission._id} className="border-t hover:bg-gray-50">
                                    <td className="px-6 py-4">{submission.task_title}</td>
                                    <td className="px-6 py-4">{submission.submission_details}</td>
                                    <td className="px-6 py-4 text-green-500">${submission.payable_amount}</td>
                                    <td className={`px-6 py-4 ${submission.status === 'approved' ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {submission.status}
                                    </td>
                                    <td className="px-6 py-4">{new Date(submission.current_date).toLocaleDateString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default Submissions;
