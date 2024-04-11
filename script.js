// DATA
const ASTROS = {
    logo: "https://a.espncdn.com/combiner/i?img=/i/teamlogos/mlb/500/hou.png",
    teamName:"Houston Astros",
    sport: "baseball",
    players : [
        {
            "name":"Yainer Diaz",
            "id":"673237",
            "jerseyNumber":"21",
            "image":"https://a.espncdn.com/i/headshots/mlb/players/full/4781491.png",
            "height":"6-0",
            "weight":"195",
            "position":"C",
            "bDay":"9/21/1998",
            "college":"N/A"
        },
        {"name":"Yordan Alvarez","id":"670541","jerseyNumber":"44","image":"https://a.espncdn.com/i/headshots/mlb/players/full/36018.png","height":"6-5","weight":"225","position":"LF","bDay":"6/27/1997","college":"N/A"},
        {"name":"Chas McCormick","id":"676801","jerseyNumber":"20","image":"https://a.espncdn.com/i/headshots/mlb/players/full/40574.png","height":"6-0","weight":"208","position":"LF","bDay":"4/19/1995","college":"Millersville, Millersville, PA"},
        {"name":"Bryan Abreu","id":"650556","jerseyNumber":"52","image":"https://a.espncdn.com/i/headshots/mlb/players/full/41208.png","height":"6-1","weight":"225","position":"P","bDay":"4/22/1997","college":"N/A"},
        {"name":"Mauricio Dubón","id":"643289","jerseyNumber":"14","image":"https://a.espncdn.com/i/headshots/mlb/players/full/35304.png","height":"6-0","weight":"173","position":"CF","bDay":"7/19/1994","college":"N/A"},
        {"name":"Ronel Blanco","id":"669854","jerseyNumber":"56","image":"https://a.espncdn.com/i/headshots/mlb/players/full/41829.png","height":"6-0","weight":"180","position":"P","bDay":"8/31/1993","college":"N/A"},
        {"name":"Josh Hader","id":"623352","jerseyNumber":"71","image":"https://a.espncdn.com/i/headshots/mlb/players/full/32760.png","height":"5-11","weight":"180","position":"P","bDay":"4/7/1994","college":"N/A"},
        {"name":"Jon Singleton","id":"572138","jerseyNumber":"28","image":"https://a.espncdn.com/i/headshots/mlb/players/full/31206.png","height":"6-0","weight":"256","position":"1B","bDay":"9/18/1991","college":"N/A"},
        {"name":"Framber Valdez","id":"664285","jerseyNumber":"59","image":"https://a.espncdn.com/i/headshots/mlb/players/full/36581.png","height":"5-11","weight":"239","position":"P","bDay":"11/19/1993","college":"N/A"},
        {"name":"Rafael Montero","id":"606160","jerseyNumber":"47","image":"https://a.espncdn.com/i/headshots/mlb/players/full/32631.png","height":"6-0","weight":"190","position":"P","bDay":"10/17/1990","college":"N/A"},
        {"name":"Victor Caratini","id":"605170","jerseyNumber":"17","image":"https://a.espncdn.com/i/headshots/mlb/players/full/33229.png","height":"5-11","weight":"225","position":"C","bDay":"8/17/1993","college":"Miami Dade CC"},
        {"name":"Alex Bregman","id":"608324","jerseyNumber":"2","image":"https://a.espncdn.com/i/headshots/mlb/players/full/34886.png","height":"6-0","weight":"192","position":"3B","bDay":"3/30/1994","college":"Louisiana State"},
        {"name":"Parker Mushinski","id":"656786","jerseyNumber":"67","image":"https://a.espncdn.com/i/headshots/mlb/players/full/3963032.png","height":"6-0","weight":"218","position":"P","bDay":"11/22/1995","college":"Texas Tech"},
        {"name":"Jake Meyers","id":"676694","jerseyNumber":"6","image":"https://a.espncdn.com/i/headshots/mlb/players/full/40719.png","height":"6-0","weight":"200","position":"CF","bDay":"6/18/1996","college":"Nebraska"},
        {"name":"Jose Altuve","id":"514888","jerseyNumber":"27","image":"https://a.espncdn.com/i/headshots/mlb/players/full/31662.png","height":"5-6","weight":"166","position":"2B","bDay":"5/6/1990","college":"N/A"},
        {"name":"Seth Martinez","id":"661527","jerseyNumber":"61","image":"https://a.espncdn.com/i/headshots/mlb/players/full/42742.png","height":"6-2","weight":"200","position":"P","bDay":"8/29/1994","college":"Arizona State"},
        {"name":"Jeremy Peña","id":"665161","jerseyNumber":"3","image":"https://a.espncdn.com/i/headshots/mlb/players/full/41273.png","height":"6-0","weight":"202","position":"SS","bDay":"9/22/1997","college":"Maine"},
        {"name":"José Abreu","id":"547989","jerseyNumber":"79","image":"https://a.espncdn.com/i/headshots/mlb/players/full/33095.png","height":"6-3","weight":"235","position":"1B","bDay":"1/29/1987","college":"N/A"},
        {"name":"Cristian Javier","id":"664299","jerseyNumber":"53","image":"https://a.espncdn.com/i/headshots/mlb/players/full/41261.png","height":"6-1","weight":"213","position":"P","bDay":"3/26/1997","college":"N/A"},
        {"name":"Grae Kessinger","id":"666197","jerseyNumber":"16","image":"https://img.mlbstatic.com/mlb-photos/image/upload/d_people:generic:headshot:67:current.png/w_426,q_auto:best/v1/people/666197/headshot/67/current","height":"6-1","weight":"204","position":"SS","bDay":"8/25/1997","college":"Mississippi"},
        {"name":"Ryan Pressly","id":"519151","jerseyNumber":"55","image":"https://a.espncdn.com/i/headshots/mlb/players/full/33072.png","height":"6-2","weight":"206","position":"P","bDay":"12/15/1988","college":"N/A"},
        {"name":"Hunter Brown","id":"686613","jerseyNumber":"58","image":"https://a.espncdn.com/i/headshots/mlb/players/full/4717803.png","height":"6-2","weight":"212","position":"P","bDay":"8/29/1998","college":"Wayne State"},
        {"name":"Kyle Tucker","id":"663656","jerseyNumber":"30","image":"https://a.espncdn.com/i/headshots/mlb/players/full/34967.png","height":"6-4","weight":"199","position":"RF","bDay":"1/17/1997","college":"N/A"},
        {"name":"Brandon Bielak","id":"656232","jerseyNumber":"64","image":"https://a.espncdn.com/i/headshots/mlb/players/full/41260.png","height":"6-2","weight":"208","position":"P","bDay":"4/2/1996","college":"Notre Dame"},
        {"name":"Tayler Scott","id":"605463","jerseyNumber":"50","image":"https://a.espncdn.com/i/headshots/mlb/players/full/39711.png","height":"6-3","weight":"185","position":"P","bDay":"6/1/1992","college":"N/A"}
    ]
}

