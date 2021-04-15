FROM cypress/browsers:node12.18.3-chrome89-ff86

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npx cypress run --headless --browser chrome

# FROM cypress/browsers:node13.6.0-chrome-80-ff72
# WORKDIR /app
# COPY ./cypress ./cypress
# COPY ./cypress.json ./cypress.json
# RUN npx cypress run --headless --browser chrome