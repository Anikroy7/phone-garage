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
    // console.log(phones)
    const displayId = document.getElementById('display-phones');
    displayId.textContent = '';
    console.log(displayId)
    for (const phone of phones) {
        // console.log(phone)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        
            <div class="card h-100 display-div">
                <img src="${phone.image}" class="card-img-top display-image" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Phone Name: ${phone.phone_name}<h5>
                    <p class="card-text">Brand Name: ${phone.brand}</p>
                </div>
                <button type="button" onclick="loadShowDetails('${phone.slug}')" class="btn btn-secondary fst-normal border rounded">Show details</button>
           </div>
        
        `
        displayId.appendChild(div);
    }

}

const loadShowDetails = (phoneId) => {
    // console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))
    console.log(url)
}