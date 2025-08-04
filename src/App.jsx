// File: templates/react/dashboard-admin/src/App.jsx
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10">
        <Dashboard />
      </main>
    </div>
  )
}
export default App;