class Shape {
  get area() {
    return this._width * this._height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }
}

class Square extends Shape {
  constructor(width, height) {
    if (width !== height) {
      throw new Error("Width and Height should be same!");
    }
    super();
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
    this._height = value;
  }
  set height(value) {
    this._width = value;
    this._height = value;
  }
}

const calculateObjectArea = (object) => {
  object.height = 20;
  return object.area;
};

const rc = new Rectangle(10, 10);
const sq = new Square(10, 10);

console.log(calculateObjectArea(sq));
