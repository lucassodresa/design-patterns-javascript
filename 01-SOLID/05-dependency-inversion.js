const Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW-LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser")
      throw new Error("RelationshipBrowser is abstract!");
  }
  findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }
  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
  findAllChildrenOf(name) {
    return this.data
      .filter(
        (relation) =>
          relation.from.name === name && relation.type === Relationship.parent
      )
      .map((relation) => relation.to);
  }
}

// HIGH-LEVEL MODULE
class Research extends RelationshipBrowser {
  // constructor(relationships) {
  //   const relations = relationships.data;
  //   relations
  //     .filter(
  //       (relation) =>
  //         relation.from.name === "John" && relation.type === Relationship.parent
  //     )
  //     .forEach((relation) =>
  //       console.log(`John has a child named ${relation.to.name}`)
  //     );
  // }

  constructor(browser) {
    super();
    browser
      .findAllChildrenOf("John")
      .forEach((child) => console.log(`John has a child named ${child.name}`));
  }
}

const parent = new Person("John");
const child1 = new Person("Chris");
const child2 = new Person("Matt");

const rels = new Relationships();
rels.addParentAndChild(parent, child1);
rels.addParentAndChild(parent, child2);

new Research(rels);
