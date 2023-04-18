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
After all containers started, access to URL http://localhost
for Hasura and login with secret key `HASURA_GRAPHQL_ADMIN_SECRET`
from `.env` file, services have different ports for Hasura:
- CheckoutService: Port 5100.
- ProductService: Port 5200.

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
