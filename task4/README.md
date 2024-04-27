# TASK.4 enum / import "type"

```
1. enum과 as const의 차이는 무엇일까요? 트리쉐이킹과 번들 사이즈 관점에서 이를 조사하고 확인해보세요
2. enum은 그렇다면 쓰지 않는 것이 좋을까요?
3. export한 type을 받을 때 import type을 해야하는 이유는 무엇일까요?
```

## enum 
- 이름이 있는 상수들의 집합이다.
- 같은 enum 의 멤버는 중복된 값을 가질 수 없다.
- TypeScript 에서 제공하는 기능 => Javascript 에서는 못 읽는다.
  - 그럼 compile 하면 어떻게 되는고?
    - `ts, 변환 전`
    ```ts
    enum Direction {
      Up,
      Down,
      Left,
      Right,
    }
    ```
    - `js, 변환 후`
    ```js
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 0] = "Up";
        Direction[Direction["Down"] = 1] = "Down";
        Direction[Direction["Left"] = 2] = "Left";
        Direction[Direction["Right"] = 3] = "Right";
    })(Direction || (Direction = {}));
    ```
- enum 멤버의 값은 string 혹은 number 타입만 가능하다.

### 숫자열거형
- enum 멤버의 값이 모두 number 타입인 경우이다.
- 값이 설정되어 있지 않다면, 먼저 적힌 상수부터 각각 0,1,2,3,.... 값을 부여받는다.

```ts
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

/** 정매핑 (멤버의 이름으로 멤버의 값을 구함) */
console.log(Direction.Up) // ✅ 출력 결과: 0
console.log(Direction.Down) // ✅ 출력 결과: 1
console.log(Direction.Left) // ✅ 출력 결과: 2
console.log(Direction.Right) // ✅ 출력 결과: 3

/** 역매핑 (멤버의 값으로 멤버의 이름을 구함)*/
console.log(Direction[0]) // ✅ 출력 결과: Up
console.log(Direction[1]) // ✅ 출력 결과: Down
console.log(Direction[2]) // ✅ 출력 결과: Left
console.log(Direction[3]) // ✅ 출력 결과: Right
```

- 특정 순서에 특정 값이 명시되어 있다면, 그 이전까지는 0 부터 +1 씩의 값을 부여받고, 값이 정해진 순서 이후부터 해당 값을 기준으로 +1 씩 증가한다.

```ts
enum Direction {
  Up,
  Down=2,
  Left,
  Right,
}

console.log(Direction.Up) // ✅ 출력 결과: 0
console.log(Direction.Down) // ✅ 출력 결과: 2
console.log(Direction.Left) // ✅ 출력 결과: 3
console.log(Direction.Right) // ✅ 출력 결과: 4
```

- 특정 순서의 값이 함수의 반환값 (or string) 이라면, 그 이후에 열거되는 상수에 대해 초기화를 반드시 진행해야한다.

```ts
const getNumber10 = () => 10

enum Direction {
  Up,
  Down=getNumber10(),
  Left, // 🚨 compile-error, 열거형 멤버에는 이니셜라이저가 있어야 합니다.ts(1061)
  Right,
}

enum Direction2 {
  Up,
  Down="Down",
  Left, // 🚨 compile-error, 열거형 멤버에는 이니셜라이저가 있어야 합니다.ts(1061)
  Right,
}
```



### 문자열거형
```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}
```
- enum 멤버의 값이 모두 string 타입인 경우이다.
- 자동으로 증가하는 기능 없다.
- 문자열거형은 역매핑을 지원하지 않는다 (값으로 이름을 구할 수 없다.)


## 'as const' 를 사용한 객체와의 차이점

### 고유성
- 같은 enum 의 모든 멤버의 값은 고유하다.
- 'as const' 객체의 경우, 값의 중복이 있을 수 있다.

### 유연성
- enum 의 멤버값은 string 혹은 number 타입으로 제한된다.
- 'as const' 객체의 경우, 특정 속성에 대하여 다른 유형의 값을 가지는 것이 허용된다.

### TreeShaking
- 사용하지 않는 코드를 삭제하는 기능이다.
- 나무를 흔들면 죽은 잎사귀들이 떨어지는 모습에 착안했다.
#### enum
- ts에서만 지원하는 유형, js 로 변환하면 즉시실행함수 형태로 바뀐다.
  - 즉시실행함수 는 일부 번들러에서 Tree-shaking 대상으로 간주할 수 없다.
#### 'as const'
- 속성 하나하나가 literal 값을 가지는 상수로 인식된다.
  - 쓰는 상수인지 안쓰는 상수인지 번들러가 파악할 수 있는 형태 (즉시실행함수 형태가 아님!)
- Tree-shaking 이 가능하고, 그로인해 번들 사이즈를 줄일 수 있다.

<br/>
<br/>

## enum 사용에 대하여
번들 사이즈가 증가 위험이 있는 enum 을 굳이 찾아 써야야 할 필요성을 느끼지 못했다. 

하지만, tree-shaking 제한은 rollup 기반의 번들러에서 발생하는 이슈이고, webpack 에서는 컴파일 후 제거된다는 정보도 찾을 수 있었다. 

애시당초 enum 을 사용해서 아주 많은 양의 상수를 선언하고, 그 중 대부분을 미사용할 케이스가 존재할까? "사용 안하는 값은 알아서 걸러주겠지" 라는 안일한 생각으로 변수 선언하는 개발자는 아마 없을 것이다. 일부 미사용하더라도 그것이 프로젝트의 성능에 큰 영향을 줄 정도는 아닐 것 같다. (만약 써야한다면, 번들 사이즈 신경 안쓰고 당당하게 작성하겠다.!)

그럼에도 만약 누군가 enum 을 사용한 코드를 main branch 에 merge 하려고 한다면, 행동을 우선 저지시키고;; 위험사항에 대해 고지하겠다. 사용의지를 굳히지 않는다면, 정말 필수적으로 사용해야하는 값인지를 확인하겠다.

<br/>
<br/>

## import "type" 
