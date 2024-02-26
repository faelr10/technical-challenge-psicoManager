<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PsicoManager - Chat</title>
    <link rel="stylesheet" href="\css\chat.css">

    <script src="https://cdn.socket.io/4.7.4/socket.io.min.js" integrity="sha384-Gr6Lu2Ajx28mzwyVR8CFkULdCU7kMlZ9UthllibdOSo6qAiN+yXNHqtgdTvFXMT4" crossorigin="anonymous"></script>
</head>

<body>

    <div id="page-chat">
        <div id="chat-box">
            <h1>PsicoManager - {{$valor}}</h1>
            <div id="chat-container"></div>
            <div id="input-container">
                <input type="text" id="message-input" placeholder="Digite sua mensagem...">
                <button id="send-button">Enviar</button>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script>
        window.socketUrl = "{{ env('SOCKET_URL') }}";
    </script>
    <script src="\js\chat.js"></script>

</body>

</html>