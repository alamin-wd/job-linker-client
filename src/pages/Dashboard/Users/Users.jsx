
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Users = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({

        queryKey: ['users'],

        queryFn: async () => {

            const res = await axiosSecure.get('/users/workers');

            return res.data;
        }
    });

    // remove a user
    const handleRemoveUser = (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        })
            .then(async (result) => {

                if (result.isConfirmed) {
                    try {
                        const res = await axiosSecure.delete(`/users/${userId}`);

                        if (res.data.deletedCount > 0) {

                            refetch();

                            Swal.fire('Deleted!', 'The user has been deleted.', 'success');
                        }
                    }
                    catch (error) {
                        console.error("Failed to delete user:", error);

                        Swal.fire('Error!', 'Failed to delete the user.', 'error');
                    }
                }
            });
    };

    // Update user role
    const handleRoleChange = async (userId, newRole) => {

        try {
            const res = await axiosSecure.patch(`/users/${userId}/role`, { role: newRole });

            if (res.data.modifiedCount > 0) {

                refetch();

                Swal.fire('Updated!', 'User role has been updated.', 'success');
            }
        }
        catch (error) {

            console.error("Failed to update user role:", error);

            Swal.fire('Error!', 'There was an issue updating the user role.', 'error');
        }
    };


    return (

        <div className="container mx-auto p-5">

            <div className="flex flex-col md:flex-row justify-between items-center mb-6">

                <h3 className="text-2xl font-semibold mb-4">Manage Users</h3>

                <h3 className="text-2xl font-semibold mb-4">Total Workers: ({users.length})</h3>
            </div>

            <table className="table-auto w-full text-left">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Photo</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-2 py-2">Coins</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (

                        <tr key={user._id} className="border-t">

                            <td className="px-4 py-2">
                                <img src={user.photo} alt={user.name} className="w-14 h-14 rounded-full" />
                            </td>

                            <td className="px-4 py-2">{user.name}</td>

                            <td className="px-4 py-2">{user.email}</td>

                            <td className="px-4 py-2">{user.coins}</td>

                            <td className="px-4 py-2">

                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user._id, e.target.value)} >

                                    <option value="Worker">Worker</option>

                                    <option value="Task-Creator">Task-Creator</option>

                                    <option value="Admin">Admin</option>
                                </select>
                            </td>

                            <td className="px-4 py-2">
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemoveUser(user._id)} >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;


