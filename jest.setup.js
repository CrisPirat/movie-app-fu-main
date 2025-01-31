//import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

global.DOMRect = class {
  constructor(x = 0, y = 0, width = 100, height = 100) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.top = y;
    this.right = x + width;
    this.bottom = y + height;
    this.left = x;
  }
  static fromRect({ x = 0, y = 0, width = 100, height = 100 } = {}) {
    return new DOMRect(x, y, width, height);
  }
  toJSON() {
    return { x: this.x, y: this.y, width: this.width, height: this.height };
  }
};
