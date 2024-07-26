import ProductCard from "@/app/components/ProductCard";
import prisma from "@/app/lib/db";
import { delay } from "@/lib/utils";
import { CategoryTypes } from "@prisma/client";
import { notFound } from "next/navigation";
import React from "react";

async function getData(category: CategoryTypes | "all") {
  let input: CategoryTypes | undefined;

  switch (category) {
    case "template": {
      input = "template";
      break;
    }
    case "uikit": {
      input = "uikit";
      break;
    }
    case "icon": {
      input = "icon";
      break;
    }
    case "all": {
      input = undefined;
      break;
    }
    default: {
      return notFound();
    }
  }

  const data = await prisma.product.findMany({
    where: {
      category: input,
    },
    select: {
      id: true,
      name: true,
      price: true,
      smallDescription: true,
      images: true,
    },
  });

  return data;
}
async function CategoryPage({
  params,
}: {
  params: { category: CategoryTypes };
}) {
  const category = params.category;
  const data = await getData(category);
  await delay(2000);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-10 mt-4 ">
        {data.map((product) => (
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
    </div>
  );
}

export default CategoryPage;
