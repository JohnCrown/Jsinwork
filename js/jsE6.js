"use strict";

class Rectangle { //Только с большой буквы имя класса
  constructor (height, width) {
    this.height = height;
    this.width = width;
  }

  calcArea() { //Метод
    return this.height * this.width;

  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor (height, width, text, bgColor) {
      super(height, width);//Вызывает то что было у родителя Rectangle
      this.text = text;
      this.bgColor = bgColor;

  }
  showMyProps() {
    console.log(`Текст: ${this.text}, цвет ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, 'Hellow World', 'red');
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());
