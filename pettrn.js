

for (let i = 0; i < 4; i++) {
    let pattern = "";
    for (let j = 1; j <= 4; j++) {
        pattern += "*"
    }
    console.log(pattern);
}

console.log("\n");



let count = 1;
for (let i = 4; i > 0; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += count;
        count++;
    }

    console.log(pattern);
}
console.log("\n");


for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= 4; j++) {
        if (i % 2 === 0) {
            pattern += "*";
        } else {
            pattern += "#";
        }
    }
    console.log(pattern);
}


console.log("\n");




for (let i = 0; i < 4; i++) {
    let pattern = "";
    for (let j = 4; j > i; j--) {
        pattern += "*"
    }
    console.log(pattern);
}

console.log("\n");



for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

console.log("\n");



for (let i = 4; i > 0; i--) {
    let pattern = "";

    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += "*";
    }
    console.log(pattern);
}


console.log("\n");





for (let i = 4; i > 0; i--) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}
console.log("\n");



for (let i = 0; i < 4; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
        pattern += "*"
    }
    console.log(pattern);
}

console.log("\n");



let count1 = 1;
for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += count1;
        count1++;
    }

    console.log(pattern);
}


console.log("\n");




for (let i = 1; i <= 4; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += j;
    }

    console.log(pattern);
}