
const WorkerHome = () => {

    return (

        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold">Task List</h3>
                    <p>View and complete available tasks to earn rewards.</p>
                </div>

                <div className="p-6 bg-green-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">My Submissions</h3>

                    <p>Review your task submissions and track their status.</p>
                </div>

                <div className="p-6 bg-yellow-100 rounded-lg shadow-lg">

                    <h3 className="text-xl font-bold">Withdrawals</h3>

                    <p>Manage your coin withdrawals and earnings.</p>
                </div>
            </div>
        </div>
    );
};

export default WorkerHome;