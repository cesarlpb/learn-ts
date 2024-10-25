# learn-ts
TS time!

Teoría: https://www.w3schools.com/typescript/typescript_intro.php

---

## Node
- Instalar Node 20 o 22.10.0: https://nodejs.org/en/download/package-manager
- Comprobar que funciona el comando `node -v`

## Typescript

- Instalamos Typescript:
```
    npm install typescript --save-dev
```
- Corremos TS:
```
    npx tsc
```
- Config en `tsconfig.json`:

```json
    {
    "include": ["src"],
    "compilerOptions": {
        ...
        "outDir": "./build"
    }
    }
```

Build (genera `.js` a partir de `.ts`):
```
    npx tsc
```

## Comprobaciones de tipos en runtime (.js) con Zod:

- Carpeta [web](./web/):
```
    npm install install vite zod 
```
- Instalar dependencias: `npm install`
- Ejecutar entorno de desarrollo: `npm run dev`

- Build: 
```
    npm build
```

Genera carpeta `dist` con archivos


