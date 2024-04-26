# TASK.2 타입이 확실하지 않은 상황에서 안정적인 환경 만들기

타입가드를 사용하면 변수의타입을 명확하게 알 수 있고 이를 통해 안정석을 확보할 수 있다.

```JS
const Test = (T:number|string)=>{
  return T.substr(3)
}
// T에 number | string 이 올지 모르기때문에 substr이라는 메서드를 사용할수가 없다.
```

다양한 타입가드에 방법에 대해 알아보자.

# 1.객체의 특정 키로 검사하기

## in

객체의 키값을 검사하기위해 in 키워드를 사용해서 검사한다.

````JS

type CountryType = {
  Korea: "Korea"
  Japan: "Japan"
}
type CapitalType = {
  KoreaCapital: "seoul"
  JapanCaptial: "tokyo"
}

const someFunc = (country: CountryType | CapitalType) => {
  if ("Korea" in country) {
    return `목적지는 ${country.Korea} 입니다`
  } else {
    return `수도는 ${country.KoreaCapital}`
  } // korea가 country에없기때문에 자동으로 CaptialTpye으로 추론하고 자동완성을 지원해준다.
}```
````

# 2.특정 값의 타입으로 검사하기

## typeof

typeof는 해당변수의 타입을 알려준다. 하지만 주의해야할 점은 typeof는 원시타입에만 사용가능하다. 만약 사용자 정의 타입에사용하면 타입을 사용자정의타입으로 추론한다.

```JS
type UnionType = number | string

const addParams = (x: UnionType, y: UnionType): number | string => {
  if (typeof x === "number" && typeof y === "number" ) {
    return x + y
  }
  if (typeof x === "string" && typeof y === "string") {
    return x + y
  }
  return "x,y를 같은 타입으로 입력해야합니다."
}

```

다음과같이 if문을 사용해 해당 if문안에서 동작할 변수의 타입을 정확하게 추론할 수 있다.

typeof를 사용해서 Array를 검사하면 object를 반환한다.
따라서 Array의 타입을 확인할때는 Array.isArray(배열)을 사용해서 검사해야한다.

```JS
// ex
const Arr = [1, 2, 3, 4, 5]

const checkArr = (arr: Array<any>) => {
  if (Array.isArray(arr)) { // Array.isArray() => boolean반환
    return "Array"
  }
  return "not Array"
}
```

typeof의 반환값은 `"string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"`만 가능하다.

## is

is 키워드는 is키워드를 사용한 함수의 반환값이 true라면 해당타입으로 타입을 추론할 수 있게해준다.

```JS
const isNumber = (x: any): x is number => {
  return typeof x === "number"
}

const add = (x: any, y: any) => {
  if (isNumber(x) && isNumber(y)) {
    return x + y
  }
  return "숫자가아니라 더하기 불가능"
}
```

다음과같이 특정함수의 return값이 is키워드를 반족하는지에 따라 true false를 반환하고 is 키워드로 좁혀진타입을 이용해서 해당함수안에서는 타입을 추론해서 사용할 수 있게해준다.

## instanceof

`대상 instanceof 객체` 의형태로 작성하는데 대상이 객체에서 파생or포함 되었으면 true 아니면 false를 반환한다. 따라서

```JS
arr instanceof Object  //true : array 최상위 프로토타입이 Object라서
func instanceof Object  //true : function 최상위 프로토타입이 Object라서
date instanceof Object  //true : class 최상위 프로토타입이 Object라서
```

모두 true를 반한다.

# 3.가드문 함수를 만들어서 검사하기

```JS
const isNumOrString = (x: any): x is number | string => {
  return typeof x === "number" || typeof x === "string"
}

const checkPramaType = (param: any) => {
  if (isNumOrString(param)) {
    if (typeof param === "number") {
      return "number type"
    } else {
      return "string type"
    }
  }
  return "string or number tpye이아닙니다."
}

```
