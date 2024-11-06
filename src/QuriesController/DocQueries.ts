import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUserData = async () => {
    // Single Record
    const user = await prisma.user.create({
        data: {
            email: "dd@prisma.io",
            name: "DD"
        }
    })


    //Multipal Record Return Count
    // const user = await prisma.user.createMany({
    //     data: [
    //         { name: "Bob", email: "bob@prisma.io" },
    //         { name: "Bobo", email: "bob@prisma.io" }, // Duplicate unique key!
    //         { name: "Yewande", email: "yewande@prisma.io" },
    //         { name: "Angelique", email: "angelique@prisma.io" },
    //         { name: "Dharti Prisma", email: "dhartip@prisma.io" },
    //     ],
    //     skipDuplicates: true,
    // });

    // Multipal Record insert with return data

    // const user = await prisma.user.createManyAndReturn({
    //     data: [
    //         { name: 'Dipali', email: 'dipali@prisma.io' },
    //         { name: 'Niral', email: 'niral@prisma.io' },
    //     ],
    //     skipDuplicates: true
    // })

    console.log("User created", user);

    return user;
};

const readUserData = async () => {

    // Find by email
    // const user = await prisma.user.findUnique({
    //     where: {
    //         email: "elsa@prisma.io"
    //     }
    // })

    // Find by Id
    // const user = await prisma.user.findUnique({
    //     where: {
    //         id: 37
    //     }
    // })

    // Find by Multipal Users

    // const user = await prisma.user.findMany()

    // const user = await prisma.user.findMany({
    //     where: {
    //         AND: [
    //             {
    //                 name: {
    //                     startsWith: "A"
    //                 }
    //             },
    //             {
    //                 AND: {
    //                     name: {
    //                         endsWith: "e"
    //                     }
    //                 }
    //             }
    //         ]
    //     }
    // })

    const user = await prisma.user.findUnique({
        where: {
            email: "emma@prisma.io"
        },
        select: {
            name: true,
            email: true
        }
    })

    console.log("Read User Data", user);
    return user

}

const updateUserData = async () => {
    // const user = await prisma.user.update({
    //     where: {
    //         email: "dk@prisma.io"
    //     },
    //     data: {
    //         email: "dk@gmail.com"
    //     }
    // })
    const user = await prisma.user.upsert({
        where: {
            email: 'viola@prisma.io'
        },
        update: {
            name: "Violnia"
        },
        create: {
            name: "viola",
            email: "viola@prisma.io"
        }
    })
    console.log("Update User", user);
    return user

}

const deleteUSerData = async () => {
    // const user = await prisma.user.delete({
    //     where: {
    //         id: 58
    //     }
    // })

    const user = await prisma.user.deleteMany({
        where: {
            email: {
                startsWith: "a"
            }
        }
    })

    console.log("Delete user Data", user);
    return user

}

const userSortData = async (page = 2, recordsPerPage = 3) => {
    const user = await prisma.user.findMany({
        orderBy: [
            {
                id: "asc"
            }
        ],
        skip: (page - 1) * recordsPerPage,
        take: recordsPerPage

    })

    console.log("Sort user data", user);
    return user

}



export { createUserData, readUserData, updateUserData, deleteUSerData, userSortData };


