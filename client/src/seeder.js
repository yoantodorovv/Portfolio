import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export const SeedDb = async () => {
    const frontEndCollectionRef = collection(db, "front-end");
    const backEndCollectionRef = collection(db, "back-end");

    await addDoc(frontEndCollectionRef, {
        name: 'JS Advanced',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 1, 25),
        grade: 5.62,
        validityLink: 'https://softuni.bg/certificates/details/126534/42f712dc',
    });
    await addDoc(frontEndCollectionRef, {
        name: 'JS Applications',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 3, 5),
        grade: 6.00,
        validityLink: 'https://softuni.bg/certificates/details/130488/4776cc32',
    });
    await addDoc(frontEndCollectionRef, {
        name: 'HTML & CSS',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2023, 2, 15),
        grade: 6.00,
        validityLink: 'https://softuni.bg/certificates/details/163033/fa617fb0',
    });
    await addDoc(frontEndCollectionRef, {
        name: 'ReactJS',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2023, 3, 10),
        grade: 6.00,
        validityLink: 'https://softuni.bg/certificates/details/168573/e6262af6',
    });
    await addDoc(backEndCollectionRef, {
        name: 'C# Advanced',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 3, 14),
        grade: 6.00,
        validityLink: 'https://softuni.bg/certificates/details/131962/2f611677',
    });
    await addDoc(backEndCollectionRef, {
        name: 'C# OOP',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 3, 20),
        grade: 5.56,
        validityLink: 'https://softuni.bg/certificates/details/132736/9161df0f',
    });
    await addDoc(backEndCollectionRef, {
        name: 'MS SQL',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 7, 10),
        grade: 6.00,
        validityLink: 'https://softuni.bg/certificates/details/139569/0d70cf8b',
    });
    await addDoc(backEndCollectionRef, {
        name: 'Entity Framework Core',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 7, 16),
        grade: 5.86,
        validityLink: 'https://softuni.bg/certificates/details/141277/2cca3488',
    });
    await addDoc(backEndCollectionRef, {
        name: 'ASP.NET Fundamentals',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 9, 31),
        grade: 6.00,
        validityLink: 'https://softuni.bg/certificates/details/146505/0d43805e',
    });
    await addDoc(backEndCollectionRef, {
        name: 'ASP.NET Advanced',
        issuedBy: 'SoftUni',
        issuedOn: new Date(2022, 11, 19),
        grade: 5.27,
        validityLink: 'https://softuni.bg/certificates/details/152265/3f4aa543',
    });
}