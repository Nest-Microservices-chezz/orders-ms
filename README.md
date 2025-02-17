# Orders Microservices

docker compose up -d

## Dev

1. Clonar el repositorio
2. Crear archivo `.env` basado en `env.template`
3. Levantar base de datos `docker compose up -d`
4. Levantar servidor NATS
```
docker run -d --name nasts-server -p 4222:4222 -p 8222:8222 nats
```
5. Levantar proyecto con `npm sun start:dev`
