 const toPascalCase = name => {
    if (!name) return ""
    return name.split(" ").map(x => x.substring(0, 1).toUpperCase() + x.substring(1)).join(" ")
}
function randomStr(prefix){
    return Math.random().toString(36).replace("0.",prefix || "")
 }
export {toPascalCase}
export {randomStr}