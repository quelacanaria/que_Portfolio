var forms = document.getElementById('forms');
const svg2 = document.getElementById('successMessage');
const svg3 = document.getElementById('failedMessage');

async function handleSubmit(event){
    event.preventDefault();
    var status = document.getElementById('formStatus');
    var data = new FormData(event.target);

    fetch(event.target.action, {
        method: forms.method,
        body: data,
        headers: {
            'Accept':'application/json'
        }

    }).then(response =>{
        if(response.ok){
            // status.innerHTML = "Thanks for your submission";

                function task1(callback){
                    setTimeout(() => {
                        svg2.style.display = "flex";
                        callback();
                    
                    }, 0);
                }

                function task2(callback){
                    setTimeout(() => {
                        svg2.style.display = "none";
                        callback();
                    }, 3000);
                }

                task1(() => {
                    task2(() => console.log("done") );
                });

                    forms.reset();
        }else{
            response.json().then(data => {
                if(Object.hasOwn(data, 'errors')){
                    status.innerHTML = data["errors"].map(error => error["message"]).join(', ');
                }else{
                    // status.innerHTML = " Oops! There was a problem submitting your form";

                    function task1(callback){
                    setTimeout(() => {
                        svg3.style.display = "flex";
                        callback();
                    
                        }, 0);
                    }

                    function task2(callback){
                        setTimeout(() => {
                            svg3.style.display = "none";
                            callback();
                        },5000);
                    }

                    task1(() => {
                        task2(() => console.log("done") );
                    });

                }
            })
        }
    }).catch(error => {
        // status.innerHTML = " Oops! There was a problem submitting your form";

        function task1(callback){
        setTimeout(() => {
            svg3.style.display = "flex";
            callback();
        
            }, 0);
        }

        function task2(callback){
            setTimeout(() => {
                svg3.style.display = "none";
                callback();
            }, 5000);
        }

        task1(() => {
            task2(() => console.log("done") );
        });

    });

}

forms.addEventListener("submit", handleSubmit);