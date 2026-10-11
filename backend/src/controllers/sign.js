import { stringVerify } from "../util.js";

const hashConfirm = (string) => stringVerify(string, /^[a-fA-F0-9]{64}$/)

export const signIn = (req, res) => {
    const { login, password } = req.body;

    if (!hashConfirm(login) || !hashConfirm(password)) return res.sendStatus(400);

    return res.status(200).json({ state: 'Admin logining works' }).send();
}

export const provideId = (req, res) => {
    const { id, agreement } = req.body;

    if (!hashConfirm(id) || typeof agreement !== "boolean") return res.sendStatus(400);

    return res.status(200).json({ state: 'Id check works' }).send();
}

export const provideConfirm = (req, res) => {
    const { code } = req.body;

    if (!hashConfirm(code)) return res.sendStatus(400);

    // code - once code is validated, the user receive a token
    // using the token, user can to participate in voting

    return res.status(200).json({ state: 'Confirm check works', token: 'some token' }).send();
}

export const signUp = (req, res) => {
    const { id, token, partyInd } = req.body;

    if (!hashConfirm(id) || !hashConfirm(token) ||
        !Number.isInteger(partyInd) || partyInd < 0) return res.sendStatus(400);

    // user must send the token assigned to him, hashed id with platform terms to make his vote to count.

    return res.status(200).json({ state: 'Voting sign-up works' }).send();
}