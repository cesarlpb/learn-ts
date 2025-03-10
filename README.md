# learn-ts
TS time!

Teoría: [TS en W3schools]([text](https://www.w3schools.com/typescript/typescript_intro.php))

---

## Node

- Instalar Node 20 o 22.14.0 (stable): [Página oficial de Node](https://nodejs.org/)

- Comprobar que funciona el comando `node -v`

- Es posible que sea necesario reiniciar en Windows para que funciones el comando `node` (la primera vez)

## Typescript

- Instalamos Typescript:
```
    npm install typescript --save-dev
```
- Corremos TS:

```bash
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

```bash
    npx tsc
```

## Comprobaciones de tipos en runtime (.js) con Zod:

- Carpeta [web](./web/):

```bash
    npm install install vite zod 
```
- Instalar dependencias: `npm install`
- Ejecutar entorno de desarrollo: `npm run dev`

- Build: 

```bash
    npm build
```

Genera carpeta `dist` con archivos


