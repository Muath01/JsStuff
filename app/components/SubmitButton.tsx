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

export default SubmitButton;
