    // Object to store mapping between short codes and long URLs
    const urlMapping = {};

    // Function to generate a random short code
    function generateShortCode() {
      return Math.random().toString(36).substr(2, 6); // Change the length if needed
    }

    // Function to encode (shorten) a URL
    function encodeURL(longUrl) {
      const shortCode = generateShortCode();
      urlMapping[shortCode] = longUrl;
      return window.location.origin + '/redirect?code=' + shortCode;
    }

    // Function to decode (redirect) a URL
    function decodeURL(shortUrl) {
      const params = new URLSearchParams(shortUrl.split('?')[1]);
      const shortCode = params.get('code');
      const longUrl = urlMapping[shortCode];
      if (longUrl) {
        window.location.href = longUrl;
      } else {
        alert('URL not found!');
      }
    }

    // Event listener for form submission
    document.getElementById('urlForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const longUrl = document.getElementById('longUrl').value;
      const shortUrl = encodeURL(longUrl);
      document.getElementById('shortUrl').value = shortUrl;
      document.getElementById('shortUrlOutput').style.display = 'block';
    });