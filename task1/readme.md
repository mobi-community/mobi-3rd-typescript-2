## tsconfig.json
- tsconfig파일은 타입스크립트 파일을 자바스크립트로 컴파일 하는 과정에서 설정을 정의해놓는 파일이다.
- 프로젝트를 컴파일 하는데 필요한 루트파일, 컴파일러 옵션 등을 상세히 설정할 수 있다.
- 미리 옵션들을 정의해 놓으면 더이상 컴파일할때 하나하나 대상파일이나 옵션을 지정해주지 않아도 된다.

### tsconfig 전역 속성
- 파일의 최상위에 위치하고있는 속성
```jsx
{
 "compilerOptions": {
  "target": "es5", // 컴파일된 JavaScript 코드의 ECMAScript 버전을 설정
  "module": "commonjs", //사용할 모듈 코드 생성 방식을 설정,'commonjs', 'amd', 'es2015', 'esnext' 있음.
  "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지 
  "checkJs": true, // 일반 js 파일에서도 에러체크 여부 
  "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve', 'react-native', 'react'
  "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된 파일)
  "noImplicitAny": true, // any라는타입이 의도치않게 발생할 경우 에러띄워줌
  "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
  "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기 
  "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기 
  "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일 때만 가능)
  "strict": true, //strict 관련, noimplicit 관련 모드 전부 켜기
  "outDir": "./", //js파일 아웃풋 경로바꾸기
  "sourceMap":true, //소스 맵 생성 여부를 설정
  "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
  "removeComments": true, //컴파일시 주석제거 
  "lib": ["ES2020", "DOM"], // TypeScript가 사용할 수 있는 라이브러리 지정 => ES2020과 DOM 라이브러리를 사용하며, DOM.Iterable을 사용하여 반복 가능한 DOM 요소를 다룸
 }}
```
1. files
- 타입스크립트 변환 명령어를 입력할때마다 대상 파일의 경로를 지정하지 않고 설정 파일에 미리 정의해놓을수 있음.
2. include
- ```files```과 같이 파일을 개별로 지정하지 않고 ```include``` 옵션으로 변환할 폴더를 지정할 수 있음.
```
3. exclude
- 반대되는 속성으로 변환하지 않을 폴더 경로를 지정

4. extends
- 다른 tsconfig.json 파일을 상속받아서 설정을 재사용할 수 있게 해주는 속성
- 만약 설정하지 않으면 기본적으로 ```node_modules```, ```bower_components``` 같은 폴더를 제외
- 컴파일 대상 경로를 정의하는 속성의 우선 순위 files > include = exclude

5. references
- 여러개의 하위 프로젝트로 구성된 프로젝트의 의존 관계를 지정하는 속성

6. compileOnSave
- 저장 시 자동으로 컴파일 여부를 설정하는 속성

7. typeAcquisition
- @types 패키지 자동 설치 및 갱신을 설정하는 속성