# [bug-fixar(Live)](https://bug-fixar.vercel.app/)
# Bug Fixer ReactJS App with Tailwind CSS 

Welcome to the Bug Fixer ReactJS App with Tailwind CSS! This web application uses ReactJS, Tailwind CSS, and Axios to allow users to input code and issues and then find possible bugs using Open AI's API. 

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To use this app locally on your machine, follow these steps:

1. Clone or download this repository to your local machine.
2. Open your terminal and navigate to the project directory.
3. Run `npm install` to install all the required dependencies.
4. Create a `.env.local` file in the root of the project directory with the following content:
   
   ```REACT_APP_OPENAI_API_KEY=<your-openai-api-key>```
   
   Replace `<your-openai-api-key>` with your own Open AI API key. If you don't have one yet, you can get one by signing up at [Open AI](https://openai.com/).
5. Run `npm start` to start the development server.

## Usage

To use the Bug Fixer app, follow these steps:

1. Open your web browser and go to http://localhost:3000/.
2. Enter your code into the Code Input field.
3. Enter your issue into the Issue Input field.
4. Click the 'Submit' button.
5. Wait for the Open AI API to search for potential bugs in your code.
6. View the results of the bug search in the Results section.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/<feature-name>`) and make your desired changes.
3. Commit your changes (`git commit -m "Add feature X"`).
4. Push to the branch (`git push origin feature/<feature-name>`).
5. Open a pull request and describe your changes.

## License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).


## Acknowledgements
[OpenAI API]()
[ReactJS Documentation]()
[Axios Documentation]()
[Tailwind CSS Documentation]()
