from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from App import ma
from professor import Professor
from estagio_schema import EstagioSchema
from relatorio_schema import RelatoriosSchema
from vagas_schema import VagasSchema


class ProfessorSchema(ma.ModelSchema):
    estagios = fields.Nested('EstagiosSchema', many=True)
    estagiosPendentes = fields.Nested('EstagiosSchema', many=True)
    relatorios = fields.Nested('RelatoriosSchema', many=True)
    vagasPendentes = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Professor
        fields = ('cpf', 'nome', 'email', 'dataCadastro')


professor_schema = ProfessorSchema()
professor_schema = ProfessorSchema(many=True)
