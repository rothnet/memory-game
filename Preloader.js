export class Preloader extends Phaser.Scene {
    constructor() {
        super({
            key: 'Preloader'
        });
    }

    preload() {
        // מחקנו את שורות ה-CDN
        // this.load.setBaseURL('https://cdn.phaserfiles.com/v385');
        // this.load.setPath("assets/games/card-memory-game/");

        // טעינת כל הקבצים מהתיקייה המקומית
        this.load.image("volume-icon", "assets/ui/volume-icon.png");
        this.load.image("volume-icon_off", "assets/ui/volume-icon_off.png");
        this.load.image("background", "assets/ui/background.png");
        this.load.image("heart", "assets/ui/heart.png");

        this.load.audio("theme-song", "assets/audio/fat-caps-audionatix.mp3");
        this.load.audio("whoosh", "assets/audio/whoosh.mp3");
        this.load.audio("card-flip", "assets/audio/card-flip.mp3");
        this.load.audio("card-match", "assets/audio/card-match.mp3");
        this.load.audio("card-mismatch", "assets/audio/card-mismatch.mp3");
        this.load.audio("card-slide", "assets/audio/card-slide.mp3");
        this.load.audio("victory", "assets/audio/victory.mp3");

        this.load.image("card-back", "assets/cards/card-back.png");
        this.load.image("card-0", "assets/cards/card-0.png");
        this.load.image("card-1", "assets/cards/card-1.png");
        this.load.image("card-2", "assets/cards/card-2.png");
        this.load.image("card-3", "assets/cards/card-3.png");
        this.load.image("card-4", "assets/cards/card-4.png");
        this.load.image("card-5", "assets/cards/card-5.png");
    }

    create() {
        this.scene.start("Play");
    }
}