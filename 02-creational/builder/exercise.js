class CodeBuilder {
  constructor(className) {
    this.className = className;
    this.fields = [];
  }

  addField(name) {
    this.fields.push(name);
    return this;
  }

  toString() {
    const classWithFields = `class ${this.className} {
  constructor(${this.fields.join(", ")}) {
    ${this.fields.map((field) => `this.${field} = ${field};`).join("\n    ")}
  }
}`;

    const classWithoutFields = `class ${this.className} {
}`;
    const output = !this.fields.length ? classWithoutFields : classWithFields;

    return output;
  }
}

let cb = new CodeBuilder("Person");
cb.addField("name").addField("age");
console.log(cb.toString());
