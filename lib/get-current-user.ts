"use server"

import { auth, currentUser } from "@clerk/nextjs/server";

export async function getCurrentUser() {
    const { userId } = await currentUser();

    if (!userId) return null;

    return userId;
}