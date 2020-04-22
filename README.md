
# App usada para aprender a programar por mi cuentas REST API

Estara basado en aprender el como usar el manejos de ramas de git, forma de hacer buenos commit usando [Conventional Commits](https://www.conventionalcommits.org/).

En el mismo estare usando node con express, todo pasado a typescript, para la conexion de base de datos se usa el ORM [TypeORM](https://typeorm.io/)

## Enfoque

El enfoque que uso internamente es que las entity de TypeORM, no tiene conexion con la logica de los controllers y modelos, de eso se encarga los repository que combierte las entity en modelos y se lo da a los controller o al reves.

## Test

Este mismo usare para probar por primera vez los test unitarios, usando [Jest](https://jestjs.io/) y [SuperTest](https://www.npmjs.com/package/supertest). Todo esto con Typescript.
