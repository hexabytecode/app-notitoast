import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableDemo({ users }) {
  return (
    <Table>
      <TableCaption>A list of your user details.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>UserName</TableHead>
          <TableHead className="text-right">Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map(({ name, email, username }, id) => (
          <TableRow key={id}>
            <TableCell className="font-medium">{name}</TableCell>
            <TableCell>@{username}</TableCell>
            <TableCell className="text-right">{email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
