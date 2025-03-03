"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MainForm from "./mainForm";

export default function CardDemo({ className, ...props }) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>NotiToast</CardTitle>
        <CardDescription>Create your notifications.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <MainForm />
      </CardContent>
    </Card>
  );
}
