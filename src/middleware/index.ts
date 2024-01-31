import express from 'express';
import { getUserBySessionToken } from '../db/users';

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const sessionToken = req.cookies['KRYNV-AUTH'];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const user = await getUserBySessionToken(sessionToken);

    if (!user) {
      return res.sendStatus(403);
    }

    Object.assign(req, { identity: user });

    return next();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};