# learn-ts
TS time!

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

