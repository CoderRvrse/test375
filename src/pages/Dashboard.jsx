// File: templates/react/dashboard-admin/src/pages/Dashboard.jsx
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import StatCard from '../components/StatCard';
import Chart from '../components/Chart';

function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <StatCard icon={<DollarSign />} title="Total Revenue" value="$45,231.89" change="+20.1% from last month" />
                <StatCard icon={<Users />} title="Subscriptions" value="+2350" change="+180.1% from last month" />
                <StatCard icon={<CreditCard />} title="Sales" value="+12,234" change="+19% from last month" />
                <StatCard icon={<Activity />} title="Active Now" value="+573" change="+201 since last hour" />
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
               <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Overview</h2>
               <Chart />
            </div>
        </div>
    );
}
export default Dashboard;