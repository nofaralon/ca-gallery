'use strict'
console.log('Starting up');
var gProjects

createProjects() 

function createProject(projectName) {
    return {
        id: projectName,
        name: projectName,
        title: "Better push those boxes",
        desc: "lorem ipsum lorem ipsum lorem ipsum",
        url: `"https://nofaralon.github.io/${projectName}/"`,
        publishedAt: Date.now(),
        labels: ["Matrixes", "keyboard events"],
    }
}

function createProjects() {
    gProjects = [
        createProject('minesweeper'),
        createProject('pacman'),
        createProject('ballBoard'),
        createProject('bookShop'),
        createProject('touchNums'),
        createProject('guessWho')
    ]

}

console.log(gProjects);

function getprojects(){
    return gProjects
}