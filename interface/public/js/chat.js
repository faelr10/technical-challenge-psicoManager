$(function() {
    let socket = io(window.socketUrl);
    const urlParams = new URLSearchParams(window.location.search);
    const user = urlParams.get('user') || 'defaultUser';

    socket.emit("returnAllMessages", user);
    socket.on(`allMsgToClient:${user}`, (msg) => {
        arrayMsg = JSON.parse(msg);

        let chatContainer = $('#chat-container');
        chatContainer.empty();

        //itera as mensagens no container
        arrayMsg.forEach((element) => {
            let content = `<div class="message ${element.sender === user ? 'sender' : 'receiver'}">
                                <div class="sender-name">${element.sender}</div>
                                <div>${element.message}</div>
                           </div>`;
            chatContainer.append(content);
        });
        
        //exibir sempre a ultima mensagem
        chatContainer.scrollTop(chatContainer.prop("scrollHeight"));

    });

    //avisa server que um novo usuario entrou na conversa
    socket.emit("newUserConnect", user);
    
    //nova mensagem recebida
    socket.on("msgToClient", (msg) => {
        msgParse = JSON.parse(msg);
        let content = `<div class="message ${msgParse.sender === user ? 'sender' : 'receiver'}">
                            <div class="sender-name">${msgParse.sender}</div>
                            <div>${msgParse.message}</div>
                       </div>`;
        $('#chat-container').append(content);
        $('#chat-container').scrollTop($('#chat-container').prop("scrollHeight"));
    });

    //notifica novo membro na conversa
    socket.on("notifyNewConnect", (msg) => {
        console.log(msg);
        let content = `<div class="message-enter">${msg}</div>`;
    
        $('#chat-container').append(content);
        $('#chat-container').scrollTop($('#chat-container').prop("scrollHeight"));
    });

    socket.on("disconnect", () => {
        console.log("Desconectado do servidor");
    });

    //configura o botão click para envio de mensagem
    $('#send-button').click(() => {
        const message = $('#message-input').val();
        const newMessage = {
            sender: user,
            message: message,
        };
        socket.emit("newMessage", newMessage);
        $('#message-input').val('');
    });

    //configura a tecla Enter para confirmção do input
    $('#message-input').keypress((e) => {
        if (e.which === 13) {
            $('#send-button').click();
        }
    });

});
