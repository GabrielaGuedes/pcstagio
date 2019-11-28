from marshmallow_sqlalchemy import ModelSchema
from marshmallow import fields
from App import ma
from empresa import Empresa
from estagio_schema import EstagioSchema
from relatorio_schema import RelatoriosSchema
from vagas_schema import VagasSchema


class EmpresaSchema(ma.ModelSchema):
    estagios = fields.Nested('EstagiosSchema', many=True)
    relatorios = fields.Nested('RelatoriosSchema', many=True)
    vagasCadastradas = fields.Nested('VagasSchema', many=True)

    class Meta:
        model = Empresa
        fields = ('cnpj', 'nome', 'email', 'endereco',
                  'valores', 'dataCadastro')


empresa_schema = EmpresaSchema()
empresas_schema = EmpresaSchema(many=True)
