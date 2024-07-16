import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

const config = {
    port: process.env.PORT,
    mongodb_url: process.env.MONGODB_URL,
    stripe: process.env.STRIPE
};

export default config;