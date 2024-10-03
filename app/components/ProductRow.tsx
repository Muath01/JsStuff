import React, { Suspense } from "react";
import prisma from "../lib/db";
import { date } from "zod";
import { notFound } from "next/navigation";
import ProductCard, { LoadingProductCard } from "./ProductCard";
import Link from "next/link";
import { delay } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

interface CategoryProps {
  category: "newest" | "templates" | "uikits" | "icons";
}
async function getData({ category }: CategoryProps) {
  switch (category) {
    case "icons": {
      const data = await prisma.product.findMany({
        where: {
          category: "icon",
        },
        select: {
          price: true,
          images: true,
          name: true,
          smallDescription: true,
          id: true,
        },
        take: 4,
      });

      return {
        data: data,
        title: "Icons",
        link: "/products/icon",
      };
    }
    case "newest": {
      const data = await prisma.product.findMany({
        select: {
          price: true,
          images: true,
          name: true,
          smallDescription: true,
          id: true,
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 4,
      });

      return {
        data: data,
        title: "Newest Products",
        link: "/products/all",
      };
    }
    case "templates": {
      const data = await prisma.product.findMany({
        where: {
          category: "template",
        },
        select: {
          price: true,
          images: true,
          name: true,
          smallDescription: true,
          id: true,
        },
        take: 4,
      });

      return {
        data: data,
        title: "Templates",
        link: "/products/template",
      };
    }
    case "uikits": {
      const data = await prisma.product.findMany({
        where: {
          category: "uikit",
        },
        select: {
          price: true,
          images: true,
          name: true,
          smallDescription: true,
          id: true,
        },
        take: 4,
      });

      return {
        data: data,
        title: "UiKits",
        link: "/products/uikit",
      };
    }
    default: {
      return notFound();
    }
  }
}
export async function ProductRow({ category }: CategoryProps) {
  return (
    <section className="mt-12">
      <Suspense fallback={<LoadingState />}>
        <LoadRows category={category} />
      </Suspense>
    </section>
  );
}

async function LoadRows({ category }: CategoryProps) {
  const data = await getData({ category: category });

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tighter">
          {data.title}
        </h2>
        <Link
          className="text-sm hidden font-medium text-primary hover:text-primary/70 md:block"
          href={data.link}
        >
          All Products <span>&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 mt-4 gap-10">
        {data.data.map((product) => (
          <ProductCard
            images={product.images}
            key={product.id}
            id={product.id}
            title={product.name}
            price={product.price}
            smallDescription={product.smallDescription}
          />
        ))}
      </div>
    </>
  );
}

function LoadingState() {
  return (
    <div>
      <Skeleton className="h-8 w-56" />
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-10 lg:grid-cols-4">
        <LoadingProductCard />
        <LoadingProductCard />
        <LoadingProductCard />
      </div>
    </div>
  );
}
