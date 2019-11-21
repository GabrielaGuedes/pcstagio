from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from public.App import ma
from schemas.estagio_schema import EstagioSchema
from schemas.aluno_schema import AlunoSchema
from schemas.empresa_schema import EmpresaSchema
from models.relatorio import Relatorio


class RelatorioSchema(ma.ModelSchema):
    empresa = fields.Nested('EmpresaSchema', many=False)
    aluno = fields.Nested('AlunoSchema', many=False)
    estagio = fields.Nested('EstagioSchema', many=False)

    class Meta:
        model = Relatorio
