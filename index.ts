import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main() {
    // const user = await prisma.user.create({ data: { name: "Amisha" } })
    // console.log("user created", user);

    const users = await prisma.user.findMany()
    console.log("Get user list", users);

}

main().catch((e) => {
    console.log(e.message);

}).finally(async () => {
    prisma.$disconnect();
})