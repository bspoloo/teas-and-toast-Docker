# Taste and Toast

**Taste and Toast** is a recipe platform dedicated to food and beverage enthusiasts. Our mission is to provide you with a unique experience to discover and explore a wide variety of recipes that cater to your tastes and preferences.

## Features

- **Extensive Recipe Collection**: Discover a diverse range of recipes for meals and drinks from various cultures and culinary styles. Whether you're looking for traditional dishes or modern twists, we've got you covered.

- **Search and Filter Options**: Easily filter recipes by type, name, and country to find exactly what you're looking for. Our intuitive filtering system helps you narrow down your options quickly.

- **Dedicated Search Bars**: Utilize our two dedicated search bars: one for searching by recipe name and another for searching by ingredient. This feature streamlines your recipe search and makes it easier to find dishes based on what you have on hand.

- **User-Friendly Interface**: Our platform is designed with user experience in mind, featuring a clean and friendly interface that maintains a cohesive color scheme. We aim to create a visually pleasing environment that enhances your cooking journey.


## Getting Started

To get started with **Taste and Toast**, simply navigate to our website and begin exploring. You can search for specific recipes, filter by category, or browse through our curated collections.


## Git Hub pipeline configuration:
link to github repository: https://github.com/bspoloo/teas-and-toast-Docker
Also added the configuration that cannot deploy to docker until merge is done.
A 3-step configuration was made:
- build the project.- builds the project
- test.- runs a test of the project to check for errors
- build docker.- runs a build and deploy of the project to docker

# How to use the project locally?

the link to the image on docker hub is shown: https://hub.docker.com/r/animetx/taste-and-toast-now

To use the project locally you must have the following requirements:
- have docker installed on the computer

The next step is to open the project terminal and run the following command from the docker hub:

- docker pull animetx/taste-and-toast-now:0.1

We verify that our image has been pulled correctly:

- docker images

then run the following command to run it on an available port on the computer:

- docker run -p 3000:3000 animetx/taste-and-toast-now:0.1

If there is any port error, try another port:

- docker run -p 3001:3000 animetx/taste-and-toast-now:0.1 or another port

As a final step, access the localhost with the selected port:

- http://localhost:3000

# Project deployed in Azure

As an extra step, the project was also deployed to Azure, with the same 3-step configurations in GitHub pipelines (build, test, and deploy) and the configurations mentioned in docker pipelines.

- Link to the GitHub repository: https://github.com/bspoloo/Teast-And-Toast-Now
- Link to the page deployed to Azure: https://teastandtoastnowweb.azurewebsites.net/
