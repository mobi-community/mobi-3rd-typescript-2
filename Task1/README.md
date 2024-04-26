# Task1 - ts-config

# tsconfig.json 이란

- typeScript를 js로 변환 시키는 컴파일 설정을 한꺼번에 정리해놓은파일(루트파일, 컴파일러 옵션등을 상세히 설정할 수 있다)
- 컴파일 할때 명렁에 일일히 대상파일이나 옵션을 지정하는 불필요한 행위를 막기위해 사용됨
- 현재 폴더에 tsconfig 설정 파일잉 없다면 프로젝트 폴더 내에서 상위 폴더의 경로를 상위폴더의 경로를 검샣해 나간다

# tsconfig 의 역할

- 컴파일 과정 제어
- VS Code에서의 IntelliSense가 typeScript처리하는 방법 제어

# tsconfig 의 최상위 속성

1.  ## files
        {
        "files": [
        "src/main.ts",
        "src/sign/signInPage.ts",
        "src/sign/signUpPage.ts"
        ]
        }

- 컴파일할 파일들의 목록을 명시적으로 지정하는 속성 , 파일을 찾지 못하면 오류가 발생합니다

- 컴파일 하기 원하는 파일을 정확한위치로 적을것
- 주의 : exclude보다 우선순위가 높다 , 생략될경우 include 와 exclude로 컴파일을 정한다

2. ## extends

- 다른 tsconfig.json 파일의 설정들을 가져와 재사용할수있게해주는 속성 (보통 extends 속성은 tsconfig.json 파일의 최상위 위치)
- 경로 해석 (상대 경로나 모듈 경로를 사용할 수 있다)
- 설정 우선순위 (상속받은 설정 파일 base설정후 tsconfig 적용)
  - 상속받는 파일에서 특정 설정을 변경하거나 새로운 설정을 추가할 수 있습니다.
- 상대 경로 처리 (설정 파일에 명시된 모든 상대 경로는 해당 경로가 위치한 설정 파일을 기준으로 해석됨)
- 속성의 오버라이드 (상속받는 파일에 지정된 속성이 기본 파일의 설정을 대체합니다.)
  - files, include, exclude 같은 배열 속성은 상속받는 설정 파일에서 기본 설정 파일의 해당 속성을 완전히 덮어쓰게 됩니다

### ex)

    // config/base.json
    {
    "compilerOptions": {
        "noImplicitAny": true,
        "strictNullChecks": true
    }
    }

    //tsconfig.json
        {
    "extends": "./configs/base",
    "compilerOptions": {
        "strictNullChecks": false
    },
    "files": [
        "src/main.ts",
        "src/utils.ts",
        "src/types.d.ts"
    ]
    }

3. include
   - {
     "include": ["src/**/*", "tests/**/*"]
     }

- include 속성은 files와같이 프로젝트 에서 컴파일 파일들을 지정하는속성이지만 **와일드 카드 패턴** 으로 지정함
- include는 exclude보다 우선순위가 낮아 include에 명시되어있어도 exclude에 명시되있다면 제외되게 된다
- **와일드 카드 패턴**이란 tsconfig.json 파일에서 include나 exclude 속성에 사용할 수 있는 파일이나 디렉토리를 그룹화하여 일치시키는 기호라고 보면 된다.

        1. src/*.ts : src 디렉토리에 있는 모든 .ts 파일

        2. src/number?.ts : src 디렉토리에 있는 number1.ts,
        number2.ts, number3.ts ... 등에 일치(문자 한게 매치 , 디렉터리 구분자 빼고 )

        3. src/**/.ts : src 디렉토리에 와 그하위 디렉토러에 있는 모든 .ts 파일

- 주의 글롭 패턴에 파일 확장자가 포함되어있지 않다면 오직 지원되는 확장자를 가진 파일들만 포함됩니다
  - e. g. .ts, .tsx, .d.ts가 기본적으로 포함되며, allowJS가 true로 설정되었을 경우에는 .js, .jsx 까지 포함

4. ## exclude

- include 에서 파일을 포함할 때 생략할 파일 이름이나 패턴을 배열로 지정합니다.
  {
  "compilerOptions": {
  ...
  },

        "exclude": [
            "node_modules", // node_modules 디렉토리를 제외
            "**/*.test.ts" // 모든 .test.ts 파일을 제외
        ]
        }

- exclude 는 오직 include 의 설정의 결과로 포함되는 파일만 변경합니다
- exclude 로 지정된 파일은 코드상의 types를 포함하여, import에 의해 코드 베이스의 일부가 될 수 있습니다.
  - reference 지시문 또는 files 목록에 지정되어 있기 때문입니다.

5. ## compilerOptions

