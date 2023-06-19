<!doctype html>
<html lang="pt-br">
  <head>

    <title>Bootstrap - formulários</title>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

  </head>

  <body style="margin-bottom: 200px;padding: 16px;">

    
    <!-- formulários 
        classe: form-control-<opcoes>
        opções: sm, lg

        readonly deixa uma formatação diferente, o caixa de texto fica cinza e não permite incluir o texto
    -->
    <form>
        
        <!-- caixas de texto -->
        <div class="form-group">
            <label for="usuario">Usuário</label>
            <input class="form-control form-control-sm" type="text" id="usuario" placeholder="Digite seu usuário">
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input class="form-control form-control-lg" type="email" id="email" placeholder="Digite seu email" readonly>
            <small class="form-text">Email será validado</small>
        </div>

        <!-- select -->
        <div class="form-group">
            <label for="estados">Estados</label>
            <select class="form-control" id="estados">
                <option>Acre</option>
                <option>Alagoas</option>
                <option>Amapá</option>
                <option>...</option>
            </select>
        </div>

        <!-- textarea -->
        <div class="form-group">
            <label for="mensagem">Mensagem</label>
            <textarea class="form-control" id="mensagem" rows="3"></textarea>
        </div>

        <!-- file input -->
        <div class="form-group">
            <label for="arquivo">Arquivo</label>
            <input class="form-control-file" type="file" id="arquivo">
        </div>


        <!-- custom file input -->
        <div class="custom-file">
            <input class="custom-file-input" type="file" id="arquivo">
            <label class="custom-file-label">Selecione arquivo</label>
        </div>
        <br><br>

        <!-- range -->
        <div class="form-group">
            <label id="range">Satisfação</label>
            <input class="custom-range" type="range" 
            id="range" min="1" max="50">
        </div>

        <!-- button -->
        <input class="btn btn-primary" type="submit" value="Salvar">

    </form>
    <br><br>

    <!-- Formulário inline -->
    <form class="form-inline">
        <input class="form-control mr-2" type="text" placeholder="Digite seu usuário">
        <input class="form-control mr-2" type="password" placeholder="Digite sua senha">
        <input class="btn btn-success" type="submit" value="Logar">
    </form>
    <br><br>

    <!-- 
    Validação de formulário 
    Classes: is-valid, is-invalid, invalid-feedback
    -->
    <form>
        
        <div class="form-group">
            <label for="email-usuario">email</label>
            <input class="form-control is-valid" type="text" id="email-usuario" placeholder="Digite seu e-mail">
            <div class="valid-feedback">
                Email Valido
            </div>
        </div>


        <div class="form-group">
            <label for="senha-usuario">Senha</label>
            <input class="form-control is-invalid" type="email" id="senha-usuario" placeholder="Digite sua senha">
            <div class="invalid-feedback">
                Senha inválida
            </div>
        </div>

        <input class="btn btn-primary" type="submit" value="Logar">

    </form>


    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
  </body>
</html>