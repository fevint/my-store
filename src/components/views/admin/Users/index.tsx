import AdminLayout from "@/components/layouts/AdminLayout";
import Button from "@/components/ui/Button";
import styles from "./Users.module.scss";

type propType = {
  users: any;
};

const UsersAdminView = (props: propType) => {
  const { users } = props;
  console.log(users);
  return (
    <AdminLayout>
      <div className={styles.users}>
        <h1>User Management</h1>
        <table className={styles.users__table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index: number) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fullname}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <div className={styles.users__table__action}>
                    <Button type="button">Update</Button>
                    <Button type="button">Delete</Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default UsersAdminView;
