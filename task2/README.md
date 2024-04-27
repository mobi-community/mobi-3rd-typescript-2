# TASK.2 type-guard

## 관련 개념 & 연산자 사용법 정리하기
### `in`
- 특정 객체에서 특정 key (property) 가 있는지 여부를 확인한다.

#### 객체 에서의 사용 예시
```ts
const someObj = {
  props1: 1,
  props2: 2
}

console.log('props1' in someObj) // ✅ 출력 결과: true
console.log('props3' in someObj) // ✅ 출력 결과: false
```

- 특정 배열에서 특정 index 가 있는지 여부 또한 확인가능하다.

#### "배열" 에서의 사용 예시
```ts
const someArr = ['a', 'b', 'c']

console.log(1 in someArr) // ✅ 출력 결과: true
console.log(3 in someArr) // ✅ 출력 결과: false
```

<br/>

---
<br/>

### `typeof`
- 변수의 데이터 타입을 확인한다.
```ts
// typeof 로 확인 가능한 타입들

console.log(typeof undefined) // ✅ 출력 결과: undefined
console.log(typeof false) // ✅ 출력 결과: boolean
console.log(typeof 100) // ✅ 출력 결과: number
console.log(typeof "string") // ✅ 출력 결과: string
console.log(typeof 1n) // ✅ 출력 결과: bigint
console.log(typeof Symbol('?')) // ✅ 출력 결과: symbol
console.log(typeof { a: 'a', b: 'b' }) // ✅ 출력 결과: object
console.log(typeof ((a:any)=>{console.log(a)})) // ✅ 출력 결과: function
```

#### ⚠️주의할 점
- typeof 로 검사한 "배열" 의 타입은 object 이다.
  ```ts
  const someArr = [1, 2, 3, 4]
  const someObj =
  {
    0: 1,
    1: 2,
    2: 3,
    3: 4
  } 

  console.log(typeof someArr) // ✅ 출력 결과: object
  console.log(typeof someObj) // ✅ 출력 결과: object
  ```

  - 배열인지 확인하려면???
    ```ts
    console.log(Array.isArray(someArr)) // ✅ 출력 결과: true
    console.log(Array.isArray(someObj)) // ✅ 출력 결과: false
    ```

- null 은 object 로 반환된다.

```ts
console.log(typeof null) // ✅ 출력 결과: object
```

<br/>

---
<br/>

### `instanceof`
- 어떤 객체가 특정 클래스로부터 상속되었는지 (= 특정 클래스의 인스턴스) 인지를 확인하기 위해 사용한다.
```ts
interface Animal{
  speak(): void
}

class Dog implements Animal {
  speak() {
    console.log("야!! 🐶 짖는 소리좀 안나게 하라~~")
  }
}

let animal: Animal = new Dog();
if (animal instanceof Dog) 
  animal.speak() // ✅ 출력 결과: 야!! 🐶 짖는 소리좀 안나게 하라
```

#### 🤔 개인 의견
- 요새 class 많이 안쓴다고 해서, 별로 사용 안할 거 같은데, 자주 사용하는 Javascript 내장 class 에 대해선, 사용할 수 있을 것 같다.

- 예를 들어, 배열 형태인지를 확인하는 경우?
```ts
const arr = [1,2,3,4]
const fakeArr = {
  0: 1,
  1: 2,
  2: 3,
  3: 4
} 

console.log(arr instanceof Array) // ✅ 출력 결과: true
console.log(fakeArr instanceof Array) // ✅ 출력 결과: false
```

<br/>

---
<br/>

### 타입 가드 함수
- 사용자가 직접 타입을 구별하기 위한 함수를 만들 수 있다.
- 특정 조건을 만족하는지를 확인하여, 변수 혹은 객체의 타입을 좁히는 역할을 한다.
- 반환형 자리에 'x(입력) is y(타입)' 형식이 있는 것이 특징이다.

```ts
// 숫자로 이뤄진 배열인가?
const isNumberArray = (moSoonType: unknown): moSoonType is Array<number> => {
  // 배열이 아니면 false 반환
  if (!Array.isArray(moSoonType)) return false;
  // 배열의 모든 요소가 숫자인지 확인하여 반환
  return moSoonType.every(item => typeof item === 'number');
};

console.log(isNumberArray([])) // ✅ 출력 결과: true
console.log(isNumberArray([1, 2, 3, 4, 5])) //  ✅ 출력 결과: true
console.log(isNumberArray(['1', '2', '3', '4', '5'])) // ✅ 출력 결과: false
console.log(isNumberArray({0:'1',1:'2',2:'3',3:'4',4:'5'})) // ✅ 출력 결과: false
```
