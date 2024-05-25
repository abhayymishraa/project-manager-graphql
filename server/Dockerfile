FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .


FROM gcr.io/distroless/nodejs:18

WORKDIR /app

COPY --from=build /app /app

EXPOSE 3000


CMD ["index.js"]