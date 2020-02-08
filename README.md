# Four in a Row 

## The game
The game is based upon a play field of the size of 7x6 fields (width x height). Two players will play against each other. Each player will have one color (e.g. blue vs. red). Player will set their tokens alternately, but they can only select the row, the token will then placed upon the current token (or base) of this row. The game ends when one of the players has at least 4 tokens of his color in a stright line.

## Deployment

The idea to build this game on the [Chromia Blockchain](https://chromia.com/) in Rell comes from a workshop during the 'WorkshopWeek' of the HAW Hamburg.

The implementation is currently only temporarily deployed via the [web editor](https://try.chromia.dev/).

## How to play this implementation

There is no Frontend yet. See TODOs

## Development

The Rell code is written in the [web editor](https://try.chromia.dev/). 

## Testing

The Rell code is manually tested in the [web editor](https://try.chromia.dev/)

## TODOs

The TODOs are seperated in three types.
Must-Haves: Things that are important and are done asap.
Should-Haves: Things that are less important and should be done when time is existent.
Nice-To-Haves: Things that are not important and maybe done when time is existent.

- (Must) Build a typescript / javascript frontend which runs upon Node.js
- (Must) Build a integration to a telegram chat bot to play for both players.
- (Should) Build an integration with an telegram bot.
- (Nice) Deploy permamently