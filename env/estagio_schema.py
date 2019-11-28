from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from App import ma
from aluno_schema import AlunoSchema
from empresa_schema import EmpresaSchema
from relatorio_schema import RelatorioSchema
from estagio import Estagio


class EstagioSchema(ma.ModelSchema):
    empresa = fields.Nested('EmpresaSchema', many=False)
    aluno = fields.Nested('AlunoSchema', many=False)
    relatorio = fields.Nested('RelatorioSchema', many=False)

    class Meta:
        model = Estagio
        fields = ('nome', 'idEstagio', 'inicio', 'fim', 'duracaoMeses', 'aprovadoParaIniciar', 'empresaCnpj',
                  'empresa', 'alunoNusp', 'aluno', 'relatorioAluno', 'relatorioEmpresa', 'relatorio')


estagio_schema = EstagioSchema()
estagios_schema = EstagioSchema(many=True)
