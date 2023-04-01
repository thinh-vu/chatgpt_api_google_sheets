# ChatGPT API for Google Sheets

This repository provides a simple code to implement the ChatGPT API in Google Sheets using Apps Script and a custom function.

## How to use

1. Open a Google Sheets file where you want to run the ChatGPT API.
2. Navigate to **Extensions > Apps Script** to open the Script Editor.
3. Copy the code from `ChatGPT_function.js` file and paste it into the `Code.gs` file in the Script Editor.
![script_editor](https://github.com/thinh-vu/chatgpt_api_google_sheets/blob/main/src/chatgpt_custom_function.png?raw=true)
4. Obtain an OpenAI API key at the [View API keys](https://platform.openai.com/account/api-keys) section and replace the variable labeled as `YOUR_TOKEN_KEY` with this API key.
5. Save the project by clicking the disk icon.
6. Insert the custom function name as `ChatGPT('YOUR PROMPT HERE')`.
![function_demo](https://github.com/thinh-vu/chatgpt_api_google_sheets/blob/main/src/demo_custom_chatGPT_function.png?raw=true)
1. Boom! You're done!
