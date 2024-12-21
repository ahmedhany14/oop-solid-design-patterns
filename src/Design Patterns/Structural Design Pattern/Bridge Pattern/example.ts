
// Implementor
interface ImediaPlayer {
    playAudio(): void;

    playVideo(): void;
}


// Concrete Implementor
class WindowsMediaPlayer implements ImediaPlayer {
    playAudio(): void {
        console.log("Playing Audio in Windows Media Player");
    }

    playVideo(): void {
        console.log("Playing Video in Windows Media Player");
    }
}

class MacOsMediaPlayer implements ImediaPlayer {
    playAudio(): void {
        console.log("Playing Audio in Mac OS Media Player");
    }

    playVideo(): void {
        console.log("Playing Video in Mac OS Media Player");
    }
}

// Abstraction

abstract class MediaPlayer {
    protected mediaPlayer: ImediaPlayer;

    constructor(mediaPlayer: ImediaPlayer) {
        this.mediaPlayer = mediaPlayer;
    }

    abstract play(): void;
}

// Refined Abstraction
class AudioPlayer extends  MediaPlayer {
    constructor(mediaPlayer: ImediaPlayer) {
        super(mediaPlayer);
    }

    play(){
        this.mediaPlayer.playAudio();
    }
}

class VideoPlayer extends  MediaPlayer {
    constructor(mediaPlayer: ImediaPlayer) {
        super(mediaPlayer);
    }

    play(){
        this.mediaPlayer.playVideo();
    }
}


// Client

const windowsMediaPlayer = new WindowsMediaPlayer();
const macOsMediaPlayer = new MacOsMediaPlayer();


const audioPlayer = new AudioPlayer(windowsMediaPlayer);
audioPlayer.play();

const videoPlayer = new VideoPlayer(macOsMediaPlayer);
videoPlayer.play();

// we can make windowsMediaPlayer play video and macOsMediaPlayer play audio

/*
    const audioPlayer = new AudioPlayer(windowsMediaPlayer);
    audioPlayer.play();
    const videoPlayer = new VideoPlayer(macOsMediaPlayer);
    videoPlayer.play();
*/