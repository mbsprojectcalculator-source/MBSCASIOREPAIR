
import React, { useState, useEffect } from 'react';
import { AppTab, RepairRecord } from './types';
import RegistrationForm from './components/RegistrationForm';
import StatusSearch from './components/StatusSearch';
import ManagementPanel from './components/ManagementPanel';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.DAFTAR);

  return (
    <div className="min-h-screen flex flex-col items-center p-4 md:p-8 bg-[#0a0a0b] overflow-x-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900 blur-[120px] rounded-full"></div>
      </div>

      <header className="w-full max-w-4xl text-center mb-8 z-10">
        <h1 className="heading-font text-4xl md:text-6xl gold-text mb-2 tracking-widest uppercase">
          Casio Repair Sanctuary
        </h1>
        <p className="italic text-gray-500 font-light text-lg">
          Precision Restored, Fate Recalibrated.
        </p>
      </header>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="w-full max-w-4xl z-10 mt-6">
        <div className="glass rounded-xl p-6 md:p-10 shadow-2xl transition-all duration-500 min-h-[500px]">
          {activeTab === AppTab.DAFTAR && <RegistrationForm />}
          {activeTab === AppTab.SEMAK && <StatusSearch />}
          {activeTab === AppTab.MANAGEMENT && <ManagementPanel />}
        </div>
      </main>

      <footer className="w-full max-w-4xl mt-12 text-center text-gray-600 text-sm border-t border-white/5 pt-6">
        <p>&copy; {new Date().getFullYear()} Casio Repair Sanctuary — A Division of the Courtyard Archives.</p>
      </footer>
    </div>
  );
};

export default App;
