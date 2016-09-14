let promise = new Promise((resolve,reject)=>
{
    setTimeout(()=>{
        let loaded_img = new Image()
        let src = "../image.jpg"
        loaded_img.src = src
        loaded_img.onload = () =>
            resolve(src);

        loaded_img.onerror = () =>
            reject("Error img not found");
},1000)
});
promise
    .then(
        result => {
            document.getElementById("example").innerHTML = '<img src="' + result + '"/>'
        },
        error => {
            alert(error);
        }
    );