import { PrismaClient } from "@prisma/client";
import { createUserData, deleteUSerData, readUserData, updateUserData } from "./src/QuriesController/DocQueries";
import { updateUser } from "./src/QuriesController/QuriesContoller";
// import { allOtherOP, createUser, deleteUser, getUser, updateUser } from "./src/QuriesController/QuriesContoller";
const prisma = new PrismaClient();


async function main() {


    // Try Crud by my self
    // createUser()
    // getUser()
    // updateUser()
    // deleteUser()
    // allOtherOP()

    // As per Doc
    // createUserData()
    // readUserData()
    // updateUserData()
    deleteUSerData()
}

main().catch((e) => {
    console.log(e.message);

}).finally(async () => {
    prisma.$disconnect();
})