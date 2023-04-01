const SECRET_KEY = 'YOUR_OPENAI_API_KEY'
const MAX_TOKENS = 800;
const TEMPERATURE = 0.9;

function ChatGPT(prompt="hello world", system='You are a helpful assistant.', max_tokens = MAX_TOKENS, temperature=TEMPERATURE, model = "gpt-3.5-turbo", openai_key=SECRET_KEY) {
  const url = "https://api.openai.com/v1/chat/completions";
  const payload = {
    model: model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt },
    ],
    temperature: temperature,
    max_tokens: max_tokens,
  };
  const options = {
    contentType: "application/json",
    headers: { Authorization: `Bearer ${openai_key}` },
    payload: JSON.stringify(payload),
  };
  const res = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  return res.choices[0].message.content.trim();
}