const DASH = {
    logo: "https://images.mlssoccer.com/image/upload/v1643999428/assets/hou/dash/Houston_Dash_logo.svg",
    teamName:"Houston Dash",
    sport:"Soccer",
    players:[
        {
            "name":"Jane Campbell",
            "id":102301,
            "jerseyNumber":1,
            "image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou-prd/emhz2anwtiartxpdow0g.png",
            "position":"Goalkeeper",
            "age":28
        },
        {"name":"Savannah Madden","id":413402,"jerseyNumber":35,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/ievvevcsbjffosij9yob.jpg","position":"Goalkeeper","age":24},
        {"name":"Emily Alvarado","id":303712,"jerseyNumber":99,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/mf9wdwlzb6l0za3mwxht.jpg","position":"Goalkeeper","age":25},
        {"name":"Allysha Chapman","id":68943,"jerseyNumber":2,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou-prd/zgbznwafneip6kiuvzmq.png","position":"Defender","age":34},
        {"name":"Madelyn Desiano","id":413404,"jerseyNumber":3,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/qghrrixwsq5gev7xdpld.jpg","position":"Defender","age":23},
        {"name":"Natalie Jacobs","id":228894,"jerseyNumber":4,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/vwn37s2msycb3bvkwmfu.jpg","position":"Defender","age":26},
        {"name":"Courtney Petersen","id":228909,"jerseyNumber":8,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/etwnnzhhlg2leoguu32b.jpg","position":"Defender","age":26},
        {"name":"Croix Soto","id":416225,"jerseyNumber":22,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/ybfmq9f9p8tol76hszbe.jpg","position":"Defender","age":23},
        {"name":"Katie Lind","id":76226,"jerseyNumber":25,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou-prd/ibt7ev50szr8pfosylxz.png","position":"Defender","age":29},
        {"name":"Jylissa Harris","id":413403,"jerseyNumber":33,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_auto/mls-hou/isd3rpwkajikzyiwfboo.jpg","position":"Defender","age":23},
        {"name":"Havana Solaun","id":68812,"jerseyNumber":6,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/dlykuekjwhfmxbyt7jki","position":"Midfielder","age":30},
        {"name":"Andressa Alves","id":68747,"jerseyNumber":10,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/bwlxyne1v1ugvpnxvmnf","position":"Midfielder","age":31},
        {"name":"Sophie Schmidt","id":68952,"jerseyNumber":13,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/thuvgmxvlqwyij3h4pyi","position":"Midfielder","age":35},
        {"name":"Barbara Olivieri","id":371679,"jerseyNumber":15,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/rd1kioeigoxa0xqdefdc","position":"Midfielder","age":21},
        {"name":"Sarah Puntigam","id":87429,"jerseyNumber":17,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/k2racm6agiiwzpwapqor","position":"Midfielder","age":30},
        {"name":"Belle Briede","id":360251,"jerseyNumber":19,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/pvvhd4gpxyoybmv6ihtn","position":"Midfielder","age":25},{"name":"Sophie Hirst","id":416185,"jerseyNumber":20,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/ljo6qpamdndoleaelcbr","position":"Midfielder","age":23},
        {"name":"Elin Rubensson","id":69048,"jerseyNumber":31,"image":"https://media.api-sports.io/football/players/69048.png","position":"Midfielder","age":30},
        {"name":"Cece Kizer","id":102261,"jerseyNumber":5,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/om636kgq0b7bduo3oier","position":"Attacker","age":26},
        {"name":"Maria Sánchez","id":102294,"jerseyNumber":7,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou-prd/kcvrlkhphcqsf0bcpr8i","position":"Attacker","age":27},
        {"name":"Diana Ordoñez","id":360246,"jerseyNumber":9,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou-prd/flymtjfyfgypbq8glkal","position":"Attacker","age":22},
        {"name":"Michelle Alozie","id":310448,"jerseyNumber":11,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/x68s9g0uewtmgk4j1naa","position":"Attacker","age":26},
        {"name":"Kiki van Zanten","id":348110,"jerseyNumber":12,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/qdopcdu5g1vgfdmrw4or","position":"Attacker","age":22},
        {"name":"Yuki Nagasato","id":76140,"jerseyNumber":14,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/futrduaiw8ffzs4nj3ad","position":"Attacker","age":36},
        {"name":"Amanda West","id":348125,"jerseyNumber":16,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou/ud29hzzjekwv5yfid5ct","position":"Attacker","age":23},
        {"name":"Ryan Gareis","id":360340,"jerseyNumber":21,"image":"https://images.mlssoccer.com/image/private/t_editorial_squared_6_desktop_2x/f_png/mls-hou-prd/byxwk2eys9l7lyudd90m","position":"Attacker","age":25},
        {"name":"Avery Patterson","id":461402,"jerseyNumber":30,"image":"https://media.api-sports.io/football/players/461402.png","position":"Attacker","age":21}
    ]
}

const FRUITS = [
    {name: "apple", color: "red", shape: "round", emoji: "🍎"},
    {name: "banana", color: "yellow", shape: "curved", emoji: "🍌"},
    {name: "orange", color: "orange", shape: "round", emoji: "🍊"},
    {name: "kiwi", color: "brown", shape: "oval", emoji: "🥝"},
    {name: "mango", color: "yellow", shape: "oval", emoji: "🥭"}
]

/**
 * A function to clear all cards from a container
 * @param {string} containerID - the ID of the container to clear
 */
function clearCards(containerID) {
    let container = document.querySelector(containerID);
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}


/***************************************** Fruit Filtering: Step 0 */

/**
 * NO NEED TO MODIFY; you can minimize this section
 * @param {object} fruit - a fruit to add a card for
 */
function addFruitCard(fruit) {
    let newFruitCard = document.createElement('div');
    //adding the heading
    let fruitHeading = document.createElement('h3');
    fruitHeading.textContent = fruit.name;
    newFruitCard.appendChild(fruitHeading);

    //adding the color
    let fruitColor = document.createElement('p');
    fruitColor.textContent = `Color: ${fruit.color}`;
    fruitColor.style.color = fruit.color;
    newFruitCard.appendChild(fruitColor);

    //adding the shape
    let fruitShape = document.createElement('p');
    fruitShape.textContent = `Shape: ${fruit.shape}`;
    newFruitCard.appendChild(fruitShape);

    //adding the emoji
    let fruitEmoji = document.createElement('p');
    fruitEmoji.textContent = `Emoji: ${fruit.emoji}`;
    newFruitCard.appendChild(fruitEmoji);
    
    let fruitContainer = document.querySelector("#fruitCardsContainer");
    newFruitCard.classList.add('fruitCard');
    fruitContainer.appendChild(newFruitCard);
}

/**
 * NO NEED TO MODIFY; you can minimize this section
 * @param {Array} fruits- the array of fruits to make cards for
 */
function makeFruitCards(fruits) {
    clearCards("#fruitCardsContainer");
    for(const fruit of fruits) {
        addFruitCard(fruit);
    }
}


function isFruitYellow(fruit) {
    //TODO: Step 0D -- you fill in this function. 
    //It should return true if the fruit is yellow.
}

function filterYellowFruits() {
    //TODO: Step 0C -- you fill in this function
}

/**
 * An example function to check if a fruit is round
 * @param {object} fruit - a fruit to check if it is round
 * @returns {boolean} true if the fruit is round
 */
function isFruitRound(fruit) {
    if(fruit.shape === "round") {
        return true;
    }
    return false;
}

/**
 * An example function to filter the fruits by roundness.
 */
function filterRoundFruits() {
    let roundFruits = [];
    for(const fruit of FRUITS) {
        //if the fruit is round
        if(isFruitRound(fruit)) {
            //add the fruit to the new list
            roundFruits.push(fruit);
        }
    }
    //make the fruit cards with the smaller list
    makeFruitCards(roundFruits);
}



function fruitFiltering() {
    makeFruitCards(FRUITS);

    //make a button to filter the fruits by roundness
    const fruitRoundButton = document.createElement('button');
    fruitRoundButton.textContent = "Filter Round Fruits";
    fruitRoundButton.addEventListener('click', filterRoundFruits);

    //Step 0A: Make a button to filter the fruits if they are yellow

    //select the container for the buttons
    const buttonsContainer = document.querySelector("#fruitButtonsContainer");
    //add the button to the container
    buttonsContainer.appendChild(fruitRoundButton);
    //Step 0B: Add the button to the container, similar to the line above

}
/***************************************** End Fruit Filtering: Step 0 */


/***************************************** Start Sports Filtering */

function addPlayerCard(playerData){
    let playerCard = document.createElement("div");
    playerCard.classList.add("playerCard");

    //make a new image
    let playerImage = document.createElement("img");
    playerImage.src = '';
    playerImage.alt = '' + " headshot";
    playerImage.width = 200;

    let playerName = document.createElement("h3");
    playerName.textContent = `Name: ${playerData.name}`;
    //make more paragraphs for the other player information



    //append the player information to the player 'card'
    playerCard.appendChild(playerImage);
    playerCard.appendChild(playerName);

    //append the player card to the player cards container
    let playerCardsContainer = document.querySelector("#playerCardsContainer");
    playerCardsContainer.appendChild(playerCard);
}

function setPlayerCards(players){
    console.log(players);
    //clear out the player cards
    clearCards("#playerCardsContainer");

    // Step 4B: Loop through the players and add a card for each player

}

function updateTeamInfo(teamData){
    //update the team name
    let teamNameHeading = document.querySelector("#teamNameHeading");
    teamNameHeading.textContent = teamData.teamName;

    //update the team logo
    let teamLogo = document.querySelector("#teamLogo");
    //Step 2A: Update the team logo by setting it's source
    teamLogo.src = '';
    teamLogo.alt = '';
    teamLogo.width = 200;

    //Step 2B: Create a paragraph element with the team's sport and append it as a child to the team info container (id="teamInfoContainer")

}

/**
 * An example 'helper' function to check if a player's jersey number is greater than 15
 * @param {object} player - the player to check if their jersey number is greater than 15
 * @returns {boolean} true if the player's jersey number is greater than 15
 */
function isGreaterThan15(player){
    return Number(player.jerseyNumber) > 15;
}

/**
 * An example function for filtering players by jersey number greater than 15
 * @param {Array} players - the list of players to filter
 */
function filterbyGreaterThan15(players){
    let playersGreaterThan15 = [];
    for(const player of players){
        if(isGreaterThan15(player)){
            playersGreaterThan15.push(player);
        }
    }
    setPlayerCards(playersGreaterThan15);
}

/**
 * A function to filter the players by a given value
 * @param {String} filterValue - the value to filter the players by
 * @param {Array} players - the list of players to filter
 */
function filterPlayers(filterValue, players){
    console.log("Filtering players by: ", filterValue);


    if(filterValue === "all"){
        setPlayerCards(players);
    }
    else if(filterValue === "greaterThan15"){
        filterbyGreaterThan15(players);
    }
}

/***************************************** End Sports Filtering */


function runProgram() {
    console.log("Program is running");

    //STEP 0: filter the  -- practice
    fruitFiltering();

    //STEP 1A: get the team data of the team of your choice (ASTROS or DASH)
    // let teamData = DASH;

    // STEP 1B: log the team data and look at the arrays. How is the information about the team arranged?
    // console.log("Team data: ", teamData);


    // STEP 2: update the team information
    // updateTeamInfo(teamData);

    //STEP 3: Finish making a card for a single player
    // let players = teamData.players;
    // let firstPlayer = players[0];
    // addPlayerCard(firstPlayer);

    //STEP 4: Loop through the players and add a card for each player
    setPlayerCards(/**. Step 4A: pass in array of players */);

    //STEP 5: Filter the players 
    // let playerFilter = document.querySelector("#playersFilter");
    // playerFilter.addEventListener("change", (event) => {

    //     filterPlayers(event.target.value, teamData.players);
    // });

}

document.addEventListener('DOMContentLoaded', runProgram);