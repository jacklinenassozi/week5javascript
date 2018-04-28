
function btn(){
    console.log('youClickedMe');
};
function fetchRepositoryData(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function() {
        console.log("Data loaded.");
        const data = JSON.parse(xhr.responseText);
        callbackFn(data);
    });
    xhr.open('GET', url);
    xhr.send();
}



const btn2 = document.querySelector('#btn');
// btn.addEventListener('click', addNewItem);
fetchRepositoryData('https://api.github.com/orgs/HackYourFuture/repos', function(repoList) {
    console.log(repoList);
    for (let i=0; i < repoList.length; i++) {
       //console.log (repoList[i].name)
  console.log(repoList[i].git_url)
        const ul = document.querySelector('ul#repoList');
        
        btn2.addEventListener('click',function(){
            const li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = '<a target="_blank" href="' + repoList[i].html_url + '">' + repoList[i].name + '</a>';
            
        })  
    }
});

/*
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000)
*/

//function generating an array containing values from start value to end value
function myArray(startValue,endValue,threeCallback,fiveCallback,bothCallback){
    //an empty array where we are to pass the values after iteration
    let array=[];
    for(let i=startValue;i <=endValue; i++){
    // console.log([i]);
        //push all values to an empty value from start to end values
array.push(i)
    }
    //function should iterate over the array and call the second argument if the array value is divisible by 3
for (let n=0;n<array.length;n++){
    //console.log(array[i]);
    if ((array[n]% 3 === 0)){
 threeCallback(array[n]);
    }
    //call the second argument if the array value is divisible by 5
    else if((array[n]% 5 === 0)){
fiveCallback(array[n]);
    }
    //functions should be called if the array value is divisible by both 3 and 5
    if ((array[n]% 3 === 0)&&(array[n]% 5 === 0)){
        bothCallback(array[n]);
    }
}
//if return is attached to the if statement it will only go through one number and break the code ,so we leave it out.
return array;
}
//calling a function
let results=myArray(9,15,function(n){
    console.log(n+" is divided by 3");
},function(n){
    console.log(n+" is divisible by 5");
},function(n){
    console.log(n+" is divided by both 3 and 5");
});
console.log(results);





