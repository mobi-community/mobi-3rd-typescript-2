# TASK.1 타입스크립트에서 꼭 필요한 ts-config

# ts-config의 역할

- vscode의 intellisense가 .ts파일을 인식하는 방법을 도와준다.
- Typescript 를 JavaScript로 컴파일하는 tsc를 제어하는 방법을 도와줌.

ts-config는 두가지의 역할을 수행함으로 config에서 여러 설정을 할때 어떤것을 목적으로 하고 사용하는지 분명히 알아야 할 필요가있다. 컴파일할때 해당설정을 활용할건지 코드를 작성하는 과정에서 vscode의 동작을제어해서 오류를 어떻게 다룰지 명확하게 알고 사용해야한다.

# ts-config의 option

최상위 속성에는 `files,include(exclude),extends,reference`가 있다.

## files

files아래 파일을 작성해서 우리가원하는 파일만 tsc를 실행할 수 있다.

```JS
{
  "files":[
    "우리가.ts",
    "원하는.ts",
    "파일만컴파일.ts"
  ]
}

```

다음과 같이 files아래 컴파일할 파일들을 명시해주면 해당 tsc과정에 해당 파일들만 포함된다.
경로는 ts-config의 상대경로로 작성해주면 된다.

주로 프로젝트의 핵심 파일이나 진입점을 나타내는 파일들을 명시적으로 지정할 때 사용된다. 예를 들어, 프로젝트의 메인 진입점 파일이나, 특정 라이브러리나 모듈의 진입점 파일 등이 files 옵션에 포함될 수 있다.

또한, 주의해야 할 점은 files 옵션을 사용하면 프로젝트 내의 다른 파일들은 무시되고 컴파일되지 않는다. 따라서 files 옵션을 사용할 때는 모든 필요한 파일을 명시적으로 나열해야 하며, 프로젝트의 모든 파일을 컴파일하려는 경우에는 대신 include 옵션을 사용하는 것이 좋다.

## include

include를 사용하면 glob패턴을 사용해서 컴파일할 파일목록을 한번에 지정해줄 수 있다.<br/>
_(glob패턴 : 파일 경로나 이름을 나타내는 패턴을 지정하는데 사용되는 일종의 문자열 패턴)_

```JS
{
  include:["src/**/*"]
}
```

다음과같이 패턴을 활용해 scr아래 하위디렉토리의 모든 파일을 컴파일에 포함하는 방식으로 파일목록을 한번에 지정해준다.

> - `*` 없거나 하나 이상의 문자열과 일치 (디렉터리 구분자 제외)
> - `?` 하나의 문자와 일치 (디렉터리 구분자 제외)
> - `**/` 단계에 관계없이 아무 디렉터리와 일치

추가로 exclude를 사용해 include에 포함된 파일들을 제외시킬 수 있다.
그러나 include에 지정된 파일이 아닌경우 exclude가 적용되지 않는다.

## extends

extends를 사용하면 다른 config파일을 상속해서 사용할 수 있다.
기존 config파일이 먼저 로드되며 상속되는 파일에서 이를 덮어쓴다.
설정파일에 작성된 경로는 해당 파일의 상대경로를 기준으로 삼는다.
현재상태에서 상속에서 제외되는 유일한 최상위속성은 reference뿐이다.

