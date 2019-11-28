from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from App import ma
from aluno import Aluno
from estagio_schema import EstagioSchema
from relatorio_schema import RelatoriosSchema
from vagas_schema import VagasSchema


class AlunoSchema(ma.ModelSchema):
    estagios = fields.Nested('EstagiosSchema', many=True)
    relatorios = fields.Nested('RelatoriosSchema', many=True)
    vagasCandidatado = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Aluno
        fields = ('nusp', 'nome', 'cpf', 'curso', 'ano', 'telefone',
                  'email', 'data_nasc', 'endereco', 'curriculo')


aluno_schema = AlunoSchema()
alunos_schema = AlunoSchema(many=True)
