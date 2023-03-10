import { app } from './app'
import { env } from 'process';
import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient()

const port = env.PORT || 3000

app.listen(port, () => { console.log('Server running (Port): ' + port) })
