export default function randomFutureDate() {
    const start = new Date(2022, 6, 1);
    const end = new Date(2023, 6, 1);
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
}
