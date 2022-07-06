export default function randomMessageId() {
    return parseInt(Math.random() * 1_000_000, 10);
}
