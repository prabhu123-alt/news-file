const URL = "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME";

const api = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();     
        console.log(data);
        let allImages = document.querySelectorAll(".image2");
        let title = document.querySelectorAll(".titel");
        data.forEach((element, index) => {
            if (allImages[index]) {
                allImages[index].src = element.url; 
            }
            if (title[index]) {
                title[index].textContent = element.id;
            }
        });
    } catch (error) {
        console.log("error", error);
    }
};

api();
