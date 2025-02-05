import './App.css';
import RepairInvoiceForm from './components/RepairInvoice/RepairInvoiceForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">iCell</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto py-6 px-4">
        <RepairInvoiceForm />
      </main>
      
      <footer className="bg-white shadow mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} iCell. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;