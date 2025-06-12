# Secret Message Decoder Challenge

A web-based CTF challenge where participants need to find a hidden flag in the source code.

## Description

This challenge presents a simple message decoder interface. The flag is hidden somewhere in the source code. Can you find it?

## Running the Challenge

### Using Railway

1. Fork this repository
2. Create a new project on Railway
3. Connect your forked repository
4. Railway will automatically detect the configuration and deploy the application
5. Access the challenge through the provided Railway URL

### Using Docker

1. Build the Docker image:
```bash
docker build -t secret-message-decoder .
```

2. Run the container:
```bash
docker run -d -p 8080:80 secret-message-decoder
```

3. Access the challenge at `http://localhost:8080`

### Without Docker

Simply open the `index.html` file in a web browser.

## Challenge Details

- The challenge is a simple web application that appears to decode messages
- The flag is hidden in the source code
- Participants need to inspect the page source to find the flag
- The flag format is: `CIT{...}`

## Solution

The flag is hidden in the HTML source code as a comment. Participants need to:
1. Right-click on the page
2. Select "View Page Source"
3. Look for the HTML comment containing the flag 