# grin-server

grin-server is a small, lightweight express-wrapper that uses TypeScript decorators and metadata.

## Installation

With NPM: `npm install --save grin-server`

With YarnPKG: `yarn add grin-server`

## Usage

index.ts

```typescript
# index.ts
import { build } from 'grin-server';
import express from 'express';
import { App } from './App';

const bootstrap = async () => {
    let app: express.Application = build(App);
    
    app.listen(3000);
};

bootstrap();
```

App.ts

```typescript
# App.ts
import { Server } from 'grin-server';
import helmet from 'helmet';
import Cats from './controllers/Cats';

@Server({
    controllers: [Cats],
    middlewares: [helmet()], # Express Middlewares
})
export class App {}
```

controllers/Cats.ts

```typescript
import { Controller, Get } from 'grin-server';
import express from 'express';

let cats = [
  "Albert",
  "Moustache"
];

@Controller('/cats')
export class Cats {
    @Get('/')
    fetchCats(_: express.Request, res: express.Response) {
        res.json(cats);
    }
}
```