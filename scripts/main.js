class Card {
    constructor(args) {
        this.title = args.title;
        this.content = args.description || '';
    }
    render(container) {
        container.insertAdjacentHTML('beforeend',
            '<div class="card">' +
            '   <div class="card-title">' + this.title + '</div>' +
            '   <div class="card-content">' + this.content + '</div>' +
            '</div>'
        );
    }

}

class SkillCard extends Card {
    constructor(args) {
        super(args);
    }
}

class MediaCard extends Card {
    constructor(args) {
        super(args);
        if (args.photo) {
            this.content += '<img src="' + args.photo + '">';
        }
        if (args.yt) {
            this.content += '<iframe width="560" height="315" src="' + args.yt + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
        
    }
}