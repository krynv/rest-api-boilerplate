import express from 'express';
import { get } from '../helpers';
import { getUserBySessionToken } from '../db/users';

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const { id } = req.params;
    const currentUserId = get(req, 'identity._id') as string;

    if (!currentUserId) {
      return res.sendStatus(400);
    }

    if (currentUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.error(error);
    return res.sendStatus(400);
  }
};

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