import React, { ReactNode } from "react";

const AdminLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>admin layout{children}</div>;
};

export default AdminLayout;
