import React from "react";

import Sidebar from "@/components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full relative">
      <div className="hidden md:flex md:w-64 h-full md:flex-col md:fixed md:inset-y-0 z-80 border-r-2 ">
        <div className="flex items-center justify-center h-screen bg-white">
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-64 bg-slate-200 h-full">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
