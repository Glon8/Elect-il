export const ping = (req, res) => {
    console.log('[Ping]');

    res.sendStatus(200);
}