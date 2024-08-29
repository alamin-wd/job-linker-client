
import LoadingSpinner from "../../../components/LoadingSnipper/LoadingSpinner";
import useTasks from "../../../hooks/useTasks";
import TaskCard from "./TaskCard";


const TaskList = () => {

    const [tasks, Loading] = useTasks();

    if (Loading) return <LoadingSpinner></LoadingSpinner>;

    if (tasks.length === 0) return <div>No tasks available right now.</div>;

    return (

        <div>
            
            <div className="p-8 bg-gray-100 min-h-screen">

                <h3 className="text-3xl font-bold text-gray-800 mb-8">Available Tasks</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {tasks.map(task => <TaskCard
                        key={task._id}
                        task={task}
                    ></TaskCard>)}
                </div>
            </div>
        </div>
    );
};

export default TaskList;
