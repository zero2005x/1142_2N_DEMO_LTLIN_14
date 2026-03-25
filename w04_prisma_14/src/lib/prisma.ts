import { PrismaPg } from '@prisma/adapter-pg';

import { PrismaClient } from '../generated/prisma/client';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error('DATABASE_URL is not set.');
}

const prismaClientSingleton = () => {
    const adapter = new PrismaPg({ connectionString });

    return new PrismaClient({ adapter });
};

declare const globalThis: {
    prismaGlobal?: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export { prisma };

if (process.env.NODE_ENV !== 'production') {
    globalThis.prismaGlobal = prisma;
}
