
const TopEarners = () => {

    return (

         <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-5xl font-extrabold mb-12 text-center text-gray-900">Top Earners</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {topEarners.map(earner => (
                            <div key={earner.id} className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                                <img src={earner.picture} alt={earner.name} className="h-24 w-24 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-gray-800">{earner.name}</h3>
                                <p className="text-gray-500">{earner.coins} Coins</p>
                                <p className="text-gray-400">Tasks Completed: {earner.taskCompletion}</p>
                            </div>
                        ))}
                    </div>
                </div>
    );
};

export default TopEarners;