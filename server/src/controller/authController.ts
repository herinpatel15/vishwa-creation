import { Request, Response } from "express";

export function register(req: Request, res: Response) {
    res.json({register: 'register done'})
}