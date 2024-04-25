# TASK.3 프로젝트에 적용

타입 가드를 활용하여 자동 완성 지원되지 않는 속성을 자동 완성 되도록 만들기

## project 요구사항

- 코드 구현은 components의 OneTodo에 구현



### 1. 절대경로로 모듈 import (tsconfig 활용)
```
ex) ../../../style/style.js => @style/style.js
```

### 2. API 응답에 타입 부여하기

```
자동완성 지원 등 타입 시스템 적용을 제대로 받고 있는지 확인할 것.!
```

#### screenshot

- `src > apis > 1.ts`
  - interface 활용, 타입 정의 및 부여

> 기존

> 타입 부여

- `src > apis > 2.ts`
  - 제네릭 활용, 타입 부여

> 기존

> 타입 부여

### 3. type-guard
  - TodoDataBase 객체는 `type` 속성 에 따라 다른 데이터 양식
  을 가짐.
  - 모든 `type` 에 대하여, 안정적인 환경이 만들어져야 함
    - 자동완성이 지원되도록 할 것.!

