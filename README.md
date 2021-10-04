# Installation steps

## Install dependencies

```
npm i
```
## Install ts-node and typescript to run script
```
npm i -g ts-node typescript
```

# Configuration

## Add .env file with required variables

There are 2 variables to be configured:
- `RANDOM_FACTOR`: It is a number which helps to determine the range of the random generated measurement. As the number becomes bigger, it will be easier to get higher deviations.
- `LAST_MEASUREMENTS_NUMBER`: It determines the number of measurements we will take into account to measure the DevOutTotal metric. Default is 10.

# Execution
```
npx ts-node index.ts
```