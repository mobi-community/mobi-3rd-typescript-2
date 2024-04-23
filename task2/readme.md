# Task2 타입이 확실하지 않은 상황에서 안정적인 환경 만들기

## Type Guard
- Type Gurd 를 이용하면 조건문에서 객체의 타입을 좁혀나갈수 있다.
- 특정 함수의 매개변수는 어떤 타입이 올 수 있기 때문에 any 타입으로 추론되기 때문에 타입이 명확하지 않는다.

### Type Guard 종류
**`typeof`**
- 자바스크립트의 호환을 위해 typeof로 가드할 수 있는 타입은 자바스크립트에서 제공하는 타입으로 제한된다고 한다.

```tsx
function something(x:number | string) {
    if(typeof x === 'string') { //이조건문에서는x === 'string'라고 확신함.
        console.log(x.substr(1)); // Ok
        console.log(x.subtr(1)); //Error 
    }
    x.subStr(1); //Error : x가 string이라는 보장 없음.
}
```

**`instanceof`**
- 판별할 객체가 특정한 class에 속하는지 확인
```tsx
class Person{
    name: string;
    age:number;
}
class Animal {
    type: string;
}

function Fnc (value:Person|Anumal) {
    if(value instanceof Person) {
        console.log(value.name)//Okay
        console.log(value.type) //Error
    } else {
        console.log(value.tyype)//Okay
    }
}
```
**`in`**
- 객체 내부에 특정프로퍼티가있는지 확인하는 연산자
- boolean타입 값으로 결과를 반환한다.
```tsx
interface A {
  x: number;
}
interface B {
  y: string;
}

function testFunc(value: A | B) {
  if ('x' in value){
    // value : A
  }else{
    // value : B
  }
}
```

### 1. 객체의 특정 키로 검사하기 (in연산자 사용하기)
```tsx
interface Car {
    brand:string;
    year:number;
}
function CarFunc(obj:any): obj is Car {
    return 'brand' in obj && 'year' in obj;
}
const myCar = {brand:'Volvo', year:2024}
if(CarFunc(myCar)) {console.log(myCar.brand)}
```

### 2. 특정 값의 타입으로 검사하기(typeof | instanceof 연산자 사용)
```tsx
class Person {
    name: string;
    age: number;
}
//함수의 return값에 `is` 연산자를 명시해주면 타입을 확정할 수 있는 헬퍼 함수의 역할을 한다고 한다.
function isPerson(obj: any): obj is Person {
    return obj instanceof Person;
}
```

```tsx
function isNumber(value: any): value is number {
    return typeof value === 'number';
}

const num = 42;
if (isNumber(num)) {
    console.log(num.toFixed(2)); 
}

```
### 3. 가드문 함수를 만들어서 검사하기
#### 사용자 정의 타입 가드
- TS가 타입을 판단하는 방법을 직접 정의하거나 로직을 재사용하고 싶을때 사용하는 타입가드

//예시 : 사용자가 이메일을 통해 로그인 하는지 전화번호를 통해 로그인 하는지 분기할 수 있게끔..

```tsx
interface checkUser{
    email:string;
    password:string;
}
interface checkPhone{
    phone:number;
}
function isCheckUser(obj: any): obj is CheckUser {
    return (obj && typeof obj.email === 'string' && typeof obj.password === 'string');
}
function login(user: checkUser | checkPhone ) {
    if(isCheckUser(user)) {
        console.log(user.email, "너는이메일로 로그인했단다")
    } else {
        console.log(usser.phone, "너는 폰넘으로 로그인했단다")
    }
}
// 테스트
const user1: CheckUser = { email: "wendy0708@naver.com",password: "qwer1234" };
const user2: CheckPhone = { phone: 123456789 };

```