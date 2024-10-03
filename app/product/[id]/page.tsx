import { BuyProduct } from "@/app/actions";
import ProductDescription from "@/app/components/ProductDescription";
import { BuyButton } from "@/app/components/SubmitButton";
import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { delay } from "@/lib/utils";
import { JSONContent } from "@tiptap/react";
import Image from "next/image";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircleMore } from "lucide-react";

//get the product
async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      id: true,
      category: true,
      description: true,
      smallDescription: true,
      name: true,
      images: true,
      price: true,
      createdAt: true,
      User: {
        select: {
          profileImage: true,
          firstName: true,
          lastName: true,
        },
      },
    },
  });

  return data;
}

async function ProductPage({ params }: { params: { id: string } }) {
  noStore();

  const productId = params.id;
  const data = await getData(productId);

  return (
    <section className="max-w-7xl mx-auto px-4 lg:px-8 lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16  ">
      <Carousel className="lg:row-end-1 lg:col-span-4">
        <CarouselContent>
          {data?.images.map((imgLink, index) => (
            <CarouselItem key={index}>
              <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                <Image
                  src={imgLink}
                  alt="Product Image"
                  fill
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="mr-16 w-16 h-16" />
        <CarouselPrevious className="ml-16 w-16 h-16 " />
      </Carousel>

      {/* product title */}
      <div className="max-w-2xl mx-auto mt-5 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3  w-full ">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          {data?.name}
        </h1>
        <p className="mt-2 text-muted-foreground ">{data?.smallDescription}</p>
        <form action={BuyProduct}>
          <input type="hidden" value={data?.id} name="id" />
          <BuyButton price={data?.price as number} />
        </form>
        <div className="border-t border-gray-200 mt-10 pt-10">
          <div className="grid grid-cols-2 w-full gap-y-3">
            <h3 className="text-sm font-medium text-muted-foreground col-span-1 ">
              Released:
            </h3>
            <h3 className="text-sm font-medium col-span-1 text-left ml-2">
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "long",
              }).format(data?.createdAt)}
            </h3>

            <h3 className="text-sm font-medium text-muted-foreground  col-span-1 ">
              Category:
            </h3>
            <h3 className="text-sm font-medium col-span-1 text-left ml-2">
              {data?.category}
            </h3>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-10"></div>
        <Card className="mt-10 border-none shadow-none">
          <CardHeader className="flex flex-row items-center gap-x-2">
            <Avatar>
              <AvatarImage src={data?.User?.profileImage} />
              <AvatarFallback>{data?.User?.firstName}</AvatarFallback>
            </Avatar>

            <CardDescription className="text-lg text-black font-semibold flex flex-row gap-x-2">
              {data?.User?.firstName} {data?.User?.lastName}
              {/* <MessageCircleMore size={24} /> */}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4 mb-10">
        <ProductDescription content={data?.description as JSONContent} />
      </div>
    </section>
  );
}

export default ProductPage;
