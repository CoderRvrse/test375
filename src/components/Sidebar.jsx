// File: templates/react/dashboard-admin/src/components/Sidebar.jsx
import { Home, Settings, Users, BarChart } from 'lucide-react';

function Sidebar() {
    const navItems = [
        { icon: <Home />, name: 'Dashboard' },
        { icon: <Users />, name: 'Users' },
        { icon: <BarChart />, name: 'Analytics' },
        { icon: <Settings />, name: 'Settings' },
    ];
    return (
        <aside className="w-64 bg-white dark:bg-gray-800 p-6 shadow-lg hidden md:block">
            <h1 className="text-2xl font-bold text-yellow-400 mb-10">GOLD X</h1>
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} className="mb-4">
                            <a href="#" className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-yellow-400 hover:text-white rounded-md transition-colors">
                                {item.icon}
                                <span className="ml-4">{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}
export default Sidebar;