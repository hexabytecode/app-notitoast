"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import UserTable from "@/components/UserTable";
import { useToast } from "@/components/notitoast/useToast";

export default function User() {
  const [apiURL, setApiURL] = useState("");
  const [userData, setUserData] = useState();
  const { addToast, useAction } = useToast();

  const errorNoti = () => {
    addToast({
      variant: "failure",
      message: "Fetch Data Failed",
      position: {
        vertical: "top",
        horizontal: "right",
      },
      duration: 3,
    });
  };

  const successNoti = () => {
    addToast({
      variant: "success",
      message: "Fetch Data successful!",
      position: {
        vertical: "top",
        horizontal: "right",
      },
      duration: 3,
      action: useAction("Click me!", () => alert("I'm Happy!"), true),
    });
  };

  async function sendAPI() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      successNoti();
      setUserData(data);
    } catch (error) {
      errorNoti();
    }
  }

  return (
    <>
      <header className="mb-5 border-b-3 border-gray-800">
        <span className="text-3xl md:text-4xl font-bold">FetchData</span>
      </header>
      <div className="flex gap-4">
        <Input
          value={apiURL}
          onChange={(e) => setApiURL(e.target.value)}
          placeholder="enter your URL"
        />
        <Button onClick={sendAPI}>Send Request</Button>
      </div>
      <UserTable users={userData} />
    </>
  );
}
