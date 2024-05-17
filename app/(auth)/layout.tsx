import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex items-center justify-center bg-blue-400">
      {/* <nav className="bg-red-500 text-white">
        This is a shared navbar for Auth
      </nav> */}
      {children}
    </div>
  );
};

export default AuthLayout;
