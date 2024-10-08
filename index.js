const iconContainers=document.querySelectorAll('.questionLines');
const questionWrappers=document.querySelectorAll('.questionWrapper');


const textArray=["Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!", "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR7.99 to EUR11.99 a month. No extra costs, no contracts.", "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.","Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.", "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.", "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.","Your browser preferences determine the language shown here."]

iconContainers.forEach((div, index)=> {
    div.addEventListener('click', function(){
        changeIcon(this);
        handleOpen(index);
    });
});

function handleOpen(index) {
const questionWrapper=questionWrappers[index];
if (questionWrapper.classList.contains('open')){
    questionWrapper.classList.remove('open');
    const remove=questionWrapper.querySelector('p');
    questionWrapper.removeChild(remove);
}

else {
questionWrapper.classList.add('open');
const newDivText=document.createElement('p');
newDivText.innerText=textArray[index];
questionWrapper.appendChild(newDivText);
};
};


function changeIcon(div){
    const icon=div.querySelector('i');

    if (icon.classList.contains('fa-plus')) {
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-x');
    }
    else if (icon.classList.contains('fa-x')) {
    icon.classList.remove('fa-x');
    icon.classList.add('fa-plus');
}
}

