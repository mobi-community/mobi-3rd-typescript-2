// 가드문 함수를 만들어서 검사하기

interface Cat {
    meow: () => void;
}

const isCat = (obj: any): obj is Cat => {
    return typeof obj.meow === "function";
};

const printCat = (obj: any) => {
    if (isCat(obj)) obj.meow();
    else console.log("Not a Cat");
};
