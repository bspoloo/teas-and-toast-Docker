# Taste and Toast

**Taste and Toast** is a recipe platform dedicated to food and beverage enthusiasts. Our mission is to provide you with a unique experience to discover and explore a wide variety of recipes that cater to your tastes and preferences.

## Features

- **Extensive Recipe Collection**: Discover a diverse range of recipes for meals and drinks from various cultures and culinary styles. Whether you're looking for traditional dishes or modern twists, we've got you covered.

- **Search and Filter Options**: Easily filter recipes by type, name, and country to find exactly what you're looking for. Our intuitive filtering system helps you narrow down your options quickly.

- **Dedicated Search Bars**: Utilize our two dedicated search bars: one for searching by recipe name and another for searching by ingredient. This feature streamlines your recipe search and makes it easier to find dishes based on what you have on hand.

- **User-Friendly Interface**: Our platform is designed with user experience in mind, featuring a clean and friendly interface that maintains a cohesive color scheme. We aim to create a visually pleasing environment that enhances your cooking journey.


## Getting Started

To get started with **Taste and Toast**, simply navigate to our website and begin exploring. You can search for specific recipes, filter by category, or browse through our curated collections.

## Join Us

Embark on a culinary adventure with **Taste and Toast** and discover new flavors that will tantalize your taste buds. Whether you're a seasoned chef or just starting, our platform is here to inspire your cooking journey.

---

Feel free to adjust any part of the description to better suit your vision for the platform!

# How to use the project locally?

the link to the image on docker hub is shown: https://hub.docker.com/r/animetx/next-portfolio

To use the project locally you must have the following requirements:
- have docker installed on the computer

The next step is to open the project terminal and run the following command from the docker hub:

- docker pull animetx/next-portfolio:0.1

We verify that our image has been pulled correctly:

- docker images

then run the following command to run it on an available port on the computer:

- docker run -p 3000:3000 animetx/next-portfolio:0.1

If there is any port error, try another port:

- docker run -p 3001:3000 animetx/next-portfolio:0.1

As a final step, access the localhost with the selected port:

- http://localhost:3000