FROM node:20.9.0-alpine3.17 AS builder

WORKDIR /server

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build

FROM node:20.9.0-alpine3.17 AS runner

WORKDIR /server

COPY --from=builder /server/dist ./
COPY --from=builder /server/node_modules ./node_modules
COPY --from=builder /server/entrypoint.sh ./entrypoint.sh

ENTRYPOINT ["sh", "./entrypoint.sh"]
