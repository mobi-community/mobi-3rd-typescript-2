# TASK.3 프로젝트에 적용

## project 요구사항

```
- 타입 가드를 활용하여, 자동완성기능이 지원되도록 구현
- 코드 구현은 components의 OneTodo에 구현
```

### 1. 절대경로로 모듈 import (tsconfig 활용)
```
ex) ../../../style/style.js => @style/style.js
```

#### tsconfig.paths.json
- path-alias 와 관련된 설정은 별도의 파일로 분리해 작성했다.
- `tsconfig.json` 에서 "extends" option 을 통해, 경로 설정과 관련된 "compileOptions" 를 추가했다.

- `src` 폴더, 바로 아래에 있는 폴더를 대상으로 path-alias 를 명시했다.
  
>  - ./src/question/* => @question/*
>  - ./src/types/* => @type/*
>  - ./src/assets/* => @asset/*
>  - ./src/apis/* => @api/*
>  - ./src/utils/* => @util/*
>  - ./src/hooks/* => @hook/*


#### vite.config.json
- "vite-tsconfig-paths" 플러그인 추가
  - `tsconfig.json` 파일에서 설정한 경로들을 기준으로, 모듈 경로를 해석한다.
  - "baseUrl" 설정을 기준으로, "paths" 에 명시된 상대 경로를 찾아간다.

<br/>

### 2. API 응답에 타입 부여하기

```
자동완성 지원 등 타입 시스템 적용을 제대로 받고 있는지 확인할 것.!
```

- `src > apis > 1.ts`
  - interface 활용, 호출 시그니처 정의 
  - interface 선언 시, 세부적인 속성 (파라미터/반환) 타입이 명시되지 않는다;;

<div align="center"> 
  
> <img width="533" alt="스크린샷 2024-04-27 오후 6 42 35" src="https://github.com/mobi-community/mobi-3rd-typescript-2/assets/50646145/e05fbe2c-15d8-4689-b941-03885987535d">

</div>

- `src > apis > 2.ts`
  - 제네릭 활용, 타입 부여

<div align="center"> 
  
> <img width="537" alt="스크린샷 2024-04-27 오후 6 44 48" src="https://github.com/mobi-community/mobi-3rd-typescript-2/assets/50646145/7753018b-28be-4cbb-b635-1dd2f897a7f4">

</div>

<br/>

### 3. type-guard
```
- TodoDataBase 객체는 `type` 속성 에 따라 다른 데이터 양식 을 가짐.
- 모든 `type` 에 대하여, 안정적인 환경이 만들어져야 함
- 자동완성이 지원되도록 할 것.!
```

- [타입 가드 함수 선언 | `utils > type-guard.ts`](https://github.com/mobi-community/mobi-3rd-typescript-2/blob/Pair1-Jeff/task3/src/utils/type-guard.ts)
- [타입 가드 함수 사용 | `questions > components > one-todo.tsx`](https://github.com/mobi-community/mobi-3rd-typescript-2/blob/Pair1-Jeff/task3/src/utils/type-guard.ts)
