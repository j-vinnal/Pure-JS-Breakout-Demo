# Pure JS Breakout Demo

This is a pure JavaScript implementation of the classic Breakout game. The game is developed without using the `<canvas>` element, making it a unique learning project. **Work is still in progress.**

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd repository
    ```

2. Run the project with no caching:
    ```sh
    npx http-server -c-1
    ```

## http-server

Files are served from [`./public`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2Fpublic%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Projects\Uni\2024\icd0006-23-24-s\breakout-pure-js\public") if the folder exists, and [`./`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2F%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Projects\Uni\2024\icd0006-23-24-s\breakout-pure-js\") otherwise.

For more information, refer to the [npm http-server documentation](https://www.npmjs.com/package/http-server).

## Game Features

- **Dynamic UI**: The game interface is dynamically created using DOM manipulation.
- **Game Logic**: The game logic is handled in [`public/js/brain.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2Fpublic%2Fjs%2Fbrain.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Projects\Uni\2024\icd0006-23-24-s\breakout-pure-js\public\js\brain.js").
- **UI Rendering**: The UI rendering is managed by the [`UI`](command:_github.copilot.openSymbolFromReferences?%5B%22UI%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CProjects%5C%5CUni%5C%5C2024%5C%5Cicd0006-23-24-s%5C%5Cbreakout-pure-js%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2FREADME.md%22%2C%22path%22%3A%22%2FC%3A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A28%2C%22character%22%3A12%7D%7D%5D%5D "Go to definition") class in [`public/js/ui.js`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FC%3A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2Fpublic%2Fjs%2Fui.js%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%5D "c:\Projects\Uni\2024\icd0006-23-24-s\breakout-pure-js\public\js\ui.js").

## How to Play

- **Start Game**: Press [`P`](command:_github.copilot.openSymbolFromReferences?%5B%22P%22%2C%5B%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CProjects%5C%5CUni%5C%5C2024%5C%5Cicd0006-23-24-s%5C%5Cbreakout-pure-js%5C%5CREADME.md%22%2C%22_sep%22%3A1%2C%22external%22%3A%22file%3A%2F%2F%2Fc%253A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2FREADME.md%22%2C%22path%22%3A%22%2FC%3A%2FProjects%2FUni%2F2024%2Ficd0006-23-24-s%2Fbreakout-pure-js%2FREADME.md%22%2C%22scheme%22%3A%22file%22%7D%2C%22pos%22%3A%7B%22line%22%3A34%2C%22character%22%3A26%7D%7D%5D%5D "Go to definition") to start the game.
- **Pause Game**: Press `O` to pause the game.
- **Game Over**: The game displays a "Game Over" message when you lose.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.