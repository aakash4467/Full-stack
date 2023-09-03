sequenceDiagram
    actor User
    participant browser
    participant server

    User->>+browser: Click's on Save Button

    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note left of server: The HTML and CSS doesnot change or rerender
    Note left of server: By the help of AJAX when clicking submit button the JS handles the event
    Note left of server: JS creates the json format data and sends to the server to create the new note
    server-->>-browser: data.json
    Note right of browser: Sends the created note message

    browser-->>-User: Updates the json data and shows the new note
    

   