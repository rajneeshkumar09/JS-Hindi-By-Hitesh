/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;      /* >--- control flow ko break krta hai ---< */
    /* --------> Agr brak keyword use na kre to ek bar jaha case match hota hai tb usek bd koi case match nhi krta aur pure code ko execute kr deta hai except default i.e. default ke code ko execute nhi krta hai <--------- */ 
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case matched");
        break;
}

const monthName = "april";

switch (monthName) {
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "marach":
        console.log("marach");
        break;
    case "april":
        console.log("April");
        break;
    case "may":
        console.log("may");
        break;

    default:
        console.log("default");
        break;
}

