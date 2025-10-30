// Vercel Serverless Function to handle Substack subscriptions
// This bypasses CORS issues by making the API call server-side

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, firstName, lastName } = req.body;

  // Validate email
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const SUBSTACK_URL = 'https://thesportsstack.substack.com';

  try {
    // Make the subscription request to Substack
    const response = await fetch(`${SUBSTACK_URL}/api/v1/free`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        first_url: req.headers.referer || '',
        first_referrer: req.headers.referer || '',
        current_url: req.headers.referer || '',
      }),
    });

    if (response.ok) {
      // Log subscription for your records (optional)
      console.log(`New subscriber: ${email} (${firstName} ${lastName})`);

      return res.status(200).json({
        success: true,
        message: 'Successfully subscribed to The Sports Stack!'
      });
    } else {
      const errorText = await response.text();
      console.error('Substack API error:', errorText);

      return res.status(response.status).json({
        success: false,
        error: 'Failed to subscribe to Substack',
        details: errorText
      });
    }
  } catch (error) {
    console.error('Server error:', error);

    return res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message
    });
  }
}
