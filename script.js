const ingredients = [];
const ingredientButtons = document.querySelectorAll('.ingredient');
const mixButton = document.getElementById('mixButton');
const resultModal = document.getElementById('resultModal');
const personalityText = document.getElementById('personalityText');
const retakeButton = document.getElementById('retakeButton');
const closeModal = document.getElementById('closeModal');

// Logging to check initial state
console.log('Script Loaded - Initial State:', { ingredients });

// Function to add or remove ingredients
ingredientButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const ingredient = button.getAttribute('data-ingredient');
    if (ingredients.includes(ingredient)) {
      // Remove ingredient if already selected
      ingredients.splice(ingredients.indexOf(ingredient), 1);
      button.classList.remove('selected');
      console.log(`Removed ingredient: ${ingredient}`, { ingredients });
    } else {
      // Add ingredient if not selected
      ingredients.push(ingredient);
      button.classList.add('selected');
      console.log(`Added ingredient: ${ingredient}`, { ingredients });
    }
  });
});

// Function to mix potion and determine personality
mixButton.addEventListener('click', () => {
  console.log('Mix Button Clicked - Current Ingredients:', { ingredients });
  if (ingredients.length === 0) {
    personalityText.textContent = 'Please select at least one ingredient!';
  } else {
    const personality = determinePersonality(ingredients);
    personalityText.textContent = personality;
    console.log('Personality Result:', personality);
  }
  // Show the result modal
  resultModal.classList.remove('hidden');
  resultModal.style.display = 'flex';
});

// Personality determination logic
function determinePersonality(selectedIngredients) {
  // Simple personality logic based on ingredients
  if (
    selectedIngredients.includes('Eye of Newt') &&
    selectedIngredients.includes('Bat Wing')
  ) {
    return 'Mystical Witch - You’re wise and a bit mysterious!';
  } else if (
    selectedIngredients.includes('Ghost Dust') &&
    selectedIngredients.includes('Spider Silk')
  ) {
    return 'Mischievous Spirit - You have a playful yet spooky nature!';
  } else if (selectedIngredients.includes('Nightshade')) {
    return 'Dark Sorcerer - Your powers are dark and powerful!';
  } else {
    return "Potion Apprentice - You're learning the magical arts!";
  }
}

// Function to close the modal and reset the test
function closeModalAndRetake() {
  resultModal.classList.add('hidden');
  resultModal.style.display = 'none';
  retakeTest();
}

// Function to reset test
function retakeTest() {
  // Clear ingredients array
  ingredients.length = 0;

  // Reset selected styles
  ingredientButtons.forEach((button) => button.classList.remove('selected'));

  console.log('Test Reset - Ingredients Cleared:', { ingredients });
}

// Event listeners for closing the modal and retaking the test
closeModal.addEventListener('click', closeModalAndRetake);
retakeButton.addEventListener('click', closeModalAndRetake);
