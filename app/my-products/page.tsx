import React from "react";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import ProductCard from "../components/ProductCard";
import { delay } from "@/lib/utils";
import { unstable_noStore as noStore } from "next/cache";

async function getData(userId: string) {
  const data = await prisma.product.findMany({
    where: {
      userId,
    },
    select: {
      name: true,
      images: true,
      price: true,
      smallDescription: true,
      id: true,
    },
  });

  return data;
}
async function MyProductsRoute() {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorised");
  }

  const data = await getData(user.id);
  console.log("data: ", data);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <h1 className="text-2xl font-bold">My Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:grid-cols-2 mt-4">
        {data.map(({ id, images, name, price, smallDescription }) => (
          <ProductCard
            key={id}
            id={id}
            images={images}
            price={price}
            smallDescription={smallDescription}
            title={name}
          />
        ))}
        <h1>here</h1>
      </div>
    </section>
  );
}

export default MyProductsRoute;
