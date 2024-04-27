// 특정 값의 타입으로 검사하기

const printValue = (value: any) => {
    if (typeof value === "string") {
        console.log(`String: ${value}`);
    } else if (typeof value === "number") {
        console.log(`Number: ${value}`);
    } else {
        console.log(`Not String or Number`);
    }
};
