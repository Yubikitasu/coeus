"use client";

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
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon } from "@radix-ui/react-icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

const FormSchema = z.object({
  cauhoi: z
    .string()
    .min(10, { message: "Câu hỏi phải có ít nhất 10 ký tự." })
    .max(160, { message: "Câu hỏi không được dài quá 160 ký tự." }),
  cautraloiA: z
    .string()
    .min(2, { message: "Câu trả lời phải có ít nhất 2 ký tự." })
    .max(160, { message: "Câu trả lời không được dài quá 160 ký tự." }),
  cautraloiB: z
    .string()
    .min(2, { message: "Câu trả lời phải có ít nhất 2 ký tự." })
    .max(160, { message: "Câu trả lời không được dài quá 160 ký tự." }),
  cautraloiC: z
    .string()
    .min(2, { message: "Câu trả lời phải có ít nhất 2 ký tự." })
    .max(160, { message: "Câu trả lời không được dài quá 160 ký tự." }),
  cautraloiD: z
    .string()
    .min(2, { message: "Câu trả lời phải có ít nhất 2 ký tự." })
    .max(160, { message: "Câu trả lời không được dài quá 160 ký tự." }),
});

export default function CauHoiFormTN() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      cauhoi: "",
      cautraloiA: "",
      cautraloiB: "",
      cautraloiC: "",
      cautraloiD: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="w-[65%] h-auto border border-input p-6 shadow-sm bg-background justify-between items-center rounded-md">
      <h1 className="text-2xl font-black mb-2">Tạo câu hỏi trắc nghiệm</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="cauhoi"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nhập câu hỏi:</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Nhập câu hỏi tại đây..."
                    className="min-h-[100px] my-2"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Mẹo: Bạn không cần phải viết "Câu 1:", "Câu 2:" ở đầu câu hỏi.
                  Hệ thống sẽ tự động thêm vào.
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cautraloiA"
            render={({ field }) => (
              <>
                <Label>Nhập câu trả lời:</Label>
                <FormItem>
                  <div className="flex flex-row items-center">
                    <FormControl>
                      <Input
                        placeholder="Nhập câu trả lời A tại đây..."
                        className="my-2"
                        {...field}
                      />
                    </FormControl>
                    <div className="rounded-full border border-input h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent">
                      <CheckIcon />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="cautraloiB"
            render={({ field }) => (
              <>
                <FormItem>
                  <div className="flex flex-row items-center">
                    <FormControl>
                      <Input
                        placeholder="Nhập câu trả lời B tại đây..."
                        className="my-2"
                        {...field}
                      />
                    </FormControl>
                    <div className="rounded-full border border-input h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent">
                      <CheckIcon />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="cautraloiC"
            render={({ field }) => (
              <>
                <FormItem>
                  <div className="flex flex-row items-center">
                    <FormControl>
                      <Input
                        placeholder="Nhập câu trả lời C tại đây..."
                        className="my-2"
                        {...field}
                      />
                    </FormControl>
                    <div className="rounded-full border border-input h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent">
                      <CheckIcon />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />
          <FormField
            control={form.control}
            name="cautraloiD"
            render={({ field }) => (
              <>
                <FormItem>
                  <div className="flex flex-row items-center">
                    <FormControl>
                      <Input
                        placeholder="Nhập câu trả lời D tại đây..."
                        className="my-2"
                        {...field}
                      />
                    </FormControl>
                    <div className="rounded-full border border-input h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent">
                      <CheckIcon />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          <FormDescription className="text-sm text-muted-foreground">
            Mẹo: Bạn không cần phải viết "A.", "B.", "C.", "D." ở đầu câu trả
            lời. Hệ thống sẽ tự động thêm vào.
          </FormDescription>
          <Button className="w-[100%]" variant={"outline"} type="submit">
            Tạo câu hỏi
          </Button>
        </form>
      </Form>
      <div className="my-2"></div>
    </div>
  );
}
