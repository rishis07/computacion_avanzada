# Base Image
FROM node
# APP dir
RUN mkdir -p /opt/app

WORKDIR /opt/app
# Move the list of packages to the image
COPY package.json .
# Install them
RUN npm install --quiet
# This will let us restart test shit on changes
RUN npm install --save-dev nodemon

EXPOSE 8000

# I should setup an entry point but latter, this will fuck my testing
# CMD ["npm", "start"]

