from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from public.App import ma
from models.professor import Professor
from schemas.estagio_schema import EstagioSchema
from schemas.relatorio_schema import RelatoriosSchema
from schemas.vagas_schema import VagasSchema


class ProfessorSchema(ma.ModelSchema):
    estagios = fields.Nested('EstagiosSchema', many=True)
    estagiosPendentes = fields.Nested('EstagiosSchema', many=True)
    relatorios = fields.Nested('RelatoriosSchema', many=True)
    vagasPendentes = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Professor
