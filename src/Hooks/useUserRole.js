import { getUserRole } from "../API/verify";
import useAuth from "./useAuth";
import {useQuery} from "@tanstack/react-query";


const useUserRole = () => {
  const {user,loading} = useAuth();
  const {data:role,isLoading} = useQuery({
    enabled:!loading && !!user?.email,
    queryFn: async() => await getUserRole(user?.email),
    queryKey:['role'],
  })
  return [role,isLoading]
};

export default useUserRole;