const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

const sNames = []

names.forEach(name => {
    if (name[0].toLowerCase() === 's') {
        sNames.push(name)
    }
})

console.log(sNames)