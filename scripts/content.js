const skillContainer = document.getElementById('skills');
const portfolioContainer = document.getElementById('portfolio');

const skills = {
    Windows: new SkillCard({
        title: 'Microsoft Windows',
        description: 'XP, Vista, 7, 8, 8.1, 10'
    }),
    Linux: 'Ubuntu, Red Hat, openSUSE',
    'MacOS': '',
    Office: new SkillCard({
        title: 'Microsoft Office'
    }),
    'Visual Studio': new SkillCard({
        title: 'Microsoft Visual Studio'
    }),
    'Visual Studio Code': new SkillCard({
        title: 'Microsoft Visual Studio Code'
    }),
    'Arduino IDE': '',
    Blender: '2.5-3.0',
    'After Effects': new SkillCard({
        title: 'Adobe After Effects',
        description: 'CS5-CC'
    }),
    'Premiere Pro': new SkillCard({
        title: 'Adobe Premiere Pro',
        description: 'CS5-CC'
    }),
    Photoshop: new SkillCard({
        title: 'Adobe Photoshop',
        description: 'CS5-CC'
    }),
    Javascript: '',
    HTML: '',
    CSS: '',
    'C#': '',
    Java: '',
    PHP: '',
    Python: '',
    Haskell: '',
    'C/C++': ''
    
}
for (let key in skills) {
    //Convenient for skills where key matches title
    if (typeof skills[key] === 'string') {
        skills[key] = new SkillCard({
            title: key,
            description: skills[key]
        });
    }
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
        yt: 'https://www.youtube.com/embed/1QB-B42dnNs',
        skills: ['After Effects', 'Windows']
    })
]

for (let key in skills) {
    skills[key].render(skillContainer, 'skill-card-' + key);
}

for (let i in portfolio) {
    portfolio[i].render(portfolioContainer, 'media-card-' + i, ' media');
}