// example to use singleton pattern with routers in express

import express from 'express';

class AppRouter {
    private static instance: express.Router;

    private constructor() {
        console.log('Hello Router');
    }

    public static getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }
        return AppRouter.instance;
    }
}

const router1 = AppRouter.getInstance();
const router2 = AppRouter.getInstance();
