import Image from "next/image";
import React from "react";

interface ProductProps {
  images: string[];
  title: string;
  price: number;
  smallDescription: string;
  id: string;
}

function ProductCard({
  images,
  title,
  price,
  smallDescription,
  id,
}: ProductProps) {
  return (
    <div className="rounded-lg">
      <div className="relative h-[230px]">
        <Image
          alt="Product image"
          src={images[0]}
          fill
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h1 className="font-semibold text-xl ">{title}</h1>
        <h3 className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/10 ">
          ${price}
        </h3>
      </div>

      <p className="text-gray-600 line-clamp-2 text-sm mt-2">
        {smallDescription}
      </p>
    </div>
  );
}

export default ProductCard;
