const riddles = {
    "name1": { question: "As hard as a stone but as soft as a sock. Their symbol is a heart with wings made of gold. You see them all the time, but sometimes they disappear. Sometimes called Ricky, but their name is:", answer: "rocky" },
    "name2": { question: "The first game I ever touched. Four dimensions collide at once. One of ultimate youth. One of amazing hope. One of futuristic ideals. One of past vengeance. All pulled together to face one mysterious foe. What game am I?", answer: "shattered dimensions" },
    "name3": { question: "What gets bigger the more you take from it?", answer: "a hole" },
    "name4": { question: "Conceived in a world of wonder, destined to die. I exist briefly, yearning to see their life. I linger beside those I love, enthralled with them on midsummer eve. And in wintertide, in their passing I grieve. What am I?", answer: "death" },
    "name5": { question: "Angstrom has a mass of 60kg and enters a poll at a water park using a slide 2m high. If his gravitational potential energy of the Earth-Slide system is equivalent to his kinetic energy at the bottom of the slide, and the acceleration due to gravity on Earth is 9.81m/s², find his velocity when he enters the water.", 
              answer: "6.26", image: "https://cdn.discordapp.com/attachments/928655627859918888/1348061519874883614/Untitled_9.png" },
    "name6": { question: "What animal do I own a onesie of?", answer: "frog" },
    "name7": { question: "What has a heart that doesn’t beat?", answer: "artichoke" },
    "name8": { question: "What is so fragile that saying its name breaks it?", answer: "silence" },
    "name9": { question: "I’m not alive, but I grow; I don’t have lungs, but I need air; I don’t have a mouth, and I can drown. What am I?", answer: "fire" },
    "name10": { question: "The more you have of me, the less you see. What am I?", answer: "darkness" },
    "name11": { question: "What has many keys but can’t open a single lock?", answer: "piano" },
    "name12": { question: "I am not alive, but I grow. I don’t have eyes, but I can show you a lot. What am I?", answer: "book" },
    "name13": { question: "What comes down but never goes up?", answer: "rain" },
    "name14": { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    "name15": { question: "What gets wetter as it dries?", answer: "towel" },
    "name16": { question: "What has an eye but cannot see?", answer: "needle" }
};

// Function to start the riddle when a name is clicked
function startRiddle(name) {
    document.querySelector('.names').style.display = 'none';

    document.getElementById('riddleContainer').style.display = 'block';

    document.getElementById('riddle').innerText = riddles[name].question;
    
    const riddleImage = riddles[name].image;

    if (riddleImage) {

        document.getElementById('riddle').inn
        
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    
    sessionStorage.setItem('currentRiddle', name);
}

function checkAnswer() {
    const currentRiddle = sessionStorage.getItem('currentRiddle');
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    if (userAnswer === riddles[currentRiddle].answer.toLowerCase()) {
        document.getElementById('message').innerText = "Correct! You can now proceed.";

        const nextName = getNextName(currentRiddle);
        if (nextName) {
            document.getElementById(nextName).style.display = 'block';
        }

        document.getElementById('riddleContainer').style.display = 'none';
        document.querySelector('.names').style.display = 'block';
    } else {
        document.getElementById('message').innerText = "Incorrect. Try again!";
    }
}

function getNextName(currentRiddle) {
    const riddleOrder = [
        "name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8",
        "name9", "name10", "name11", "name12", "name13", "name14", "name15", "name16"
    ];
    
    const currentIndex = riddleOrder.indexOf(currentRiddle);
    if (currentIndex < riddleOrder.length - 1) {
        return riddleOrder[currentIndex + 1];
    }
    return null;
}
