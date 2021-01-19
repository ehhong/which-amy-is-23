
// CONSTANTS. SORRY I COULDN'T FIGURE OUT HOW TO PUT THIS IN A DIFFERENT FILE
const AMYTYPES = {
    CORPORATE: "Corporate Amy",
    SAVAGE: "Savage Amy",
    MEMEY: "Amy Memey",
    CM: "CM Amy",
    HS: "High School Amy",
    VLOG: "Vlog Amy",
    WECODE: "WECode Amy",
    TWITTER: "Twitter Amy"
}

// this is the quiz
const QUESTIONS = [
{
    question: "It's Amy's birthday! Which gift would you most like to receive?",
    answers: {
        [AMYTYPES.CORPORATE]: "A LinkedIn Premium subscription and a viral post starting with \“I'm going back to Seattle this fall, this time as a PM at Microsoft!\”",
        [AMYTYPES.SAVAGE]: "Savage sunglasses",
        [AMYTYPES.MEMEY]: "A fluffy doggo",
        [AMYTYPES.CM]: "A serenade by a live string quartet",
        [AMYTYPES.HS]: "A (promising) status update to your Harvard application portal",
        [AMYTYPES.VLOG]: "Fan art from my most loyal vlog followers + a subscription from Joss Fong",
        [AMYTYPES.WECODE]: "1,000,000 early registrants for Harvard WeCode",
        [AMYTYPES.TWITTER]: "A viral tweet of my dog"
    }
},
{
  question: "Amy's going out for the night–which outfit do you wear?",
  answers: {
      [AMYTYPES.CORPORATE]: "A blazer, a blouse, and a nice pair of slacks",
      [AMYTYPES.SAVAGE]: "A \"2 cool 4 skool\" graphic tee",
      [AMYTYPES.MEMEY]: "Guy Fieri\'s Hawaiian shirt with flames on it",
      [AMYTYPES.CM]: "Concert black",
      [AMYTYPES.HS]: "A lab coat and goggles",
      [AMYTYPES.VLOG]: "Anything, as long as I have my ring light with me",
      [AMYTYPES.WECODE]: "A WECode tshirt (Did I mention that WECode's early registration deadline has been extended until January 16?)",
      [AMYTYPES.TWITTER]: "Purple jacket on top of salmon-colored fuzzy pat and a customized Etsy mask"
  }
},
{
  question: "Amy has an interview, what's your opening line?",
  answers: {
      [AMYTYPES.CORPORATE]: "*A firm handshake*",
      [AMYTYPES.SAVAGE]: "Do you deserve to hire me? Let me ask a couple questions.",
      [AMYTYPES.MEMEY]: "Taaaake onnn meeeee! TAKE ON ME!",
      [AMYTYPES.CM]: "Here's a Liszt of reasons why I can Handel this position.",
      [AMYTYPES.HS]: "Please",
      [AMYTYPES.VLOG]: "Hey guys! Welcome to my channel. Today I\'ll be talking about why I'd be a good addition to your company.",
      [AMYTYPES.WECODE]: "Would you like to speak at the largest student-run women in tech conference in the world?",
      [AMYTYPES.TWITTER]: "I follow you on Twitter"
  }
},
{
  question: "Your manager has granted you a day off from work, what do you do?",
  answers: {
      [AMYTYPES.CORPORATE]: "Leetcode and read Cracking the PM Interview",
      [AMYTYPES.SAVAGE]: "Organize an open mic roast for my dearest friends",
      [AMYTYPES.MEMEY]: "Watch animal videos and Tiktok for 8 hours",
      [AMYTYPES.CM]: "Dissociate to Debussy",
      [AMYTYPES.HS]: "Apply to Asian Science Camp",
      [AMYTYPES.VLOG]: "Train for the Boston Marathon and film my latest vlog",
      [AMYTYPES.WECODE]: "Draft my latest WECode email. #1dayleft #girlpower #WomenInTech #RegisterNow",
      [AMYTYPES.TWITTER]: "Promote voter registration #iVoted"
  }
},
{
  question: "Choose a Taylor Swift Song",
  answers: {
      [AMYTYPES.CORPORATE]: "Fearless",
      [AMYTYPES.SAVAGE]: "Shake it off",
      [AMYTYPES.MEMEY]: "ME!",
      [AMYTYPES.CM]: "invisible string",
      [AMYTYPES.HS]: "Fifteen",
      [AMYTYPES.VLOG]: "Speak Now",
      [AMYTYPES.WECODE]: "Sparks Fly",
      [AMYTYPES.TWITTER]: "Blank Space"
  }
},
{
  question: "Choose a language",
  answers: {
      [AMYTYPES.CORPORATE]: "Excel",
      [AMYTYPES.SAVAGE]: "x86 Assembly",
      [AMYTYPES.MEMEY]: "Powerpoint",
      [AMYTYPES.CM]: "Alto clef",
      [AMYTYPES.HS]: "Plain HTML",
      [AMYTYPES.VLOG]: "Python",
      [AMYTYPES.WECODE]: "C++",
      [AMYTYPES.TWITTER]: "Scratch"
  }
},
{
  question: "A magical genie offers you one wish. What do you ask for?",
  answers: {
      [AMYTYPES.CORPORATE]: "A return offer with generous stock options",
      [AMYTYPES.SAVAGE]: "To always win at quiplash",
      [AMYTYPES.MEMEY]: "* Kai You turns on camera *",
      [AMYTYPES.CM]: "To be best friends with Lang Lang",
      [AMYTYPES.HS]: "An IB 45",
      [AMYTYPES.VLOG]: "To star in a video with Bob Ross",
      [AMYTYPES.WECODE]: "WECode supersedes Grace Hopper as the most popular conference for Women in CS in the world. The Harvard WECode (Women Engineers Code) Conference is organized by undergraduate women at Harvard University and is an initiative of Harvard Women in CS (harvardwics.com).",
      [AMYTYPES.TWITTER]: "Doggo Leo featured on @WeRateDogs"
  }
},
{
  question: "You see something WACK. How do you respond? What the …",
  answers: {
      [AMYTYPES.CORPORATE]: "What the?",
      [AMYTYPES.SAVAGE]: "What the heck?",
      [AMYTYPES.MEMEY]: "What the flip?",
      [AMYTYPES.CM]: "*Record scratch*",
      [AMYTYPES.HS]: "Bugger! \“I have to go to lab.\”",
      [AMYTYPES.VLOG]: "What the *beep*?",
      [AMYTYPES.WECODE]: "What the fork?",
      [AMYTYPES.TWITTER]: "*Quote tweet*"
  }
},
{
  question: "What late night text do you send to Dylan?",
  answers: {
      [AMYTYPES.CORPORATE]: "Looking forward to our business relationship.",
      [AMYTYPES.SAVAGE]: "Sorry, wrong Dylan / Dhilan",
      [AMYTYPES.MEMEY]: ";-)))",
      [AMYTYPES.CM]: "Did you just move from the subdominant to the supertonic? Because I think you\'re my perfect counterpoint.",
      [AMYTYPES.HS]: "If I were an enzyme, I\'d be DNA helicase so I could unzip your genes.",
      [AMYTYPES.VLOG]: "Boyfriend tag!",
      [AMYTYPES.WECODE]: "Did you send the pub email on Dunster-open? (Alt: Hey, my name’s Microsoft. Can I crash at your place tonight?)",
      [AMYTYPES.TWITTER]: "How\'d you like to come to MySpace so I can Twitter you with my Yahoo until I Google on your FaceBook?"
  }
}
];

