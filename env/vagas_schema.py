from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from App import ma
from aluno_schema import AlunoSchema
from empresa_schema import EmpresaSchema
from vagas import Vagas


class VagaSchema(ma.ModelSchema):
    empresa = fields.Nested('EmpresaSchema', many=False)
    alunos = fields.Nested('AlunoSchema', many=True)

    class Meta:
        model = Vagas
        fields = ('nome', 'idVaga', 'area', 'beneficios', 'remuneracao', 'requisitos', 'etapasProc', 'descricao',
                  'duracaoMeses', 'aprovadaParaDivulgar', 'dataCadastro', 'empresaCnpj', 'empresa', 'alunoNusp', 'aluno')


vaga_schema = VagaSchema()
vagas_schema = VagaSchema(many=True)
