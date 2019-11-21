from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from public.App import ma
from schemas.aluno_schema import AlunoSchema
from schemas.empresa_schema import EmpresaSchema
from models.vagas import Vagas


class VagasSchema(ma.ModelSchema):
    empresa = fields.Nested('EmpresaSchema', many=False)
    alunos = fields.Nested('AlunoSchema', many=True)

    class Meta:
        model = Vagas
