import UsersAdminView from "@/components/views/admin/Users";
import { retrievData } from "@/lib/firebase/service";
import userServices from "@/services/user";
import { useEffect, useState } from "react";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getAllUsers();
      setUsers(data.data);
    };
    getAllUsers();
  }, []);
  console.log(users);
  return (
    <>
      <UsersAdminView users={users} />
    </>
  );
};

export default AdminUsersPage;
