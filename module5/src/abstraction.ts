// interface MediaPlayer {
//     play(): void;
//     pause(): void;
//     stop(): void;
// }
// class AudioPlayer implements MediaPlayer {
//     play(): void {
//         console.log("Playing audio...");
//     }
//     pause(): void {
//         console.log("Pausing audio...");
//     }
//     stop(): void {
//         console.log("Stopping audio...");
//     }
// }

// const mintPlayer: MediaPlayer = new AudioPlayer();
// mintPlayer.play();
// mintPlayer.pause();
// mintPlayer.stop();

abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

class MintuPlayer extends MediaPlayer {
    play(): void {
        console.log("Playing audio...");
    }
    pause(): void {
        console.log("Pausing audio...");
    }
    stop(): void {
        console.log("Stopping audio...");
    }
}

const mintPlayer: MediaPlayer = new MintuPlayer();
mintPlayer.play();
mintPlayer.pause();
mintPlayer.stop();