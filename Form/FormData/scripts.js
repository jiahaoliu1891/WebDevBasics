const btn = document.getElementById('submitBtn');
let formData;
btn.addEventListener('click', (e) => {
    e.preventDefault();
    let myForm = document.getElementById("myForm");
    formData = new FormData(myForm);
    formData.append('key1', 'value1');
    formData.append('key2', 'value2');
    for (let val of formData.values()) {
        console.log(val);
    }
    // Send Form Data
    fetch("api/SampleData",
        {
            body: formData,
            method: "POST"
        });
})