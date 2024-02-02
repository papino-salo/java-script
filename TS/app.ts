

interface User {
    name: string;
}


const a = {
    name: "4"
}

assertUser(a)
a.name = "kolz"


function assertUser(obj: unknown): asserts obj is User {
    if (typeof obj === "object" && !!obj && "name" in obj) {
        return;
    }
    throw new Error("!!")
}