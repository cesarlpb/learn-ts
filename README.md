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

```bash
    # Nota: --save-dev -> dependencia de desarrollo
    npm install typescript --save-dev # paquete para usar TS
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

- Después de crear el `tsconfig.json`, ejecutamos:

```bash
    npx tsc
```

Esto hace el "build" ( => genera `.js` a partir de `.ts`):


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


