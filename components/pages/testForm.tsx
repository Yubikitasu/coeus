"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization, useUser } from "@clerk/clerk-react";
import { useToast } from "@/hooks/use-toast";
import { auth } from "@clerk/nextjs/server";

const formSchema = z.object({
  body: z.string().min(2, {
    message: "Body must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  const mutation = useMutation(api.mutations.createPost);
  const user = useUser();
  const organization = useOrganization();
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      body: "",
    },
  });

  let toastMessage = "Your post has been submitted!";

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (user.user != null && user.user.username != null && organization.organization != null) {
      mutation({ content: values.body, username: user.user.username, userId: user.user.id, orgId: organization.organization.id});
    } else {
      toastMessage = "You must be logged in or in a organization to submit a post.";
    }
    toast({
      description: toastMessage,
    })
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="body"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type something</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your not public display.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
