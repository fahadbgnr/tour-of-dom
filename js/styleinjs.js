const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid blue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'lightgray';
    section.style.paddingLeft = '7px';

}

const placesContainer = document.getElementById ('places-container');
placesContainer.style.backgroundColor = 'skyblue';