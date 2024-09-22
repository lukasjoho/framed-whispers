"use client";

import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistance, formatDistanceToNow, formatRelative } from "date-fns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Event = {
  name: string;
  properties: string[];
  why: string;
  location: string;
  volume: number;
  lastSeen: string;
};

export const columns: ColumnDef<Event>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
    size: 270,
    cell: ({ row }) => (
      <span className="font-medium overflow-hidden" style={{ width: 320 }}>
        {row.original.name}
      </span>
    ),
  },
  {
    accessorKey: "properties",
    header: "Properties",
    size: 250,
    cell: ({ row }) => {
      return (
        <div className="flex flex-wrap gap-1.5 overflow-hidden">
          {row.original.properties.map((property, index) => {
            //if index > 2 then badge with + remaining items
            if (index > 1) {
              return (
                <pre>
                  <Badge className="font-normal text-2xs" variant="secondary">
                    +{row.original.properties.length - 1}
                  </Badge>
                </pre>
              );
            }
            return (
              <pre>
                <Badge className="font-normal text-2xs" variant="secondary">
                  {property}
                </Badge>
              </pre>
            );
          })}
        </div>
      );
    },
  },
  //   {
  //     accessorKey: "location",
  //     header: "Location",
  //   },
  {
    accessorKey: "volume",
    header: "Last 30d Volume",
    cell: ({ row }) => {
      return (
        <span className="overflow-hidden">
          {row.original.volume.toLocaleString()}
        </span>
      );
    },
  },
  {
    accessorKey: "lastSeen",
    header: "Last Seen",
    cell: ({ row }) => {
      return <span className="overflow-hidden">{row.original.lastSeen}</span>;
    },
  },
  // {
  //   accessorKey: "why",
  //   header: "Triggered when...",
  //   cell: ({ row }) => {
  //     return <span className="text-sm">{row.original.why}</span>;
  //   },
  // },
];
