import { logoutAction } from "@/actions/auth.action";
import { axiosInstance } from "@/lib/axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const useAuth = () => {
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const pathname = usePathname();
  const logout = async () => {
    await logoutAction();
  };
  useEffect(() => {
    const refetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/profile/me`);
        setUser(response.data.user);
        setAuthenticated(true);
      } catch {
        setUser({});
        setAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    refetchUser();
  }, [pathname]);
  return { user, isLoading, isAuthenticated, logout };
};
