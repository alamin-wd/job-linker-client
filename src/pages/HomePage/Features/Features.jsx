
const Features = () => {

    return (

        <div className="text-center">

            <h2 className="text-2xl md:text-4xl font-bold mb-8">Our Features</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                <div className="flex flex-col items-center">
                    
                    <img src="https://i.ibb.co/hV4qJ54/1.png" alt="Earn Coins" className="mb-4" />

                    <h3 className="text-xl font-semibold mb-2">Earn Coins by Completing Tasks</h3>

                    <p>Complete small tasks and earn coins as rewards for your work.</p>
                </div>

                <div className="flex flex-col items-center">

                    <img src="https://i.ibb.co/ThV6ZZn/2.png" alt="Create and Manage Tasks" className=" mb-4" />

                    <h3 className="text-xl font-semibold mb-2">Create and Manage Tasks</h3>

                    <p>Task creators can easily create, monitor, and manage tasks on the platform.</p>
                </div>

                <div className="flex flex-col items-center">

                    <img src="https://i.ibb.co/R05ydBb/3.png" alt="Secure Payments" className="mb-4" />

                    <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>

                    <p>Enjoy secure and quick payouts for completed tasks with our payment system.</p>
                </div>

            </div>
        </div>
    );
};

export default Features;