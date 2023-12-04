# Angular Monorepo

Esto es un monorepo de prueba generado usando [Nx](https://nx.dev/).

Web publicada en GitHub Pages usando [este workflow](.github/workflows/build-on-branch.yml) en: [https://sergio9929.github.io/angular-monorepo/](https://sergio9929.github.io/angular-monorepo/)

Contenido:
- `/apps/github-issues` Aplicación creada usando Angular 17
- 2 librerías en `/libs/shared/`
  - `@angular-monorepo/shared-ui` en `/ui`: Componentes de angular 17
  - `@angular-monorepo/shared-utils` en `/utils`: Algunas funciones reusables

> [!WARNING]
> La web no está adaptada a móviles, ni pantallas muy estrechas.

## Instalar dependencias

```sh
npm install
```
> [!WARNING]
> No uses pnpm o yarn, puede dar errores.

## Servidor de desarrollo local

Para crear el servidor de desarrollo usa el siguiente comando:

```sh
npx nx serve github-issues
```

Podrás acceder a él desde la siguiente dirección: [http://localhost:4200/](http://localhost:4200/)

## Generar aplicación

Para generar la aplicación de producción usa el siguiente comando:

```sh
npx nx run github-issues:build
```

Esto generará una SPA en `/dist/apps/github-issues/browser`
