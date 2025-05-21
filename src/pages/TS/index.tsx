const App: React.FC = () => {
  // 类型断言 as
  const as_demo = [1, 2].find((item) => item > 1) as number;
  // 联合类型
  const union_demo = (value: number | string, ...args: string[]) => {
    return args ? value + args.length : value;
  };
  //元组
  const tuple_demo = (value: [number, string?]) => {
    return value;
  };

  // 泛型
  const getArray = <T,>(value: T, times?: number): T[] => {
    return new Array(times).fill(value);
  };
  // 接口的继承 extends,只能继承单个
  interface Person {
    name: string;
    age: number;
  }
  interface Student extends Person {
    grade: number;
  }
  const student: Student = {
    name: "张三",
    age: 18,
    grade: 1,
  };
  // 类的修饰符
  class Person2 {
    private name: string;
    protected age: number | undefined;
    constructor(name: string, age?: number) {
      this.name = name;
      this.age = age;
    }
    getName(): string {
      return this.name;
    }
  }

  // 抽象类 abstract. 抽象类不能被实例化，只能被继承. 抽象类中可以包含抽象方法和非抽象方法
  abstract class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    abstract getName(): string; // 抽象方法，子类必须实现
    abstract getAge(): number; // 抽象方法，子类必须实现
    move(): void {} // 非抽象方法，子类可以选择实现
  }

  class Dog extends Animal {
    name = ""; // 子类必须实现抽象类的属性
    constructor(name: string) {
      super(name);
    }
    getName(): string {
      return "dog";
    }
    getAge(): number {
      return 1;
    }
  }

  // 类实现接口
  interface Person3 {
    name: string;
    age: number;
    move(): void;
  }
  class Person4 implements Person3, Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    move(): void {
      console.log("move");
    }
  }

  // 泛型类
  class GenericNumber<T, U> {
    zeroValue: T;

    constructor(zeroValue: T) {
      this.zeroValue = zeroValue;
    }

    add(x: U): U {
      return x;
    }
  }

  const demo1 = new GenericNumber<number, string>(0);

  return (
    <>
      <h3>运行结果</h3>
      {as_demo}
      {/* {union_demo(3)}
      {tuple_demo([1, "2"])}
      {getArray<number>(1)}

      {new Person2("张三")}
      {new Dog("旺财")}
      {new Person4("feifei", 2)}
      {demo1.add("1")} */}
    </>
  );
};

export default App;
