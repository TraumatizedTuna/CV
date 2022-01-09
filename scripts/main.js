class Card {
    constructor(args) {
        this.title = args.title;
        this.content = args.description || '';
        this.cards = [];
    }
    render(container, id, classes = '') {
        container.insertAdjacentHTML('beforeend',
            '<div class="card' + classes + '" id="' + id + '"> ' +
            '   <div class="card-title">' + this.title + '</div>' +
            '   <div class="card-content">' + this.content + '</div>' +
            '</div>'
        );
        this.html = document.getElementById(id);
        this.html.card = this;
    }
    hide() {
        this.html.classList.add('hidden');
    }
    show() {
        this.html.classList.remove('hidden');
    }

}

class SkillCard extends Card {
    constructor(args) {
        super(args);
    }
    render(container, id, classes = ' skill') {
        super.render(container, id, classes);
        this.html.addEventListener('click', function () {
            if (this.classList.contains('selected')) {
                this.classList.remove('selected');
                for (let mCard of portfolio) {
                    mCard.show();
                }
            }
            else {
                //Deselect currently selected
                document.getElementsByClassName('selected')[0]?.classList?.remove('selected');
                this.classList.add('selected');
                for (let mCard of portfolio) {
                    mCard.hide();
                }
                for (let mCard of this.card.cards) {
                    mCard.show();
                }
            }
        });
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
        if (args.page) {
            this.content += '<iframe width="560" height="315" src="' + args.page + '"></iframe>';
        }

        for (let s of args.skills) {
            skills[s]?.cards?.push(this);
        }

    }
}