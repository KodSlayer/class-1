const allUsers=[{
    firstname: "Yash",
    gender:"male"
},{firstname:"yashu",
    gender:"male"
}, {
    firstname: "each",
    gender:"forever"
}];

for(let i=0;i<allUsers.length;i++) {
    if(allUsers[i]["gender"]=="male") {
        console.log(allUsers[i]["firstname"]);
    }
}