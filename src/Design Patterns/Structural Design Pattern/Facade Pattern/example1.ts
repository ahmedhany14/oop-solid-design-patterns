class Amplifier {

    on() {
        console.log('Amplifier is on');
    }

    setVolume(volume: number) {
        console.log('Volume is set to', volume);
    }

    off() {
        console.log('Amplifier is off');
    }
}

class DVDPlayer {
    play(movie: string) {
        console.log('Playing', movie);
    }

    stop() {
        console.log('Stopped');
    }
}

class Projector {
    on() {
        console.log('Projector is on');
    }

    off() {
        console.log('Projector is off');
    }

    wideScreenMode() {
        console.log('Wide screen mode is on');
    }
}


class HomeTheaterFacade {

    constructor(
        private amplifier: Amplifier,
        private dvdPlayer: DVDPlayer,
        private projector: Projector
    ) {
    }

    watchMovie(movie: string) {
        console.log('Get ready to watch a movie...');
        this.amplifier.on();
        this.amplifier.setVolume(5);
        this.dvdPlayer.play(movie);
        this.projector.on();
        this.projector.wideScreenMode();
    }

    endMovie() {
        console.log('Shutting movie theater down...');
        this.amplifier.off();
        this.dvdPlayer.stop();
        this.projector.off();
    }
}

// Usage

const amplifier = new Amplifier();
const dvdPlayer = new DVDPlayer();
const projector = new Projector();

const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector);

homeTheater.watchMovie('Inception');
homeTheater.endMovie();