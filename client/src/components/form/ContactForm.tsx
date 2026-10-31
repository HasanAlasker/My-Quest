import { Form } from "formik";
import { useState, type Dispatch, type SetStateAction } from "react";
import * as Yup from "yup";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import AppForm from "./AppForm";
import InputField from "./Input";

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Name is required").max(100),
  email: Yup.string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required")
    .max(254),
  phone: Yup.string()
    .trim()
    .required("Phone is required")
    .matches(/^\+?[\d\s()-]{7,20}$/, "Enter a valid phone number"),
  description: Yup.string().trim().max(1000, "Keep it under 1000 characters"),
});

export type BookCallData = {
  name: string;
  email: string;
  phone: string;
  description?: string;
};

type Status = "idle" | "success" | "error";

interface Props {
  status: Status;
  setStatus: Dispatch<SetStateAction<Status>>;
}

export default function ContactForm({status, setStatus}:Props) {
  const [isSubmitting, setSubmit] = useState(false);


  const initialValues: BookCallData = {
    name: "",
    email: "",
    phone: "",
    description: "",
  };

  const handleSubmit = async (values: BookCallData) => {
    try {
      setSubmit(true);
      console.log(values);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setSubmit(false);
    }
  };

  return (
    <AppForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-5" noValidate>
        <InputField
          label="Name"
          name="name"
          placeholder="Your name"
          iconName="user"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <InputField
            label="Email"
            name="email"
            type="email"
            placeholder="you@example.com"
            iconName="mail"
          />
          <InputField
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+1 555 000 0000"
            iconName="phone"
          />
        </div>

        <InputField
          label="Project description (optional)"
          name="description"
          placeholder="What are you building, and when do you need it?"
          iconName="message-square"
          multiline
        />

        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting && <Spinner />}
          {isSubmitting ? "Submitting..." : "Book free call"}
        </Button>

        <p role="alert" className="min-h-5 text-sm text-destructive">
          {status === "error" &&
            "Something went wrong. Please try again, or email us directly."}
        </p>
      </Form>
    </AppForm>
  );
}
