// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march";
switch (month) {
    case 1:
        console.log(`January`);
        break;
    case 2:
            console.log(`February`);
            break;
    case "march":
            console.log(`March`);
            break; //Very important in switch case
    case "april":
            console.log(`April`);
            break;

    default:
        console.log(`Not found`);
        break;
}