class Document {}

class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    super.print(doc);
  }
  fax(doc) {
    super.fax(doc);
  }
  scan(doc) {
    super.scan(doc);
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    const msg = `${name} is not implemented`;
    super(msg);
    Error.captureStackTrace?.(this, NotImplementedError);
  }
}

class OldFashionedPrinter extends Machine {
  print(doc) {
    super.print(doc);
  }
  // fax(doc) {
  //   super.fax(doc);
  // }
  scan(doc) {
    throw new NotImplementedError("OldFashionedPrinter.scan");
  }
}

class Printer {
  constructor() {
    if (this.constructor.name === "Printer")
      throw new Error("Printer is abstract!");
  }

  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Scanner")
      throw new Error("Scanner is abstract!");
  }

  scan() {}
}

const printer = new OldFashionedPrinter();
printer.scan();
