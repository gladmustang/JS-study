#!/bin/bash

echo "starting..."
# file will be copied to project root, when container up
# rm -frd /app/node_modules
# cp -r /node_resources/node_modules /app
# cp -r /node_resources/yarn.lock /app/yarn.lock
# cp -r /node_resources/.yarnrc /app/.yarnrc
# sudo chmod -R 777 node_modules/
# chown -R root:root /app/node_modules

if [ $NODE_ENV == "production" ]; then
  echo "webpack building"
  rm ./yarn.lock
  NODE_ENV=development yarn install
  NODE_ENV=development npm run build_prod
  # clear dev dependencies
  rm -frd /app/node_modules
  rm ./yarn.lock
  # install only production dependencies
  yarn install --production
  rm -f /app/.env
  cp /app/.env.production /app/.env
  echo "start production"
  npm run start_prod
else
  yarn install
  rm -f /app/.env
  cp /app/.env.development /app/.env
  echo "start development"
  npm start
fi
