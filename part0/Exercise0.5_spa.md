sequenceDiagram
    actor User
    participant browser
    participant server

    User->>+browser: Visit's https://studies.cs.helsinki.fi/exampleapp/spa

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    server-->>-browser: HTML Document

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>-browser: CSS File

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    server-->>-browser: JavaScript File
    browser-->>-User: Renders HTML and CSS

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Note left of server: AJAX request for the json data
    server-->>-browser: [{"content": "Hello World", "date": "2023-09-02, ...}]
    Note right of browser: Gives the updated json data
    browser-->>User: Renders the json data as notes in the HTML list form