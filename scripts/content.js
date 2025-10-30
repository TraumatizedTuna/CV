const skillContainer = document.getElementById('skills');
const portfolioContainer = document.getElementById('portfolio');
let tags = {}
let skills, portfolio;

window.addEventListener('load', function(){

    skills = {
        Windows: new SkillCard({
            title: 'Microsoft Windows',
            description: 'XP - 11'
        }),
        Linux: 'Ubuntu, Red Hat, openSUSE',
        'MacOS': '',
        'Visual Studio': new SkillCard({
            title: 'Microsoft Visual Studio'
        }),
        'Visual Studio Code': new SkillCard({
            title: 'Microsoft Visual Studio Code',
            tags: ['Code']
        }),
        'Arduino IDE': '',
        Blender: '2.5 - 4.5, Fracture Modifier Build',
        LuxCore: '',
        Onshape: '',
        'Fusion': new SkillCard({
            title: 'Autodesk Fusion',
            description: '',
            tags: ['3D']
        }),
        PrusaSlicer: new SkillCard({
            title: 'PrusaSlicer',
            description: '',
            tags: ['3D']
        }),
        OrcaSlicer: new SkillCard({
            title: 'OrcaSlicer',
            description: '',
            tags: ['3D']
        }),
        Cura: new SkillCard({
            title: 'Ultimaker Cura',
            description: '',
            tags: ['3D']
        }),
        Klipper: new SkillCard({
            title: 'Klipper',
            description: '',
            tags: ['3D']
        }),
        'After Effects': new SkillCard({
            title: 'Adobe After Effects',
            description: 'CS5 - CC'
        }),
        'Premiere Pro': new SkillCard({
            title: 'Adobe Premiere Pro',
            description: 'CS5 - CC'
        }),
        Photoshop: new SkillCard({
            title: 'Adobe Photoshop',
            description: 'CS5 - CC'
        }),
        Javascript: new SkillCard({
            title: 'Javascript',
            description: '',
            tags: ['Code']
        }),
        HTML: new SkillCard({
            title: 'HTML',
            description: '',
            tags: ['Code']
        }),
        CSS: '',
        'C#': '',
        Java: '',
        Python: '',
        Haskell: '',
        'C/C++': '',
        ComfyUI: ''
        
    }
    cardify_dict(skills, SkillCard);
    
    portfolio = [
        new MediaCard({
            title: 'Symbiosis',
            description: 'Modeled in Blender, rendered in LuxCore, composited in After Effects',
            photo: 'https://lh3.googleusercontent.com/pw/AM-JKLWzuGZ8yD38BT014tra5yIkKRk7I9UVM1jAcTJWAGT-mlpELtbP0jEpfZl6bKFx4g4Pb_f3m3-0QH0noHjrGbMOHmmAwHdbT90BLj8dvOffCf1VsuKsLdi7zvPQ_CgaVzDjVP3OAvoiVNs4P3m0fgkJ=w845-h564-no?authuser=0',
            skills: ['Blender', 'LuxCore', 'After Effects', 'Photoshop', 'Windows']
        }),
        new MediaCard({
            title: 'Side Effects',
            description: 'Viewer discretion advised.',
            yt: 'https://www.youtube.com/embed/SuoEhrTOeFU?si=ImSx3lZ0fS9FO3co',
            skills: ['After Effects', 'Blender', 'Windows']
        }),
        new MediaCard({
            title: 'Calculator',
            page: 'https://traumatizedtuna.github.io/Calculator/#175%2F7900',
            skills:['Javascript', 'HTML', 'CSS', 'Visual Studio', 'Visual Studio Code', 'Windows']
        }),
        new MediaCard({
            title: 'Chicken Wheelchair',
            page: 'https://www.printables.com/embed/1370036',
            skills:['Fusion', 'PrusaSlicer', 'Klipper', 'Windows']
        }),
        new MediaCard({
            title: 'Bees in Slow Motion',
            yt: 'https://www.youtube.com/embed/1QB-B42dnNs',
            skills: ['After Effects', 'Windows']
        }),
        new MediaCard({
            title:'What\'s Up?',
            photo: 'https://lh3.googleusercontent.com/pw/AM-JKLU36WHzGqGtyD0sL8lIq_dfjbauqJDD24jGLsMeP_Nab2t6s9R0YyW0OGEUbzKcVgPbnvlbCnmubWSCA89HkfgcE7VMtYgttEYo7pnWEJoUVdN-hvvrGkgoSFlqmp6qEF_1NGXzCqJLwkfn-NGfXC7K=w1319-h742-no?authuser=0',
            skills: ['Blender', 'After Effects', 'Photoshop', 'Windows']
        }),
        new MediaCard({
            title: 'Steambenchy Willie',
            page: 'https://www.printables.com/embed/1220653',
            skills:['Blender', 'PrusaSlicer', 'Klipper', 'Windows']
        }),
        new MediaCard({
            title: 'The Master Baseball Player',
            yt: 'https://www.youtube.com/embed/6bBFu3A5DGw',
            skills: ['After Effects', 'Blender', 'Windows']
        }),
        new MediaCard({
            title: '3D Printer Motion System Upgrade',
            page: 'https://www.printables.com/embed/1230561',
            skills:['Fusion', 'PrusaSlicer', 'Klipper', 'Windows']
        }),
        new MediaCard({
            title: 'Noodle',
            page: 'https://traumatizedtuna.github.io/Noodle/',
            skills:['Javascript', 'HTML', 'CSS', 'Visual Studio', 'Visual Studio Code', 'Windows']
        }),
        new MediaCard({
            title: 'Internal Spool Roller',
            page: 'https://cad.onshape.com/documents/967980939b13b1402b424e21/w/c6b6deb2eb1b420def554b00/e/524dfbe8e8cca3c4703827ac?renderMode=0&uiState=64fe4acc2f97510693526b98',
            skills:['Onshape', 'Windows']
        })
    ]
    
    
    for (let key in skills) {
        skill = skills[key];

        for (let tag of skill.tags) {
            if (!tags[tag]) {
                tags[tag] = new SkillCard({
                    title: tag,
                    description: ''
                });
            }
            tags[tag].add_card(skill);
        }

        skill.render(skillContainer, 'skill-card-' + key);
        skill.key = key; //TODO: Is this really how we wanna do things?
    }
    
    for (let i in portfolio) {
        portfolio[i].render(portfolioContainer, 'media-card-' + i, ' media');
    }

    let hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
    if(skills[hash]) {
        skills[hash].toggle_selected();
    }
});