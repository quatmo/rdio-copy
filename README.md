# Rdio-Copy

A copy of rdio official website - a beautiful site with parallax scrolling effect.

[Live Preview][1]

## Why this project?

Rdio ([rdio.com][2]) was an online music streaming service. 

When I first saw Rdio's official website, I was deeply moved by the great design of the web page. It follows flat ui design language and responsive design approach, with amazing parallax scrolling effect. 

As a frontend engineer who is crazy about web design, I asked myself, "can I build a website like this?". I believed the answer was yes. So I decided to build a website just as same as Rdio.com. I would copy its visual design but not one piece of its code. Because I wanted to use this project to test my skills in developing parallax-scrolling websites.

I do come across some problems during development.

The biggest problem is mouse scrolling in Chrome (or other webkit browsers too?) is not smooth. Parallax effect in Chrome is a disaster. Even the real Rdio's official website didn't solve this problem (maybe they don't care). Luckily, I find a polyfill for this problem - [Firefox-like-smooth-scroll-for-chrome][3].

Another problem is parallax scrolling with background image is not smooth either. The solution is to use `<img>` instead of css background-image. I read these two tickets on StackOverflow.com carefully and finally figure out a not-bad solution.

1. [StackOverflow: Smoothing the parallax scrolling of a background image][4]

2. [StackOverflow: Is there an equivalent to background-size: cover and contain for image elements?][5]

Finally I acomplish my goal, finish this project and I'm happy with the parallax effect. Thanks God.

**Unfortunately, Rdio has been shutting down since November 23rd, 2015.**

Farewell, Rdio.

> PS: I didn't do much optimization for small screens to this project. I
> will make it more responsive in the future.

![Screenshot][6]

## Development Workflow

1. Install dependencies. Rdio-Copy use NPM to manage dependencies. In your terminal, run:
    
        npm install

2. Rdio-Copy use webpack to bundle all resources. In your terminal, run:

        npm run dev

    This will start webpack-dev-server. After the server starts, navigate your browser to `localhost:8080`.
    
## Get Ready for Production

In your teminal, run:

        npm run prod

## Licence
MIT


  [1]: http://panteng.me/demos/rc
  [2]: http://rdio.com
  [3]: https://github.com/iahnn/Firefox-like-smooth-scroll-for-chrome
  [4]: http://stackoverflow.com/questions/15789026/smoothing-the-parallax-scrolling-of-a-background-image
  [5]: http://stackoverflow.com/questions/11670874/is-there-an-equivalent-to-background-size-cover-and-contain-for-image-elements
  [6]: https://raw.githubusercontent.com/panteng/rdio-copy/master/screenshot.png
