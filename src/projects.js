import checkersImg from './assets/img/checkers.JPG'
import dotifyImg from './assets/img/dotify.JPG'
import memeGenImg from './assets/img/memegen.JPG'
import mineSweeperImg from './assets/img/minesweeper.JPG'
import appsusImg from './assets/img/appsus.JPG'
import restaurantImg from './assets/img/restaurant.JPG'
import weatherImg from './assets/img/weather.JPG'

export const projects = [
    {
        name: 'Dotify',
        img: dotifyImg,
        desc: 'A Spotify clone app',
        url: 'https://project-dotify.herokuapp.com/',
        mainTech: ['JavaScript', 'React.JS','Node.JS', 'MongoDB','Web Sockets', 'Sass']
    },
    {
        name: 'Weather',
        img: weatherImg,
        desc: 'A weather app to know the weather around the world',
        url: 'https://sahargar.github.io/WeatherApp/',
        mainTech: ['JavaScript', 'React.JS', 'Sass']
    },
    {
        name: 'Appsus',
        img: appsusImg,
        desc: 'An app that contains three apps: Bookstore, Notes app and a Gmail mock app',
        url: 'https://sahargar.github.io/Appsus/',
        mainTech: ['JavaScript', 'React.JS', 'Sass']
    },
    {
        name: 'Checkers',
        img: checkersImg,
        desc: 'A checkers app to play with a friend (offline)',
        url: 'https://sahargar.github.io/Checkers/',
        mainTech: ['JavaScript', 'React.JS','Sass']
    },
    {
        name: 'Restaurant',
        img: restaurantImg,
        desc: 'An app that mocks a restaurant ordering and delivery system',
        url: 'https://sahargar.github.io/Restaurant/',
        mainTech: ['JavaScript','TypeScript', 'React.JS', 'Sass']

    },
    {
        name: 'Meme Generator',
        img: memeGenImg,
        desc: 'A meme generator app',
        url: 'https://sahargar.github.io/Meme-Generator/',
        mainTech: ['JavaScript', 'CSS3', 'HTML5', 'Canvas']
    },
    {
        name: 'Mine Sweeper',
        img: mineSweeperImg,
        desc: 'A mine sweeper app',
        url: 'https://sahargar.github.io/Mine-Sweeper/',
        mainTech: ['JavaScript', 'CSS3', 'HTML5']
    },
]