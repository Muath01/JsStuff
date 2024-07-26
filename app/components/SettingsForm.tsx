"use client";

import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "./SubmitButton";
import { useFormState } from "react-dom";
import { State, UpdateUserSettings } from "../actions";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface iAppProps {
  firstName: string;
  lastName: string;
  email: string;
}
export function SettingsForm({ email, firstName, lastName }: iAppProps) {
  const initialState: State = { message: "", status: undefined };
  const [state, formAction] = useFormState(UpdateUserSettings, initialState);

  const [formValues, setFormValues] = useState({
    firstName,
    lastName,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));

    console.log(formValues);
  };

  const isChanged =
    formValues.firstName !== firstName || formValues.lastName !== lastName;

  useEffect(() => {
    if (state?.status === "error") {
      toast.error(state.message);
    } else if (state?.status === "success") {
      toast.success(state.message);
    }
  }, [state]);
  return (
    <form action={formAction}>
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <CardDescription>Information about your account.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-5">
        {/* first name */}
        <div className="flex flex-col gap-y-2">
          <Label>First name</Label>
          <Input
            name="firstName"
            type="text"
            defaultValue={firstName}
            onChange={handleInputChange}
          />
        </div>
        {/* second name */}
        <div className="flex flex-col gap-y-2">
          <Label>Last name</Label>
          <Input
            name="lastName"
            type="text"
            defaultValue={lastName}
            onChange={handleInputChange}
          />
        </div>
        {/* email */}
        <div className="flex flex-col gap-y-2">
          <Label>email</Label>
          <Input name="email" type="email" disabled defaultValue={email} />
        </div>
      </CardContent>
      <CardFooter>
        <SubmitButton disabled={!isChanged} title="Update Settings" />
      </CardFooter>
    </form>
  );
}
