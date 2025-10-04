// Shared utility functions for BPM games

function calculateScore(targetBPM, guessBPM) {
    const diff = Math.abs(targetBPM - guessBPM);
    return Math.max(0, 100 - (diff / targetBPM * 100));
}

function isMobileDevice() {
    return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}
