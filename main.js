const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1606108631580-78be7884b0f8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYyNTUz&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1605053508224-ab7c202d4ba0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYyNjM2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1613448855888-79802e7c9655?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYyNzY3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "https://images.unsplash.com/photo-1574540382242-fe177e5a0ce9?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYzMTY2&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1589519659882-3eb28ebc769f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYzMjM3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "https://www.1zoom.me/prev/281/280847.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1609397754447-da4372aa286e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYzMzA0&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl:
      "https://media.nature.com/lw767/magazine-assets/d41586-020-02779-3/d41586-020-02779-3_18481780.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1627874459378-ed53356bc91f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYzMzQ3&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://media.4-paws.org/4/8/e/f/48efae5911729812f3a5694bf480ac872ab86ab5/VIER%20PFOTEN_2016-06-15_114-2000x1332-600x400.jpg",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "https://ontariospca.ca/wp-content/uploads/2018/12/Adopting-shelter-dog-600x400.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://troubleandtrix.com/media/5pyblhc5/himalayan-cat-600x400.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://images.unsplash.com/photo-1645539346874-42b71fc5ffa6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixid=MnwxfDB8MXxyYW5kb218MHx8RGlub3NhdXJ8fHx8fHwxNjc0MDYzMzg4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=600",
  },
];

// Render to DOM utility function
const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector(divID);
  selectedDiv.innerHTML = htmlToRender;
};

// get the cards on the DOM
const cardsOnDom = (arr) => {
  let domString = "";
  for (const pet of arr) {
    domString += `<div class="card" style="width: 18rem;" margin-bottom: 0;> <header>${pet.name}</header> 
      <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
      <div class="card-body">
        <h5 class="pet-color">${pet.color}</h5>
        <p class="pet-specialSkill">${pet.specialSkill}</p>
        <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
      <p class="pet-type">${pet.type}</p>
  </div>`;
  }
  
  renderToDom("#app", domString);
};

// function to filter animals by type
const filter = (array, typeString) => {
  const animalArray = [];

  for (const animal of array) {
    if (animal.type === typeString) {
      animalArray.push(animal);
    }
  }
  return animalArray;
};

// Code for Filter buttons
// 1. Target all of the buttons on the DOM 

const catsButton = document.querySelector("#cats-btn");
const dogsButton = document.querySelector("#dogs-btn");
const dinosButton = document.querySelector("#dinos-btn");
const showAllButton = document.querySelector("#all-btn");

// 1. Get all the cards to render on the DOM
cardsOnDom(pets);

// 2. Add click event to show all the animals on button click using the function we created above
showAllButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

// 3. Add click event to filter all the animals by type on button click
catsButton.addEventListener("click", () => {
  const allCats = filter(pets, "cat");
  cardsOnDom(allCats);
});

dogsButton.addEventListener("click", () => {
  const allDogs = filter(pets, "dog");
  cardsOnDom(allDogs);
});

dinosButton.addEventListener("click", () => {
  const allDinos = filter(pets, "dino");
  cardsOnDom(allDinos);
});


//••••CREATE••••

// 1. select/target the form on the DOM
// const form = document.querySelector('form');

// 2. create a function that grabs all the values from the form, pushes the new object to the array, then repaints the DOM with the new teammate
const createPet = (e) => {
  e.preventDefault(); // EVERY TIME YOU CREATE A FORM

  
  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    image: document.querySelector("#image").value
  };
  
  console.log(newPetObj);
  pets.push(newPetObj);
  cardsOnDom(pets);
};

// 3. Add an event listener for the form submit and pass it the function (callback)

const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener("click", createPet);

// ••••DELETE••••

// 1. Target the app div
const appDiv = document.querySelector("#app");

// 2. Add an event listener to capture clicks

appDiv.addEventListener("click", (e) => {
  console.log(e.target.id);
  
// 3. check e.target.id includes "delete"
  if (e.target.id.includes("delete")) {
    const [throwaway, petid] = e.target.id.split("--");
    // destructuring: https://github.com/orgs/nss-evening-web-development/discussions/11

// 4. add logic to remove from array
    // .findIndex is an array method
    const indexOfPet = pets.findIndex(e => e.id === Number(petid));

    // .splice modifies the original array
    pets.splice(indexOfPet, 1);

// 5. Repaint the DOM with the updated array
    cardsOnDom(pets);
  }
});

const startApp = () => {
  cardsOnDom(pets);
}
// events(); // ALWAYS LAST


startApp();
