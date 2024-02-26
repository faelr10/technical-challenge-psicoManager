<!DOCTYPE html>
<html>

<head>
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.4.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="\css\login.css">

</head>

<body>
    <div class="container">
        <div class="card">
            <div class="card-header">Preencha suas informações</div>
            <div class="card-body">
                <form id="formLogin" method="POST" action="{{ route('processLogin') }}">
                    @csrf
                    <div class="form-group">
                        <label for="nome">Nome</label>
                        <input id="nome" type="text" class="form-control @error('nome') is-invalid @enderror" name="nome" required autofocus>
                        @error('nome')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                    <div class="form-group">
                        <div>
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>

</html>