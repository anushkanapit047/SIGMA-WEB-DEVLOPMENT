console.log("Anushka is a black hat Hacker")
console.log("Ankit is a Ethical Hacker")

setTimeout(() => {
    console.log("i am inside settimeout")
}, 2000);

console.log("The End")

const fn = () => {
    console.log("Hothing")
}


const callback = (arg) => {
    console.log(arg)
}
const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("ANUSHKA");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

