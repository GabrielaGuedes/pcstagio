from dao import db, Base
from datetime import datetime


class Estagio(Base):
    __tablename__ = 'estagios'
    nome = db.Column(db.String(200))
    idEstagio = db.Column(db.Integer, primary_key=True)
    inicio = db.Column(db.DateTime)
    fim = db.Column(db.DateTime)
    duracaoMeses = db.Column(db.Integer)
    aprovadoParaIniciar = db.Column(db.Boolean)
    empresaCnpj = db.Column(db.Integer, db.ForeignKey(
        'empresa.cnpj'), primary_key=True)
    empresa = db.relationship("Empresa", back_populates="estagios")
    alunoNusp = db.Column(db.Integer, db.ForeignKey(
        'aluno.nusp'), primary_key=True)
    aluno = db.relationship("Aluno", back_populates="estagios")
    relatorioAluno = db.Column(db.Integer, db.ForeignKey(
        'relatorio.idRelatorio'), primary_key=True)
    relatorioEmpresa = db.Column(db.Integer, db.ForeignKey(
        'relatorio.idRelatorio'), primary_key=True)
    relatorio = db.relationship("Relatorio", back_populates="estagios")

    def __init__(self, nome, idEstagio):
        self.nome = nome
        self.idEstagio = idEstagio
        self.inicio = datetime.now()

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
