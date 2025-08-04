// File: templates/react/dashboard-admin/src/components/StatCard.jsx
function StatCard({ icon, title, value, change }) {
    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-between">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
                <div className="text-gray-400">{icon}</div>
            </div>
            <div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{change}</p>
            </div>
        </div>
    );
}
export default StatCard;