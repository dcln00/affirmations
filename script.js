"use strict";
let affirmation = () => {
    let affirmations = [
        "I am appreciated",
        "I attract prosperity in my life",
        "I am powerful",
        "I wake up motivated",
        "I am living with abundance",
        "I am abundant",
        "You got this",
        "You'll figure it out",
        "You're a smart cookie",
        "I believe in you",
        "Sucking at something is the first step towards being good at something",
        "Struggling is part of learning",
        "Everything has cracks - that's how the light gets in",
        "Mistakes don't make you less capable",
        "We are all works in progress",
        "You are a capable human",
        "You know more than you think",
        "10x engineers are a myth",
        "If everything was easy you'd be bored",
        "I admire you for taking this on",
        "You're resourceful and clever",
        "You'll find a way",
        "I know you'll sort it out",
        "Struggling means you're learning",
        "You're doing a great job",
        "It'll feel magical when it's working",
        "I'm rooting for you",
        "Your mind is full of brilliant ideas",
        "You make a difference in the world by simply existing in it",
        "You are learning valuable lessons from yourself every day",
        "You are worthy and deserving of respect",
        "You know more than you knew yesterday",
        "You're an inspiration",
        "Your life is about to be incredible",
        "Nothing is impossible. The word itself says 'I’m possible!'",
        "Failure is just another way to learn how to do something right",
        "I give myself permission to do what is right for me",
        "You can do it",
        "It is not a sprint, it is a marathon. One step at a time",
        "Success is the progressive realization of a worthy goal",
        "People with goals succeed because they know where they’re going",
        "The opposite of courage in our society is not cowardice... it is conformity",
        "The past does not equal the future",
        "The path to success is to take massive, determined action",
        "It’s what you practice in private that you will be rewarded for in public",
        "Small progress is still progress",
        "Starting is the most difficult step - but you can do it",
        "Don't forget to enjoy the journey",
        "It's not a mistake, it's a learning opportunity",
    ];
    return affirmations[Math.floor(Math.random() * affirmations.length)];
};
let genBtn = document.querySelector('.generate');
genBtn.addEventListener('click', () => {
    let affirmText = document.querySelector('.affirmations');
    let container = document.querySelector('.inner-container');
    let headingBtn = document.querySelector('.heading');
    headingBtn.style.fontSize = '3rem';
    affirmText.style.opacity = '1';
    container.style.height = '500px';
    affirmText.innerHTML = affirmation();
});
