sequenceDiagram
    actor User
    participant browser
    participant server


    User->>+browser: Clicked the Submit Button
    Note left of browser: After filling the note input field
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    Note left of server : note: hello

    server-->>-browser: Status Code: 302 Found 
    Note right of browser: URL Redirect to https://studies.cs.helsinki.fi/exampleapp/notes 
    
    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    Note left of server: Reloaded page because of the 302 status
    server-->>-browser: HTML Document

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server-->>-browser: The CSS File

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    server-->>-browser: The JavaScript File
    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>+server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    server-->>-browser: {{"content": "Hello from Nepal", "date": "2023-09-01"}}
    Note right of browser: The browser executes the callback function that renders the notes

    browser-->>-User: Reloaded (https://studies.cs.helsinki.fi/exampleapp/notes)
    Note right of User: Reloaded page with the new added note