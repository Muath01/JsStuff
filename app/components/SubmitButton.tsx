"use client";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton({
  title,
  disabled = false,
}: {
  title: string;
  disabled?: boolean;
}) {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> Submitting...
        </Button>
      ) : (
        <Button disabled={disabled} type="submit">
          {title}
        </Button>
      )}
    </>
  );
}

export function BuyButton({ price }: { price: number }) {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg" className="w-full mt-10">
          <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> Submitting...
        </Button>
      ) : (
        <Button type="submit" size="lg" className="w-full mt-10">
          Buy for ${price}
        </Button>
      )}
    </>
  );
}

export default SubmitButton;
