from app import app
@app.route('/')
@app.route('/index')
def index():
    user = {'username': 'Miguel'}
    return '''
    <Fragment>
      <center
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column"
        }}
      >
        <img src={pcstagiologo} alt="logo" width="800" />
        <div
          style={{
            color: "#6314A0",
            fontSize: 50,
            fontWeight: 600,
            marginBottom: 50
          }}
        >
          O mais novo portal do PCS!
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginRight: 50
            }}
          >
            <div
              style={{
                backgroundColor: "#99D5CA",
                color: "#184932",
                borderRadius: 4,
                fontSize: 40,
                padding: "0px 20px",
                marginBottom: 20,
                marginRight: 100,
                marginLeft: 100
              }}
            >
              Para empresas
            </div>
            <Card
              style={{
                borderRadius: 4,
                height: "100%",
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <h1>- Cadastre suas vagas online</h1>
              <img src={example1} width="80%" />

              <h1 style={{ marginTop: 30 }}>
                - Encontre os alunos ideais <br />
                para sua vaga de estágio
              </h1>
              <img src={example2} width="80%" />

              <h1 style={{ marginTop: 30 }}>- Veja perfil dos alunos</h1>
              <img src={example3} width="80%" />
            </Card>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              marginLeft: 50
            }}
          >
            <div
              style={{
                backgroundColor: "#99D5CA",
                color: "#184932",
                borderRadius: 4,
                fontSize: 40,
                padding: "0px 40px",
                marginBottom: 20,
                marginRight: 100,
                marginLeft: 100
              }}
            >
              Para alunos
            </div>
            <Card
              style={{
                borderRadius: 4,
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
              }}
            >
              <h1>
                - Encontre vagas de estágio e se <br />
                candidate
              </h1>
              <img src={example4} width="80%" />

              <h1 style={{ marginTop: 30 }}>- Cadastre seu currículo</h1>
              <img src={example5} width="80%" />

              <h1 style={{ marginTop: 30 }}>- Veja perfil das empresas</h1>
              <img src={example6} width="80%" />
            </Card>
          </div>
        </div>
        <Link to="/cadastro">
          <a
            className="signinbutton"
            style={{
              margin: "70px 500px 100px",
              backgroundColor: "#6314A0",
              fontWeight: "700",
              fontSize: "50px",
              textColor: "#ffffff",
              borderRadius: 4
            }}
          >
            Se cadastrar
          </a>
        </Link>
      </center>
    </Fragment>
'''