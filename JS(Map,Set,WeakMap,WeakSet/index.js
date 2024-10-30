const map = new Map([{ 1: "1" }]); //Instance

let human = {
  name: "Ibo",
  position: "Intern",
};

map.set(human, "700");

human = null;

map.set(56, "56");

map.delete(56);

// console.log("1", map.get("700"));
// console.log("2", map.get(56));

console.log("map", map);

const set = new Set([2, 3, 4, 5, 6]);
set.add(5);

set.add("test");
set.add("test");
console.log(set.has(99));
set.delete("test");

console.log("normal set", set);

console.log("iterator", set.keys());

for (let i of set.keys()) {
  console.log("iiiiii", i);
}

const weakMap = new WeakMap();

let mapObj = { name: "Ibo", surname: "anthing" };

weakMap.set(mapObj, 1);

mapObj = null;

console.log(weakMap.get(mapObj));

const weakSet = new WeakSet();

let test = { name: "test" };

weakSet.add(test);
weakSet.add({ name: "test" });
weakSet.add({ test: "test" });

console.log(weakSet.has({ name: "test" }));

// const test = { a: 1 };
// test.b = "c";

// test["test"] = "Ibo";
// console.log(test);
