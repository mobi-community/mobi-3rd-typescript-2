type UnionType = number | string

const addParams = (x: UnionType, y: UnionType): number | string => {
  if (typeof x === "number" && typeof y === "number") {
    return x + y
  }
  if (typeof x === "string" && typeof y === "string") {
    return x + y
  }
  return "x,y를 같은 타입으로 입력해야합니다."
}

const Arr = [1, 2, 3, 4, 5]

const checkArr = (arr: Array<any>) => {
  if (Array.isArray(arr)) {
    return "Array"
  }
  return "not Array"
}

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
  } // korea가 country에없기때문에 자동으로 CaptialTpye으로 추론
}

const testobj = {
  drink: "coffee",
  number: 10,
}

const testFunc = (obj: any) => {
  if ("drink" in obj) {
    return obj.number
  }
}

const isNumber = (x: any): x is number => {
  return typeof x === "number"
}

const add = (x: any, y: any) => {
  if (isNumber(x) && isNumber(y)) {
    return x + y
  }
  return "숫자가아니라 더하기 불가능"
}

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
