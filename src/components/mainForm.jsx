"use client";

import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "./ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/notitoast/useToast";

const formSchema = z.object({
  variant: z.enum(["success", "failure", "warning", "info"]),
  positionVertical: z.enum(["top", "bottom"]),
  positionHorizontal: z.enum(["left", "right", "center"]),
  message: z.string().min(1, "Message cannot be empty"),
  duration: z.number().min(1).max(15),
  maxNotifications: z.number().min(1).max(10),
  withActionButton: z.boolean(),
});

export default function MainForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      variant: "success",
      positionVertical: "top",
      positionHorizontal: "center",
      message: "Hey! Welcome to NotiStack 🍞",
      duration: 5,
      maxNotifications: 5,
      withActionButton: true,
    },
  });

  const { addToast, setMaxNotifications, acttion } = useToast();

  const onSubmit = (data) => {
    console.log("data: ", data);
    setMaxNotifications(data.maxNotifications);
    addToast({
      variant: data.variant,
      message: data.message,
      position: {
        vertical: data.positionVertical,
        horizontal: data.positionHorizontal,
      },
      duration: data.duration,
      action: acttion(
        "Go to Google",
        () => alert("Retry action executed!"),
        data.withActionButton
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="variant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Variant</FormLabel>
              <FormControl>
                <RadioGroup
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <div className="flex gap-4">
                    <RadioGroupItem
                      id="success"
                      value="success"
                      label="Success"
                    />
                    <Label htmlFor="success" id="success">
                      Success
                    </Label>

                    <RadioGroupItem
                      id="failure"
                      value="failure"
                      label="Failure"
                    />
                    <Label htmlFor="failure" id="failure">
                      Failure
                    </Label>

                    <RadioGroupItem
                      id="warning"
                      value="warning"
                      label="Warning"
                    />
                    <Label htmlFor="warning" id="warning">
                      Warning
                    </Label>

                    <RadioGroupItem id="info" value="info" label="Info" />
                    <Label htmlFor="info" id="info">
                      Informative
                    </Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormDescription>
                This is your notification theme.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="positionVertical"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Vertical Position</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select vertical position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="top">Top</SelectItem>
                      <SelectItem value="bottom">Bottom</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="positionHorizontal"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horizontal Position</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select horizontal position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="left">Left</SelectItem>
                      <SelectItem value="right">Right</SelectItem>
                      <SelectItem value="center">Center</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration (seconds)</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={String(field.value)}
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 15 }, (_, i) => i + 1).map(
                        (second) => (
                          <SelectItem key={second} value={String(second)}>
                            {second} seconds
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex gap-8">
          <FormField
            control={form.control}
            name="maxNotifications"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Max Notifications</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={String(field.value)}
                    onValueChange={(value) => field.onChange(Number(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select max notifications" />
                    </SelectTrigger>
                    <SelectContent>
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <SelectItem key={num} value={String(num)}>
                            {num}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="withActionButton"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Action Button</FormLabel>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Input placeholder="Enter your message" {...field} />
              </FormControl>
              <FormDescription>
                This is your notification message.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          <Plus /> Create Toast
        </Button>
      </form>
    </Form>
  );
}
