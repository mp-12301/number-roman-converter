# Roman numerals converter

A simple web based application that converts between Numbers and Roman Numerals. A live demo can be seen [here](https://number-roman-converter.herokuapp.com)


## Installation

```
git clone --depth 1 https://github.com/mpereira96/number-roman-converter.git project
cd project
cp .env-example .env
npm install
```

## Usage

```
npm start                   # start server
npm run start:dashboard     # start server using webpack-dashboard
npm run build               # production build (remember to build with NODE_ENV=production)
npm test                    # runs the tests
```
From npm start By default the application should be running at: http://localhost:8080/

## Thoughts

#### Approaching the conversion from Number to Roman Numeral
Initially I was going to convert the numbers to a String format where I would get the last 3 digits and with each one look for the corresponding value on a roman numeral "dictionary". 

I switched to a more mathematical approach, avoiding any conversion to a String format and iterating over objects.

##### Important to mention:
```  
  const factor = 1000;
  const nM = Array(Math.floor(num / factor) + 1).join("M");
```
Here we obtain the number of M by dividing the number by 1000. The `Array(N).join("M")` creates an array with `N` undefined elements and joins them witht he letter `"M"`.

```
  const q = factor / (10 ** (order + 1));
  const n = Math.floor(((num % factor) % (q * 10)) / q);
```
Here on each order (hundreds, tens and single), I obtain `q` which will take the values 100, 10 and 1. This will help me get each digit in `num` from the remainder.


#### Approaching the conversion from Roman Numeral to Number
Since we receive the roman numerals in a string format, I used a regular expression to effectively catch the groups (Thousands, Hundreds, Tens, Single) and from there convert the single roman numeral to a number.

#### Improvements
I would definitely improve on each converter method, change the code to make it more easy to read and understand what is going on. There could also be more refactoring that I missed.

I would also work more on the CSS and add some elaborated styles to the interface.