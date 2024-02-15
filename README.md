# Test Drive

Built by Jared Hettinger

This is a testing project for experimenting with [React-Joyride](https://github.com/gilbarbara/react-joyride) for possible implementation on [¡Lenguau!](https://lenguau.com)

React Joyride docs: https://docs.react-joyride.com

## Tour Samples and Notes

### Button Start Continuous

This tour starts when the user clicks the `Start Tour` button. This tour is continuous which means that when the user clicks `Next` the tooltip will automatically highlight the next step. The user still has the option to interrupt the tour by clicking the X or clicking the dimmed area around the tooltip. Once the user reaches the last step of the tour they can restart the tour by clicking the `Start Tour` button again.

Two issues with the current implementation:

- To effectively reset the tour both the `continuous` and `run` props must be set to `false` before setting them back to `true`. This is done via Joyride's callback function and checking the status of the tour.
- The modal displays as expected the first time the tour starts. If a user restarts the tour after the first time, the initial modal does not appear over a dimmed background. The next step does not begin until the user clicks on a blinking dot. At this point the tour continues as expected.
- The `Start Tour` button does nothing if the user is mid-tour. (This is an improvement I should look into.)

## Run

1. In one terminal run `npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
1. In a second terminal run `npm start`
