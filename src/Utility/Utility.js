 const toPascalCase = name => {
    if (!name) return ""
    return name.split(" ").map(x => x.substring(0, 1).toUpperCase() + x.substring(1)).join(" ")
}

export {toPascalCase}