// this is the Amy Type Descriptions
const DESCRIPTIONS = {
    [AMYTYPES.CORPORATE]:
    {
        photo: "assets/corporate_amy.jpeg",
        description: "LinkedIn Message from Corporate Amy. “Please add me to your LinkedIn network.” I have extensive experience in retail and information technology industries, having worked as a sales associate at OfficeWorks and Product Management Intern at Microsoft. Some of my (endorsed) technical skills include pipetting, time management, pancake flipping, and C++. Thank you to my amazing recruiter Maggie Bott for helping me navigate Microsoft recruiting! #microsoft #pm #intern #seattle #summer"
    },
    [AMYTYPES.SAVAGE]:
    {
        photo: "assets/amy_scream_wrong_number.gif",
        description: "Congrats! You are none other than the badass mf SAVAGE AMY. That's right. Don't be fooled by Amy's brightly-colored hair or cheery attitude. Savage Amy is out to get you, right when you least expect it. Savage Amy's tagline? ROASTED. Woohoo!"
    },
    [AMYTYPES.MEMEY]:
    {
        photo: "assets/amy_coffee.gif",
        description: "Amy Memey. uwu Amy. Doggo Amy. Amy Memey is the Amy of spontaneity, goofy faces, and wholesomeness. Amy Memey is sunshine breaking through the clouds, a reminder to take life one chuckle at a time. heh. heck my lyfe."
    },
    [AMYTYPES.CM]:
    {
        photo: "assets/cm_amy2.JPG",
        description: "This is CM (director) Amy, and you're listening to WHRB 95.3FM. Next up, we have 4'33\" performed by John Cage brought to you on a Deutsche Grammophon compact disc. Also, ACs are due tonight at midnight so plan accordingly and get them in if you haven’t yet! The later they are the later your pick for semester air :("
    },
    [AMYTYPES.HS]:
    {
        photo: "assets/asian_science_amy.gif",
        description: "We can only guess what high school Amy was like, but this is how we imagine her: optimistic, passionate, and ready for the world. \"Hi, I'm Amy and I live in Gold Coast, Australia. I am an IB Diploma Recipient with a burning passion for STEM, especially women in STEM. One of the reasons I love STEM is because it is our future, and I cannot wait for mine! Of course, it’s impossible to really predict my future, but I’m extremely excited to see where life will take me!\""
    },
    [AMYTYPES.VLOG]:
    {
        photo: "assets/amy_runs.gif",
        description: "You are none other than Amy's second-most public persona: vlogger Amy. POV: you’re stuck in quarantine for 2 weeks, but you have a half marathon next week. You look around your 100 square foot hotel room. How many laps equal 26.2 miles? You grab your favourite specsaver bluelight reading glasses, remembering that you have the eyes of a 60-year-old at the ripe age of 23, punch in numbers on your calculator while taking a bite out of a head of broccoli. Only 3,458.4 laps. Taking a big gulp of water—don’t forget to stay hydrated—you set your timer, set your phone camera to selfie mode, and start to jog."
    },
    [AMYTYPES.WECODE]:
    {
        photo: "assets/amy_drinks.gif",
        description: "Congrats, you are WECode Amy! Crazy to believe that there was SO much interest for Harvard WECode 2020 that we sold out during Early Registration...before we even opened General Registration! We're so excited to welcome almost 800 attendees to Harvard's campus on March 6-8, 2020!"
    },
    [AMYTYPES.TWITTER]:
    {
        photo: "assets/amy_twitter.gif",
        description: "You are none other than Twitter Amy, the Amy of news, media recommendations, (professional) memes, and advocacy #VoteEarlyMailEarly.  You are the queen of the quote tweet, adding a tasteful number of exclamation marks and emoji to the national conversation, and your followers thank you for it. Waffles always. #IntelISEF"
    }
};

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){
    // variable to store the HTML output
  const output = [];

  // for each question...
  QUESTIONS.forEach(
    (currentQuestion, questionNumber) => {

      // variable to store the list of possible answers
      const answers = [];

      // and for each available answer...
      for(amy_type in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
            `<label class="container">${currentQuestion.answers[amy_type]}
                <input type="radio" name="question${questionNumber}" value="${amy_type}">
                <span class="checkmark"></span>
            </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
         `<div class="question" id="one">
            <h1>${questionNumber + 1}. ${currentQuestion.question}</h1>
            <div class="answers"> ${answers.join('')} </div>
          </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');
}

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let amyTypeCounts = {};
    for (amyType in AMYTYPES) {
        amyTypeCounts[AMYTYPES[amyType]] = 0;
    }

    // for each question...
    QUESTIONS.forEach( (currentQuestion, questionNumber) => {

        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        amyTypeCounts[userAnswer] += 1;
    });

    // find max
    maxAmyTypeCount = 0
    maxAmyType = ""
    for (amyType in amyTypeCounts) {
        amyTypeCount = amyTypeCounts[amyType];
        if (amyTypeCount > maxAmyTypeCount) {
            maxAmyTypeCount = amyTypeCount;
            maxAmyType = amyType;
        }
    }

    if (maxAmyType == "") {
        resultsContainer.innerHTML =
            `<div class="answer">
                <p>You are a mystery––we have no idea which Amy you are. Please answer some questions and try again.</p>
            </div>`
    }
    else {
        resultsContainer.innerHTML =
            `<div class="answer">
                <h1>Congrats, you are ${maxAmyType}!</h1>
                <img src=${DESCRIPTIONS[maxAmyType].photo}>
                <p>${DESCRIPTIONS[maxAmyType].description}</p>
            </div>`
    }

    resultsContainer.scrollIntoView();

    var audio = new Audio("assets/heart_react.m4a");
    audio.play();
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);
