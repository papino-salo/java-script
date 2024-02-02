"use strict";
const a = {
    name: "4"
};
assertUser(a);
a.name = "kolz";
function assertUser(obj) {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("!!");
}
