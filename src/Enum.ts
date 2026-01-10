enum CardinalDirections {
    North,
    East,
    South,
    West
}
let currentDirection = CardinalDirections.East;
console.log(currentDirection);

enum CardinalDirections2 {
    North,
    East = 5,
    South,
    West
}

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

enum CardinalDirections3 {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
console.log(CardinalDirections3.East);