class Picture {
    constructor(id, description, image) {
      this.id = id
      this.description = description
      this.image = image
    }
}

class Person extends Picture {
  constructor(id, description, image) {
    super(id, description, image);
  }
}

class Item extends Picture {
  constructor(id, description, image) {
    super(id, description, image);
  }
}

export {
  Picture,
  Person,
  Item,
}