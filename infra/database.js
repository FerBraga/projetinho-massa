import {Client} from 'pg';

async function query (sql, params) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    });
    await client.connect();
    const response = await client.query(sql, params);
    await client.end();
    return response;
}

export default {
    query: query,
}