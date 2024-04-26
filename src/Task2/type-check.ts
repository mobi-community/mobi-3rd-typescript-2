// 객체의 특정 키로 검사
interface Person {
  name: string;
  age: number
}

const hasKey(obj: any, key: string): obj is Person {
  return obj && typeof obj === 'object' && key in obj;
}

const printName(obj: any) {
  if (hasKey(obj, "name")) {
    console.log(obj.name.toUpperCase());
  } else {
      console.log("객체에 name 프로퍼티가 존재하지 않습니다");
  }
}

const printAge(obj: any) {
  if (hasKey(obj, 'age')) {
      console.log(`Age: ${obj.age}`);
  } else {
      console.log("객체에 age 프로퍼티가 존재하지 않습니다");
  }
}


// 특정 값의 타입으로 검사
const isString = (value: any): value is string => {
  return typeof value === 'string';
}

const printIfString = (value: any) => {
  if (isString(value)) {
      console.log(value.toUpperCase());
  }
}


// 가드문 함수 생성 후 검사
interface Person {
  name: string;
  age: number
}

const isPerson = (obj: any): obj is Person => {
  return obj && typeof obj === 'object' && 'name' in obj && 'age' in obj;
}

const printInfo = (obj: any) => {
    if (isPerson(obj)) {
      console.log(`Name: ${obj.name}, Age: ${obj.age}`);
  } else {
      console.log("객체에 name 또는 age 프로퍼티가 존재하지 않습니다")
  }
}