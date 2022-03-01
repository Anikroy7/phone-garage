const loadPhone = () => {

    const searchId = document.getElementById('input-field');
    const serachText = searchId.value;
    document.getElementById('input-field').value = '';

    const url = `https://openapi.programming-hero.com/api/phones?search=${serachText}`;
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))

}

const displayPhone = phones => {
    console.log(phones)
    const displayId = document.getElementById('display-phones');
    console.log(displayId)
    for (const phone of phones) {
        console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        
            <div class="card h-100 display-div">
                <img src="${phone.image}" class="card-img-top display-image" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Phone Name: ${phone.phone_name}<h5>
                    <p class="card-text">Brand Name: ${phone.brand}</p>
                </div>
                
           </div>
        
        `
        displayId.appendChild(div);
    }

}