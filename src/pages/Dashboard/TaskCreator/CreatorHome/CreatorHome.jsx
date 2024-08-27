
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