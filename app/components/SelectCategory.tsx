"use client";
import React, { useState } from "react";
import { categoryItems } from "../lib/categoryItems";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

function SelectCategory() {
  const [itemSelected, setItemSelected] = useState<string>("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            className={
              itemSelected === item.name
                ? "border-2 border-primary"
                : "border-2 border-primary/10"
            }
            onClick={() => setItemSelected(item.name)}
          >
            <CardHeader>
              {item.image}
              <h3 className="font-medium">{item.title}</h3>
            </CardHeader>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default SelectCategory;
