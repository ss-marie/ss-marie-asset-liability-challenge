# ss-marie-asset-liability-challenge

## Example
[Link to app on Heroku](https://ss-asset-liability-challenge.herokuapp.com/)

## How to Use
Complete the form and press submit to add assets or liabilities to the table. Once added, total amounts will display at the bottom.

## Build Docker Container and Deploy to Heroku
1. `docker build -t ss-asset-liability-challenge .`
2. `heroku container:login`
3. `heroku container:push -a ss-asset-liability-challenge web`
4. `heroku container:release -a ss-asset-liability-challenge web`
