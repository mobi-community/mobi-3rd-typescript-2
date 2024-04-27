// 객체의 특정 키로 검사하기

interface Person {
    name: string;
    age: number;
}

const printPerson = (obj: any) => {
    if ("name" in obj && "age" in obj) {
        console.log(`Name: ${obj.name}, Age: ${obj.age}`);
    } else {
        console.log("Object is not a Person");
    }
};
