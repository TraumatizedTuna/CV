/**
 * Class representing a card.
 */
class Card {
    constructor(args) {
        this.title = args.title;
        this.description = args.description || '';
        this.content = args.content || '';
        this.cards = [];
    }
    /**
     * Render card in container.
     * @param {Element} container 
     * @param {String} id 
     * @param {String} classes 
     */
    render(container, id, classes = '') {
        container.insertAdjacentHTML('beforeend',
            '<div class="card' + classes + '" id="' + id + '"> ' +
            '   <div class="card-title">' + this.title + '</div>' +
            '   <div class="card-description">' + this.description + '</div>' +
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
/**
 * Class representing a skill card.
 */
class SkillCard extends Card {
    constructor(args) {
        super(args);
    }
    /**
     * Render skill card in container and add click event to filter portfolio.
     * @param {Element} container 
     * @param {String} id 
     * @param {String} classes 
     */
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
/**
 * Class representing media card (for portfolio)
 */
class MediaCard extends Card {
    constructor(args) {
        super(args);
        if (args.photo) {
            this.content += '<img src="' + args.photo + '">';
        }
        if (args.yt) {
            this.content += '<iframe src="' + args.yt + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
        if (args.page) {
            this.content += '<iframe src="' + args.page + '"></iframe>';
        }

        //Add this to all related skill cards so they can filter portfolio
        for (let s of args.skills) {
            skills[s]?.cards?.push(this);
        }

    }
}