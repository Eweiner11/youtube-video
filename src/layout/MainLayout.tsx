import React, { useState } from "react";

interface MainLayoutProps {
  sidebar: React.ReactNode;
  main: React.ReactNode;
}

const MainLayout = ({ sidebar, main }: MainLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (!isSidebarOpen) {
    return (
      <div className="main-layout">
        <main className="main-content">{main}</main>
        <button onClick={toggleSidebar} className="toggle-sidebar">
          {isSidebarOpen ? "Close" : "Open"}
        </button>
      </div>
    );
  }

  return (
    <div
      className="main-layout"
      style={{ gridTemplateColumns: isSidebarOpen ? "1fr 250px" : "1fr 250px" }}
    >
      <main className="main-content">{main}</main>
      <aside className={`sidebar ${isSidebarOpen ? "" : "closed"}`}>
        {sidebar}
      </aside>
      <button onClick={toggleSidebar} className="toggle-sidebar">
        {isSidebarOpen ? "Close" : "Open"}
      </button>
    </div>
  );
};

export default MainLayout;
