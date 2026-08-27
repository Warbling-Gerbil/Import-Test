export default async function handler(req, res) {
  const targetUrl = 'https://www.crazygames.com';

  try {
    // Fetch the target site from Vercel's cloud servers (outside the church network)
    const response = await fetch(targetUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });

    const html = await response.text();

    // Send the retrieved HTML back to your browser
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(html);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch target site', details: error.message });
  }
}
