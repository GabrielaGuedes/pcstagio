from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from public.App import ma
from models.empresa import Empresa
from schemas.estagio_schema import EstagioSchema
from schemas.relatorio_schema import RelatoriosSchema
from schemas.vagas_schema import VagasSchema


class EmpresaSchema(ma.ModelSchema):
    estagios = fields.Nested('EstagiosSchema', many=True)
    relatorios = fields.Nested('RelatoriosSchema', many=True)
    vagasCadastradas = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Empresa
