import { Request, Response, NextFunction } from 'express';

import { NotAuthorizedError } from '../errors/not-authorized-error';
import { UserStatus } from '../events/types/user-status';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser || req.currentUser.status === UserStatus.Inactive) {
        throw new NotAuthorizedError();
    }
    next();
}