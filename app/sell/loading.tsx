import React from "react";

import { Skeleton } from "@/components/ui/skeleton";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

function LoadingState() {
  return (
    <div>
      <CardHeader>
        <Skeleton className="h-8 w-40 mb-2" />
        <Skeleton className="h-6 w-full" />
      </CardHeader>
      <CardContent className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-20 mb-1" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-24 w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-64 w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-32 w-full" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Skeleton className="h-4 w-32 mb-1" />
          <Skeleton className="h-10 w-full" />
        </div>
      </CardContent>
      <CardFooter className="mt-5">
        <Skeleton className="h-10 w-32" />
      </CardFooter>
    </div>
  );
}

export default LoadingState;
