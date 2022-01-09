const skillContainer=document.getElementById('skills');
const portfolioContainer=document.getElementById('portfolio');

const skills = {
    Windows: new SkillCard({
        title: 'Microsoft Windows XP-10',
        description: ''
    }),
    Blender: new SkillCard({
        title: 'Blender 2.5-3.0',
        description: ''
    }),
    'After Effects': new SkillCard({
        title: 'After Effects CS5-CC'
    })
}

const portfolio = [
    new MediaCard({
        title: 'Symbiosis',
        description: '3D art',
        photo: 'https://lh3.googleusercontent.com/pw/AM-JKLWzuGZ8yD38BT014tra5yIkKRk7I9UVM1jAcTJWAGT-mlpELtbP0jEpfZl6bKFx4g4Pb_f3m3-0QH0noHjrGbMOHmmAwHdbT90BLj8dvOffCf1VsuKsLdi7zvPQ_CgaVzDjVP3OAvoiVNs4P3m0fgkJ=w845-h564-no?authuser=0',
        skills: ['Blender', 'LuxCore', 'After Effects', 'Photoshop', 'Windows']
    }),
    new MediaCard({
        title: 'Bees in Slow Motion',
        yt:'https://www.youtube.com/embed/1QB-B42dnNs',
        skills: ['After Effects', 'Windows']
    })
]

for (let key in skills){
    skills[key].render(skillContainer);
}

for(let c of portfolio){
    c.render(portfolioContainer);
}