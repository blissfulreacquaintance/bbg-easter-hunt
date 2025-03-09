// Riddles object with the question and correct answer for each person
const riddles = {
    "name1": { question: "As hard as a stone but as soft as a sock. Their symbol is a heart with wings made of gold. You see them all the time, but sometimes they disappear. Sometimes called Ricky, but their name is:", answer: "rocky" },
    "name2": { question: "The first game I ever touched. Four dimensions collide at once. One of ultimate youth. One of amazing hope. One of futuristic ideals. One of past vengeance. All pulled together to face one mysterious foe. What game am I?", answer: "shattered dimensions" },
    "name3": { question: "What gets bigger the more you take from it?", answer: "a hole" },
    "name4": { question: "Conceived in a world of wonder, destined to die. I exist briefly, yearning to see their life. I linger beside those I love, enthralled with them on midsummer eve. And in wintertide, in their passing I grieve. What am I?", answer: "death" },
    "name5": { question: "Angstrom has a mass of 60kg and enters a poll at a water park using a slide 2m high. If his gravitational potential energy of the Earth-Slide system is equivalent to his kinetic energy at the bottom of the slide, and the acceleration due to gravity on Earth is 9.81m/s², find his velocity when he enters the water. KE = ½mv² | ΔUg = mgΔy | K = kinetic energy, m = mass, U = potential energy, v = velocity, y = height", answer: "6.26" },
    "name6": { question: "What animal do I own a onesie of?", answer: "frog" },
    "name7": { question: "I'm always there when I'm on the low, work as a purpose and good for show.", answer: "shoes" },
    "name8": { question: "Heed thy speech and recognize thy message, what you are looking for is something I gave as a blessing.", answer: "day of prayer" },
    "name9": { question: "I can be long or short. I can be grown or bought. I can be painted or left bare. I can be green or purple. I can be a snack, or used in a stack. I am always on the go, but never leave home. What am I?", answer: "a grape" },
    "name10": { question: "The more you have of me, the less you see. What am I?", answer: "darkness" },
    "name11": { question: "What has many keys but can’t open a single lock?", answer: "piano" },
    "name12": { question: "I am not alive, but I grow. I don’t have eyes, but I can show you a lot. What am I?", answer: "book" },
    "name13": { question: "What comes down but never goes up?", answer: "rain" },
    "name14": { question: "What can travel around the world while staying in the corner?", answer: "stamp" },
    "name15": { question: "-No play -No money -No speech -No motivation -No common sense -No superior you can look up to -No father (tragic TLC story) -No milk -At this point you don't even drink water -No mother -No heritage -No offspring -No game (unless it's league of legends) –No wins -You don't even try -Dumbass has to play on baby difficulty -Zero skill inheritance -Infact can you even walk? -Probably built like a toddler -Looks like a football -Needs to be kicked? -Needs to get bitch slapped -It had no effect -What the fuck 23 -I'm just gonna rely on you getting no bitches now despite me having none -No bicthes -Fuck my spelling -No bitches -No women. -No men -No trans21 -No gay -No anythang' -Probably has 0% on that website -Infact they're probably underaged on this server, get the fuck out -...18 -Im not done, let's talk about something else -Uhhhhhh -You weak as a stick -Weakass, bitchass, hoe-less specimen -You remember that one episode from Spongebob where he was lifting bunny weights? -Thas you! 11 -You probably wouldn't last a SECOND in a horror movie (blm) -I bet you say let's split up gang dumbass -You need the mindset What's gonna work? Teamwork! Here's the actual equation. 7 https://youtu.be/ozdjeA321bY?si=gtTuTtWaD61-uDRu (All Diabetes = 1) A= The amount of side effects present in this medication. B= the amount of letter “u’s” present in this document before this sentence, “↑” up to “-It had no effect”; subtracted by the amount of numbers (including fraction & exponent) present within this document backwards “↑” until “²8” starting “here.” (Rounded to the nearest 0 or 10.) C= How many times I've been pinged with the word “dream” attached before March 8th (general chat). D= the amount of characters that were sent in a ping towards me at 1:54am EST March 8th. Use (A*(B1-B2)+C)/D to get your answer.", answer: "139.75" },
    "name16": { question: "What has an eye but cannot see?", answer: "needle" }
};

// Function to start the riddle when a name is clicked
function startRiddle(name) {
    // Hide the name list
    document.querySelector('.names').style.display = 'none';

    // Show the riddle container
    document.getElementById('riddleContainer').style.display = 'block';

    // Set the riddle question
    document.getElementById('riddle').innerText = riddles[name].question;
    
    // Clear previous answer and message
    document.getElementById('answer').value = '';
    document.getElementById('message').innerText = '';
    
    // Save the name clicked to compare later
    sessionStorage.setItem('currentRiddle', name);
}

// Function to check the user's answer
function checkAnswer() {
    const currentRiddle = sessionStorage.getItem('currentRiddle');
    const userAnswer = document.getElementById('answer').value.trim().toLowerCase();

    // Check if the answer is correct
    if (userAnswer === riddles[currentRiddle].answer.toLowerCase()) {
        // Show success message
        document.getElementById('message').innerText = "Correct! You can now proceed.";

        // Unlock the next name
        const nextName = getNextName(currentRiddle);
        if (nextName) {
            document.getElementById(nextName).style.display = 'block';
        }

        // Hide the riddle and show the name list again
        document.getElementById('riddleContainer').style.display = 'none';
        document.querySelector('.names').style.display = 'block';
    } else {
        // Show an error message if the answer is incorrect
        document.getElementById('message').innerText = "Incorrect. Try again!";
    }
}

// Function to get the next name in sequence
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
