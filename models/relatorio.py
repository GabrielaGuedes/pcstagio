from dao import db, Base
from datetime import datetime


class Relatorio(Base):
    __tablename__ = 'relatorio'
    idRelatorio = db.Column(db.Integer, primary_key=True)
    nota = db.Column(db.Integer)
    dataSubmissao = db.Column(db.DateTime)
    estagioId = db.Column(db.Integer, db.ForeignKey('estagio.idEstagio'))
    estagio = db.relationship("Estagio", back_populates="relatorio")
    empresaCnpj = db.Column(db.Integer, db.ForeignKey(
        'empresa.cnpj'), primary_key=True)
    empresa = db.relationship("Empresa", back_populates="estagio")
    alunoNusp = db.Column(db.Integer, db.ForeignKey(
        'aluno.nusp'), primary_key=True)
    aluno = db.relationship("Aluno", back_populates="estagio")

    def __init__(self, idRelatorio):
        self.idRelatorio = idRelatorio
        self.dataSubmissao = datetime.now()

    def adicionar(self):
        db.session.add(self)
        db.session.commit()

    @classmethod
    def listar(cls):
        return cls.query.all()

    def remover(self):
        db.session.delete(self)
        db.session.commit()
