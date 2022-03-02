
// load all phones from api

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

// display all phone 


const displayPhone = phones => {
    console.log(phones.length)
    const displayId = document.getElementById('display-phones');
    displayId.textContent = '';
    if (phones.length === 0) {

        document.getElementById('no-result').style.display = 'block';
    }
    else {
        document.getElementById('no-result').style.display = 'none';
        const neededPhones = phones.slice(0, 20);
        for (const phone of neededPhones) {
            const div = document.createElement('div');
            div.classList.add('col')
            div.innerHTML = `
            
                <div class="card h-100 display-div">
                    <img src="${phone?.image}" class="card-img-top display-image" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Phone Name: ${phone?.phone_name}<h5>
                        <p class="card-text">Brand Name: ${phone?.brand}</p>
                    </div>
                    <button type="button" onclick="loadShowDetails('${phone?.slug}')" class="btn btn-secondary fst-normal border rounded">Show details</button>
               </div>
            
            `
            displayId.appendChild(div);
        }
    }

}
// load phone details api 


const loadShowDetails = (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhoneDetails(data.data))

}


//  display phone details start


const displayPhoneDetails = phonesId => {

    const displayDetailsArea = document.getElementById('phone-details');

    if (phonesId?.releaseDate === '') {

        displayDetailsArea.innerHTML = `  
        <img src="${phonesId?.image}" alt="">
        <h3>${phonesId?.name}</h3>
        <p>no release date found..</p>
        <p>Storage: ${phonesId?.mainFeatures?.storage}</p>
        <p>Memory: ${phonesId?.mainFeatures?.memory}</p>
        <p>Chipset: ${phonesId?.mainFeatures?.chipSet}</p>
        <p>Display-size: ${phonesId?.mainFeatures?.displaySize}</p>
        <p>Sensors: ${phonesId?.mainFeatures?.sensors[0]},${phonesId?.mainFeatures?.sensors[1]},${phonesId?.mainFeatures?.sensors[2]},${phonesId?.mainFeatures?.sensors[3]},${phonesId?.mainFeatures?.sensors[4]},${phonesId?.mainFeatures?.sensors[5]}</p>
        <p>Bluetooth: ${phonesId?.others?.Bluetooth} ; WLAN: ${phonesId?.others?.WLAN} ; GPS: ${phonesId?.others?.GPS} ; NFC: ${phonesId?.others?.NFC} ; Radio:  ${phonesId?.others?.Radio} ; USB:  ${phonesId?.others?.USB} ;</p>
        
          `
    }

    else {

        displayDetailsArea.innerHTML = `  
                <img src="${phonesId?.image}" alt="">
                <h3>${phonesId?.name}</h3>
                <p>${phonesId?.releaseDate}</p>
                <p>Storage: ${phonesId?.mainFeatures?.storage}</p>
                <p>Memory: ${phonesId?.mainFeatures?.memory}</p>
                <p>Chipset: ${phonesId?.mainFeatures?.chipSet}</p>
                <p>Display-size: ${phonesId?.mainFeatures?.displaySize}</p>
                <p>Sensors: ${phonesId?.mainFeatures?.sensors[0]},${phonesId?.mainFeatures?.sensors[1]},${phonesId?.mainFeatures?.sensors[2]},${phonesId?.mainFeatures?.sensors[3]},${phonesId?.mainFeatures?.sensors[4]},${phonesId?.mainFeatures?.sensors[5]}</p>
                <p>Bluetooth: ${phonesId?.others?.Bluetooth} ; WLAN: ${phonesId?.others?.WLAN} ; GPS: ${phonesId?.others?.GPS} ; NFC: ${phonesId?.others?.NFC} ; Radio:  ${phonesId?.others?.Radio} ; USB:  ${phonesId?.others?.USB} ;</p>

                  `

    }

}
