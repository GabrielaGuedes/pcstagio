from flask import Flask, request, jsonify
from dao import db, Base
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from marshmallow import fields
import os
import json


app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'pcstagio.sqlite')

# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)


class Aluno(db.Model):
    __tablename__ = 'alunos'
    nusp = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    cpf = db.Column(db.String(30), unique=True)
    curso = db.Column(db.String(30))
    ano = db.Column(db.Integer)
    telefone = db.Column(db.String(10))
    email = db.Column(db.String(40), unique=True)
    data_nasc = db.Column(db.String(10))
    endereco = db.Column(db.String(50))
    curriculo = db.Column(db.String(500))

    # estagios
    # relatorios
    # vagas candidatados

    def __init__(self, nome, nusp):
        self.nome = nome
        self.nusp = nusp

    def to_dict(self):
        response = {
            "nusp": self.nusp,
            "nome": self.nome,
            "cpf": self.cpf,
            "curso": self.curso,
            "ano": self.ano,
            "telefone": self.telefone,
            "email": self.email,
            "data_nasc": self.data_nasc,
            "endereco": self.endereco,
            "curriculo": self.curriculo
        }

        return response


class Empresa(db.Model):
    __tablename__ = 'empresas'
    cnpj = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    email = db.Column(db.String(40), unique=True)
    endereco = db.Column(db.String(50))
    valores = db.Column(db.String(500))
    dataCadastro = db.Column(db.DateTime)

    # estagios
    # relatorios
    # vagas cadastradas

    def __init__(self, nome, cnpj):
        self.nome = nome
        self.cnpj = cnpj
        self.dataCadastro = datetime.now()

    def adicionar(self):
        db.session.add(self)
        db.session.commit()


class Estagio(db.Model):
    __tablename__ = 'estagios'
    nome = db.Column(db.String(200))
    idEstagio = db.Column(db.Integer, primary_key=True)
    inicio = db.Column(db.DateTime)
    fim = db.Column(db.DateTime)
    duracaoMeses = db.Column(db.Integer)
    aprovadoParaIniciar = db.Column(db.Boolean)

    # empresaCnpj = db.Column(db.Integer, db.ForeignKey(
    #     'empresa.cnpj'), primary_key=True)
    # empresa = db.relationship("Empresa", back_populates="estagios")
    # alunoNusp = db.Column(db.Integer, db.ForeignKey(
    #     'aluno.nusp'), primary_key=True)
    # aluno = db.relationship("Aluno", back_populates="estagios")
    # relatorioAluno = db.Column(db.Integer, db.ForeignKey(
    #     'relatorio.idRelatorio'), primary_key=True)
    # relatorioEmpresa = db.Column(db.Integer, db.ForeignKey(
    #     'relatorio.idRelatorio'), primary_key=True)
    # relatorio = db.relationship("Relatorio", back_populates="estagios")

    def __init__(self, nome, idEstagio):
        self.nome = nome
        self.idEstagio = idEstagio
        self.inicio = datetime.now()


class Vagas(db.Model):
    __tablename__ = 'vagas'
    nome = db.Column(db.String(200))
    idVaga = db.Column(db.Integer, primary_key=True)
    area = db.Column(db.String(50))
    beneficios = db.Column(db.String(500))
    remuneracao = db.Column(db.String(20))
    requisitos = db.Column(db.String(500))
    etapasProc = db.Column(db.String(500))
    descricao = db.Column(db.String(500))
    duracaoMeses = db.Column(db.Integer)
    aprovadaParaDivulgar = db.Column(db.Boolean)
    dataCadastro = db.Column(db.DateTime)
    nomeEmpresa = db.Column(db.String(200))

    # empresaCnpj = db.Column(db.Integer, db.ForeignKey(
    #     'empresa.cnpj'), primary_key=True)
    # empresa = db.relationship("Empresa", back_populates="vagas")
    # alunoNusp = db.Column(db.Integer, db.ForeignKey(
    #     'aluno.nusp'), primary_key=True)
    # aluno = db.relationship("Aluno", back_populates="vagas")

    def __init__(self, nome):
        self.nome = nome
        # self.empresa = empresa
        self.dataCadastro = datetime.now()


