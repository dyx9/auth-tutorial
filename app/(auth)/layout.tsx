const AuthLayout = ({ children }: any) => {
  return (
    <div className="flex flex-col gap-y-4">
      <nav className="bg-red-500 text-white">
        This is a shared navbar for Auth
      </nav>
      {children}
    </div>
  );
};

export default AuthLayout;
