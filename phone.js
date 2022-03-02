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
    console.log(phones.length)
    const displayId = document.getElementById('display-phones');
    displayId.textContent = '';
    const neededPhones = phones.slice(0, 30);
    if (phones.length === 0) {

        document.getElementById('no-result').style.display = 'block';
    }
    else {
        document.getElementById('no-result').style.display = 'none';
        for (const phone of neededPhones) {
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

}

const loadShowDetails = (phoneId) => {
    // console.log(phoneId)
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))

}

const displayPhoneDetails = PhonesId => {

    const displayDetailsArea = document.getElementById('phone-details');

    if (PhonesId.releaseDate === '') {
        displayDetailsArea.innerHTML = `
    
                <img src="${PhonesId.image}" alt="">
                <h3>${PhonesId.name}</h3>
                <p>no release date found...</p>
                <p>Storage: ${PhonesId.mainFeatures.storage}</p>
                <p>Memory: ${PhonesId.mainFeatures.memory}</p>
                <p>Chipset: ${PhonesId.mainFeatures.chipSet}</p>
                <p>Display-size: ${PhonesId.mainFeatures.displaySize}</p>
                <p>Sensors: ${PhonesId.mainFeatures.sensors[0]},${PhonesId.mainFeatures.sensors[1]},${PhonesId.mainFeatures.sensors[2]},${PhonesId.mainFeatures.sensors[3]},${PhonesId.mainFeatures.sensors[4]},${PhonesId.mainFeatures.sensors[5]}</p>
    
            
                
                  `
    }
    else {
        displayDetailsArea.innerHTML = `
    
                <img src="${PhonesId.image}" alt="">
                <h3>${PhonesId.name}</h3>
                <p>${PhonesId.releaseDate}</p>
                <p>Storage: ${PhonesId.mainFeatures.storage}</p>
                <p>Memory: ${PhonesId.mainFeatures.memory}</p>
                <p>Chipset: ${PhonesId.mainFeatures.chipSet}</p>
                <p>Display-size: ${PhonesId.mainFeatures.displaySize}</p>
                <p>Sensors: ${PhonesId.mainFeatures.sensors[0]},${PhonesId.mainFeatures.sensors[1]},${PhonesId.mainFeatures.sensors[2]},${PhonesId.mainFeatures.sensors[3]},${PhonesId.mainFeatures.sensors[4]},${PhonesId.mainFeatures.sensors[5]}</p>
                               
                  `
    }

}