```JS
configs/base.json:

{
  "compilerOptions": {
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
tsconfig.json:

{
  "extends": "./configs/base",
  "files": ["main.ts", "supplemental.ts"]
}
tsconfig.nostrictnull.json:

{
  "extends": "./tsconfig",
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

다음과 같이 작성하면 base의 설정을 tsconfig가 상속하고 tsconfig를 tsconfig.nostrictnull파일이 상속하는데 이때 각설정파일에 상대경로가 존재하면 해당파일을 기준으로 경로를 삼는다.

## compileOptions

compileOptions는 위에서 선택된 파일들을 `어떻게` 다룰건지에 대한 설정이다.
아주 많은 옵션들이 존재한다.

### Allow Unreachable Code

코드가 동작하지않는코드를 허용할건지에 대한 옵션이다.
예를들어 if문에 막혀서 실행되지않는코드를 허용할것인가 에대한 옵션인데

- undefined(default) : 사용자에게 경고해줌
- true : 허용, 사용자에게 경고,에러를 발생시키지않음
- false : 컴파일시 에러를 발생시켜 컴파일 중지

세가지로 설정할 수 있다. 이때 주의해야할 점은 undefined는 사용자에게 경고해준다. 즉 vscode의 intellisense의 동작방식에대한 것이고 false로 설정하면 compile에러를 발생시킨다. 이는 tsc제어방식을 설정해주는 것이다.

이와 마찬가지로 **Allow Unused Labels** 설정도 동일하게 동작한다.

### Exact Optional Property Types

typescript의 옵셔널 타입의 검사를 더욱 엄격하게 강제한다.
예를들어

```JS
interface UserDefaults {
  // The absence of a value represents 'system'
  colorThemeOverride?: "dark" | "light";
}
```

위의 코드는 옵셔널을 사용했기때문에 colorThemeOverride는 사실 undefined를 포함하고있지만 `Exact Optional Property Types = true` 로 설정하면 옵셔널 속성에대한 정의를 엄격하게 만들어 줄 수 있다.

### baseUrl & path

파일을 import할때 상대경로로 작성되서 경로가길어지는 경우를 대비해서 절대경로로 설정해줄 수 있다.
baseUrl을 사용해서 루트경로를 설정해줄 수 있고
path를 사용해서 각경로으 별칭을 만들어 줄 수 있음. 경로 별칭은 key, value형태로 작성하며 보통 키앞에 #,@와같은 특수문자를 많이 사용한다.

```JS
baseUrl:"." // .으로 작성할경우 config파일을 루트 디렉토리로 삼는다.
baseUrl:"./scr" // scr를 루트로 경로로삼는다.
```

```JS
baseUrl:"./scr"
path:{
    "#utils/*": ["./src/common/utilities/*"], // utils아래포함된파일을 사용하고싶을때설정
    "#math-utils/*": ["./src/common/utilities/math/*"],
}
// 위와같이 별칭을 정해주면 해당경로 아래의 파일을 import할때
import { shuffle } from "#utils/random"; // 별칭/파일
// 원래 경로는 // import { shuffle } from "<프로젝트 최상위 경로>/src/common/utilities/random";
```

### Emit

컴파일시 TS에서 JS로변환할때 타입생성파일도 만들어줄건지 설정한다.
default 는 false로설정 되어있는데 이렇게 컴파일을 진행하면 js파일하나만 생성된다.
만약 작성한 모듈을 다른사람들이 사용할때 d.ts파일도 함께 제공해줘야하기 때문에
이런경우에는 true로 설정해서 d.ts파일까지 함께 생성하면 된다.
추가로 **Declaration Dir**을 사용해서 어떤 폴더에서 d.ts를 생성해줄건지 설정 가능하다.

### Emit Declaration Only

해당설정을 사용하면 .js파일을 생성하는것이아닌 d.ts파일만 생성가능하다.
사용자들에게 d.ts파일만을 제공하거나 TS가아닌 트랜스파일러로 JS를 생성하는경우 유용한설정이다.

### Imports Not Used As Values

JS로컴파일하는 과정에서 type의 import문을 어떻게 처리할건지 설정하는옵션

- remove(default) : 디폴트설정이며 type import문은 컴파일시 제거된다.
- preserve : 모든 import문을 유지한채로 컴파일되는데 이는 side-effect를 발생시킬 수 있다.
- error : 모든 import문을 유지하며 type으로 사용되는 import문이 존재하면 에러를 발생시킴

### Allow JS

프로젝트내에서 js파일의 import를 허용할건지 설정한다.
기본값으로 false이기때문에 다음과같이 오류를 발생시킨다.

```JS
// @filename: card.js
export const defaultCardDeck = "Heart";
Try
When imported into a TypeScript file will raise an error:

// @filename: index.ts
import { defaultCardDeck } from "./card";

console.log(defaultCardDeck);
```

AllowJs를 true로바꿔주면 js파일을 ts파일에서 import해도 에러를 발생시키지 않는다.

### target

target은 tsc가 최종적으로 컴파일할 파일의 문법을 결정한다.
기본값은 ES3으로 만약 화살표함수를 사용했다면 ES3에서는 function으로 대체될 것이다.
또한 해당 버전에서 없는 기능을 코드에 작성하면 에러를 발생시킨다.<br/>
다음과 같은 형태로 작성한다.

```JS
{
  compileOptions:{
    target: "ES2020"
  }
}
```

### lib

컴파일시에 포함시켜야하는 JavaScript의 내장 API들의 타입에대한 정보를 지정한다.<br/> target에서 지정한 버전과 일치하는 API를 포함시켜준다.
예를들어 MAP을사용하려면 target을 ES6이거나 이후버전으로 설정해야 사용할수있는데 만약 현재 설정된 버전보다 높은 API를 사용하려면 target을 변경하거나 그것이 불가능하다면 lib를 해당버전으로 작성해주면 오류를 발생시키지않는다. 하지만 주의해야할 것은 lib의 변경으로 해당버전에 맞는 API를 사용할 수 있다는것을 vscode에알려주는 것이지 런타임에러의 발생을 막아주는 것은아니다.

## 결론

이외에도 아주다양한 option들을 사용할 수 있는데 해당 과제를 진행하며
config역할을 알수있었습니다. vscode의 설정을 제어하거나 compile설정을 제어하는 두가지 목적에따라 config를 설정해야한다는 것을 알았습니다.
공식문서를 다 살펴봐서 config를 수정해야할 일이있다면 공식문서를 확인하고 해당 옵션을 변경할수있을것 같습니다.
