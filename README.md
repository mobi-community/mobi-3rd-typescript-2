# mobi-3rd-typescript-2 // 🌀 Jeff

## 패쓰 진행상황

### task 1
#### [🔗README 바로보기](https://github.com/mobi-community/mobi-3rd-typescript-2/blob/Pair1-Jeff/task1)
#### 요약
- tsconfig.json
  - `tsconfig.json` 이란?
  - 옵션 정리하기
  - 내 결론

<br/>

### task 2
#### [🔗README 바로보기](https://github.com/mobi-community/mobi-3rd-typescript-2/blob/Pair1-Jeff/task2)
#### 요약
- type-guard
  - in
  - typeof
  - instanceof
  - 타입 가드 함수

<br/>

### task 3
#### [🔗README 바로보기](https://github.com/mobi-community/mobi-3rd-typescript-2/blob/Pair1-Jeff/task3)
#### 요약
- 절대경로 설정
  - `tsconfig.paths.json`
  - `vite.config.json`
- API 응답에 타입 부여하기
  - interface
  - Generics
- type-guard

<br/>

### task 4
#### [🔗README 바로보기](https://github.com/mobi-community/mobi-3rd-typescript-2/tree/Pair1-Jeff/task4)
#### 요약
- enum & import "type"
  - enum
    - 숫자열거형
    - 문자열거형
  - 'as const' 를 사용한 객체와의 차이
  - enum 사용에 대하여
  - import type

<br/>

------

## 회고
tsconfig 에 대해 조사한 것이 이번 패스 가장 큰 소득이자 어려움이었다. 
설정할 수 있는 부분이 굉장히 많고, 몇 개 적어보니 특정 설정값에 의존하는 것도 발견할 수 있었다.
react 프로젝트를 만들 때는 그냥 알아서 작성해줘서 "ts 가 대충 이런 것 인갑다" 했는데, 공식문서에서 확인해보니 Typescript 를 어떻게 활용할지 개발자에게 많이 맡겨놓은 것 같았다.
당장 모비톤 할 때 `tsconfig.json` 부터 재설정하진 않겠지만 (완성이 목표..), 숙련된 개발자라면 이러한 설정파일부터 만져가며 개발 문화에 적합한 환경을 세팅하지 않을까 싶다. 
개인적으로 실험할 때, 조금씩 건드려봐야겠다.
