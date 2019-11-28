from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from schemas.aluno_schema import AlunoSchema, alunos_schema, aluno_schema
from models.aluno import Aluno
from models.empresa import Empresa
from models.vagas import Vagas
from schemas.empresa_schema import EmpresaSchema, empresas_schema, empresa_schema
import os

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + \
    os.path.join(basedir, 'pcstagio.sqlite')

# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy(app)
ma = Marshmallow(app)


# db.create_all()
# aluno_schema = AlunoSchema()
# aluno = Aluno(nome="Chuck Paluhniuk", nusp=10336682)
# db.session.add(aluno)
# db.session.commit()
# aluno_schema.dump(aluno)

@app.route("/aluno", methods=["GET"])
def get_alunos():
    todos_alunos = Aluno.query.all()
    result = alunos_schema.dump(todos_alunos)
    return jsonify(result.data)


@app.route("/aluno/<nusp>", methods=["GET"])
def aluno_detail(nusp):
    aluno = Aluno.query.get(nusp)
    return aluno_schema.jsonify(aluno)


@app.route("/aluno/<nusp>", methods=["PUT"])
def aluno_update(nusp):
    aluno = Aluno.query.get(nusp)
    nusp = request.json['nusp']
    nome = request.json['nome']
    cpf = request.json['cpf']
    curso = request.json['curso']
    ano = request.json['ano']
    telefone = request.json['telefone']
    email = request.json['email']
    data_nasc = request.json['data_nasc']
    endereco = request.json['endereco']
    curriculo = request.json['curriculo']

    aluno.nusp = nusp
    aluno.nome = nome
    aluno.cpf = cpf
    aluno.curso = curso
    aluno.ano = ano
    aluno.telefone = telefone
    aluno.email = email
    aluno.data_nasc = data_nasc
    aluno.endereco = endereco
    aluno.curriculo = curriculo

    db.session.commit()
    return aluno_schema.jsonify(aluno)


@app.route("/aluno/estagios/<nusp>", methods=["PUT"])
def aluno_candidatar(nusp, idVaga):
    aluno = Aluno.query.get(nusp)
    vaga = Vagas.query.get(idVaga)

    vagasCandidato = request.json['vagasCandidato']
    alunoCandidatado = request.json['aluno']

    aluno.vagasCandidato = aluno.vagasCandidato.push(vagasCandidato)
    vaga.alunoCandidatado = vaga.alunoCandidatado.push(alunoCandidatado)

    db.session.commit()
    return aluno_schema.jsonify(aluno)


@app.route("/aluno/relatorio/<nusp>", methods=["PUT"])
def aluno_enviar_relatorio(nusp, idRelatorio):
    aluno = Aluno.query.get(nusp)
    relatorio = request.json['relatorio']

    aluno.relatorios = aluno.relatorios.push(relatorio)

    db.session.commit()
    return aluno_schema.jsonify(aluno)


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


@app.route("/empresa/relatorio/<cnpj>", methods=["PUT"])
def empresa_enviar_relatorio(cnpj, idRelatorio):
    empresa = Empresa.query.get(cnpj)
    relatorio = request.json['relatorio']

    empresa.relatorios = empresa.relatorios.push(relatorio)

    db.session.commit()
    return empresa_schema.jsonify(empresa)


@app.route("/empresa/cadastrarVaga/<cnpj>", methods=["POST"])
def add_vaga(cnpj, nome):
    empresa = Empresa.query.get(cnpj)
    nome = request.json['nome']
    empresaVaga = request.json['empresa']

    nova_vaga = Vagas(nome, empresaVaga)
    empresa.vagasCadastradas = empresa.vagasCadastradas.push(nova_vaga)

    db.session.add(nova_vaga)
    db.session.commit()

    return jsonify(nova_vaga)


# @app.route("/empresa/aprovarRejeitar/<cnpj>/<nusp>", methods=[""])
# def aprovar_rejeitar(cnpj, nusp, idVaga, aprovacao):


if __name__ == '__main__':
    app.run(debug=True)
