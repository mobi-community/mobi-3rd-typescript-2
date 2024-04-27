
 ## 🔍`Enum` 이란?
 - 보통 (주로 문자열) 상수를 만들때 사용되는 타입 -> 자바스크립트에서는 ```const``` 를 보통 사용.
 - enum 타입은 열거형이라고도 부르는데 ts에서만 지원하는 특수한 타입이다.
 
```tsx
enum ItemStateType {
DELIVERY_HOLD = "DELIVERTY_HOLD",
DELIVERED = "DELIVERED"
}
```

### 🤡`Enum` 의 장점
1. 타입 안정성 : 명시되지 않은 다른 타입은 인자로 받을 수 없기 때문에 타입 안정성이 우수하다.
2. 명확한 의미 전달과 높은 응집력 : 사용되는 타입이 다루는 값이 무엇인지 명확하다. 위에 예시에서 보다시피 아이템 상태 타입에 대한 값을 모아놓은것이기 때문에 응집력이 뛰어나다.
3. 가독성 : 열거형 형태이기 때문에 해당 값을 쉽게 추론할 수 있다.

### 👿`Enum` 의 단점
1. 숫자로만 이루어져 있거나 타입스크립트가 자동으로 추론한 열거형은 안전하지 않은 결과를 낳을수 있다.
2. **Tree-Shaking** 이 되지 않는다.
3. (2번에 의해) 불필요한 코드의 크기가 증가할 수 있다.

여기서 중요한 점은 Enum 이 Tree-Shaking이 되지 않는다는 점이다. 그렇다면 이 Tree-Shaking 에 대해서 알아보자.

## 🔍Tree-Shaking 이란?
 - 사용되지 않는 코드의 제거를 위해 js 컨텍스트에서 일반적으로 사용되는 용어
 - export 했지만 아무데서도 import 하지 않은 모듈이나 사용되지 않는 코드를 삭제해서 번들 크기를 줄이는 것
 - js에서의 가비지 콜렉터와 같은 의미이다.
 

 열거형은 타입스크립트 코드가 자바스크립트로 변환될때 즉시 실행 함수 형식으로 변환된다.
 
 즉 , enum을 사용해서 열거형을 정의했다면 일부 번들러에서 **트리쉐이킹 과정 중 즉시 실행함수로 변환된 값을 사용하지 않는 코드로 인식하지 못한다**는 것이다.
 
 그렇다면 이런 단점을 감안하면서까지 enum을 써야하나 의문이 들것이다. 이때 문제를 해결하기 위해 나온방법이 ```const enum``` 과 ```as const``` 이다.
 
 ## ⁉️ const enum 이란?
 앞서 설명한 enum의 첫번째 단점을 보완하기 위해 나온 선언 방법이다.
 enum은 숫자로만 이루어져 있거나 타입스크립트가 자동으로 추론한 열거형은 안전하지않다고 했다. 다음 예시를 보면,

```tsx
enum ProgamingLanguage {
  Typescript, //0
  Javascript;//1
  Java,//2 }
//역방향 접근 가능
ProgramingLanguage[2]; //"Java"
```

할당된 값을 넘어서는 범위로 역방향으로 접근하더라도 타입스크립트는 막지 않는다.
이때 ```const enum``` 을 사용하면 역방향으로의 접근을 허용하지 않기 때문에 자바스크립트에서의 객체 접근방법과 유사한 동작을 보장한다고 한다.

(그러나 숫자 상수로관리되는 열거형은 선언한 값 이외의 값을 할당하거나 접근할 때 이를 방지하지 못함)

그렇다면 두번째 선언방법인 as const 에대해 알아보자.

## ⁉️ as const 이란?

- 객체의 속성이나 배열의 요소가 변경되지 않도록 보장하거나 리터럴값의 유형을 엄격하게 정의할수 있는 방법.
-> 즉 , ```as const``` 를 통해 변수나 속성이 그값을 변경하지 않음을 명시적으로 선언할 수 있다.

```tsx
const person = {
    name: 'Alice',
    age: 30,
} as const;
person.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
const colors = ['red', 'green', 'blue'] as const;
colors.push('yellow'); // Error: Property 'push' does not exist on type 'readonly ["red", "green", "blue"]'.
```

위에 코드에서 보이다시피 as const 를 붙이면 ```readonly``` 프로퍼티가된것을 볼 수 있다.

#### 🧐 개인적인 결론
enum 은 정해진 키와 값을 통해 고정된 상수를 가지고, 역방향 접근이 가능하지만 Tree-Shaking이 안되고 -> 불필요한 코드 가 증가한다. 따라서 as const 나 const enum 을 사용하는게 어떨까?

### 🧐 TypeScript에서 import type을 사용하는 이유
- 런타임에 불필요한 코드 방지
- 모듈이 실제로 필요하지 않을때 필요한 모듈만 사용
- 코드의 가독성 향상 및 명확한 코드 의도 전달