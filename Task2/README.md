# 타입이 확실하지 않은 상황에서 안정적이 환경 만들기

## 객체의 특징 키로 검사하기

- ### in
  - in은 객체 내부에 특정 property가 존재하는지를 확인하는 연산자
  - type guard로 활용할 수 있습니다
  ```
  interface A {
  x: number;
  }
  interface B {
  y: string
  }
  function doStuff(q: A | B) {
  if ('x' in q) {
   consol.log(q)// q: A
  }
  else {
   consol.log(q)// q: B
  }
  }
  ```

## 특정 값의 타입으로 검사하기

- ## typeOf

- 연산자는 피연산자 앞에 위치
- 피연사자의 평가 전 자료형을 나타내는 문자열을 반환
- number , string , boolean ,symbol ,undefined ,
  object , function ...

```
typeOf 37 === "number";
typeOf "" === "string";
typeOf true === "boolean";
typeOf symbol() === "symbol";
typeOf undefined === "undefined";
typeOf {a:1} === "object"; // {a:1} 말고도 alert도 된다함
typeOf function(){} === "function";
```

- ## instanceOf

- 생성자의 prototype 속성이 객체의 프로토 타입 체인 어딘가 존재하는지 판별합니다

```
class Car {
brand: string;
isAuto: boolean;
}

class Phone {
brand: string;
series: 'basic' | 'plus' | 'ultra';
}

function test(target: Car | Phone): void {
	if (target instanceof Car) {
  	// 여기서 target 은 Car type 으로 확정 인식!
      return;
  }

  if (target instanceof Phone) {
  	// 여기서 target 은 Phone type 으로 확정 인식!
      return;
  }

	return;
}
```

- 쉽게 보자면 target안에있는 부분 들중 체크를 하는건데 (target: Car | Phone)부분을 체크해서 target의 타입을 정하게 된다
- ## is
- is는 반환되는 값이 true이면 해당 함수를 사용하는 블록 안에서도 인자를 받은 값의 타입을 특정 타입으로 확정시켜주는 typeScript에서 지원하는 키워드

  ```
  //1.
  function isString(value: any): value is string {
    return typeof value === 'string';
  }
  //2.
  let someInput: any = "This is a string";
  if (isString(someInput)) {
    // 이 블록 내에서 someInput은 'string' 타입으로 간주됩니다.
    console.log(someInput.toUpperCase()); // 문자열 메서드 사용 가능
  }
  ```

  - 1. 이 함수는 value가 문자열인지 확인하고 value가 string일경우 true를 반환함
  - 2. someInput이 if문을통해 문자열을 확인하게 됨

- ## 가드문 함수를 만들어서 검사하기
  ## 사용자 정의 Type Guards
- js와 비교했을때 런터임 내부 검사를 지원하지않는 반면에 ts에서는 사용자 정의 Type Guard함수를 만들어 해결할수있다

```
/**
 * 일반적인 인터페이스 예
 */
interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

/**
 * 사용자 정의 Type Guard!
 */
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

/**
 * 사용자 정의 Type Guard 사용 예시
 */
function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // ㅇㅋ
    console.log(arg.bar); // Error!
  }
  else {
    console.log(arg.foo); // Error!
    console.log(arg.bar); // ㅇㅋ
  }
}

doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });
```

- 이런식으로 예제를 보게되면 undefined를 지정한걸볼수있다
