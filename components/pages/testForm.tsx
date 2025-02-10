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
import { generateUniqueId } from "@/lib/generateUniqueId";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Phần tiêu đề bài tập phải có ít nhất 2 ký tự.",
  }).max(30, {
    message: "Phần tiêu đề bài tập không được dài quá 30 ký tự.",
  }),
  description: z.string().min(2, {
    message: "Miêu tả bài tập phải có ít nhất 2 ký tự.",
  }).max(60, {
    message: "Phần miêu tả bài tập không được dài quá 60 ký tự.",
  }),
});

export function BaiTapForm() {
  const mutation = useMutation(api.mutations.createBaiTap);
  const user = useUser();
  const organization = useOrganization();
  const { toast } = useToast();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  let toastMessage = `Bài tập mới có tiêu đề "` + form.getValues().title + `" đã được tạo.`;
  let toastTitle = `🎉 Tạo bài tập thành công`;

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (
      user.user != null &&
      user.user.username != null &&
      organization.organization != null
    ) {
      mutation({
        username: user.user.username,
        userId: user.user.id,
        orgId: organization.organization.id,
        baitapTitle: values.title,
        baitapDescription: values.description,
        baiTapId: generateUniqueId(),
      });
    } else {
      toastMessage =
        "Bạn phải đăng nhập để tạo bài tập. Vui lòng đăng nhập và thử lại.";
      toastTitle = "Đăng nhập để tạo bài tập";
    }
    toast({
      title: toastTitle,
      description: toastMessage,
    });
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tiêu đề</FormLabel>
              <FormControl>
                <Input placeholder="Bài tập mới" {...field} />
              </FormControl>
              <FormDescription>
                Đây là tiêu đề của bài tập bạn muốn tạo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Miêu tả</FormLabel>
              <FormControl>
                <Input placeholder="Miêu tả bài tập..." {...field} />
              </FormControl>
              <FormDescription>
                Đây là miêu tả của bài tập bạn muốn tạo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Tạo bài tập mới</Button>
      </form>
    </Form>
  );
}
