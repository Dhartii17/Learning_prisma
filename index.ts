import { PrismaClient } from "@prisma/client";
import { allOtherOP, createUser, deleteUser, getUser, updateUser } from "./src/QuriesController/QuriesContoller";
const prisma = new PrismaClient();


async function main() {

    // createUser()
    // getUser()
    // updateUser()
    // deleteUser()
    // allOtherOP()


}

main().catch((e) => {
    console.log(e.message);

}).finally(async () => {
    prisma.$disconnect();
})