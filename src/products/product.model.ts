
// 이 Model은 NestJS 프레임워크와 별개로 Vanila JS 클래스일뿐이다.

// 아래 constructor 파라미터에 public 범위를 지정해주면,
// public id: string;
// this.id = id;
// 와 같은 반복되는 작업을 줄일 수 있다고 한다. Typescript의 특징이라고 한다.

export class Product {
  constructor(public id: string, public title: string, public desc: string, public price: number) {}
}
