import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-center text-2xl">Dashboard Layout</h1>
      {children}
    </div>
  );
};

export default Layout;
