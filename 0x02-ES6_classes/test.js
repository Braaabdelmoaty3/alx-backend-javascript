const informations = {
    firstName: "ahemd",
    lastName: "yasser",
}

Object.defineProperties(informations, "age", {enumerable: true, value: 21});
Object.defineProperties(informations, "midleName", {enumerable: false, value: "mohamed"});

