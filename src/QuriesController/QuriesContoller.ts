import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async () => {
    //   const user = await prisma.user.create({ data: { name: "Raj" } }); // return data
    // const user = await prisma.user.createMany({ data: { name: "Nidhi" } }); // it return count only not data
    // const user = await prisma.user.createMany({ data: [{ name: "Krisha" }, { name: "Harsh" }, { name: "Khushbu" }, { name: "Harsh" }, { name: 'harsh' }], skipDuplicates: true }); // it not skip beacuse in db we not mentioned unique
    const user = await prisma.userTest.createMany({
        data: [
            { name: "Krisha", email: "krisha@gmail.com" },
            { name: "Harsh", email: "harsh@gmail.com" },
            { name: "Khushbu", email: "khushbu@gmail.com" },
            { name: "Harsh", email: "Harsh@gmail.com" },
            { name: "harsh", email: "harsh@gmail.com" },
            { name: "KrishaPatel", email: "krisha2001@gmail.com" },
        ],
        skipDuplicates: true,
    }); // it not insert duplicate but it also insert same email with uper & lower case it consider diff both
    // const user = await prisma.user.createManyAndReturn({
    //     data: [
    //         { name: "dharti" }, { name: "Kano" }, { name: "Yogin" }, { name: "Kartik" },
    //     ]
    // })
    console.log("user", user);
    return user;
};

const getUser = async () => {
    // const user = await prisma.user.findFirst()
    // const user = await prisma.user.findFirstOrThrow()
    // const user = await prisma.user.findMany();
    // const user = await prisma.userTest.findUnique({ where: { email: "Harsh" } }); // find unique u can use only where u define unique in coumn
    // const user = await prisma.userTest.findMany({ where: { name: "Harsh" } });

    // const user = await prisma.userTest.findMany({
    //     where: {
    //         OR: [
    //             { email: "Harsh@gmail.com" }, { email: "harsh@gmail.com" }
    //         ],
    //         AND: {
    //             name: "Harsh patel"
    //         }
    //     }
    // });

    // const user = await prisma.userTest.findUnique({
    //     where: {
    //         email: "krisha@gmail.com"
    //     }
    // })
    // console.log("get User", user);
    // return getUser

    const user = await prisma.userTest.findUniqueOrThrow({
        where: {
            email: "krisha@gmail.com",
        },
        select: {
            name: true,
            email: true,
        },
    });
    console.log("get User", user);
    return getUser;
};

const updateUser = async () => {
    // const user = await prisma.user.update({
    //     where: {
    //         id: 1,  //only allow updation based on uniquness
    //     },
    //     data: {
    //         name: "Harshil", // updating the name field
    //     },
    // });

    // const user = await prisma.userTest.update({
    //     where: {
    //         email: "harsh@gmail.com",
    //         // email: "dharti@gmail.com",  // if there is no data it through error
    //     },
    //     data: {
    //         name: "Harsh", // updating the name field
    //     },
    // });

    // const user = await prisma.user.upsert({
    //     where: {
    //         id: 10,  //only allow updation based on uniquness
    //     },
    //     update: {
    //         name: "Aksh", // updating the name field
    //     },
    //     create: {
    //         name: "Ruchita"
    //     }
    // });

    const user = await prisma.user.updateMany({
        where: {
            name: "Kinu",
        },
        data: {
            name: "DK",
        },
    });

    console.log("Update User", user);
    return user;
};

const deleteUser = async () => {
    // const user = await prisma.user.delete({
    //     where: {
    //         id: 10
    //     }
    // })
    const user = await prisma.user.deleteMany({
        where: {
            name: "DK",
        },
    });
    console.log("Delete User", user);

    return user;
};

const allOtherOP = async () => {


}

export { createUser, getUser, updateUser, deleteUser, allOtherOP };
