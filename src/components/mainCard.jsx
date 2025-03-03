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

export default function MainCard({ className, ...props }) {
  return (
    <>
      <Card className={cn(className)} {...props}>
        <CardHeader>
          <CardTitle>Create your notifications.</CardTitle>
          <CardDescription>
            Get started by clicking the create button.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <MainForm />
        </CardContent>
      </Card>
    </>
  );
}
