import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { LoadingProductCard } from "../components/ProductCard";

function LoadingFile() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 lg:grid-cols-3">
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </div>
    </div>
  );
}

export default LoadingFile;
