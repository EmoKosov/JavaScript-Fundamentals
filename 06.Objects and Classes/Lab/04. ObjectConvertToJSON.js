function objectConvertToJson(name, lastName, hairColor) {
   let obj = {
        name,                           //short syntax, but the variable MUST
        lastName,                       //be the same as property!!
        hairColor
    };
    console.log(JSON.stringify(obj));
}
objectConvertToJson('George', 'Jones', 'Brown');