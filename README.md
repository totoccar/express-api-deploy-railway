-----

# DevOps Ping API

Este proyecto es una API mínima construida con **Node.js** y **Express** que responde con un simple "pong" al acceder a la ruta `/ping`. Fue diseñada como ejercicio práctico para demostrar conocimientos básicos en herramientas clave del entorno DevOps: **Docker**, **GitHub Actions** y **Railway**.

-----

## Tecnologías Utilizadas

  * **Node.js y Express**: Para construir una API simple.
  * **Docker**: Para contenerizar la aplicación.
  * **GitHub Actions**: Para crear una *pipeline* de CI/CD.
  * **Railway**: Para desplegar automáticamente la aplicación en la nube.

-----

## Objetivo del Proyecto

Este proyecto simula un flujo real de desarrollo y despliegue en el mundo DevOps. Está pensado para demostrar:

  * Cómo **contenerizar una aplicación con Docker**.
  * Cómo **configurar un *workflow* de integración y y despliegue continuo (CI/CD)**.
  * Cómo **conectar un repositorio con Railway** para hacer *deploy* automático en cada *push* a la rama `main`.

-----

## ¿Cómo Ejecutarlo Localmente?

Sigue estos pasos para poner en marcha la API en tu máquina local:

1.  **Clonar el repositorio**:

    ```bash
    git clone https://github.com/tuusuario/devops-ping-api.git
    cd devops-ping-api
    ```

2.  **Construir la imagen Docker**:

    ```bash
    docker build -t ping-api .
    ```

3.  **Ejecutar el contenedor**:

    ```bash
    docker run -p 3000:3000 ping-api
    ```

4.  **Acceder desde el navegador o con `curl`**:

    ```
    http://localhost:3000/ping
    ```

-----

## Autor

Creado por **Antonio Carlos** como ejercicio de aprendizaje y práctica en herramientas DevOps.

  * LinkedIn [antoniocarlos2000](https://www.linkedin.com/in/antoniocarlos2000/)
  * GitHub: [totoccar](https://github.com/totoccar)
