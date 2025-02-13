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
import { api } from "@/convex/_generated/api";
import { toast } from "@/hooks/use-toast";
import { useOrganization, useUser } from "@clerk/clerk-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckIcon } from "@radix-ui/react-icons";
import { useMutation } from "convex/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import LatexAdder from "./LatexAdder";

const FormSchema = z.object({
  cauhoi: z
    .string()
    .min(2, { message: "Câu hỏi phải có ít nhất 2 ký tự." })
    .max(500, { message: "Câu hỏi không được dài quá 500 ký tự." }),
  cautraloiA: z
    .string()
    .min(1, { message: "Câu trả lời phải có ít nhất 1 ký tự." })
    .max(300, { message: "Câu trả lời không được dài quá 300 ký tự." }),
  cautraloiB: z
    .string()
    .min(1, { message: "Câu trả lời phải có ít nhất 1 ký tự." })
    .max(300, { message: "Câu trả lời không được dài quá 300 ký tự." }),
  cautraloiC: z
    .string()
    .min(1, { message: "Câu trả lời phải có ít nhất 1 ký tự." })
    .max(300, { message: "Câu trả lời không được dài quá 300 ký tự." }),
  cautraloiD: z
    .string()
    .min(1, { message: "Câu trả lời phải có ít nhất 1 ký tự." })
    .max(300, { message: "Câu trả lời không được dài quá 300 ký tự." }),
});

interface CHFTNProps {
  btId: string;
}

export default function CauHoiFormTN({ btId }: CHFTNProps) {
  const [correctAnswers, setCorrectAnswer] = useState([""]);
  const [clicked, setClicked] = useState([false, false, false, false]);
  const mutation = useMutation(api.mutations.createCauHoi);
  const user = useUser();
  const organization = useOrganization();

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
    if (
      user.user != null &&
      user.user.username != null &&
      organization.organization != null
    ) {
      mutation({
        userId: user.user.id,
        orgId: organization.organization.id,
        cauhoi: data.cauhoi,
        cautraloiA: data.cautraloiA,
        cautraloiB: data.cautraloiB,
        cautraloiC: data.cautraloiC,
        cautraloiD: data.cautraloiD,
        correctAnswer: correctAnswers,
        baiTapId: btId,
      });
      toast({
        title: "Tạo câu hỏi thành công.",
      });
    }
  }

  function checkClicked(index: number, value: string) {
    const array = [...clicked];
    if (!correctAnswers.includes(value) && array[index] == false) {
      array[index] = true;
      setClicked(array);
    } else if (correctAnswers.includes(value) && array[index] == true) {
      array[index] = false;
      setClicked(array);
    }
  }

  function handleCorrectClick(value: string) {
    if (!correctAnswers.includes(value)) {
      setCorrectAnswer([...correctAnswers, value]);
    } else {
      const array = [...correctAnswers];
      const index = array.indexOf(value);
      if (index !== -1) {
        array.splice(index, 1);
        setCorrectAnswer(array);
      }
    }
  }

  return (
    <div className="lg:w-[50%] md:w-[65%] w-[100%] h-auto border border-input p-6 shadow-sm bg-background justify-between items-center rounded-md">
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
                  Mẹo: Bạn không cần phải viết &quot;Câu 1:&quot; ở đầu câu hỏi.
                  Hệ thống sẽ tự động thêm vào.
                </FormDescription>
                <LatexAdder />
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
                    <div
                      className={
                        "rounded-full border h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent " +
                        (clicked[0] === true
                          ? "border-green-600 text-green-600"
                          : "border-input")
                      }
                      onClick={() => {
                        handleCorrectClick("A");
                        checkClicked(0, "A");
                      }}
                    >
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
                    <div
                      className={
                        "rounded-full border h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent " +
                        (clicked[1] === true
                          ? "border-green-600 text-green-600"
                          : "border-input")
                      }
                      onClick={() => {
                        handleCorrectClick("B");
                        checkClicked(1, "B");
                      }}
                    >
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
                    <div
                      className={
                        "rounded-full border h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent " +
                        (clicked[2] === true
                          ? "border-green-600 text-green-600"
                          : "border-input")
                      }
                      onClick={() => {
                        handleCorrectClick("C");
                        checkClicked(2, "C");
                      }}
                    >
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
                    <div
                      className={
                        "rounded-full border h-6 w-6 flex items-center justify-center ml-2 shadow-sm cursor-pointer hover:bg-accent " +
                        (clicked[3] === true
                          ? "border-green-600 text-green-600"
                          : "border-input")
                      }
                      onClick={() => {
                        handleCorrectClick("D");
                        checkClicked(3, "D");
                      }}
                    >
                      <CheckIcon />
                    </div>
                  </div>
                  <FormMessage />
                </FormItem>
              </>
            )}
          />

          <FormDescription className="text-sm text-muted-foreground">
            Mẹo: Bạn không cần phải viết &quot;A.&quot;, &quot;B.&quot;,
            &quot;C.&quot;, &quot;D.&quot; ở đầu câu trả lời. Hệ thống sẽ tự
            động thêm vào.
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
