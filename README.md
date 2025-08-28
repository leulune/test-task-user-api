# User API (NestJS + Prisma + PostgreSQL)

## Содержание
- [User API (NestJS + Prisma + PostgreSQL)](#user-api-nestjs--prisma--postgresql)
  - [Содержание](#содержание)
  - [Стек](#стек)
  - [Запуск проекта](#запуск-проекта)
    - [Клонирование и установка](#клонирование-и-установка)
    - [Поднять PostgreSQL в Docker](#поднять-postgresql-в-docker)
    - [Настройка .env](#настройка-env)
    - [Миграции](#миграции)
    - [Сиды (тестовые пользователи)](#сиды-тестовые-пользователи)
    - [Запуск](#запуск)
  - [API Endpoints](#api-endpoints)
    - [Получить список пользователей](#получить-список-пользователей)
    - [Получить пользователя по ID](#получить-пользователя-по-id)

Тестовое задание: разработка API для получения информации о пользователе из базы данных.

## Стек
- [NestJS] — backend framework  
- [Prisma] — ORM  
- [PostgreSQL] — база данных  
- [Swagger] — документация API  

## Запуск проекта

### Клонирование и установка
```bash
git clone <url>
cd user-api
npm install
```

### Поднять PostgreSQL в Docker
```bash
docker compose up -d
```

### Настройка .env

Создать файл `.env` на основе `.env.example`:

```bash
cp .env.example .env
```

### Миграции
```bash
npx prisma migrate dev --name init_users
```

### Сиды (тестовые пользователи)
```bash
npx prisma db seed
```

### Запуск
```bash
npm run start:dev
```

## API Endpoints

### Получить список пользователей
`GET /api/users`

Пример ответа:
```json
{
  "page": 1,
  "limit": 20,
  "total": 2,
  "items": [
    {
      "id": "aede819a-a8de-4317-8ac2-937a8397a113",
      "username": "alice",
      "fullName": "Alice Johnson",
      "gender": "FEMALE",
      "age": 28,
      "phone": "+10000000001",
      "email": "alice@example.com",
      "avatarUrl": "https://i.pravatar.cc/150?img=1",
      "registeredAt": "2025-08-28T10:47:56.170Z",
      "isActive": true
    }
  ]
}
```

### Получить пользователя по ID

`GET /api/users/:id`

Пример ответа:
```json
{
    "id": "62c2465f-75e1-431e-9106-2aa33a08e487",
    "username": "bob",
    "fullName": "Bob Smith",
    "gender": "MALE",
    "age": 32,
    "phone": "+10000000002",
    "email": "bob@example.com",
    "avatarUrl": "https://i.pravatar.cc/150?img=2",
    "registeredAt": "2025-08-28T10:47:56.170Z",
    "isActive": false
}
```
