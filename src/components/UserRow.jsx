export default function UserRow({ user }) {
  return (
    <div className="border rounded py-2 px-1 my-2 flex justify-around">
      <p>{user.name}</p>
      <p>@{user.username}</p>
      <p>{user.email}</p>
    </div>
  );
}
