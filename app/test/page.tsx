"use client";
import { Button } from "@/components/ui/button";
import { analytics } from "@/lib/analytics";
import React, { useEffect } from "react";

const events = [
  "Subscription Plan Changed",
  "Account Created",
  "Project Created",
  "Friend Invited",
  "Project Information Updated",
  "Email Entered",
  "Profile Updated",
  "Image Uploaded",
  "Password Changed",
  "Provider Connected",
  "Integration Connected",
  "Report Shared",
  "Report Downloaded",
  "Project Completed",
  "Homescreen Customized",
  "Notification Settings Updated",
];

const ecommevents = [
  "CTA Clicked",
  "Product Clicked",
  "Product Added",
  "Checkout Started",
  "Email Entered",
  "Address Entered",
  "Payment Method Added",
  "Order Completed",
  "Product Liked",
  "Purchase Completed",
];

const sportevents = [
  "Workout Completed",
  "Workout Started",
  "Friend Invited",
  "Profile Updated",
  "Image Uploaded",
  "Workout Customized",
  "Workout Analysis Shared",
  "Device Connected",
  "Workout Plan Completed",
  "Goal Set",
  "Goal Achieved",
];

const funnelevents = ["Payment Method Added", "Order Details Confirmed"];

const TestPage = () => {
  //register an interval that first clicks the reset button and the nrefreshes the page. Do that every 5 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeout(() => {
  //       document.getElementById("Payment Method Added")?.click();
  //     }, 100);
  //     setTimeout(() => {
  //       const mobile = window.innerWidth < 800;
  //       if (!mobile) {
  //         if (Math.random() < 0.6) {
  //           document.getElementById("Order Details Confirmed")?.click();
  //         }
  //       } else {
  //         if (Math.random() < 0.4) {
  //           document.getElementById("Order Details Confirmed")?.click();
  //         }
  //       }
  //     }, 200);
  //     //reset
  //     setTimeout(() => {
  //       document.getElementById("reset")?.click();
  //     }, 300);
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 500);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  const aqprops = ["invite", "organic", "paid"];

  return (
    <div>
      <Button
        id="reset"
        variant="destructive"
        onClick={() => analytics.reset()}
      >
        Reset
      </Button>
      <h1>Acquisition</h1>
      {aqprops.map((prop) => (
        <Button
          id={prop}
          onClick={() => {
            analytics.track("Account Created", {
              checkoutType: "regular",
            });
          }}
        >
          Account Created
        </Button>
      ))}
      <h1>Funnel Zoom</h1>
      {funnelevents.map((event) => (
        <Button
          id={event}
          onClick={() => {
            analytics.track(event, {
              checkoutType: "express",
            });
          }}
        >
          {event}
        </Button>
      ))}
      <h1>Sports App</h1>
      {sportevents.map((event) => (
        <Button id={event} onClick={() => analytics.track(event)}>
          {event}
        </Button>
      ))}
      <h1>Ecommerce</h1>
      {ecommevents.map((event) => (
        <Button id={event} onClick={() => analytics.track(event)}>
          {event}
        </Button>
      ))}
      <h1>Saas</h1>
      {events.map((event) => (
        <Button id={event} onClick={() => analytics.track(event)}>
          {event}
        </Button>
      ))}
    </div>
  );
};

export default TestPage;
