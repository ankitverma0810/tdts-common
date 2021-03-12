import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { RequestValidationError } from '../errors/request-validation-error';

export const validateRequest = (req: Request, res: Response, next: NextFunction) => {
    //checking if there are any errors since we are using express validator
    const errors = validationResult(req);
    //if there are any errors then send those
	if (!errors.isEmpty()) {
		throw new RequestValidationError(errors.array());
    }    
    next();
}