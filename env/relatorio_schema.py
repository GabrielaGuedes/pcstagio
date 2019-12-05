from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from App import ma
from estagio_schema import EstagioSchema
from aluno_schema import AlunoSchema
from empresa_schema import EmpresaSchema
from relatorio import Relatorio


class RelatorioSchema(ma.ModelSchema):
    empresa = fields.Nested('EmpresaSchema', many=False)
    aluno = fields.Nested('AlunoSchema', many=False)
    estagio = fields.Nested('EstagioSchema', many=False)

    class Meta:
        model = Relatorio
        fields = ('idRelatorio', 'nota', 'dataSubmissao', 'estagioId',
                  'estagio', 'empresaCnpj', 'empresa', 'alunoNusp', 'aluno')


relatorio_schema = RelatorioSchema()
relatorios_schema = RelatorioSchema(many=True)
