import { prisma } from "@/lib/prisma";

export const fetchUsers = async () => {
    const users = await prisma.user.findMany();
    console.log("Fetched users:", users);
    return users;
} 