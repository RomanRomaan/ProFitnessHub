const exercises = [
    {
        img: "/Squats.avif",
        alt: "Squats",
        title: "Squats",
        desc: "Strengthens legs and glutes, improves mobility.",
        link: "#",
        category: "Legs",
    },
    {
        img: "/push-ups.avif",
        alt: "Push-ups",
        title: "Push-ups",
        desc: "Works chest, shoulders, and triceps.",
        link: "#",
        category: "Chest",
    },
    {
        img: "/plank.avif",
        alt: "Plank",
        title: "Plank",
        desc: "Builds core strength and stability for your body.",
        link: "#",
        category: "Core",
    },
    {
        img: "/Lunges.avif",
        alt: "Lunges",
        title: "Lunges",
        desc: "Targets legs, improves balance.",
        link: "#",
        category: "Legs"
    },
    {
        img: "/Burpees.avif",
        alt: "Burpees",
        title: "Burpees",
        desc: "Full body cardio and strength.",
        link: "#",
        category: "Full Body",

    },
    {
        img: "/pull-ups.avif",
        alt: "Pull-ups",
        title: "Pull-ups",
        desc: "Strengthens back and arms.",
        link: "#",
        category: "Chest",
    },

];

const exercisesGrid = document.querySelector('.exercises-grid')

function renderExercises(arr) {
    let cardHTML = "";
    arr.forEach(exercise => {
        cardHTML += `
      <div class="exercise-card">
        <img src="${exercise.img}" alt="${exercise.alt}">
        <h3 class="exercises-title">${exercise.title}</h3>
        <p>${exercise.desc}</p>
        <button><a href="${exercise.link}">Read more</a></button>
      </div>
    `;
    });
    exercisesGrid.innerHTML = cardHTML;

    // Обработка классов для разных кейсов карточек (после отрисовки)
    exercisesGrid.classList.remove('single-card', 'double-card'); // всегда сначала очищаем

    if (arr.length === 1) {
        exercisesGrid.classList.add('single-card');
    } else if (arr.length === 2) {
        exercisesGrid.classList.add('double-card');
    }
}

const selectExerciseCategory = document.querySelector("#selectExerciseCategory");

selectExerciseCategory.addEventListener('change', e => {
    const selected = e.target.value;
    const filtered = exercises.filter(exercise => {
        if (selected === "All") {
            return true; // показываем все
        }
        return exercise.category === selected; // фильтруем по выбранной категории
    });
    renderExercises(filtered);
});
renderExercises(exercises);