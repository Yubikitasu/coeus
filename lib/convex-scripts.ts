import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";

export function createPost() {
    const mutation = useMutation(api.mutations.createPost);
    mutation({ content: "test", username: "test" });
}