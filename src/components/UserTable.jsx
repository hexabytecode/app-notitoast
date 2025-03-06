import Table from "./Table";

export default function UserTable({ users }) {
  console.log("data passed to UserTable", users);

  return (
    <div className="my-5">
      {users ? <Table users={users} /> : <span>No Data Available</span>}
    </div>
  );
}
