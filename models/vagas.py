from dao import db, Base
from datetime import datetime


class Vagas(Base):
    __tablename__ = 'vagas'
    nome = db.Column(db.String(200))
    idVaga = db.Column(db.Integer, primary_key=True)
    area = db.Column(db.String(50))
    beneficios = db.Column(db.text)
    remuneracao = db.Column(db.String(20))
    requisitos = db.Column(db.text)
    etapasProc = db.Column(db.text)
    descricao = db.Column(db.text)
    duracaoMeses = db.Column(db.Integer)
    aprovadaParaDivulgar = db.Column(db.Boolean)
    dataCadastro = db.Column(db.DateTime)
    empresaCnpj = db.Column(db.Integer, db.ForeignKey(
        'empresa.cnpj'), primary_key=True)
    empresa = db.relationship("Empresa", back_populates="vagas")
    alunoNusp = db.Column(db.Integer, db.ForeignKey(
        'aluno.nusp'), primary_key=True)
    aluno = db.relationship("Aluno", back_populates="vagas")

    def __init__(self, nome, idVaga):
        self.nome = nome
        self.idVaga = idVaga
        self.dataCadastro = datetime.now()

    def adicionar(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def encontrar_pelo_nome(cls, nome):
        return cls.query.filter_by(nome=nome)

    @classmethod
    def listar(cls):
        return cls.query.all()

    def remover(self):
        db.session.delete(self)
        db.session.commit()
