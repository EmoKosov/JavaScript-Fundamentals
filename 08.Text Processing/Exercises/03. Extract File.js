function solve(path) {
    let dir = path.split('\\')
    let filename = dir.pop();


    let lastComma = filename.lastIndexOf('.');
    let name = filename.substring(0, lastComma)
    let extension = filename.substring(lastComma + 1)
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);

}

solve('C:\\ASD\\Internal\\training-internal\\Template.A.pptx')