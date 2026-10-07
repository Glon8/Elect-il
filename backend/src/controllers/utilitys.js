export const ping = (req, res) => {
    console.log('[Ping]');

    res.statusCode(200).send();
}