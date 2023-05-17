console.log('Welcome to the fortune teller!\n');

function chooseNumber(n) {
    return Math.floor(Math.random() * n);
}

const possibleComponents = {
    phrase_structure: ['The only way to __ is to __ your __ and __ your __.', '__ is not a destination, but a __. Enjoy the __ along the way.', 'If you want to __ something, you have to __ it first.'],
    verb: ['survive', 'outlive', 'forgive', 'live', 'succeed', 'love', 'lose', 'own', 'achieve', 'inspire', 'find', 'see', 'feel', 'imagine', 'create', 'explore', 'discover', 'learn', 'grow', 'adapt', 'overcome', 'transform', 'dream', 'communicate', 'connect', 'conquer', 'capture', 'inspire', 'lead', 'experience', 'travel', 'discover', 'understand', 'encourage', 'motivate', 'believe', 'persevere', 'question', 'challenge', 'empower', 'appreciate', 'embrace', 'celebrate'],
    noun: ['life', 'goal', 'passion', 'soul', 'joy', 'adventure', 'challenge', 'wisdom', 'beauty', 'power', 'love', 'dream', 'inspiration', 'success', 'knowledge', 'happiness', 'creativity', 'friendship', 'opportunity', 'hope', 'courage', 'growth', 'imagination', 'harmony', 'achievement', 'freedom', 'purpose', 'balance', 'confidence', 'gratitude', 'transformation', 'faith', 'innovation', 'resilience', 'meaning', 'connection', 'reflection', 'awareness', 'fulfillment', 'perseverance', 'abundance', 'self-discovery', 'serenity', 'ambition', 'compassion'],
    author: ['Winnie the Pooh', 'The Dalai Lama', 'Jesus', 'George Washington', 'Barack Obama', 'Donald Trump', 'Alexandria Ocasio-Cortez', 'The Pope', 'Your mother', 'Your father', 'Seagulls everywhere', 'Harry Potter', 'Beyoncé', 'Marilyn Monroe', 'Albert Einstein', 'Leonardo da Vinci', 'Oprah Winfrey', 'Nelson Mandela', 'Martin Luther King Jr.', 'Amelia Earhart', 'Mulan', 'Sherlock Holmes', 'Elon Musk', 'Rosa Parks', 'Walt Disney', 'Coco Chanel', 'Frida Kahlo', 'Malala Yousafzai', 'Michael Jackson', 'Vincent van Gogh', 'Mozart', 'Princess Diana', 'Steve Jobs', 'Mother Teresa', 'Neil Armstrong', 'Jane Austen', 'Marie Curie', 'Bruce Lee', 'David Bowie', 'Queen Elizabeth II', 'Bob Marley', 'Serena Williams', 'J.K. Rowling', 'Dalai Lama', 'Mahatma Gandhi'],
}

const chooseStructure = chooseNumber(possibleComponents['phrase_structure'].length);

let verb_one = possibleComponents['verb'][chooseNumber(possibleComponents['verb'].length)];
let verb_two = possibleComponents['verb'][chooseNumber(possibleComponents['verb'].length)];
let verb_three = possibleComponents['verb'][chooseNumber(possibleComponents['verb'].length)];
let noun_one = possibleComponents['noun'][chooseNumber(possibleComponents['noun'].length)];
let noun_two = possibleComponents['noun'][chooseNumber(possibleComponents['noun'].length)];
let noun_three = possibleComponents['noun'][chooseNumber(possibleComponents['noun'].length)];
let author = possibleComponents['author'][chooseNumber(possibleComponents['author'].length)];

console.log('Your nugget of wisdom for the day is:\n')

switch (possibleComponents['phrase_structure'][chooseStructure]) {
    case 'The only way to __ is to __ your __ and __ your __.':
        console.log(`The only way to ${verb_one} is to ${verb_two} your ${noun_one} and ${verb_three} your ${noun_two}.\n\t-- ${author}`);
        break;
    case '__ is not a destination, but a __. Enjoy the __ along the way.':
        console.log(`${noun_one.charAt(0).toUpperCase() + noun_one.substring(1).toLowerCase()} is not a destination, but a ${noun_two}. Enjoy the ${noun_three} along the way.\n\t-- ${author}`);
        break;
    case 'If you want to __ something, you have to __ it first.':
        console.log(`If you want to ${verb_one} something, you have to ${verb_two} it first.\n\t-- ${author}`);
        break;
    default:
        console.log('I have no advice to give you, sorry! Try again later maybe?');
}