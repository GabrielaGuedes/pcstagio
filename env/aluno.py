from dao import db, Base
from datetime import datetime

class Aluno(Base):
    __tablename__ = 'alunos'
    nusp = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    cpf = db.Column(db.String(30), unique=True)
    curso = db.Column(db.String(30))
    ano = db.Column(db.Integer)
    telefone = db.Column(db.string(10))
    email = db.Column(db.string(40), unique=True)
    data_nasc = db.Column(db.DateTime)
    endereco = db.Column(db.string(50))
    curriculo = db.Column(db.text)

    # listas = db.relationship("ItemLista", back_populates="item")

    # estagios
    # relatorios
    # vagas candidatados

    def __init__(self, nome, nusp):
        self.nome = nome
        self.nusp = nusp

    def adicionar(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def encontrar_aluno_pelo_nusp(cls, _nusp):
        return cls.query("alunos").filter_by(nusp=_nusp).first()

    @classmethod
    def encontrar_aluno_pelo_nome(cls, nome):
        return cls.query("alunos").filter_by(nome=nome).first()

    @classmethod
    def listar(cls):
        return cls.query("alunos").all()

    def update_perfil(self, nome, nusp, cpf, curso, ano, telefone, email, data_nasc, endereco, curriculo):
        self.nome=nome
        self.nusp=nusp
        self.cpf=cpf
        self.curso=curso
        self.ano=ano
        self.telefone=telefone
        self.email=email
        self.data_nasc=data_nas
        self.endereco=endereco
        self.curriculo=curriculo

    def remover(self):
        db.session.delete(self)
        db.session.commit()
