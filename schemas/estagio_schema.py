from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from public.App import ma
from schemas.aluno_schema import AlunoSchema
from schemas.empresa_schema import EmpresaSchema
from schemas.relatorio_schema import RelatorioSchema
from models.estagio import Estagio


class EstagioSchema(ma.ModelSchema):
    empresa = fields.Nested('EmpresaSchema', many=False)
    aluno = fields.Nested('AlunoSchema', many=False)
    relatorio = fields.Nested('RelatorioSchema', many=False)

    class Meta:
        model = Estagio
