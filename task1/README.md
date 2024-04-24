# tsconfig.json

## tsconfig.json 이란?
``` 
* 미리 개념 정리

Intellisense 란, 코드문법 자동완성 기능!!
```
- (ts -> js) 변환 과정에서 세부적인 설정사항을 정리한 파일
- TypeScript Intellisense 가 다음의 목적을 위해 참고하는 설정파일
  -  '.ts' 파일 인식
  - 코드 자동완성, 
  - 타입정보 제공
- TypeScript Complier 가  (ts -> js) 변환을 어떻게 해야하는 지, 참고하는 설정파일

## 옵션 정리하기

### files
- 컴파일 대상 파일을 목록을 지정한다.

---

### extends
- extends에 지정된 경로의 다른 `*.tsconfig.json` 에서 설정한 값들을 현재의 `*.tsconfig.json` 파일에서도 그대로 사용할 수 있도록 한다.
- 순환 참조 시, 오류가 발생한다.
- 같은 옵션에 대해서는 값을 추가하거나 재정의 할 수 있다.
- references 옵션은 상속되지 않는다.

---

### include
- 컴파일 대상 파일을 목록을 지정한다.
- files 와의 차이점은 와일드카드 문자를 지원하기 때문에, 패턴에 맞는 파일 목록을 유연하게 만들 수 있다. 즉, 파일 이름을 일일히 명시하지 않아도 된다.

---

### exclude
- include 설정으로 지정된 파일 중, 컴파일 과정을 건너뛸 파일을 지정한다. 
- files 설정으로 지정된 파일은 exclude 의 적용을 받지 않는다.

---

### references
- 다른 ts 프로젝트에 의존해야 기능이 있는 경우, references 옵션에 그에 대한 상대 경로를 입력하면 된다.

---

### complierOptions

- 선택된 파일에 대해서, ts 컴파일러에게 언어 해석에 대한 설정을 지시한다.


#### 1. target

- 변환될 js 문법 버전을 설정한다.
- 기본값은 "ES3" (ECMAScript version 3 에서 제공하지 않는 문법은 에러)

#### 2. libs
- 프로젝트에서 사용할 수 있는 **특정 기능**의 문법이나 타입 을 추가할 있다.
- 별도로 설정하지 않으면 자동으로 리스트를 삽입해준다.
  - `target` 에 따라, 자동으로 주입되는 라이브러리가 다르다.
    - `target` = "ES5" 인 경우
      - [DOM,ES5,ScriptHost]
    - `target` = "ES6" 인 경우
      - [DOM,ES6,DOM.Iterable,ScriptHost]

#### 3. outDir
- `files` 와 `include` 를 통해서 선택된 파일들을 변환하여 저장할 directory 지정

#### 4. noEmit
- 컴파일 결과를 출력하지 않는다.
- 빠르게 정적 타입 검사를 진행하려면, 이 속성을 true 로 하면 된다.

#### 5. typeRoots
- 프로젝트에서 사용하는 type 정의한 파일을 등록한다.
- 기본값은 ["node_modules/@types"] 이다.
- 추가적인 타입 정의 파일 ('.d.ts') 을 만들었다면, 해당 속성에 추가할 수 있다.
  - `include` 속성 적용을 받는 위치의 파일이라면, 별도로 추가 x


#### 6. allowUnreachableCode

- 컴파일러에게 도달할 수 없는 코드를 허용할지 여부를 지정
```json
{
  "compilerOptions": {
    "allowUnreachableCode": null // 기본값, 약간 흐르게 해서 경고 해준다. 
    /**
    "allowUnreachableCode": true // 아무것도 없다. 문제 없는 코드 같다.
    "allowUnreachableCode": false // 노란줄 그어서 경고 해준다. 
    */
  },
  "files": ["./test.ts"]
}
```

- _(* 닿을 수 없는 코드란?)_
```ts
const fn = (n: number) => {
  if (n > 5) 
    return true;
  else 
    return false; // 어떤 경우라도, 이쯤에선 무조건 함수 종료.
  
  return true; // 닿을 수 없는 코드
}
```


#### 7. alwaysStrict

- 모든 코드에 대해 ECMAScript (= Javascript) strict mode를 활성화할지 여부.
- strict mode 가 무엇?
  - js 작성 중 발생하는 실수에 대해 오류로써 감지하고 대응하는 모드
  - run-time 오류를 줄일 수 있어, 프로그램 안전성 확보
  - 다음의 경우에 오류 감지
    - 변수를 선언하지 않고 사용하는 경우
    - 글로벌 객체에 속성을 추가하는 경우
    - 특정 함수의 매개변수 중, 중복된 이름을 사용한 경우

- js 모드를 왜 tsconfig.json 에서 설정하나?
  - strict mode 를 사용하려면, `"use strict;"` 구문을 적어줘야함.
  - ts -> js 변환할 때, 이 옵션이 true 라면 위 구문을 적어준다.

- 기본값이 true (필요없다면 따로 명시해줘야 한다.)


#### 8. exactOptionalPropertyTypes

- 객체의 속성값에 대하여 undefined 속성을 허용할 지 결정할 수 있다.
- 기본값은 false (true 로 설정할 경우, `strictNullChecks` 설정이 반드시 필요하다.)

```ts
// {exactOptionalPropertyTypes: false} 상황,

interface TestObjProps{
  prop?: string
}

const testObj: TestObjProps = { 
  prop: undefined // 경고 없다. 
}
```


#### 9. strictNullChecks

- 변수가 null 또는 undefined 가 될 수 있는지 검사한다.
- 기본값은 true

```ts
// {strictNullChecks: true}

let testVariable: number;
console.log(testVariable) // 🚨 compile-error: 'testVariable' 변수가 할당되기 전에 사용되었습니다.ts(2454)
```

## 내 결론
너무 많어..! 일일히 정리하는 것보다, 경험을 많은 쌓으면서 자주 사용하거나 타입 검사에 유용한 옵션을 체득해나가는 게 좋을 것 같다...