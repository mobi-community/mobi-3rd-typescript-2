# # Mobi-3rd-typescript-2

## 프로젝트 개요

- Task1~4번을 통해 TypeScript사용법을 학습합니다.

## TASK.1 타입스크립트에서 꼭 필요한 ts-config

Task1에서는 타입스크립트를 사용하기위해서 ts-config설정을 어떻게 할것인가, 왜 해야하는가 두가지 관점에서 알아봤습니다.

### 👍ts-config설정 알아보기

ts-config의 두가지 목적 알아보기

- 1.ts-config설정을 통해 tsc 과정을 어떻게 제어할건지
- 2.ts-config설정을 통해 vscode의 intellisense를 어떻게 제어할건지

### 👍ts-config가 제어할수있는 것들

- ts-config공식문서를 확인해보고 위에서 알아본 두가지목적에따라 어떤 옵션들을 적용할 수 있는지 알아봤습니다.
- 간단하게 자주사용할 만한 옵션들을 README.md에 작성하고 추가적으로 프로젝트에 필요한 설정이 있다면 공식문서를 참고해서 사용할수있습니다.

자세한 Task내용은 아래 Link로 달아두었습니다.

### 📃Task1 Link주소 : [ts-config알아보기](https://github.com/mobi-community/mobi-3rd-typescript-2/tree/Pair1-Chan/Task1)

## TASK.2 타입이 확실하지 않은 상황에서 안정적인 환경 만들기

Task2에서는 타입가드를 통해 타입안정성을 확보하는 것을 알아봤습니다.

### 👍다양한 타입가드사용

- is
- in
- instanceof
- typeof
- 타입가드함수

위의 다섯가지를 사용해서 타입가드함수 예시코드와 어떤동작을 하는지 정리했습니다.

### 📃Task2 Link주소 : [타입가드사용](https://github.com/mobi-community/mobi-3rd-typescript-2/tree/Pair1-Chan/Task2)

## TASK.3 문제 풀기

Task3에서는 지금까지 알아봤던 개념들을 적용해서 문제풀기를 진행했습니다.

### 👍적용한것들

- genric을 사용해서 함수의 타입 좁히기
- tsconfig를 사용해서 import경로 절대경로로 변경하기
- props,return의 type정해주기
- type-guard를 사용해서 자동완성 지원하기

### 📃Task3 Link주소 : [문제풀기](https://github.com/mobi-community/mobi-3rd-typescript-2/tree/Pair1-Chan/Task3)

## TASK.4 생각해보기

Task4에서는 tree-shaking에대해 알아보고 enum과 const enum을 사용하는것이 tree-shaking의 관점에서 무엇이 다른지 알아봤습니다.

### 👍알아본내용

- tree-shaking이란 무엇인가?
- enum과 as const의 차이점(tree-shaking의관점에서)
- import/export type이 단순 import/export와 무엇이다른지

### 📃Task4 Link주소 : [enum과 tree-shaking](https://github.com/mobi-community/mobi-3rd-typescript-2/tree/Pair1-Chan/Task4)

## 회고

이번주 task를 통해 typescript를 직접 사용하기전에 알아야할 사전지식들을 많이 공부했습니다. config설정이 어떤역할을 하는지 알아보기위해 공식문서를 다읽어보며 다양한 설정을 활용할 수 있고 앞으로 프로젝트에 필요하다면 찾아서 적용할수 있다는 것을 알게되서 시간이좀 오래걸렸지만 많은 내용이 남은것 같습니다.
그동안 tree-shaking이 무엇인지 궁굼했엇는데 이번에 공부하며 최적화를 위해 어떻게 코드를 작성해야할지 알게됬고 3번 task진행하면서 실제로 적용해보며 JS와 TS작성의 차이가 무엇인지 조금이나마 이해할수있엇습니다.