- compilerOptions 은 위 4가지의 설정들과는 다르게 위 설정들을 통해 이미 선택된 파일들을 처리하는 부분이된다 그래서 굉장히 많은 속성들이 있는데 밑에 서 다루도록하고 한블로그에서 많이 사용하는 옵션들을 구분해둔 ex를 가져와보겟습니다

      {
        "compilerOptions": {

       /* 기본 옵션
       "incremental": true,
       "target": "es5",
       "module": "esnext",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "checkJs": true,
       "jsx": "react",
       "declaration": true,
       "declarationMap": true,
       "sourceMap": true,
       "outFile": "./",
       "outDir": "./dist",
       "rootDir": "./",
       "composite": true,
       "tsBuildInfoFile": "./",
       "removeComments": true,
       "noEmit": true,
       "importHelpers": true,
       "downlevelIteration": true,
       "isolatedModules": true,

       /* 엄격한 유형 검사 옵션

       "strict": true,
       "noImplicitAny": true,
       "strictNullChecks": true,
       "strictFunctionTypes": true,
       "strictBindCallApply": true,
       "strictPropertyInitialization": true,
       "noImplicitThis": true,
       "alwaysStrict": true,

       /* 추가 검사 옵션

       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "noImplicitReturns": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedIndexedAccess": true,

       /* 모듈 분석 옵션

       "moduleResolution": "node",
       "baseUrl": "./",
       "paths": {},
       "rootDirs": [],
       "typeRoots": [],
       "types": [],
       "allowSyntheticDefaultImports": true,
       "esModuleInterop": true,
        "preserveSymlinks": true,
       "allowUmdGlobalAccess": true,

       /* 소스맵 옵션

       "sourceRoot": "./",
       "mapRoot": "./",
       "inlineSourceMap": true,
       "inlineSources": true,

       /* 실험적인 기능 옵션

       "experimentalDecorators": true,
       "emitDecoratorMetadata": true,

       /* 고급 옵션

       "skipLibCheck": true,
       "forceConsistentCasingInFileNames": true


         }
      }

# compilerOptions 속성

    "compilerOptions":{
            option :
            (밑에잇는옵션들)
    }

## 기본속성

1. target

- lib 의 프로퍼티의 기본값을 자동으로 결정시킴
- 어떤 버전의 js로 컴파일될지 설정가능

        "target":"ES6"

2. lib

- 런타임 환경을 설명하는 번들 라이브러리 선언 파일 세트를 지정합니다.
- lib의 프로퍼티를 지정하지 않을경우 자동으로 설정되는값

  1.  target이 es3이면 default lib.d.ts사용
  2.  target이 es5이면, default dom, es5, scriptHost을 사용
  3.  target이 es6이면, default dom, es6, dom.iterable, scriptHost을 사용

            "lib": ["es5", "es2015.promise","dom"]

3. ## experimentalDecorators / emitDecoratorMetadata

- typeScript의 @Decorator를 사용하기 위해서는 true로 지정해야 작동함

       "experimentalDecorators": true /* ES7 데코레이터(decorators) 실험 기능 지원 설정 */
       "emitDecoratorMetadata": true /* 데코레이터를 위한 유형 메타데이터 방출 실험 기능 지원 설정 */

4.  ## jsx
         	"jsx": "preserve" // tsx 파일을 jsx로 어떻게 컴파일할 것인지
    1. react : .js파일로 컴파일 된다 (jsx파일을사용하여 내보냄)
    2. react-jsx : jsx를 호출 .js로 변경하여 파일을 내보냄
    3. react-jsx dev : jsx를 호출 .js로 변경하여 파일을 내보냄
    4. preserve : .jsx 파일로 컴파일 된다 (jsx 코드가 그대로 유지됨)
    5. react-native : .jsx 파일로 컴파일됨 (jsx 코드가 그대로 유지됨)

## Modules 옵션

1. ## rootDir
   -
2. ## module / moduleResolution
   1. CommonJs (target 프로퍼티가 ES3 혹은 ES5로 지정되었을 때의 기본값)
   2. ES6/ES2015 (target 프로퍼티가 ES6 혹은 그 이상의 버전으로 지정되었을 때의 기본값)
   3. (ES2020, ESNext, AMD, UMD, System, None)

- **"module": "commonjs"** : 생성될 모듈 코드 설정: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'.
- **"moduleResolution"**: "node" : 모듈 분석 방법 설정: 'node' (Node.js) 또는 'classic' (TypeScript pre-1.6).

3.  ## baseURL / paths

    ### baseURL

        import {TextField}from '../../../../components/'
        => from '@components/textfield';

    ### path

- baseUrl 을 기준으로 상대 위치로 가져오기
  => "baseUrl": "./",
  "paths": {
  "@components/_": [
  "src/components/_"
  ]}

4.  ## types / typeRoots
    ### types

- 기본적으로 node_modules 폴더를 제외하지만 ,라이브러리에서 정의해놓는 @types폴더는 컴파일에 **자동** 으로 경로에 포함됨 만약 기본경로를 변경하고싶다면
  "compilerOptions": {
  "typeRoots": ["./my-tslib"]
  "types": ["node", "jest", "express"],
  }

5.  ## resolveJsonModule

- 확장자가 .json인 모듈을 import 를 허용

## Interop Constraints 옵션

1. ## esModuleInterop
2. ## forceConsistentCasingInFileNames

## JavaScript Support 옵션

1. ## allowJs
2. ## checkJs

## Emit 옵션

1. outFile
2. outDir
3. noEmit
4. sourceMap
5. downlevelIteration
6. removeComments
7. noEmitOnError
8. declaration

## Type Checking 옵션

- 너무많은 옵션들이있어 이름만으로해석안되는것들만 작성하겟습니다

1. strict
2. noImplicitAny
3. suppressImplicitAnyIndexErrors
4. noImplicitThis
5. strictNullChecks
6. strictFunctionTypes
7. strictPropertyInitialization
8. strictBindCallApply
9. alwaysStrict
10. noUnusedLocals
11. noUnusedParameters
12. noImplicitReturns
13. noFallthroughCasesInSwitch

## Completeness 옵션

1. skipLibCheck

### compilerOptions 속성은 생략될 수 있으며 생략하면 컴파일러의 기본 값이 사용됩니다

# 정리 중

옵션들에 관해서 지금 작성하는것이 크게 다가오지 않는부분도잇고 대표적으로 사용하는것들을 제외하곤 이름에 대부분의 의미가 담겨저있는거같아 본문을 통해 사용할때 보는것이 조금더 효율적일거같다
