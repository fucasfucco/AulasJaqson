import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';


const AtividadeList = (props) => {

    const template = (rowData) => {
        return (<div> <Button className="p-button-raised p-button-danger" onClick={() => props.editar(rowData._id)} className="btn btn-warning btn-sm"> Editar </Button>
            <Button onClick={() => props.excluir(rowData._id)} className="btn btn-danger btn-sm"> Excluir </Button>
        </div>
        )
    }

    return (
        <div className="App">
            <h4>Listagem de Atividadees</h4>
            <Button
                className="btn btn-primary btn-sm"
                onClick={props.onClickAtualizar}
            >
                Atualizar Lista
            </Button>
            <Button className="btn btn-success btn-sm" onClick={props.inserir}>
                Inserir
            </Button>


            <DataTable value={props.atividades} paginator responsiveLayout="scroll" rows={5}
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {last} atividadees de {totalRecords}" rowsPerPageOptions={[10, 20, 50]}
                selectionMode="single" selection={props.atividade} onSelectionChange={e => props.setAtividade(e.value)} dataKey="_id" emptyMessage="Nenhum atividade encontrado">
                <Column field="_id" header="Id" sortable ></Column>
                <Column field="titulo" header="Titulo" sortable filter></Column>
                <Column field="descricao" header="Descrição" sortable filter></Column>
                <Column field="status" header="Status" sortable filter></Column>
                <Column field="prazo" header="Prazo" sortable filter></Column>
                <Column field="agendaInicio" header="Inicio da Agenda" sortable filter></Column>
                <Column field="dataHoraTermino" header="Data de Término" sortable filter></Column>
                <Column header="Operações" body={template}>
                </Column>
            </DataTable>


        </div>
    );
};
export default AtividadeList;
