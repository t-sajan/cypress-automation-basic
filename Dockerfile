FROM cypress/browsers:node14.16.0-chrome89-ff77

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install
RUN npm install cypress

RUN npx cypress run --headless --browser chrome

