exports.handler = async function (event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const apiKey = process.env.VITE_APOLLO_API_KEY;
  if (!apiKey) {
    return { statusCode: 200, body: JSON.stringify({ skipped: true }) };
  }

  try {
    const body = JSON.parse(event.body);
    const res = await fetch("https://api.apollo.io/v1/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
        "x-api-key": apiKey,
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return {
      statusCode: res.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