class Relatorio(db.Model):
    __tablename__ = 'relatorios'
    idRelatorio = db.Column(db.Integer, primary_key=True)
    nota = db.Column(db.Integer)
    dataSubmissao = db.Column(db.DateTime)
    estagioId = db.Column(db.Integer, db.ForeignKey('estagio.idEstagio'))
    # estagio = db.relationship("Estagio", back_populates="relatorios")
    # empresaCnpj = db.Column(db.Integer, db.ForeignKey(
    #     'empresa.cnpj'), primary_key=True)
    # empresa = db.relationship("Empresa", back_populates="relatorios")
    # alunoNusp = db.Column(db.Integer, db.ForeignKey(
    #     'aluno.nusp'), primary_key=True)
    # aluno = db.relationship("Aluno", back_populates="relatorios")

    def __init__(self, idRelatorio):
        self.idRelatorio = idRelatorio
        self.dataSubmissao = datetime.now()


class Professor(db.Model):
    __tablename__ = 'professores'
    cpf = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    email = db.Column(db.String(40), unique=True)
    dataCadastro = db.Column(db.DateTime)

    # estagios
    # estagios pendentes
    # relatorios
    # vagas pendentes

    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf
        self.dataCadastro = datetime.now()


class ProfessorSchema(ma.ModelSchema):
    # estagios = fields.Nested('EstagiosSchema', many=True)
    # estagiosPendentes = fields.Nested('EstagiosSchema', many=True)
    # relatorios = fields.Nested('RelatoriosSchema', many=True)
    # vagasPendentes = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Professor
        fields = ('cpf', 'nome', 'email', 'dataCadastro')


professor_schema = ProfessorSchema()
professor_schema = ProfessorSchema(many=True)


class RelatorioSchema(ma.ModelSchema):
    # empresa = fields.Nested('EmpresaSchema', many=False)
    # aluno = fields.Nested('AlunoSchema', many=False)
    # estagio = fields.Nested('EstagioSchema', many=False)

    class Meta:
        model = Relatorio
        fields = ('idRelatorio', 'nota', 'dataSubmissao', 'estagioId')
        #   'estagio', 'empresaCnpj', 'empresa', 'alunoNusp', 'aluno')


relatorio_schema = RelatorioSchema()
relatorios_schema = RelatorioSchema(many=True)


class VagaSchema(ma.ModelSchema):
    # empresa = fields.Nested('EmpresaSchema', many=False)
    # alunos = fields.Nested('AlunoSchema', many=True)

    class Meta:
        model = Vagas
        fields = ('nome', 'idVaga', 'area', 'beneficios', 'remuneracao', 'requisitos', 'etapasProc', 'descricao',
                  'duracaoMeses', 'aprovadaParaDivulgar', 'dataCadastro')
        #   , 'empresaCnpj', 'empresa', 'alunoNusp', 'aluno')


vaga_schema = VagaSchema()
vagas_schema = VagaSchema(many=True)


class AlunoSchema(ma.ModelSchema):
    # estagios = fields.Nested('EstagiosSchema', many=True)
    # relatorios = fields.Nested('RelatoriosSchema', many=True)
    # vagasCandidatado = fields.Nested('VagasSchema', many=True)

    class Meta:
        fields = ('nusp', 'nome', 'cpf', 'curso', 'ano', 'telefone',
                  'email', 'data_nasc', 'endereco', 'curriculo')


aluno_schema = AlunoSchema()
alunos_schema = AlunoSchema(many=True)


class EstagioSchema(ma.ModelSchema):
    # empresa = fields.Nested('EmpresaSchema', many=False)
    # aluno = fields.Nested('AlunoSchema', many=False)
    # relatorio = fields.Nested('RelatorioSchema', many=False)

    class Meta:
        model = Estagio
        fields = ('nome', 'idEstagio', 'inicio', 'fim',
                  'duracaoMeses', 'aprovadoParaIniciar')
        # 'empresaCnpj','empresa', 'alunoNusp', 'aluno', 'relatorioAluno', 'relatorioEmpresa', 'relatorio')


estagio_schema = EstagioSchema()
estagios_schema = EstagioSchema(many=True)


class EmpresaSchema(ma.ModelSchema):
    # estagios = fields.Nested('EstagiosSchema', many=True)
    # relatorios = fields.Nested('RelatoriosSchema', many=True)
    # vagasCadastradas = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Empresa
        fields = ('cnpj', 'nome', 'email', 'endereco',
                  'valores', 'dataCadastro')


empresa_schema = EmpresaSchema()
empresas_schema = EmpresaSchema(many=True)

# db.create_all()
# aluno_schema = AlunoSchema()
# aluno = Aluno(nome="Chuck Paluhniuk", nusp=10336682)
# db.session.add(aluno)
# db.session.commit()
# aluno_schema.dump(aluno)


