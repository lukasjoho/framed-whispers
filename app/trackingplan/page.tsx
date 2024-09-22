import React from "react";
import { DataTable } from "./data-table";
import { columns, Event } from "./columns";
import { Input } from "@/components/ui/input";
import Counter from "./counter";

async function getData(): Promise<Event[]> {
  // Fetch data from your API here.
  return [
    {
      name: "App Opened",
      properties: ["from"],
      why: "user opens the app.",
      location: "home",
      volume: 43415,
      lastSeen: "Just now",
    },
    {
      name: "App Installed",
      properties: ["type"],
      why: "app is installed.",
      location: "home",
      volume: 2341,
      lastSeen: "3 min ago",
    },
    {
      name: "Workout Started",
      properties: ["type", "name", "duration"],
      why: "workout is started from anywhere in app.",
      location: "home",
      volume: 24035,
      lastSeen: "Just now",
    },
    {
      name: "Workout Paused",
      properties: ["type", "duration", "name"],
      why: "workout is paused.",
      location: "gym",
      volume: 3334,
      lastSeen: "1 min ago",
    },
    {
      name: "Workout Resumed",
      properties: ["pauseLength"],
      why: "Tracks when a paused workout is resumed",
      location: "park",
      volume: 231,
      lastSeen: "2 min ago",
    },
    {
      name: "Workout Completed",
      properties: ["type", "duration", "caloriesBurned"],
      why: "Tracks the completion of a workout",
      location: "home",
      volume: 14392,
      lastSeen: "Just now",
    },
    {
      name: "Goal Set",
      properties: ["name", "goalType", "duration"],
      why: "Tracks when a fitness goal is set by the user",
      location: "mobileApp",
      volume: 234,
      lastSeen: "32 min ago",
    },
    {
      name: "Payment Completed",
      properties: ["paymentMethod"],
      why: "Tracks when a fitness goal is set by the user",
      location: "mobileApp",
      volume: 234,
      lastSeen: "32 min ago",
    },
    {
      name: "Goal Achieved",
      properties: ["goalType", "target"],
      why: "Tracks when a fitness goal is achieved",
      location: "mobileApp",
      volume: 13,
      lastSeen: "13h ago",
    },
    {
      name: "Goal Updated",
      properties: ["goalType", "newTarget"],
      why: "Tracks when a fitness goal is updated",
      location: "mobileApp",
      volume: 56,
      lastSeen: "4h ago",
    },

    {
      name: "Weight Logged",
      properties: ["weight", "unit"],
      why: "Tracks the user's body weight",
      location: "mobileApp",
      volume: 432,
      lastSeen: "5 min ago",
    },
    {
      name: "Exercise Added",
      properties: ["exerciseType", "name"],
      why: "Tracks when a custom exercise is added",
      location: "mobileApp",
      volume: 49,
      lastSeen: "2h ago",
    },
    {
      name: "Challenge Joined",
      properties: ["challengeType"],
      why: "Tracks when a user joins a fitness challenge",
      location: "mobileApp",
      volume: 402,
      lastSeen: "13 min ago",
    },
    {
      name: "Challenge Completed",
      properties: ["challengeType", "name", "duration"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 32,
      lastSeen: "6h ago",
    },
    {
      name: "Profile Updated",
      properties: ["fields"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 987,
      lastSeen: "1 min ago",
    },
    {
      name: "Friend Invited",
      properties: ["type"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 145,
      lastSeen: "2h ago",
    },
    {
      name: "Media Uploaded",
      properties: ["mediaType"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 5671,
      lastSeen: "4 min ago",
    },
    {
      name: "Screen Viewed",
      properties: ["screen"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 245987,
      lastSeen: "Just now",
    },
    {
      name: "Onboarding Started",
      properties: ["screen"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 1890,
      lastSeen: "57 minutes ago",
    },
    {
      name: "Account Created",
      properties: ["provider"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 1463,
      lastSeen: "3h ago",
    },
    {
      name: "Training Journey Selected",
      properties: ["journey"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 29,
      lastSeen: "2 days ago",
    },
    {
      name: "Reminder Set",
      properties: ["value"],
      why: "Tracks when a user completes a fitness challenge",
      location: "mobileApp",
      volume: 487,
      lastSeen: "4h ago",
    },
    {
      name: "Plan Selected",
      properties: ["plan"],
      why: "plan selected by user.",
      location: "mobileApp",
      volume: 587,
      lastSeen: "8 min ago",
    },
    {
      name: "Trial Started",
      properties: ["plan"],
      why: "user started trial.",
      location: "mobileApp",
      volume: 302,
      lastSeen: "6 min ago",
    },
    {
      name: "Filter Selected",
      properties: ["filterType"],
      why: "a workout filter was tapped.",
      location: "mobileApp",
      volume: 473,
      lastSeen: "30 sec ago",
    },
  ];
}

const TrackingPlanPage = async () => {
  const data = await getData();
  const activeEvents = data.length;

  const sortedData = data.sort((a, b) => b.volume - a.volume);
  return (
    <div className="container flex flex-col h-screen py-12 pb-10 gap-4 overflow-hidden">
      <div className="flex justify-between px-2 relative">
        {/* <h1 className="font-semibold text-3xl">Tracking Plan</h1> */}
        <div className="text-right self-center absolute right-2 pt-20">
          {/* <span className="text-5xl font-semibold">
            {activeEvents.toLocaleString()}
          </span> */}
          <Counter x={25} y={865} />
          <p className="font-medium uppercase tracking-wider text-green-500">
            Active Events
          </p>
        </div>
      </div>
      {/* <DataTable columns={columns} data={sortedData} /> */}
    </div>
  );
};

export default TrackingPlanPage;
