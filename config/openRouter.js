export const generateResponse = async (prompt) => {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'deepseek/deepseek-chat',
            messages: [
                {
                    role: "system",
                    content: "You are a strict JSON-only generator. Never include introductory text, explanations, or markdown code blocks (like ```json). Respond with a single, pure JSON object and nothing else."
                },
                {
                    role: 'user',
                    content: prompt,
                },
            ],
            temperature: 0.2
        }),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error("opnerouter err" + error)
    }

    const data = await res.json();
    return data.choices[0].message.content

}