@app.route("/aluno", methods=["GET"])
def get_alunos():
    todos_alunos = Aluno.query.all()
    dict_result = {}
    for entry in todos_alunos:
        aluno_dict = entry.to_dict()
        dict_result[aluno_dict['nusp']] = aluno_dict

    return json.loads(json.dumps(dict_result))


@app.route("/aluno/<nusp>", methods=["GET"])
def aluno_detail(nusp):
    aluno = Aluno.query.get(nusp)
    response = aluno.to_dict()
    return response


@app.route("/aluno/<nusp>", methods=["PUT"])
def aluno_update(nusp):
    aluno = Aluno.query.get(nusp)
    aluno.nusp = request.json['nusp']
    aluno.nome = request.json['nome']
    aluno.cpf = request.json['cpf']
    aluno.curso = request.json['curso']
    aluno.ano = request.json['ano']
    aluno.telefone = request.json['telefone']
    aluno.email = request.json['email']
    aluno.data_nasc = request.json['data_nasc']
    aluno.endereco = request.json['endereco']
    aluno.curriculo = request.json['curriculo']

    # aluno.nusp = nusp
    # aluno.nome = nome
    # aluno.cpf = cpf
    # aluno.curso = curso
    # aluno.ano = ano
    # aluno.telefone = telefone
    # aluno.email = email
    # aluno.data_nasc = data_nasc
    # aluno.endereco = endereco
    # aluno.curriculo = curriculo

    # db.session.add(aluno)
    db.session.commit()
    return aluno_schema.jsonify(aluno)


# @app.route("/aluno/estagios/<nusp>", methods=["PUT"])
# def aluno_candidatar(nusp, idVaga):
#     aluno = Aluno.query.get(nusp)
#     vaga = Vagas.query.get(idVaga)

#     vagasCandidato = request.json['vagasCandidato']
#     alunoCandidatado = request.json['aluno']

#     aluno.vagasCandidato = aluno.vagasCandidato.push(vagasCandidato)
#     vaga.alunoCandidatado = vaga.alunoCandidatado.push(alunoCandidatado)

#     db.session.commit()
#     return aluno_schema.jsonify(aluno)


# @app.route("/aluno/relatorio/<nusp>", methods=["PUT"])
# def aluno_enviar_relatorio(nusp, idRelatorio):
#     aluno = Aluno.query.get(nusp)
#     relatorio = request.json['relatorio']

#     aluno.relatorios = aluno.relatorios.push(relatorio)

#     db.session.commit()
#     return aluno_schema.jsonify(aluno)


@app.route("/empresa/<cnpj>", methods=["GET"])
def empresa_detail(cnpj):
    empresa = Empresa.query.get(cnpj)
    return empresa_schema.jsonify(empresa)


@app.route("/empresa/<cnpj>", methods=["PUT"])
def empresa_update(cnpj):
    empresa = Empresa.query.get(cnpj)
    cnpj = request.json['cnpj']
    nome = request.json['nome']
    email = request.json['email']
    endereco = request.json['endereco']
    valores = request.json['valores']

    empresa.cnpj = cnpj
    empresa.nome = nome
    empresa.email = email
    empresa.endereco = endereco
    empresa.valores = valores

    db.session.commit()
    return empresa_schema.jsonify(empresa)


# @app.route("/empresa/relatorio/<cnpj>", methods=["PUT"])
# def empresa_enviar_relatorio(cnpj, idRelatorio):
#     empresa = Empresa.query.get(cnpj)
#     relatorio = request.json['relatorio']

#     empresa.relatorios = empresa.relatorios.push(relatorio)

#     db.session.commit()
#     return empresa_schema.jsonify(empresa)


# @app.route("/empresa/cadastrarVaga/<cnpj>", methods=["POST"])
# def add_vaga(cnpj, nome):
#     empresa = Empresa.query.get(cnpj)
#     nome = request.json['nome']
#     empresaVaga = request.json['empresa']

#     nova_vaga = Vagas(nome, empresaVaga)
#     empresa.vagasCadastradas = empresa.vagasCadastradas.push(nova_vaga)

#     db.session.add(nova_vaga)
#     db.session.commit()

#     return jsonify(nova_vaga)

@app.route("/aluno/criar", methods=["POST"])
def add_aluno():
    nome = request.json['nome']
    nusp = request.json['nusp']

    novo_aluno = Aluno(nome, nusp)

    db.session.add(novo_aluno)

    db.session.commit()
    response = novo_aluno.to_dict()
    return response


# @app.route("/empresa/aprovarRejeitar/<cnpj>/<nusp>", methods=[""])
# def aprovar_rejeitar(cnpj, nusp, idVaga, aprovacao):


if __name__ == '__main__':
    app.run(debug=True)
