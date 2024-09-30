"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { analytics } from "@/lib/analytics";
import { Plus } from "lucide-react";
import React from "react";

const AccountPage = () => {
  const user = {
    id: "yf5wZOOcCp0XMldR5mPTI",
    title: "Conqueror of shippable solutions",
    email: "lukas@gmail.com",
    subscriptionPlan: "basic",
    connectedAccounts: ["google"],
  };

  function onFormSubmit() {
    analytics.identify(user.id, {
      fullName: "Lukas",
      title: "Conqueror of shippable solutions",
      email: "lukas@gmail.com",
      subscriptionPlan: "basic",
      connectedAccounts: ["google"],
    });
  }

  return (
    <div className="container max-w-[500px] py-32 space-y-4">
      <h1 className="text-2xl font-semibold">My Account</h1>
      <button onClick={() => onFormSubmit()}>Identify</button>
      <div className="flex gap-8 items-center">
        <div className="aspect-square grow shrink relative rounded-full overflow-hidden">
          <img
            src="/images/me2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <div className="mb-2">
            <Label>Subscription Plan</Label>
          </div>
          <div className="flex bg-muted p-1 rounded-md gap-1">
            <div className="rounded-sm p-4 px-5 flex flex-col items-center">
              <p className="font-medium">Free</p>
              <p className="text-muted-foreground">$0</p>
            </div>
            <div className="rounded-sm p-4 px-5 flex flex-col items-center shadow-md bg-background ">
              <p className="font-medium">Basic</p>
              <p className="text-muted-foreground">$5</p>
            </div>
            <div className="rounded-sm p-4 px-5 flex flex-col items-center">
              <p className="font-medium">Premium</p>
              <p className="text-muted-foreground">$15</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Label className="mb-2">Title</Label>
        <Input placeholder="Enter title..." />
      </div>
      <div>
        <Label className="mb-2">Name</Label>
        <Input placeholder="Enter name..." />
      </div>
      <div>
        <Label className="mb-2">Email</Label>
        <Input placeholder="Enter email..." />
      </div>
      <div>
        <Label className="mb-2">Connected Accounts</Label>
        <div className="flex items-center justify-start gap-2">
          <div className="rounded-md shadow-sm px-3 py-2 flex items-center gap-1.5 border">
            <img src="/images/google.png" alt="" className="w-4 h-4" />
            Google
          </div>
          <div className="rounded-md shadow-sm px-3 py-2 flex items-center gap-1.5 border text-muted-foreground">
            <Plus className="w-4 h-4" />
            Connect account
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
