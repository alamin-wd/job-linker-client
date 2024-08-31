
const HowItWorks = () => {

    return (

        <div className="text-center">
            
            <h2 className="text-2xl md:text-4xl font-bold mb-12">How It Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                <div className="flex flex-col items-center">
                    
                    <div className="bg-[#00B4D8] rounded-full mb-6">
                        <img src="https://i.ibb.co/VSPKn48/register.png" alt="Register" className="h-40" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Register</h3>

                    <p className="text-gray-600">Create your account and start exploring the platform.</p>
                </div>

                <div className="flex flex-col items-center">
                    
                    <div className="bg-[#00B4D8] p-4 rounded-full mb-6">
                        <img src="https://i.postimg.cc/PqXRPDQr/task.png" alt="Complete Tasks" className="h-32" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Complete Tasks</h3>

                    <p className="text-gray-600">Accept and complete tasks to earn coins.</p>
                </div>
               
                <div className="flex flex-col items-center">
                    
                    <div className="bg-[#00B4D8] rounded-full mb-6">
                        <img src="https://i.ibb.co/5RkhbJX/rewards.png" alt="Earn Rewards" className="h-40 rounded-full" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Earn Rewards</h3>

                    <p className="text-gray-600">Get paid for your work and track your earnings.</p>
                </div>

            </div>
        </div>
    );
};

export default HowItWorks;