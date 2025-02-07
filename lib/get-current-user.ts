"use server"

import { currentUser } from "@clerk/nextjs/server";

export async function getCurrentUser() {
    const user = await currentUser();

    if (!user) return null;

    return user;
}