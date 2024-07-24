import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import React from "react";
import SelectCategory from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import Tiptap from "../components/Editor";

function SellRoute() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>Sell your product with ease</CardTitle>
            <CardDescription>
              Please describe your product in details
            </CardDescription>
            <CardContent className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-2">
                <Label>Name</Label>
                <Input type="text" placeholder="Name of Your Product" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Category</Label>
                <SelectCategory />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Price</Label>
                <Input placeholder="$0.00" type="number" />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Small Summary</Label>
                <Textarea placeholder="Product Description..." />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Description</Label>
                <Tiptap />
              </div>
            </CardContent>
          </CardHeader>
        </form>
      </Card>
    </section>
  );
}

export default SellRoute;
