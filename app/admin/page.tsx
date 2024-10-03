import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { formatCurrency, formatNumber } from "../lib/formatCurrency";
import prisma from "../lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getProducts(userId: string) {
  try {
    const data = await prisma.product.count({
      where: {
        userId,
      },
    });

    return data;
  } catch (error) {
    console.error(error);
  }
}
async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("Unauthorised");
  }

  const productCount = await getProducts(user.id);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          title="Salexs"
          subtitle={`${formatNumber(22)} Orders`}
          body={formatCurrency(534)}
        />
        <DashboardCard
          title="Customers"
          subtitle={`${formatNumber(22)} Orders`}
          body={formatCurrency(534)}
        />
        <DashboardCard
          title="Active Products"
          subtitle={`${formatNumber(productCount || 0)} Orders`}
          body={formatNumber(productCount || 0)}
        />
      </div>
    </section>
  );
}

type DashboardCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}

export default page;
