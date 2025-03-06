import { motion } from "framer-motion";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TableDemo({ users }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.6, bounce: 0.1 },
      }}
    >
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
    </motion.div>
  );
}
