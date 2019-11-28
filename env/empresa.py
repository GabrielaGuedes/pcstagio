from dao import db, Base
from datetime import datetime


class Empresa(Base):
    __tablename__ = 'empresas'
    cnpj = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(200))
    email = db.Column(db.string(40), unique=True)
    endereco = db.Column(db.string(50))
    valores = db.Column(db.text)
    dataCadastro = db.Column(db.DateTime)

    # listas = db.relationship("ItemLista", back_populates="item")

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

    @classmethod
    def encontrar_pelo_cnpj(cls, _cnpj):
        return cls.query.filter_by(cnpj=_cnpj).first()

    @classmethod
    def encontrar_pelo_nome(cls, nome):
        return cls.query.filter_by(nome=nome).first()

    @classmethod
    def listar(cls):
        return cls.query.all()

    def remover(self):
        db.session.delete(self)
        db.session.commit()
