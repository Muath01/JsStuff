import React from "react";
import prisma from "../lib/db";
import { date } from "zod";
import { notFound } from "next/navigation";
import ProductCard from "./ProductCard";
import Link from "next/link";

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
        take: 3,
      });

      return {
        data: data,
        title: "Icons",
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
        take: 3,
      });

      return {
        data: data,
        title: "Newest Products",
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
        take: 3,
      });

      return {
        data: data,
        title: "Templates",
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
        take: 3,
      });

      return {
        data: data,
        title: "UiKits",
      };
    }
    default: {
      return notFound();
    }
  }
}
export async function ProductRow({ category }: CategoryProps) {
  const data = await getData({ category: category });

  return (
    <section className="mt-12">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-extrabold tracking-tighter">
          {data.title}
        </h2>
        <Link
          className="text-sm hidden font-medium text-primary hover:text-primary/70 md:block"
          href="#"
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
    </section>
  );
}

export default ProductRow;
