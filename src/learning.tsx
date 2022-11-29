// forces name as a type string, can never be changed from a string, will give an error
let someoneName: string;
// likewise with numbers, booleans. Those are the basic types
let age: number;
let isCorrect: boolean;
// for arrays, you need to specify what goes in the array. This is an array of numbers
let array: number[];

// if you want to avoid typing, just use type "any"
let obj: any;
// however, the use "unknown" is recommended for "any"
let obj2: unknown;

// Below is called a tuple. You can set it to specifically be a length array with types;
let role: [number, string];

// If I want a variable to have more than one possible type, I can do this:
let changing: number | string;

// Keep in mind, we dont HAVE to use types. This is just an expansion to JS.
let anything;

////////////

// just calling Object is not standard practice, like below:
let person: Object;

// Lets make our first type.
type Person = {
    name: string;
    age: number;
}
// now with a type, we can actually make this object.
let person2: Person = {
    name: "Thomas",
    age: 24
}
// Using the same principles, we can make an array of our custom type:
let arrayPeople: Person[];

//////////

// for functions, we should do it like this
let printName: (name: string) => void;
// here we are presetting what the function takes, and returns
// void is undefined, so it return undefined.
let printName2: (name: string) => never;
// never, never returns anything

// to actually write a function as well, we can still do the following:
function nameFunction (name: string, age: number) {
    let ans: Person = {
        name: name,
        age: age
    }
    return ans
}

/////////////

// if I wanted to use one type inside another type
type X = {
    a:string,
    b:number
}
type Y = X & {
    c:string,
    d:number
}
// here, Y has a,b,c,d properties

// but if we use interface, the syntax is similar to JS classes
// Oh btw, the ? means the property is optional
interface Human {
    name: string;
    age?: number;
}
interface Guy extends Person {
    profession: string;
}



const Learning = () => {

}

export default Learning