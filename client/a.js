let a = ['HTML', 'css', 'js', 'react', 'node'] // jobs skill
let b = ['html', 'php', 'js'] // my skills

a.map((item) => (b.includes(item) ? console.log('item', item, 'faound') : `not this istem, ${item}`))
