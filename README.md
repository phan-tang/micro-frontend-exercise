## BE
### To start Docker
```
Run via docker:
> docker compose up -d

Run via yarn:
> yarn docker:start
```
### To stop Docker
```
Run via docker:
> docker compose down -v

Run via yarn:
> yarn docker:stop
```
After all containers started, access to URL http://localhost:4000
for Hasura and login with secret key `HASURA_GRAPHQL_ADMIN_SECRET`
from `.env` file.

### Backup data from PostgreSQL and Hasura
```
We should run backup data when have new update on this service.

Run via yarn:
> yarn data:backup
```
### Restore data to PostgreSQL and Hasura
```
We should restore data the first time when running this service.

Run via yarn:
> yarn data:restore

Use port 5100 for CheckoutService

Use port 5200 for ProductService
```
## FE

### Install project:
```
yarn
```
### Start all applications: 
```
yarn start
```
### Start each application:
```
- yarn main
- yarn checkout
- yarn product
- yarn shared
```
