# TASK.4 생각해보기

# 1.enum과 as const의 차이는 무엇일까요? 트리쉐이킹과 번들 사이즈 관점에서 이를 조사하고 확인해보세요

## 1. tree-shaking ?

트리 쉐이킹(Tree Shaking)은 모던 자바스크립트 번들러들에서 사용되는 코드 최적화 기법 중 하나이다.
이 기법은 애플리케이션에서 실제로 사용되지 않는 코드를 자동으로 제거한다. 결과적으로, 최종적으로 빌드된 파일의 크기가 줄어들어, 앱의 로딩 속도와 실행 성능이 향상됨.

## 2. tree-shaking방법

### babel설정

번들링 과정에서 babel은 pollyfil과정을 통해 ES6+문법을 이전버전인 ES5문법으로 바꿔준다. 이때 import문은 require()로바뀌는데
require는 export하는 모든 모듈을 가져온다. 따라서 번들링 사이즈가 증가하게 되는데 이를 막기위해 babelrc파일을 변경해주면 ES5문법으로 바꾸지않게 바꿀 수 있다.

```JS
{
  “presets”: [
    [
      “@babel/preset-env”,
      {
	    "modules": false
      }
    ]
 ]
}
```

### 필요한 것만 import

```JS
import * from "/path"
```

보통 작업할때 파일단위로 export,import를해서 코드를 관리한다. 이때 만약 위와같이 `*`로 해당 파일의 모든 코드를 가져오면 사용하지않는것도 포함이 될탠데 이는 불필요하게 번들사이즈를 키운다. 프로젝트가 커질수록 그 효과가 커질탠데.
이를 막기위해서

```JS
import {사용할,파일} from '/path'
```

형식을 사용할 파일들만 import하는 것도 방법이다.

## 3. enum과 as const

enum은 typescript에서 자체적으로 구현한 기능이다. 따라서 Javascript로 변환하는 과정에서 즉시실행함수를 포함한 코드를 생성하한다. 그런데 Rollup과 같은 번들러에서는 이렇게 생성된 즉시실행함수를 사용하지않는 것이라고 판다하지 못해서 번들에 포함된다. 따라서 enum을사용하면 tree-shaking을 하지 못한다.

tree-shaking을 해주기위해 const로 선언해주면 다음과같다.

```JS
const MOBILE_OS = {
  IOS: "IOS",
  Android: "Android",
} as const

type MOBILE_OS = keyof typeof MOBILE_OS // "IOS" | "Android"
```

MOBILE_OS 의 타입을 확인해보면 "IOS" | "Android" 로확인되는데 union타입처럼 확인된다.
const 로 선언해주고 as const를 사용해 enum과 같은 효과를 얻으면서 tree-shaking도 적용되게 만들 수 있다.

# 2.enum은 그렇다면 쓰지 않는 것이 좋을까요?

tree-shaking관점에서 본다면 const enum 이나 union type을 사용하는것이 번들링 사이즈를 줄이는데 더 효과적일 것이라고 생각된다.
enum을사용하는 목적이 가독성이나 특정 값들을 관리하기위해서 사용되는 것을 생각하면 모든 값들을 enum으로 관리하는 경우가 아니라면 번들사이즈에 크게 영향을 줄것 같지 않아서 enum에 목적에맞는 사용을 하는 것은 괜찮을 것이라고 생각한다.

# 3.export한 type을 받을 때 import type을 해야하는 이유는 무엇일까요?

typescript에서는 type만을위한 import export가 존재한다.

```JS
type Test = "GO" | "OUT"

export type Test // export type형태로 export

import type {Test} from "경로" // import type 형태로 import

```

다음과같이 export type 형태로 내보내주고 import type형태로 받아오는것이 가능하다.
이렇게 type입을 명시해주면 런타임시 JS에서는 type을 사용하지않기 때문에 컴파일 결과에서 제외가 된다.
따라서 코드 길이가줄어들어 번들사이즈를 줄일 수 있다.

주의할 점은 type alias를 사용했을때만 가능하다. interface는 export/import type형태로 작성할 수 없다.
