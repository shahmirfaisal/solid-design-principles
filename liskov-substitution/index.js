class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width(value) {
    this._width = value;
  }
  set height(value) {
    this._height = value;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  get area() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(width, height) {
    if (width !== height) {
      throw new Error("Width and Height should be same!");
    }

    super(width, height);
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
