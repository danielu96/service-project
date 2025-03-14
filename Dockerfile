# # Wybierz bazowy obraz Node.js (np. 20)
# FROM node:18-alpine

# # Ustaw katalog roboczy w kontenerze
# WORKDIR /app

# # Skopiuj pakiet.json i zależności
# COPY package*.json ./
# RUN npm install --legacy-peer-deps

# # Skopiuj pozostałe pliki projektu
# COPY . .

# # # Zbuduj aplikację
# # RUN npm run build
# # RUN apk update && apk add openssl1.1
# # Instalacja OpenSSL dla Alpine Linux (PRZED npm install)
# RUN apk update && apk add openssl1.1

# # Zainstaluj zależności npm
# RUN npm install

# # Zbuduj aplikację
# RUN npm run build

# # Ustaw zmienną środowiskową
# ENV NODE_ENV=production

# # Ustaw port, na którym będzie działać aplikacja
# EXPOSE 3000

# # Uruchom aplikację
# CMD ["npm", "start"]

# ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
# # Instalacja OpenSSL dla Alpine Linux

# Wybierz bazowy obraz Node.js (np. 20)
FROM node:18-alpine

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj pakiet.json i zależności
COPY package*.json ./

# Instalacja OpenSSL dla Alpine Linux (PRZED npm install)

RUN apk update && apk add openssl

# Zainstaluj zależności npm
RUN npm install --legacy-peer-deps

# Skopiuj pozostałe pliki projektu
COPY . .

# Zbuduj aplikację
RUN npm run build

# Ustaw zmienną środowiskową
ENV NODE_ENV=production

# Ustaw port, na którym będzie działać aplikacja
EXPOSE 3000

# ARG i ENV dla Clerk
ARG NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
ENV NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=$NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

# Uruchom aplikację
CMD ["npm", "start"]