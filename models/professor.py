from dao import db, Base
from datetime import datetime


class Professor(Base):
    __tablename__ = 'professores'
    cpf = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    email = db.Column(db.string(40), unique=True)
    dataCadastro = db.Column(db.DateTime)

    # listas = db.relationship("ItemLista", back_populates="item")

    # estagios
    # relatorios
    # vagas pendentes

    def __init__(self, nome, cpf):
        self.nome = nome
        self.cpf = cpf
        self.dataCadastro = datetime.now()

    def adicionar(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def listar(cls):
        return cls.query.all()

    def remover(self):
        db.session.delete(self)
        db.session.commit()
