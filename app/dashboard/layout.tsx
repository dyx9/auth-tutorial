const DashboardLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-black text-white">
        This is a shared navbar for Dashboard
      </nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
