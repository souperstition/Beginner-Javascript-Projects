const { 
    Engine, 
    Render, 
    Runner, 
    World, 
    Bodies, 
    Body,
    Events
} = Matter;

const width = window.innerWidth;
const height = window.innerHeight;
const cellsHorizontal = 14;
const cellsVertical = 10;
const unitLengthX = width / cellsHorizontal;
const unitLengthY = height / cellsVertical;

const engine = Engine.create();
engine.world.gravity.y = 0;
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: false,
        width,
        height,
        background: 'linear-gradient(90deg, rgba(255,0,0,0.4) 0%, rgba(255,154,0,0.4) 10%, rgba(208,222,33,0.4) 20%, rgba(79,220,74,0.4) 30%, rgba(63,218,216,0.4) 40%, rgba(47,201,226,0.4) 50%, rgba(28,127,238,0.4) 60%, rgba(95,21,242,0.4) 70%, rgba(186,12,248,0.4) 80%, rgba(251,7,217,0.4) 90%, rgba(255,0,0,0.4) 100%)'
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);


// Walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 2, {
        isStatic: true,
        render: {
            fillStyle: 'rgb(236, 0, 130)'
        }
    }),
    Bodies.rectangle(width / 2, height, width, 2, {
        isStatic: true,
        render: {
            fillStyle: 'rgb(236, 0, 130)'
        }
    }),
    Bodies.rectangle(0, height / 2, 2, height, {
        isStatic: true,
        render: {
            fillStyle: 'rgb(236, 0, 130)'
        }
    }),
    Bodies.rectangle(width, height / 2, 2, height, {
        isStatic: true,
        render: {
            fillStyle: 'rgb(236, 0, 130)'
        }
    })
];
World.add(world, walls);

// Maze generation
// instead of using for loop, use .fill and .map 

const shuffle = (arr) => {
    let counter = arr.length;
    while (counter > 0) {
        const index = Math.floor(Math.random() * counter);

        counter--;

        const temp = arr[counter];
        arr[counter] = arr[index];
        arr[index] = temp;
    }

    return arr;
};

const grid = Array(cellsVertical)
    .fill(null)
    .map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical)
    .fill(null)
    .map(() => Array(cellsHorizontal - 1).fill(false));

const horizontals = Array(cellsVertical - 1)
    .fill(null)
    .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
    // if already visited, return
    if (grid[row][column]) {
        return;
    }
    // mark as being visited
    grid[row][column] = true;
    // assemble list of neighbors
    const neighbors = shuffle([
        [row -1, column, 'up'],
        [row, column + 1, 'right'],
        [row + 1, column, 'down'],
        [row, column - 1, 'left']
    ]);
    // for each neighbor check:
    for (let neighbor of neighbors) {
        const [nextRow, nextColumn, direction] = neighbor;
        // is out of bounds? -> skip
        if (nextRow < 0 || nextRow >= cellsVertical || nextColumn < 0 || nextColumn >= cellsHorizontal) {
            continue;
        }
        // already visited? -> skip
        if (grid[nextRow][nextColumn]) {
            continue;
        }
        // remove wall from either h/v array
        if (direction === 'left') {
            verticals[row][column-1] = true;
        } else if (direction === 'right') {
            verticals[row][column] = true;
        } else if (direction === 'up') {
            horizontals[row -1][column] = true;
        } else if (direction === 'down') {
            horizontals[row][column] = true;
        }

        stepThroughCell(nextRow, nextColumn);
    }
};

stepThroughCell(startRow, startColumn);

horizontals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX / 2,
            rowIndex * unitLengthY + unitLengthY,
            unitLengthX,
            2,
            {
                isStatic: true,
                render: {
                    fillStyle: 'pink'
                },
                label: 'wall'
            }
        );
        World.add(world, wall);
    });
});

verticals.forEach((row, rowIndex) => {
    row.forEach((open, columnIndex) => {
        if (open) {
            return;
        }

        const wall = Bodies.rectangle(
            columnIndex * unitLengthX + unitLengthX,
            rowIndex * unitLengthY + unitLengthY / 2,
            2,
            unitLengthY,
            {
                isStatic: true,
                render: {
                    fillStyle: 'pink',
                },
                label: 'wall'
            }
        );
        World.add(world, wall);
    });
});

// Goal
const goal = Bodies.rectangle(
    width - unitLengthX /2,
    height - unitLengthY /2,
    unitLengthX * .7,
    unitLengthY * .7,
    {
        isStatic: true,
        render: {
            fillStyle: 'rgb(13, 192, 183)',
            lineWidth: 5,
            strokeStyle: 'rgb(15, 107, 134)'
        },
        label: 'goal'
    }
);
World.add(world, goal);

// Ball
const ballRadius = Math.min(unitLengthX, unitLengthY) / 4;
const ball = Bodies.circle(
    unitLengthX / 2,
    unitLengthY / 2,
    ballRadius,
    {
        render: {
            fillStyle: 'rgb(7, 205, 255)',
            lineWidth: 5,
            strokeStyle: 'rgb(5, 96, 119)'
        },
        label: 'ball'
    }
);
World.add(world, ball);

document.addEventListener('keydown', event => {
    const { x, y } = ball.velocity;

    if(event.key === 'w') {
        Body.setVelocity(ball, { x, y: Math.max(y - 5, -8) });
    }
    if(event.key === 'd') {
        Body.setVelocity(ball, { x: Math.min(x + 5, 8), y });
    }
    if(event.key === 's') {
        Body.setVelocity(ball, { x, y: Math.min(y + 5, 8) });
    }
    if(event.key === 'a') {
        Body.setVelocity(ball, { x: Math.max(x - 5, -8), y });
    }
});

// Win Condition
Events.on(engine, 'collisionStart', event => {
    event.pairs.forEach(collision => {
        const labels = ['ball', 'goal'];

        if ( labels.includes(collision.bodyA.label) && labels.includes(collision.bodyB.label)) {
            document.querySelector('.winner').classList.remove('hidden');
            world.gravity.y = 1;
            world.bodies.forEach(body => {
                if (body.label === 'wall') {
                    Body.setStatic(body, false);
                }
            });
        }
    });
});