
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