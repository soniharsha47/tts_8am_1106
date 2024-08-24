var data = [
    {name: 'John', age: 20, location:"Mumbai" , gender:"Male"},
    {name: 'Mike', age: 30, location:"Delhi" , gender:"Male"},
    {name: 'Jenny', age: 25, location:"Bangalore" , gender:"Male"},
    {name: 'Sam', age: 20, location:"Pune" , gender:"Female"},
    {name: 'Kinny', age: 28, location:"Ahmedabad" , gender:"Female"},
    {name: 'Raj', age: 35, location:"Mumbai" , gender:"Male"},
    {name: 'Koy', age: 23, location:"Noida" , gender:"Female"}
]

var choice = 25;

for(i=0;i<data.length;i++){
    if(data[i]['gender']==choice | data[i]['age']>=choice ){
        console.log(data[i]);
    }
}